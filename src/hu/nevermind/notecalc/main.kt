package hu.nevermind.notecalc

import org.w3c.dom.Storage
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.browser.localStorage
import kotlin.browser.window


external class Assert {
    fun ok(expr: Boolean, msg: String)
    fun <T> equal(actual: T, expected: T)
}

external object QUnit {
    fun test(name: String, testFunc: (Assert) -> Unit)
}

var nextNoteCalcIndex = 0
val globalVariables = hashMapOf<String, Operand>()
const val NOTE_CALC_IDS_KEY: String = "commaSeparatedNoteCaclcIds"
const val UNNAMED_TITLE: String = "Unnamed"


fun main(args: Array<String>) {
    QUnit.asDynamic().config.autostart = false
    if (window.location.search == "?test") {
        QUnit.asDynamic().start()
    }
    val allNoteCalcEntries = localStorage.getAllNoteCalcEntries()
    createNoteCalcEditors(allNoteCalcEntries)
    if (nextNoteCalcIndex == 0) {
        localStorage.setNoteCalcTitle(nextNoteCalcIndex, "Welcome")
        localStorage.setNoteCalcContent(nextNoteCalcIndex, defaultText)
        localStorage.setNoteCaclcVisibility(nextNoteCalcIndex, "true")
        addButtonClicked()
    }
}

private fun createNoteCalcEditors(allNoteCalcEntries: List<Int>) {
    allNoteCalcEntries.forEach { noteCalcIndex ->
        if (localStorage.getNoteCalcContent(noteCalcIndex) != null) {
            window.asDynamic()["onHideButtonClick$noteCalcIndex"] = { visible: Boolean ->
                if (visible) {
                    addNewEditorRow(noteCalcIndex, globalVariables)
                } else {
                    document.getElementById(editorDivId(noteCalcIndex))?.apply {
                        parentNode?.removeChild(this)
                    }
                }
                localStorage.setNoteCaclcVisibility(noteCalcIndex, visible.toString())
            }
            if (localStorage.getNoteCaclcVisibility(noteCalcIndex) == "true") {
                addNewEditorRow(noteCalcIndex, globalVariables)
            } else {
                val li = document.createElement("option").apply {
                    val title = loadTitleOr(nextNoteCalcIndex, UNNAMED_TITLE)
                    innerHTML = """<a href="#" onclick="onHideButtonClick$noteCalcIndex(true)">$title</a>"""
                }
                document.getElementsByTagName("body")[0]!!.appendChild(li.children[0]!!)
            }
            if (noteCalcIndex >= nextNoteCalcIndex) {
                nextNoteCalcIndex = noteCalcIndex + 1
            }
        }
    }
}

val addButtonClicked = {
    val allNoteCalcEntries = localStorage.getAllNoteCalcEntries()
    localStorage.setItem(NOTE_CALC_IDS_KEY, (allNoteCalcEntries + nextNoteCalcIndex).joinToString(","))
    localStorage.setNoteCalcTitle(nextNoteCalcIndex, loadTitleOr(nextNoteCalcIndex, UNNAMED_TITLE))
    localStorage.setNoteCaclcVisibility(nextNoteCalcIndex, "true")
    addNewEditorRow(nextNoteCalcIndex, globalVariables)
    nextNoteCalcIndex++
}

private fun loadTitleOr(noteCalcIndex: Int, default: String): String {
    return localStorage.getNoteCalcTitle(noteCalcIndex).let { str -> if (str.isNullOrEmpty()) default else str!! }
}

private fun addNewEditorRow(editorIndex: Int, globalVariables: MutableMap<String, Operand>): Int {
    val newRow = document.createElement("div").apply {
        id = editorDivId(editorIndex)
        className = "col-xs-12 col-md-12"
        val panelTitle = localStorage.getNoteCalcTitle(editorIndex) ?: ""
        window.asDynamic()["onTitleClick$editorIndex"] = { localStorage.setNoteCalcTitle(editorIndex, window.prompt("Title", panelTitle) ?: "") }
        innerHTML = """
<div class="panel panel-default">
  <div class="panel-heading">
    <h3 class="panel-title pull-left" onclick="onTitleClick$editorIndex()">$panelTitle</h3>
    <button class="btn btn-default pull-right" onclick="onHideButtonClick$editorIndex(false)">Hide</button>
    <div class="clearfix"></div>
  </div>
  <div class="panel-body">
    <div class="row">
        <div class="col-xs-6" style="padding-right: 0px;padding-left: 0px;">
            <textarea id="textarea$editorIndex"  style="width: 100%;height: 100%"></textarea>
        </div>
        <div class="col-xs-6" style="padding-right: 0px;padding-left: 0px;">
            <textarea id="results$editorIndex" class="CodeMirror-code" style="margin-top: 0px; font-family: monospace;"></textarea>
        </div>
    </div>
  </div>
</div>
"""
    }
    document.getElementById("noteCalcTable")!!.appendChild(newRow)
    return window.setTimeout({
        NoteCalcEditor(localStorage.getNoteCalcContent(editorIndex) ?: "",
                document.getElementById("textarea$editorIndex")!!,
                document.getElementById("results$editorIndex")!!, globalVariables) { modifiedText ->
            if (modifiedText.isEmpty()) {
                localStorage.removeNoteCalcContent(editorIndex)
            } else {
                localStorage.setNoteCalcContent(editorIndex, modifiedText)
            }
        }
    }, 500)
}

