package hu.nevermind.notecalc

import org.w3c.dom.Element
import java.util.*
import kotlin.browser.window


class NoteCalcEditor(defaultValue: String, editorTextArea: Element,
                     resultTextArea: Element,
                     val globalVariables: MutableMap<String, Operand>,
                     onChange: (String) -> Unit) {
    private val highlightedTexts = arrayListOf<HighlightedText>()
    fun getHighlightedTexts(): List<HighlightedText> = highlightedTexts
    private val variables = hashMapOf<String, Operand>()

    val allVariables: Map<String, Operand>
        get() = variables + globalVariables

    init {
        CodeMirror.defineTokenizer(tokenizer)
        CodeMirror.enableAutocompletion()
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
                val evaluationResult = parseProcessAndEvaulate(functionDefsByName.keys, trimmedLine, allVariables.keys + methodScopeVariableNames)
                evaluationResult?.apply {
                    resultString.append(createDebugString(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens))
                    val lineAndTokens = LineAndTokens(trimmedLine, postFixNotationTokens)
                    currentFunctionDefinition = oldCurrentFunctionDefinition.copy(tokenLines = oldCurrentFunctionDefinition.tokenLines + lineAndTokens)
                    functionDefsByName[currentFunctionDefinition!!.name] = currentFunctionDefinition!!
                    this@NoteCalcEditor.highlightedTexts.addAll(highlightedTexts)
                    val currentVariableName = tryParseVariableName(lastToken, trimmedLine)
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
                val evaluationResult = parseProcessAndEvaulate(functionDefsByName.keys, line, allVariables.keys)
                evaluationResult?.apply {
                    resultString.append(createDebugString(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens))
                    val currentVariableName = tryParseVariableName(lastToken, line)
                    val resultOperand = processPostfixNotationStack(postFixNotationTokens, variables, functionDefsByName)
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
                    this@NoteCalcEditor.highlightedTexts.addAll(highlightedTexts)
                }
                if (evaluationResult == null) {
                    resultString.append('\n')
                    highlightedTexts.add(HighlightedText(line, "error"))
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

    internal data class EvaulationResult(
            val parsedTokens: List<Token>,
            val tokensWithMergedCompoundUnits: List<Token>,
            val postFixNotationTokens: List<Token>,
            val highlightedTexts: List<HighlightedText>,
            val lastToken: Token?
    )

    private fun parseProcessAndEvaulate(functionNames: Iterable<String>, line: String, variableNames: Iterable<String>): EvaulationResult? {
        return try {
            val parsedTokens = parse(line, variableNames, functionNames)
            val tokensWithMergedCompoundUnits = mergeCompoundUnitsAndUnaryMinusOperators(parsedTokens)
            val postFixNotationTokens = shuntingYard(tokensWithMergedCompoundUnits, functionNames)
            val highlightingInfos = createHighlightingNamesForTokens(parsedTokens)
            val lastToken = postFixNotationTokens.lastOrNull()
            EvaulationResult(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightingInfos, lastToken)
        } catch (e: Throwable) {
            null
        }
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
            }, 500)
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
        val resultsCodeMirrorInstance = CodeMirror.fromTextArea(resultTextArea, object {
            val mode = "c"
            val styleActiveLine = true
            val lineNumbers = true
            val readOnly = true
        })
        return resultsCodeMirrorInstance
    }

    private fun createMainCodeMirrorInstance(editorTextArea: Element): dynamic {
        val codeMirrorInstance = CodeMirror.fromTextArea(editorTextArea, object {
            val mode = "notecalc"
            val styleActiveLine = true
            val lineNumbers = true
            val extraKeys = createObjectWithFields {
                this["Ctrl-Space"] = "autocomplete"
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

    private fun createObjectWithFields(initializer: dynamic.() -> Unit): dynamic {
        val jsObj = object {}.asDynamic()
        initializer.initializer()
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

        fun assertEq(expectedValue: String, actualInput: String) {
            QUnit.test(actualInput) { assert ->
                val actual = processPostfixNotationStack(shuntingYard(mergeCompoundUnitsAndUnaryMinusOperators(parse(actualInput)), emptyList()), emptyMap(), emptyMap())!! as Operand.Quantity
                assert.ok(parseUnitName(expectedValue).equals(actual.quantity),
                        "$expectedValue != $actual")
            }
        }

        fun assertEq(expectedValue: Operand, actualInput: String) {
            val floatEq = { a: Number, b: Number -> Math.round(a.toDouble()*100) == Math.round(b.toDouble()*100) }
            QUnit.test(actualInput) { assert ->
                val actual = processPostfixNotationStack(shuntingYard(mergeCompoundUnitsAndUnaryMinusOperators(parse(actualInput)), emptyList()), emptyMap(), emptyMap())!!
                val ok = when (expectedValue) {
                    is Operand.Number -> actual is Operand.Number && floatEq(actual.num, expectedValue.num)
                    is Operand.Quantity -> actual is Operand.Quantity && actual.quantity.equals(expectedValue.quantity)
                    is Operand.Percentage -> actual is Operand.Percentage && floatEq(actual.num, expectedValue.num)
                }
                assert.ok(ok, "${expectedValue.asString()} != ${actual.asString()}")
            }
        }

        fun processPostfixNotationStackRec(quantitativeStack: List<Operand>,
                                           tokens: List<Token>,
                                           lastUnit: String?,
                                           variables: Map<String, Operand>,
                                           functions: Map<String, FunctionDefinition>): List<Operand> {
            if (tokens.isEmpty()) {
                return quantitativeStack
            }
            var lastUnit = lastUnit
            val incomingToken = tokens.first()
            val modifiedQuantitativeStack: List<Operand> = when (incomingToken) {
                is Token.NumberLiteral -> quantitativeStack + (Operand.Number(incomingToken.num, incomingToken.type))
                is Token.Variable -> {
                    val variable = variables[incomingToken.variableName]
                    if (variable != null) {
                        quantitativeStack + variable
                    } else quantitativeStack
                }
                is Token.UnitOfMeasure -> {
                    val topOfStack = quantitativeStack.lastOrNull()
                    if (topOfStack != null && topOfStack is Operand.Number) {
                        quantitativeStack.dropLast(1) + addUnitToTheTopOfStackEntry(topOfStack, incomingToken)
                    } else {
                        lastUnit = incomingToken.unitName
                        quantitativeStack
                    }
                }
                is Token.CompoundUnit -> {
                    val topOfStack = quantitativeStack.lastOrNull()
                    if (topOfStack != null && topOfStack is Operand.Number) {
                        quantitativeStack.dropLast(1) + addUnitToTheTopOfStackEntry(topOfStack, incomingToken)
                    } else {
                        lastUnit = incomingToken.unitName
                        quantitativeStack
                    }
                }
                is Token.Operator -> {
                    if (incomingToken.operator.startsWith("fun ")) {
                        val funcName = incomingToken.operator.drop("fun ".length)
                        val functionDef = functions[funcName]
                        if (functionDef != null && quantitativeStack.size >= functionDef.argumentNames.size) {
                            val arguments = quantitativeStack.takeLast(functionDef.argumentNames.size)
                            val methodScope = HashMap(variables + functionDef.argumentNames.zip(arguments).toMap())
                            val resultOperand = functionDef.tokenLines.map { lineAndTokens ->
                                val lastToken = lineAndTokens.postfixNotationStack.lastOrNull()
                                val resultOperand = processPostfixNotationStack(lineAndTokens.postfixNotationStack, methodScope, functions)
                                val currentVariableName = if (resultOperand != null && lastToken is Token.Operator && lastToken.operator == "=") {
                                    lineAndTokens.line.takeWhile { it != '=' }.trim()
                                } else null
                                if (currentVariableName != null && resultOperand != null) {
                                    methodScope.put(currentVariableName, resultOperand)
                                }
                                resultOperand
                            }.lastOrNull()
                            if (resultOperand != null) {
                                quantitativeStack.dropLast(functionDef.argumentNames.size + 1) + resultOperand
                            } else {
                                quantitativeStack.dropLast(functionDef.argumentNames.size + 1)
                            }
                        } else {
                            quantitativeStack.dropLast(1)
                        }
                    } else if (quantitativeStack.isNotEmpty() && incomingToken.operator == "%") {
                        val topOfStack = quantitativeStack.last()
                        if (topOfStack is Operand.Number) {
                            val num = topOfStack.num
                            quantitativeStack.dropLast(1) + Operand.Percentage(num, topOfStack.type)
                        } else {
                            quantitativeStack.dropLast(1)
                        }
                    } else if (quantitativeStack.size >= 2) {
                        val lastTwo = quantitativeStack.takeLast(2)
                        val lhs = lastTwo[0]
                        val rhs = lastTwo[1]
                        val resultOperand: Operand? = try {
                            applyOperation(incomingToken.operator, lhs, rhs)
                        } catch (e: Throwable) {
                            console.error(e)
                            null
                        }
                        if (resultOperand != null) {
                            quantitativeStack.dropLast(2) + resultOperand
                        } else {
                            quantitativeStack
                        }
                    } else if (quantitativeStack.isNotEmpty() && incomingToken.operator == "in") {
                        val theQuantityThatWillBeConverted = quantitativeStack.lastOrNull()
                        if (lastUnit != null && theQuantityThatWillBeConverted is Operand.Quantity) {
                            val convertedQuantity = try {
                                theQuantityThatWillBeConverted.quantity.convertTo(lastUnit)
                            } catch (e: Throwable) {
                                null
                            }
                            if (convertedQuantity != null) {
                                quantitativeStack.dropLast(1) + (Operand.Quantity(convertedQuantity, theQuantityThatWillBeConverted.type))
                            } else {
                                quantitativeStack
                            }
                        } else {
                            quantitativeStack
                        }
                    } else {
                        quantitativeStack
                    }
                }
                is Token.StringLiteral -> {
                    quantitativeStack
                } // do nothing
            }
            return processPostfixNotationStackRec(modifiedQuantitativeStack, tokens.drop(1), lastUnit, variables, functions)
        }

        fun processPostfixNotationStack(tokens: List<Token>, variables: Map<String, Operand>, functions: Map<String, FunctionDefinition>): Operand? {
            val quantitativeStack = processPostfixNotationStackRec(listOf<Operand>(), tokens, null, variables, functions)
            return quantitativeStack.lastOrNull()
        }

        private fun applyOperation(operator: String, lhs: Operand, rhs: Operand): Operand? {
            return try {
                when (operator) {
                    "as a % of" -> asAPercentOfOperator(lhs, rhs)
                    "on what is" -> onWhatIsOperator(lhs, rhs)
                    "of what is" -> ofWhatIsOperator(lhs, rhs)
                    "off what is" -> offWhatIsOperator(lhs, rhs)
                    "*" -> multiplyOperator(lhs, rhs)
                    "/" -> divideOperator(lhs, rhs)
                    "+" -> plusOperator(lhs, rhs)
                    "-" -> minusOperator(lhs, rhs)
                    "^" -> powerOperator(lhs, rhs)
                    else -> null
                }
            } catch (e: Throwable) {
                console.error("${lhs.asString()}$operator${rhs.asString()}")
                console.error(e)
                null
            }
        }

        private fun powerOperator(lhs: Operand, rhs: Operand): Operand? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> Operand.Number(Math.pow(lhs.num.toDouble(), rhs.num.toDouble()), lhs.type)
                    is Operand.Quantity -> null
                    is Operand.Percentage -> null
                }
                is Operand.Quantity -> when (rhs) {
                    is Operand.Quantity -> null
                    is Operand.Number -> Operand.Quantity(lhs.quantity.pow(rhs.num.toDouble()), lhs.type)
                    is Operand.Percentage -> null
                }

                is Operand.Percentage -> null
            }
        }

        private fun minusOperator(lhs: Operand, rhs: Operand): Operand? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> subtractNumbers(lhs, rhs)
                    is Operand.Quantity -> null
                    is Operand.Percentage -> {
                        val xPercentOfLeftHandSide = lhs.num.toDouble() / 100 * rhs.num.toDouble()
                        Operand.Number(lhs.num.toDouble() - xPercentOfLeftHandSide, lhs.type)
                    }
                }
                is Operand.Quantity -> when (rhs) {
                    is Operand.Quantity -> subtractQuantities(lhs, rhs)
                    is Operand.Number -> null
                    is Operand.Percentage -> null
                }
                is Operand.Percentage -> null
            }
        }

        private fun plusOperator(lhs: Operand, rhs: Operand): Operand? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> addNumbers(lhs, rhs)
                    is Operand.Quantity -> null
                    is Operand.Percentage -> {
                        val xPercentOfLeftHandSide = lhs.num.toDouble() / 100 * rhs.num.toDouble()
                        Operand.Number(lhs.num.toDouble() + xPercentOfLeftHandSide, lhs.type)
                    }
                }
                is Operand.Quantity -> when (rhs) {
                    is Operand.Quantity -> addQuantities(lhs, rhs)
                    is Operand.Number -> null
                    is Operand.Percentage -> null
                }
                is Operand.Percentage -> when (rhs) {
                    is Operand.Quantity -> null
                    is Operand.Number -> null
                    is Operand.Percentage -> Operand.Percentage(lhs.num.toDouble() + rhs.num.toDouble(), lhs.type)
                }
            }
        }

        private fun divideOperator(lhs: Operand, rhs: Operand): Operand? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> divideNumbers(lhs, rhs)
                    is Operand.Quantity -> Operand.Quantity(evaluateUnitExpression("${lhs.num} / ${rhs.quantity}"), NumberType.Float)
                    is Operand.Percentage -> {
                        val x = lhs.num.toDouble() / rhs.num.toDouble() * 100
                        Operand.Number(x, lhs.type)
                    }
                }

                is Operand.Quantity -> when (rhs) {
                    is Operand.Quantity -> divideQuantities(lhs, rhs)
                    is Operand.Number -> null
                    is Operand.Percentage -> null
                }

                is Operand.Percentage -> null

            }
        }

        private fun multiplyOperator(lhs: Operand, rhs: Operand): Operand? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> multiplyNumbers(lhs, rhs)
                    is Operand.Quantity -> Operand.Quantity(evaluateUnitExpression("${lhs.num} * ${rhs.quantity}"), NumberType.Float)
                    is Operand.Percentage -> {
                        val xPercentOfLeftHandSide = lhs.num.toDouble() / 100 * rhs.num.toDouble()
                        Operand.Number(xPercentOfLeftHandSide, lhs.type)
                    }
                }

                is Operand.Quantity -> when (rhs) {
                    is Operand.Quantity -> multiplyQuantities(lhs, rhs)
                    is Operand.Number -> null
                    is Operand.Percentage -> null
                }
                is Operand.Percentage -> null
            }
        }

        private fun asAPercentOfOperator(lhs: Operand, rhs: Operand): Operand.Percentage? {
            return when (lhs) {
                is Operand.Number -> when (rhs) {
                    is Operand.Number -> {
                        Operand.Percentage(lhs.num.toDouble() / rhs.num.toDouble() * 100, NumberType.Float)
                    }
                    is Operand.Quantity -> null
                    is Operand.Percentage -> null
                }

                is Operand.Quantity -> when (rhs) {
                    is Operand.Number -> null
                    is Operand.Quantity -> {
                        Operand.Percentage(lhs.toRawNumber() / rhs.toRawNumber() * 100, NumberType.Float)
                    }
                    is Operand.Percentage -> null
                }
                is Operand.Percentage -> null
            }
        }

        private fun onWhatIsOperator(lhs: Operand, rhs: Operand): Operand.Number? {
            return when (lhs) {
                is Operand.Number -> null
                is Operand.Quantity -> null
                is Operand.Percentage -> when (rhs) {
                    is Operand.Number -> {
                        // lhs% on what is rhs
                        Operand.Number(rhs.num.toDouble() / (1 + (lhs.num.toDouble() / 100)), NumberType.Float)
                    }
                    is Operand.Quantity -> null
                    is Operand.Percentage -> null
                }
            }
        }

        private fun ofWhatIsOperator(lhs: Operand, rhs: Operand): Operand.Number? {
            return when (lhs) {
                is Operand.Number -> null
                is Operand.Quantity -> null
                is Operand.Percentage -> when (rhs) {
                    is Operand.Number -> {
                        // lhs% of what is rhs
                        Operand.Number(rhs.num.toDouble() / (lhs.num.toDouble() / 100), NumberType.Float)
                    }
                    is Operand.Quantity -> null
                    is Operand.Percentage -> null
                }
            }
        }

        private fun offWhatIsOperator(lhs: Operand, rhs: Operand): Operand.Number? {
            return when (lhs) {
                is Operand.Number -> null
                is Operand.Quantity -> null
                is Operand.Percentage -> when (rhs) {
                    is Operand.Number -> {
                        // lhs% off what is rhs
                        Operand.Number(rhs.num.toDouble() / (1 - (lhs.num.toDouble() / 100)), NumberType.Float)
                    }
                    is Operand.Quantity -> null
                    is Operand.Percentage -> null
                }
            }
        }

        private fun multiplyQuantities(lhs: Operand.Quantity, rhs: Operand.Quantity): Operand {
            val result = lhs.quantity.multiply(rhs.quantity)
            return when (jsTypeOf(result)) {
                "number" -> Operand.Number(result as Number, lhs.type)
                else -> Operand.Quantity(result.asDynamic(), lhs.type)
            }
        }

        private fun multiplyNumbers(lhs: Operand.Number, rhs: Operand.Number): Operand.Number {
            return Operand.Number(lhs.num.toDouble() * rhs.num.toDouble(), lhs.type)
        }

        private fun addNumbers(lhs: Operand.Number, rhs: Operand.Number): Operand.Number {
            return Operand.Number(lhs.num.toDouble() + rhs.num.toDouble(), lhs.type)
        }

        private fun subtractNumbers(lhs: Operand.Number, rhs: Operand.Number): Operand.Number {
            return Operand.Number(lhs.num.toDouble() - rhs.num.toDouble(), lhs.type)

        }

        private fun divideQuantities(lhs: Operand.Quantity, rhs: Operand.Quantity): Operand {
            val result = lhs.quantity.divide(rhs.quantity)
            return when (jsTypeOf(result)) {
                "number" -> Operand.Number(result as Number, lhs.type)
                else -> Operand.Quantity(result.asDynamic(), lhs.type)
            }
        }

        private fun addQuantities(lhs: Operand.Quantity, rhs: Operand.Quantity): Operand.Quantity {
            return Operand.Quantity(lhs.quantity.add(rhs.quantity), lhs.type)
        }

        private fun subtractQuantities(lhs: Operand.Quantity, rhs: Operand.Quantity): Operand.Quantity {
            return Operand.Quantity(lhs.quantity.subtract(rhs.quantity), lhs.type)
        }

        private fun divideNumbers(lhs: Operand.Number, rhs: Operand.Number): Operand.Number {
            return Operand.Number(lhs.num.toDouble() / rhs.num.toDouble(), lhs.type)
        }

        private fun addUnitToTheTopOfStackEntry(targetNumber: Operand.Number, token: Token.UnitOfMeasure): Operand.Quantity {
            val number: Number = targetNumber.num
            val newQuantityWithUnit = parseUnitName("$number ${token.unitName}")
            return Operand.Quantity(newQuantityWithUnit, targetNumber.type)
        }

        data class OperatorInfo(val precedence: Int, val associativity: String,
                                val func: (lhs: Any, rhs: Any) -> Token?)

        private fun getUnitnameAfterOperation(lhsUnitname: String, rhsUnitname: String, func: (lhs: Quantity, rhs: Quantity) -> Any): String {
            val lhs = parseUnitName("1 $lhsUnitname")
            val rhs = parseUnitName("1 $rhsUnitname")
            val unitnameAfterOperation = func(lhs, rhs).toString().drop("1 ".length)
            return unitnameAfterOperation
        }

        private val operatorInfosForUnits = hashMapOf(
                "%" to OperatorInfo(6, "left") { lhs, rhs -> null },
                "^" to OperatorInfo(5, "right") { lhs, rhs ->
                    if (lhs is Token.UnitOfMeasure && rhs is Token.NumberLiteral) {
                        val num = rhs.num
                        val poweredUnit = parseUnitName("1 ${lhs.unitName}").pow(num)
                        val poweredUnitname = poweredUnit.toString().drop("1 ".length)
                        Token.UnitOfMeasure(poweredUnitname)
                    } else {
                        null
                    }
                },
                "unit" to OperatorInfo(4, "left") { lhs, rhs -> null },
                "=" to OperatorInfo(0, "left") { lhs, rhs -> null },
                "+" to OperatorInfo(2, "left") { lhs, rhs -> null },
                "-" to OperatorInfo(2, "left") { lhs, rhs -> null },
                "*" to OperatorInfo(3, "left") { lhs, rhs ->
                    if (lhs is Token.UnitOfMeasure && rhs is Token.UnitOfMeasure) {
                        val unitnameAfterOperation = getUnitnameAfterOperation(lhs.unitName, rhs.unitName, Quantity::multiply)
                        Token.UnitOfMeasure(unitnameAfterOperation)
                    } else {
                        null
                    }
                },
                "/" to OperatorInfo(3, "left") { lhs, rhs ->
                    if (lhs is Token.UnitOfMeasure && rhs is Token.UnitOfMeasure) {
                        val unitnameAfterOperation = getUnitnameAfterOperation(lhs.unitName, rhs.unitName, Quantity::divide)
                        Token.UnitOfMeasure(unitnameAfterOperation)
                    } else {
                        null
                    }
                }
        )

        private fun applyOrPutOperatorOnTheStack(operator: Token.Operator, stack: List<Token>): List<Token> {
            return if (stack.size < 2) {
                stack + operator
            } else {
                val lastTwo = stack.takeLast(2)
                val lhs = lastTwo[0]
                val rhs = lastTwo[1]
                val newTokenFromApplying = operatorInfosForUnits[operator.operator]?.func?.invoke(lhs, rhs)
                if (newTokenFromApplying != null) {
                    stack.dropLast(2) + newTokenFromApplying
                } else {
                    stack + operator
                }
            }
        }

        private fun shuntingYard(inputTokens: List<Token>, functionNames: Iterable<String>): List<Token> {
            val output = listOf<Token>()
            val operatorStack = listOf<Token.Operator>()

            val (newOperatorStack, newOutput) = shuntingYardRec(inputTokens, operatorStack, output, functionNames)
            return newOperatorStack.asReversed().fold(newOutput) { output, operator ->
                applyOrPutOperatorOnTheStack(operator, output)
            }
        }

        private fun shuntingYardRec(inputTokens: List<Token>,
                                    operatorStack: List<Token.Operator>,
                                    output: List<Token>,
                                    functionNames: Iterable<String>): ShuntingYardStacks {
            if (inputTokens.isEmpty()) {
                return ShuntingYardStacks(operatorStack, output)
            } else {
                val inputToken = inputTokens.first()
                val (newOperatorStack, newOutput) = when (inputToken) {
                    is Token.Operator -> {
                        if (inputToken.operator == "(") {
                            ShuntingYardStacks((operatorStack + inputToken), output)
                        } else if (inputToken.operator == ")") {
                            val modifiedStacksAfterBracketRule = popAnythingUntilOpeningBracket(operatorStack, output)
                            modifiedStacksAfterBracketRule
                        } else {
                            val (newOperatorStack, newOutput) = shuntingYardOperatorRule(operatorStack, output, inputToken.operator)
                            ShuntingYardStacks(newOperatorStack + inputToken, newOutput)
                        }
                    }
                    is Token.NumberLiteral -> ShuntingYardStacks(operatorStack, output + inputToken)
                    is Token.StringLiteral -> {
                        if (inputToken.str in functionNames) {
                            ShuntingYardStacks((operatorStack + Token.Operator("fun " + inputToken.str)), output + inputToken)
                        } else if (inputToken.str == ",") {
                            shuntingYardOperatorRule(operatorStack, output, ",")
                        } else {
                            ShuntingYardStacks(operatorStack, output + inputToken)
                        }
                    }
                    is Token.UnitOfMeasure -> {
                        shuntingYardOperatorRule(operatorStack, output, "unit")
                        ShuntingYardStacks(operatorStack, output + inputToken)
                    }
                    is Token.Variable -> ShuntingYardStacks(operatorStack, output + inputToken)
                }
                return shuntingYardRec(inputTokens.drop(1), newOperatorStack, newOutput, functionNames)
            }
        }

        data class ShuntingYardStacks(val operatorStack: List<Token.Operator>, val output: List<Token>)

        private fun popAnythingUntilOpeningBracket(operatorStack: List<Token.Operator>, output: List<Token>): ShuntingYardStacks {
            if (operatorStack.isEmpty()) {
                return ShuntingYardStacks(operatorStack, output)
            } else {
                val topOfOpStack = operatorStack.last()
                val newOperatorStack = operatorStack.dropLast(1)
                if (topOfOpStack.operator == "(") {
                    return ShuntingYardStacks(newOperatorStack, output)
                }
                val newOutput = applyOrPutOperatorOnTheStack(topOfOpStack, output)
                return popAnythingUntilOpeningBracket(newOperatorStack, newOutput)
            }
        }

        private fun shuntingYardOperatorRule(operatorStack: List<Token.Operator>, output: List<Token>, incomingOperatorName: String): ShuntingYardStacks {
            if (operatorStack.isEmpty()) {
                return ShuntingYardStacks(operatorStack, output)
            }
            val topOfOpStack = operatorStack.last()
            if (topOfOpStack.operator in "()") {
                return ShuntingYardStacks(operatorStack, output)
            }
            val incomingOpPrecedence = operatorInfosForUnits[incomingOperatorName]?.precedence ?: 0
            val topOfStackPrecedence = operatorInfosForUnits[topOfOpStack.operator]?.precedence ?: 0
            val assoc = operatorInfosForUnits[incomingOperatorName]?.associativity ?: "left"
            val incomingPrecLeftAssocAndEqual = assoc == "left" && incomingOpPrecedence == topOfStackPrecedence
            if (incomingOpPrecedence < topOfStackPrecedence || incomingPrecLeftAssocAndEqual) {
                val last = operatorStack.last()
                return shuntingYardOperatorRule(operatorStack.dropLast(1), applyOrPutOperatorOnTheStack(last, output), incomingOperatorName)
            } else {
                return ShuntingYardStacks(operatorStack, output)
            }
        }

        data class HighlightedText(val text: String, val cssClassName: String)

        private fun mergeCompoundUnitsAndUnaryMinusOperators(tokens: List<Token>): List<Token> {
            var restTokens = tokens
            val output = arrayListOf<Token>()
            var prevToken: Token = Token.StringLiteral("")
            var codeSmell = false
            while (restTokens.isNotEmpty()) {
                val token = restTokens.first()
                restTokens = when (token) {
                    is Token.NumberLiteral -> {
                        output.add(token)
                        restTokens.drop(1)
                    }
                    is Token.Variable -> {
                        output.add(token)
                        restTokens.drop(1)
                    }
                    is Token.StringLiteral -> {
                        output.add(token)
                        restTokens.drop(1)
                    }
                    is Token.Operator -> {
                        output.add(token)
                        restTokens.drop(1)
                    }
                    is Token.UnitOfMeasure -> {
                        if (prevToken is Token.Operator || prevToken is Token.StringLiteral || prevToken is Token.NumberLiteral || prevToken is Token.Variable) {
                            val compundUnitResult = parseCompundUnit(restTokens)
                            if (compundUnitResult != null) {
                                val tokenCountInThisUnit = compundUnitResult.tokens.size
                                restTokens = restTokens.drop(tokenCountInThisUnit)
                                output.add(compundUnitResult)
                                codeSmell = true
                            }
                        }
                        if (codeSmell) {
                            restTokens
                        } else {
                            output.add(token)
                            restTokens.drop(1)
                        }
                    }
                }
                prevToken = token
                codeSmell = false
            }
            return output
        }

        private fun createHighlightingNamesForTokens(tokens: List<Token>): List<HighlightedText> {
            val highlightInfosForTokens = arrayListOf<HighlightedText>()
            tokens.forEach { token ->
                when (token) {
                    is Token.NumberLiteral -> {
                        val strRepr = if (token.originalStringRepresentation.isEmpty()) token.num.toString() else token.originalStringRepresentation
                        highlightInfosForTokens.add(HighlightedText(strRepr, "number"))
                    }
                    is Token.Variable -> {
                        // TODO jelenleg ez a syntaxhilighterben van szinezve, nem lenne jobb itt? iugy h eltárolom a változó nevét is
                        highlightInfosForTokens.add(HighlightedText(token.variableName, "variable"))
                    }
                    is Token.StringLiteral -> {
                        highlightInfosForTokens.add(HighlightedText(token.str, "comment"))
                    }
                    is Token.Operator -> {
                        highlightInfosForTokens.add(HighlightedText(token.operator, "operator"))
                    }
                    is Token.UnitOfMeasure -> {
                        highlightInfosForTokens.add(HighlightedText(token.unitName, "qualifier"))
                    }
                    is Token.CompoundUnit -> {
                        token.tokens.forEach { subTokenInCompoundUnit ->
                            highlightInfosForTokens.add(HighlightedText(getStringRepresentation(subTokenInCompoundUnit), "qualifier"))
                        }
                    }
                }
            }
            return highlightInfosForTokens
        }

        private fun getStringRepresentation(token: Token): String {
            val text = when (token) {
                is Token.UnitOfMeasure -> token.unitName
                is Token.NumberLiteral -> if (token.originalStringRepresentation.isEmpty()) token.num.toString() else token.originalStringRepresentation
                is Token.Operator -> token.operator
                is Token.StringLiteral -> token.str
                is Token.Variable -> token.variableName
            }
            return text
        }

        private fun parseCompundUnit(tokens: List<Token>): Token.CompoundUnit? {
            if (tokens.size <= 1) {
                return null
            }
            var prevToken: Token = Token.StringLiteral("")
            val tokensThatTogetherMayFormACompundUnit = tokens.takeWhile {
                val result = when (it) {
                    is Token.Operator -> it.operator in arrayOf("*", "/", "^", "(", ")")
                    is Token.NumberLiteral -> {
                        prevToken is Token.Operator && (prevToken as Token.Operator).operator == "^"
                    }
                    is Token.UnitOfMeasure -> true
                    else -> false
                }
                prevToken = it
                result
            }
            if (tokensThatTogetherMayFormACompundUnit.isNotEmpty()) {
                val maybeCompoundUnit = tryFindCorrectCompoundUnit(tokensThatTogetherMayFormACompundUnit)
                return maybeCompoundUnit
            }
            return null
        }

        private fun tryFindCorrectCompoundUnit(tokenGroup: List<Token>): Token.CompoundUnit? {
            val expressionString = tokenGroup.joinToString(transform = Token::asString, separator = "")
            try {
                val compundUnit = parseUnitName("1 $expressionString")
                val compundUnitname = compundUnit.toString().drop("1 ".length).replace(" ", "")
                if (compundUnitname != expressionString) {
                    return null
                }
                return Token.CompoundUnit(compundUnitname, tokenGroup)
            } catch (e: Throwable) {
                return tryFindCorrectCompoundUnit(tokenGroup.dropLast(1))
            }
        }

        private fun assertTokenListEq(actualTokens: List<Token>, vararg expectedTokens: Token) {
            QUnit.test("") { assert ->
                assert.equal(actualTokens.size, expectedTokens.size)
                expectedTokens.zip(actualTokens).forEach { p ->
                    val (expected, actual) = p
                    assert.ok(expected.equals(actual), "expected: $expected but was: $actual")
                }
            }
        }

        data class LineAndTokens(val line: String, val postfixNotationStack: List<Token>)

        data class FunctionDefinition(val name: String, val argumentNames: List<String>,
                                      val tokenLines: List<LineAndTokens>)

        private fun parse(text: String, variableNames: Iterable<String> = emptyList(), functionNames: Iterable<String> = emptyList()): List<Token> {
            val tokens = arrayListOf<Token>()
            var str = text.trim()
            while (str.isNotEmpty()) {
                val originalLength = str.length
                val tokenAndRest = tryExtractToken(str,
                        { str -> tryParseVariableName(str, variableNames) },
                        { str -> tryParseFunctionInvocation(str, functionNames) },
                        ::tryExtractOperator,
                        ::tryExtractNumberLiteral,
                        ::tryExtractUnit,
                        ::tryExtractStringLiteral
                )
                if (tokenAndRest != null) {
                    str = tokenAndRest.second.trim()
                } else {
                    break
                }
                val token = tokenAndRest.first
                val prevToken = tokens.lastOrNull()
                // TODO: I don't like it here
                if (prevToken is Token.NumberLiteral && token is Token.StringLiteral && token.str.length == 1 && token.str.first() in "kM") {
                    val newNumber = when (token.str) {
                        "k" -> prevToken.num.toDouble() * 1000
                        "M" -> prevToken.num.toDouble() * 1000000
                        else -> error("can't happen")
                    }
                    val newStringRepresentation = prevToken.originalStringRepresentation + token.str
                    tokens.removeAt(tokens.lastIndex)
                    tokens.add(Token.NumberLiteral(newNumber, newStringRepresentation, prevToken.type))
                } else {
                    tokens.add(token)
                }
                require(str.length < originalLength) { "$str: The length of the processing string must be shorter at the end of the block! $originalLength" }
            }
            return tokens
        }

        init {
            fun num(n: Int) = Token.NumberLiteral(n, "", NumberType.Int)
            fun num(n: Double) = Token.NumberLiteral(n, "", NumberType.Float)
            fun op(n: String) = Token.Operator(n)
            fun str(n: String) = Token.StringLiteral(n)
            fun unit(n: String) = Token.UnitOfMeasure(n)
            fun compoundUnit(n: String) = Token.CompoundUnit(n, emptyList())

            assertTokenListEq(parse("1+2.0"),
                    num(1),
                    op("+"),
                    num(2.0))
            assertTokenListEq(parse("200kg alma + 300 kg banán"),
                    num(200),
                    unit("kg"),
                    str("alma"),
                    op("+"),
                    num(300),
                    unit("kg"),
                    str("banán")
            )
            assertTokenListEq(parse("(1 alma + 4 körte) * 3 ember"),
                    op("("), num(1), str("alma"), op("+"), num(4), str("körte"), op(")"), op("*"), num(3), str("ember")
            )
            assertTokenListEq(parse("1/2s"),
                    num(1), op("/"), num(2), unit("s")
            )
            assertTokenListEq(shuntingYard(mergeCompoundUnitsAndUnaryMinusOperators(parse("1/2s")), emptyList()),
                    num(1), num(2), unit("s"), op("/")
            )
            assertTokenListEq(parse("0b00101 & 0xFF ^ 0xFF00 << 16 >> 16 ! 0xFF"),
                    num(0b00101), op("&"), num(0xFF), op("^"), num(0xFF00), op("<<"), num(16), op(">>"), num(16), op("!"), num(0xFF)
            )
            assertTokenListEq(parse("10km/h * 45min in m"),
                    num(10),
                    unit("km"),
                    op("/"),
                    unit("h"),
                    op("*"),
                    num(45),
                    unit("min"),
                    op("in"),
                    unit("m")
            )
            assertTokenListEq(parse("10(km/h)^2 * 45min in m"),
                    num(10),
                    op("("),
                    unit("km"),
                    op("/"),
                    unit("h"),
                    op(")"),
                    op("^"),
                    num(2),
                    op("*"),
                    num(45),
                    unit("min"),
                    op("in"),
                    unit("m")
            )
            assertTokenListEq(mergeCompoundUnitsAndUnaryMinusOperators(parse("12km/h")),
                    num(12),
                    compoundUnit("km/h")
            )
            assertTokenListEq(mergeCompoundUnitsAndUnaryMinusOperators(parse("12km/h*3")),
                    num(12),
                    compoundUnit("km/h"),
                    op("*"),
                    num(3)
            )
            assertTokenListEq(parse("-3"), op("-"), num(3))
            assertTokenListEq(parse("-0xFF"), op("-"), num(255))
            assertTokenListEq(parse("-0b110011"), op("-"), num(51))
            assertTokenListEq(mergeCompoundUnitsAndUnaryMinusOperators(parse("-3")), op("-"), num(3))
            assertTokenListEq(parse("-0xFF"), op("-"), num(255))
            assertTokenListEq(parse("-0b110011"), op("-"), num(51))

            assertEq("30 km", "(10+20)km")
            assertEq("7500 m", "10(km/h) * 45min in m")
            assertEq("500 kg", "200kg alma + 300 kg banán")
            assertEq(Operand.Number(15), "(1 alma + 4 körte) * 3 ember")
            assertEq(Operand.Percentage(5), "10 as a % of 200")
            assertEq(Operand.Percentage(30), "10% + 20%")
            assertEq(Operand.Number(220), "200 + 10%")
            assertEq(Operand.Number(180), "200 - 10%")
            assertEq(Operand.Number(20), "200 * 10%")

            assertEq(Operand.Number(181.82, NumberType.Float), "10% on what is $200")
            assertEq(Operand.Number(2000), "10% of what is $200")
            assertEq(Operand.Number(222.22, NumberType.Float), "10% off what is $200")

            assertTokenListEq(parse("I traveled with 45km/h for / 13km in min"),
                    str("I"),
                    str("traveled"),
                    str("with"),
                    num(45),
                    unit("km"),
                    op("/"),
                    unit("h"),
                    str("for"),
                    op("/"),
                    num(13),
                    unit("km"),
                    op("in"),
                    unit("min")
            )
            assertEq("19.5 min", "I traveled 13km / at a rate 40km/h in min")
            assertEq("12 mile/h", "I traveled 24 miles and rode my bike  / 2 hours")
            assertEq("40 mile", "Now let's say you rode your bike at a rate of 10 miles/h for * 4 h")
            assertEq(Operand.Number(9), "12-3")
            assertEq(Operand.Number(1027), "2^10 + 3")
            assertEq(Operand.Number(163), "1+2*3^4")
            assertEq("0.5s", "1/2s")
            assertEq("0.5s", "1/(2s)")
            assertEq(Operand.Number(60), "15 EUR adómentes azaz 75-15 euróból kell adózni")
            assertEq("0.529 GB / seconds", "transfer of around 1.587GB in about / 3 seconds")
            assertEq("37.5 MB", "A is a unit but should not be handled here so... 37.5MB of DNA information in it.")
            assertEq(Operand.Number(1000), "3k - 2k")
            assertEq(Operand.Number(1000000), "3M - 2M")
            assertEq(Operand.Number(100), "1GB / 10MB")
        }
    }
}

