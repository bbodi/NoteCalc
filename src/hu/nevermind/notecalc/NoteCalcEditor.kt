package hu.nevermind.notecalc

import org.w3c.dom.Element
import kotlin.browser.window
import kotlin.js.Math


class NoteCalcEditor(defaultValue: String,
                     editorTextArea: Element,
                     resultTextArea: Element,
                     val globalVariables: MutableMap<String, Operand>,
                     onChange: (String) -> Unit) {
    private val lineParser = LineParser()
    private val tokenListEvaulator = TokenListEvaulator()
    private val highlightedTexts = arrayListOf<HighlightedText>()
    fun getHighlightedTexts(): List<HighlightedText> = highlightedTexts

    private val variables = hashMapOf<String, Operand>()

    val allVariables: Map<String, Operand>
        get() = variables + globalVariables

    init {
        CodeMirrorWrapper.defineTokenizer(tokenizer)
        CodeMirrorWrapper.enableAutocompletion()
        val codeMirrorInstance = createMainCodeMirrorInstance(editorTextArea)
        val resultsCodeMirrorInstance = createCodeMirrorInstanceForResults(resultTextArea)
        resultsCodeMirrorInstance.setValue(textAreaChanged(defaultValue))
        codeMirrorInstance.setValue(defaultValue)
        setupEventHandlers(codeMirrorInstance, resultsCodeMirrorInstance, onChange)
    }

    private fun textAreaChanged(str: String): String {
        highlightedTexts.clear()
        variables.clear()
        val resultString = StringBuilder()
        var sum: Double = 0.0
        var currentFunctionDefinition: FunctionDefinition? = null
        val functionDefsByName = hashMapOf<String, FunctionDefinition>()
        var resultsByLineNumber = listOf<Pair<Int, Operand>>()
        val methodScopeVariableNames = arrayListOf<String>()
        str.lines().forEachIndexed { nullBasedLineIndex, line ->
            createVariablesForPreviousLineResults(resultsByLineNumber, variables)
            // TODO: support UTF8 characters in method names
            val functionDefInCurrentLine = tryParseFunctionDef(line)
            if (functionDefinitionStart(currentFunctionDefinition, functionDefInCurrentLine)) {
                methodScopeVariableNames.addAll(functionDefInCurrentLine!!.argumentNames)
                currentFunctionDefinition = functionDefInCurrentLine
                functionDefsByName[currentFunctionDefinition!!.name] = currentFunctionDefinition!!
                resultString.append('\n')
            } else if (stillInTheFunctionBody(currentFunctionDefinition, line)) {
                val oldCurrentFunctionDefinition = currentFunctionDefinition!!
                val trimmedLine = line.trim()
                val evaluationResult = lineParser.parseProcessAndEvaulate(functionDefsByName.keys, trimmedLine, allVariables.keys + methodScopeVariableNames)
                if (evaluationResult != null) {
                    resultString.append(createDebugString(
                            evaluationResult.parsedTokens,
                            evaluationResult.tokensWithMergedCompoundUnits,
                            evaluationResult.postFixNotationTokens))
                    val lineAndTokens = LineAndTokens(trimmedLine, evaluationResult.postFixNotationTokens)
                    currentFunctionDefinition = oldCurrentFunctionDefinition.copy(tokenLines = oldCurrentFunctionDefinition.tokenLines + lineAndTokens)
                    functionDefsByName[currentFunctionDefinition!!.name] = currentFunctionDefinition!!
                    highlightedTexts.addAll(evaluationResult.highlightedTexts)
                    val currentVariableName = tryParseVariableName(evaluationResult.lastToken, trimmedLine)
                    if (currentVariableName != null) {
                        methodScopeVariableNames.add(currentVariableName)
                    }
                }
                resultString.append('\n')
            } else {
                if (currentFunctionDefinition != null) {
                    currentFunctionDefinition = null
                    methodScopeVariableNames.clear()
                }
                val evaluationResult = lineParser.parseProcessAndEvaulate(functionDefsByName.keys, line, allVariables.keys)
                if (evaluationResult == null) {
                    resultString.append('\n')
                    highlightedTexts.add(HighlightedText(line, "error"))
                } else {
                    resultString.append(createDebugString(
                            evaluationResult.parsedTokens,
                            evaluationResult.tokensWithMergedCompoundUnits,
                            evaluationResult.postFixNotationTokens))
                    val currentVariableName = tryParseVariableName(evaluationResult.lastToken, line)
                    val resultOperand = tokenListEvaulator.processPostfixNotationStack(
                            evaluationResult.postFixNotationTokens,
                            variables,
                            functionDefsByName
                    )
                    saveResultIntoVariable(currentVariableName, resultOperand, variables, globalVariables)
                    if (resultOperand != null) {
                        sum += resultOperand.toRawNumber()
                        resultsByLineNumber += nullBasedLineIndex + 1 to resultOperand
                        resultString.append("${createResultString(resultOperand, currentVariableName)}\n")
                        variables["\$prev"] = resultOperand
                    } else {
                        resultString.append('\n')
                        if (line.startsWith("--") || line.startsWith("==")) {
                            sum = 0.0
                        }
                    }
                    highlightedTexts.addAll(evaluationResult.highlightedTexts)
                }
                variables["\$sum"] = Operand.Number(sum, NumberType.Float)
            }
        }
        return resultString.toString()
    }

    private fun createResultString(resultOperand: Operand, currentVariableName: String?) = createHumanizedResultString(resultOperand) + ("  " + (currentVariableName ?: ""))

    private fun saveResultIntoVariable(currentVariableName: String?, resultOperand: Operand?, variables: HashMap<String, Operand>, globalVariables: MutableMap<String, Operand>) {
        if (currentVariableName != null && resultOperand != null) {
            variables.put(currentVariableName, resultOperand)
            if (currentVariableName.startsWith("$")) {
                globalVariables.put(currentVariableName, resultOperand)
            }
        }
    }

    private fun tryParseVariableName(lastToken: Token?, line: String): String? {
        return if (lastToken is Token.Operator && lastToken.operator == "=") {
            line.takeWhile { it != '=' }.trim()
        } else null
    }

    private fun createDebugString(parsedTokens: List<Token>, tokensWithMergedCompoundUnits: List<Token>, postFixNotationTokens: List<Token>): String {
        val debugEnabled = window.asDynamic().debugEnabled
        return if (debugEnabled) {
            var debugString = ""
            debugString += "| ${parsedTokens.joinToString()} | ${tokensWithMergedCompoundUnits.joinToString()}"
            debugString += "| ${postFixNotationTokens.joinToString()}"
            debugString
        } else ""
    }


    private fun functionDefinitionStart(currentFunctionDefinition: FunctionDefinition?, functionDefInCurrentLine: FunctionDefinition?) = functionDefInCurrentLine != null && currentFunctionDefinition == null

    private fun stillInTheFunctionBody(currentFunctionDefinition: FunctionDefinition?, line: String) = currentFunctionDefinition != null && line.firstOrNull()?.isWhitespace() ?: false

    private fun createVariablesForPreviousLineResults(resultOperands: List<Pair<Int, Operand>>, variables: HashMap<String, Operand>) {
        resultOperands.forEach { indexAndResult ->
            variables.put("$${indexAndResult.first}", indexAndResult.second)
        }
    }

    private fun tryParseFunctionDef(line: String): FunctionDefinition? {
        val matches = line.match("""fun ([^\d\s\$\-\+\*\^\:\%][^\(]*)\(([^\)]*(,[^\)]*)*)\)""")
        return if (matches != null) {
            val funName = matches[1]
            val arguments = matches[2].split(',').map(String::trim).filterNot(String::isEmpty)
            FunctionDefinition(funName, arguments, emptyList())
        } else null
    }

    private fun createHumanizedResultString(quantity: Operand): String {
        // TODO: Operand osztályba?
        val resultStr = quantity.asString()
        val numberPart = when (quantity) {
            is Operand.Number -> quantity.num
            is Operand.Quantity -> quantity.quantity.toNumber()
            is Operand.Percentage -> quantity.num
        }
        val outputType = when (quantity) {
            is Operand.Number -> quantity.type
            is Operand.Quantity -> quantity.type
            is Operand.Percentage -> quantity.type
        }

        val unitPart = resultStr.indexOf(" ").let { if (it != -1) resultStr.substring(it + 1) else "" }
        val roundedNumber = Math.round(numberPart.toDouble() * 100.0) / 100.0
        val localizedString = roundedNumber.asDynamic().toLocaleString("hu").toString()
        val indexOf = localizedString.indexOf(',')
        val wholePart = if (indexOf == -1) localizedString else localizedString.substring(0, indexOf)
        val decimalPart = if (indexOf == -1) if (outputType == NumberType.Float) ",00" else "\u00A0\u00A0\u00A0" else localizedString.substring(indexOf).padEnd(3, '0')
        val resultNumberPart = "$wholePart$decimalPart".padStart(16, '\u00A0')
        val fullResult = "$resultNumberPart $unitPart"
        return fullResult
    }

    private fun setupEventHandlers(codeMirrorInstance: dynamic, resultsCodeMirrorInstance: dynamic, onChange: (String) -> Unit) {
        setupOnChangeHandling(codeMirrorInstance, resultsCodeMirrorInstance, onChange)
        setupScrollMirroring(codeMirrorInstance, resultsCodeMirrorInstance)
        setupCursorLineMirroring(codeMirrorInstance, resultsCodeMirrorInstance)
    }

    private fun setupOnChangeHandling(codeMirrorInstance: dynamic, resultsCodeMirrorInstance: dynamic, onChange: (String) -> Unit) {
        var timerId = 0
        codeMirrorInstance.on("change") { cm: dynamic, changeObj: dynamic ->
            window.clearTimeout(timerId)
            timerId = window.setTimeout({
                val resultRows = textAreaChanged(codeMirrorInstance.getValue())
                resultsCodeMirrorInstance.setValue(resultRows)
                onChange(codeMirrorInstance.getValue())
                val scrollInfo = codeMirrorInstance.getScrollInfo()
                resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top)
            }, 200)
            0
        }
    }

    private fun setupCursorLineMirroring(codeMirrorInstance: dynamic, resultsCodeMirrorInstance: dynamic) {
        codeMirrorInstance.on("cursorActivity") { cm: dynamic ->
            if (codeMirrorInstance.hasFocus()) {
                val cursor = cm.getCursor("head")
                resultsCodeMirrorInstance.setCursor(object {
                    val line = cursor.line
                    val ch = 0
                })
            }
        }
        resultsCodeMirrorInstance.on("cursorActivity") { cm: dynamic ->
            if (resultsCodeMirrorInstance.hasFocus()) {
                val cursor = cm.getCursor("head")
                codeMirrorInstance.setCursor(object {
                    val line = cursor.line
                    val ch = 0
                })
            }
        }
    }

    private fun setupScrollMirroring(codeMirrorInstance: dynamic, resultsCodeMirrorInstance: dynamic) {
        codeMirrorInstance.on("scroll") { cm: dynamic ->
            if (codeMirrorInstance.hasFocus()) {
                val scrollInfo = cm.getScrollInfo()
                resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top)
            }
        }
        resultsCodeMirrorInstance.on("scroll") { cm: dynamic ->
            if (resultsCodeMirrorInstance.hasFocus()) {
                val scrollInfo = cm.getScrollInfo()
                codeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top)
            }
        }
    }

    private fun createCodeMirrorInstanceForResults(resultTextArea: Element): dynamic {
        val resultsCodeMirrorInstance = CodeMirrorWrapper.fromTextArea(resultTextArea, object {
            val mode = "c"
            val styleActiveLine = true
            val lineNumbers = true
            val readOnly = true
        })
        return resultsCodeMirrorInstance
    }

    private fun createMainCodeMirrorInstance(editorTextArea: Element): dynamic {
        val codeMirrorInstance = CodeMirrorWrapper.fromTextArea(editorTextArea, object {
            val mode = "notecalc"
            val styleActiveLine = true
            val lineNumbers = true
            val extraKeys = createObjectWithFields { js ->
                js["Ctrl-Space"] = "autocomplete"
            }
            val noteCalcEditor = this@NoteCalcEditor
            val highlightSelectionMatches = object {
                val showToken = js("/\\w/")
                val annotateScrollbar = true
                val showMatchesOnScrollbar = true
            }

        })
        return codeMirrorInstance
    }

    private fun createObjectWithFields(initializer: (dynamic) -> Unit): dynamic {
        val jsObj = object {}.asDynamic()
        initializer(jsObj)
        return jsObj
    }


    companion object {

        private val tokenizer: (List<HighlightedText>, dynamic, dynamic) -> String = { tokenStyles, stream, state ->
            val index: Int = state.index
            val tokenToHighlight = tokenStyles.getOrNull(index)
            if (tokenToHighlight == null) {
                stream.skipToEnd()
            } else {
                if (stream.peek() == ' ' || stream.peek() == '\t') {
                    stream.eatSpace()
                    "space"
                } else {
                    val words = tokenToHighlight.text.split("\\s")
                    val ok = words.all { word ->
                        stream.eatSpace()
                        stream.match(word, true)
                    }
                    if (ok) {
                        state.index = index + 1
                        tokenToHighlight.cssClassName
                    } else {
                        stream.skipToEnd()
                        "error"
                    }
                }
            }
        }


        data class HighlightedText(val text: String, val cssClassName: String)


        data class LineAndTokens(val line: String, val postfixNotationStack: List<Token>)

        data class FunctionDefinition(val name: String, val argumentNames: List<String>,
                                      val tokenLines: List<LineAndTokens>)


        init {
            NoteCalcEditorTest().runTests()
        }
    }
}

enum class NumberType {
    Float, Int
}