private fun Storage.getAllNoteCalcEntries(): List<Int> = (this.getItem(NOTE_CALC_IDS_KEY) ?: "").split(',').filter(String::isNotEmpty).map(String::toInt)

private fun Storage.getNoteCaclcVisibility(noteCalcIndex: Int): String? {
    return this.getItem(noteCaclcVisibleKey(noteCalcIndex))
}

private fun Storage.setNoteCaclcVisibility(noteCalcIndex: Int, text: String) {
    this.setItem(noteCaclcVisibleKey(noteCalcIndex), text)
}

private fun Storage.getNoteCalcTitle(noteCalcIndex: Int): String? {
    return this.getItem(noteCalcTitleKey(noteCalcIndex))
}

private fun Storage.setNoteCalcTitle(noteCalcIndex: Int, text: String) {
    this.setItem(noteCalcTitleKey(noteCalcIndex), text)
}

private fun Storage.getNoteCalcContent(noteCalcIndex: Int): String? {
    return this.getItem(noteCalcContentKey(noteCalcIndex))
}

private fun Storage.setNoteCalcContent(noteCalcIndex: Int, text: String) {
    this.setItem(noteCalcContentKey(noteCalcIndex), text)
}

private fun Storage.removeNoteCalcContent(noteCalcIndex: Int) {
    this.removeItem(noteCalcContentKey(noteCalcIndex))
}


private fun noteCalcContentKey(editorIndex: Int): String = "noteCalcContent$editorIndex"

private fun editorDivId(editorIndex: Int): String = "NoteCalcPanel$editorIndex"

private fun noteCalcTitleKey(editorIndex: Int): String = "storedNoteCalcTitle$editorIndex"

private fun noteCaclcVisibleKey(editorIndex: Int): String = "storedNoteCalcVisible$editorIndex"

const val defaultText: String = """==========================================================
========================== Welcome =======================
==========================================================

Notecalc is a handy calculator trying to bring the advantages of Soulver
to the web.

You can use it as a combination of a calculator and a notepad, mixing calculations,
numbers, operators, units of measurement with meaningful, descriptive texts around them,
providing context for your calculations. Results on the right are automatically
updated when text changes.

Text is automatically saved in your local browser, nothing is sent to the server.
You can rename the single NoteCalc editors by clicking on the current name at the
header of the panel (which is now "Welcome").
You can create new editors with the "Add" button at the bottom of the page.

Some examples. Feel free to change them and play around.

Percentages
===========
100 + 10%
200 * 5%
200 - 20%

Numbers, Hex and binary digits
==============================
You don't have to count zeros
100k
10M
space separated numbers 10 000 000
Binary and Hex numbers
0xFF
0b1100 + 0b0011

Variables
=========
Bank of America = 50 000 + 5.25%
Citibank = 50 000 + 6%
Difference of Citibank - Bank of America
${'$'}prev * 3 years
${'$'}prev holds the result of the previous calculation
--
12${'$'} for beer
2*13${'$'} for tickets
all spending = ${'$'}sum

${'$'}sum always holds the sum of the previous calculations
-- you can reset them with at least two dashes (--) or equal signs (==)
${'$'}sum is now zero

Units of measure
================
The road took 45minutes and the speed of the vehicle was * 12km/h
(This is an example that comments can be anywhere in an expressions. The previous line works because
it is basically a simple multiplication between 45minutes and 12km/h, but there are
words between the operands and the operator, which, of course, are ignored when calculating the result)
Downloading a 1GB file with / 10Mb/s in min
or simply 1GB / 10Mb/s in min

Conversions
===========
11years in weeks
1 day in seconds
12 km/h in m/s
5m*m/s in km*km/h


Methods
=======
Methods are defined at the start of the line with a "fun" keyword and a method name.
Method name should not contain any space or special characters.
Every line starting with a whitespace character after the method name is the body of the method.

fun motion(time)
  a = (0 - 9.8)m/s^2
  v0 = 100 m/s
  x0 = 490 m
  1/2 * a * time^2 + v0 * time + x0

motion(1s)
motion(10s)
motion(20s)
motion(30s)"""