enum class NumberType {
    Float, Int
}

sealed class Operand {

    abstract fun asString(): String
    abstract fun toRawNumber(): Double

    class Percentage(val num: kotlin.Number, val type: NumberType = if (num is Int) NumberType.Int else NumberType.Float) : Operand() {
        override fun asString(): String = this.num.toString()


        override fun toRawNumber(): Double = num.toDouble()


        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as Percentage
            if (num != other.num) return false
            if (type != other.type) return false

            return true
        }

        override fun hashCode(): Int {
            var result = num.hashCode()
            result = 31 * result + type.hashCode()
            return result
        }
    }

    class Number(val num: kotlin.Number, val type: NumberType = if (num is Int) NumberType.Int else NumberType.Float) : Operand() {
        override fun asString(): String = this.num.toString()

        override fun toRawNumber(): Double = num.toDouble()

        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as Number

            if (num != other.num) return false
            if (type != other.type) return false

            return true
        }

        override fun hashCode(): Int {
            var result = num.hashCode()
            result = 31 * result + type.hashCode()
            return result
        }
    }

    class Quantity(val quantity: hu.nevermind.notecalc.Quantity, val type: NumberType) : Operand() {
        override fun asString(): String = this.quantity.toString()

        override fun toRawNumber(): Double = quantity.toNumber().toDouble()

        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as Quantity

            if (!quantity.equals(other.quantity)) return false
            if (type != other.type) return false

            return true
        }

        override fun hashCode(): Int {
            var result = quantity.hashCode()
            result = 31 * result + type.hashCode()
            return result
        }
    }
}

