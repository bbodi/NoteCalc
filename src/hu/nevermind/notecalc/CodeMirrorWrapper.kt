package hu.nevermind.notecalc

import org.w3c.dom.Element

object CodeMirrorWrapper {
    fun enableAutocompletion() {
        js("CodeMirror").registerHelper("hint", "notecalc", { cm: dynamic, options: dynamic ->
            val cur = cm.getCursor()
            val token = cm.getTokenAt(cur)
            if ((token.string as String).startsWith(' ')) {
                val spaceCountAtStartOfTheString = (token.string as String).takeWhile { it == ' ' }.length
                token.start = token.start + spaceCountAtStartOfTheString
            }
            if (token.end > cur.ch) {
                token.end = cur.ch
                token.string = (token.string as String).substring(0, cur.ch - token.start)
            }
            object {
                val from = object {
                    val line = cur.line
                    val ch = token.start
                }
                val to = object {
                    val line = cur.line
                    val ch = token.end
                }
                val list = (cm.options.noteCalcEditor as NoteCalcEditor).allVariables.keys
                        .filter { it.contains((token.string as String).trim()) }
                        .toTypedArray()
            }
        })
    }

    fun defineTokenizer(tokenizer: (List<NoteCalcEditor.Companion.HighlightedText>, dynamic, dynamic) -> String) {
        js("CodeMirror").defineMode("notecalc") { options: dynamic ->
            object {
                val startState = {
                    object {
                        val index = 0
                        val options = options
                    }
                }
                val token = { stream: dynamic, state: dynamic ->
                    val tokenStyles = (options.noteCalcEditor as NoteCalcEditor).getHighlightedTexts()
                    tokenizer(tokenStyles, stream, state)
                }
            }
        }
    }

    fun fromTextArea(element: Element, properties: Any): dynamic = js("CodeMirror.fromTextArea")(element, properties)
}