sealed class Token {
    open class UnitOfMeasure(val unitName: String) : Token() {

        override fun asString(): CharSequence = unitName

        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as UnitOfMeasure

            if (unitName != other.unitName) return false

            return true
        }

        override fun hashCode(): Int {
            return unitName.hashCode()
        }

        override fun toString() = "Unit($unitName)"

    }

    class CompoundUnit(unitName: String, val tokens: List<Token>) : UnitOfMeasure(unitName) {

        override fun toString() = "CompoundUnit($unitName)"

    }

    class StringLiteral(val str: String) : Token() {
        override fun asString(): CharSequence = str

        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as StringLiteral

            if (str != other.str) return false

            return true
        }

        override fun hashCode(): Int {
            return str.hashCode()
        }

        override fun toString() = "Str($str)"

    }

    class Variable(val variableName: String) : Token() {
        override fun asString(): CharSequence = variableName
        override fun toString() = "Var($variableName)"
    }

    class NumberLiteral(val num: Number, val originalStringRepresentation: String, val type: NumberType) : Token() {
        override fun asString(): CharSequence = num.toString()
        override fun toString(): String = "Num($num)"
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as NumberLiteral

            if (num != other.num) return false
            if (type != other.type) return false

            return true
        }

        override fun hashCode(): Int {
            var result = num.hashCode()
            result = 31 * result + type.hashCode()
            return result
        }

    }

    class Operator(val operator: String) : Token() {
        override fun asString(): CharSequence = operator
        override fun toString(): String = "Op($operator)"
        override fun equals(other: Any?): Boolean {
            if (this === other) return true
            if (other?.jsClass != jsClass) return false

            other as Operator

            if (operator != other.operator) return false

            return true
        }

        override fun hashCode(): Int {
            return operator.hashCode()
        }

    }

    abstract fun asString(): CharSequence
}

fun tryExtractToken(str: String, vararg tokenRecognizers: (String) -> Pair<Token, String>?): Pair<Token, String>? {
    tokenRecognizers.forEach {
        val tokenAndRest = it(str)
        if (tokenAndRest != null) {
            return tokenAndRest
        }
    }
    return null
}

fun tryExtractNumberLiteral(str: String): Pair<Token, String>? {
    return if (str.startsWith("0b")) {
        val numStr = str.drop(2).takeWhile {
            it in "01 "
        }
        if (numStr.isEmpty()) {
            null
        } else {
            val num = parseInt(numStr.replace(" ", ""), 2)
            val rest = str.drop(2 + numStr.length)
            Token.NumberLiteral(num, "0b" + numStr, NumberType.Int) to rest
        }
    } else if (str.startsWith("0x")) {
        val numStr = str.drop(2).takeWhile {
            it in " 0123456789abcdefABCDEF"
        }
        if (numStr.isEmpty()) {
            null
        } else {
            val num = parseInt(numStr.replace(" ", ""), 16)
            val rest = str.drop(2 + numStr.length)
            Token.NumberLiteral(num, "0x" + numStr, NumberType.Int) to rest
        }
    } else if (str.first().let { c -> c in "0123456789" || c == '.' }) {
        val numStr = str.takeWhile {
            it in " 0123456789."
        }
        val decimalPointCount = numStr.count { it == '.' }
        if (decimalPointCount <= 1) {
            val num = safeParseDouble(numStr.replace(" ", ""))!!
            val rest = str.drop(numStr.length)
            Token.NumberLiteral(num, numStr, if (decimalPointCount == 0) NumberType.Int else NumberType.Float) to rest
        } else null
    } else {
        null
    }
}

private fun tryExtractOperator(str: String): Pair<Token, String>? {
    return if (str.startsWith("on what is")) {
        Token.Operator("on what is") to str.drop("on what is".length)
    } else if (str.startsWith("of what is")) {
        Token.Operator("of what is") to str.drop("of what is".length)
    } else if (str.startsWith("off what is")) {
        Token.Operator("off what is") to str.drop("off what is".length)
    } else if (str.startsWith("as a % of")) {
        Token.Operator("as a % of") to str.drop("as a % of".length)
    } else if (str.first() in "=+-/%*^()&|!") {
        Token.Operator(str.first().toString()) to str.drop(1)
    } else if (str.startsWith("in ")) {
        Token.Operator("in") to str.drop(2)
    } else if (str.length > 1) {
        val twoChars = str.substring(0, 2)
        if (twoChars == "<<" || twoChars == ">>") {
            Token.Operator(twoChars) to str.drop(2)
        } else {
            null
        }
    } else {
        null
    }
}

fun Char.isLetter(): Boolean = this.toLowerCase() != this.toUpperCase()
fun Char.isDigit(): Boolean = this in "0123456789"

private fun tryExtractUnit(str: String): Pair<Token, String>? {
    val piece = str.takeWhile(Char::isLetter)
    return try {
        val unit = parseUnitName("1 $piece")
        Token.UnitOfMeasure(unit.toString().drop("1 ".length)) to str.drop(piece.length)
    } catch (e: Throwable) {
        null
    }
}

private fun tryExtractStringLiteral(str: String): Pair<Token, String>? {
    require(!str.first().isWhitespace()) { "At this point, str must already be trimmed!" }
    val extractedStr = str.first() + str.drop(1).takeWhile {
        !it.isDigit() && it !in "=%/+-*^() "
    }
    return Token.StringLiteral(extractedStr) to str.drop(extractedStr.length)
}

private fun tryParseVariableName(str: String, variableNames: Iterable<String>): Pair<Token, String>? {
    require(!str.first().isWhitespace()) { "At this point, str must already be trimmed!" }
    val variableName = variableNames.firstOrNull { str.startsWith(it) }
    return if (variableName != null) {
        Token.Variable(variableName) to str.drop(variableName.length)
    } else {
        null
    }
}

private fun tryParseFunctionInvocation(str: String, functionNames: Iterable<String>): Pair<Token, String>? {
    require(!str.first().isWhitespace()) { "At this point, str must already be trimmed!" }
    val functionName = functionNames.firstOrNull { str.startsWith(it) }
    return if (functionName != null) {
        Token.StringLiteral(functionName) to str.drop(functionName.length)
    } else {
        null
    }
}