(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define('NoteCalcJS', ['kotlin'], factory);
  else if (typeof exports === 'object')
    module.exports = factory(require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'NoteCalcJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NoteCalcJS'.");
    }
    root.NoteCalcJS = factory(kotlin);
  }
}(this, function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    hu: Kotlin.definePackage(null, /** @lends _.hu */ {
      nevermind: Kotlin.definePackage(null, /** @lends _.hu.nevermind */ {
        notecalc: Kotlin.definePackage(function () {
          this.nextNoteCalcIndex = 0;
          this.globalVariables = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([]);
          this.NOTE_CALC_IDS_KEY = 'commaSeparatedNoteCaclcIds';
          this.UNNAMED_TITLE = 'Unnamed';
          this.addButtonClicked = _.hu.nevermind.notecalc.addButtonClicked$f;
          this.defaultText = '==========================================================\n========================== Welcome =======================\n==========================================================\n\nNotecalc is a handy calculator trying to bring the advantages of Soulver\nto the web.\n\nYou can use it as a combination of a calculator and a notepad, mixing calculations,\nnumbers, operators, units of measurement with meaningful, descriptive texts around them,\nproviding context for your calculations. Results on the right are automatically\nupdated when text changes.\n\nText is automatically saved in your local browser, nothing is sent to the server.\nYou can rename the single NoteCalc editors by clicking on the current name at the\nheader of the panel (which is now "Welcome").\nYou can create new editors with the "Add" button at the bottom of the page.\n\nSome examples. Feel free to change them and play around.\n\nPercentages\n===========\n100 + 10%\n200 * 5%\n200 - 20%\n\nNumbers, Hex and binary digits\n==============================\nYou don\'t have to count zeros\n100k\n10M\nspace separated numbers 10 000 000\nBinary and Hex numbers\n0xFF\n0b1100 + 0b0011\n\nVariables\n=========\nBank of America = 50 000 + 5.25%\nCitibank = 50 000 + 6%\nDifference of Citibank - Bank of America\n$prev * 3 years\n$prev holds the result of the previous calculation\n--\n12$ for beer\n2*13$ for tickets\nall spending = $sum\n\n$sum always holds the sum of the previous calculations\n-- you can reset them with at least two dashes (--) or equal signs (==)\n$sum is now zero\n\nUnits of measure\n================\nThe road took 45minutes and the speed of the vehicle was * 12km/h\n(This is an example that comments can be anywhere in an expressions. The previous line works because\nit is basically a simple multiplication between 45minutes and 12km/h, but there are\nwords between the operands and the operator, which, of course, are ignored when calculating the result)\nDownloading a 1GB file with / 10Mb/s in min\nor simply 1GB / 10Mb/s in min\n\nConversions\n===========\n11years in weeks\n1 day in seconds\n12 km/h in m/s\n5m*m/s in km*km/h\n\n\nMethods\n=======\nMethods are defined at the start of the line with a "fun" keyword and a method name.\nMethod name should not contain any space or special characters.\nEvery line starting with a whitespace character after the method name is the body of the method.\n\nfun motion(time)\n  a = (0 - 9.8)m/s^2\n  v0 = 100 m/s\n  x0 = 490 m\n  1/2 * a * time^2 + v0 * time + x0\n\nmotion(1s)\nmotion(10s)\nmotion(20s)\nmotion(30s)';
        }, /** @lends _.hu.nevermind.notecalc */ {
          CodeMirror: Kotlin.createObject(null, function CodeMirror() {
          }, /** @lends _.hu.nevermind.notecalc.CodeMirror.prototype */ {
            enableAutocompletion: function () {
              CodeMirror.registerHelper('hint', 'notecalc', _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f);
            },
            defineTokenizer_27kw40$: function (tokenizer) {
              CodeMirror.defineMode('notecalc', _.hu.nevermind.notecalc.CodeMirror.defineTokenizer_27kw40$f(tokenizer));
            },
            fromTextArea_7k2llg$: function (element, properties) {
              return CodeMirror.fromTextArea(element, properties);
            }
          }, /** @lends _.hu.nevermind.notecalc.CodeMirror */ {
            enableAutocompletion$f$f: Kotlin.createClass(null, function (closure$cur_0, closure$token_0, closure$cm_0) {
              this.from = new _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f.f(closure$cur_0, closure$token_0);
              this.to = new _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f.f_0(closure$cur_0, closure$token_0);
              var tmp$0;
              var $receiver = (Kotlin.isType(tmp$0 = closure$cm_0.options.noteCalcEditor, _.hu.nevermind.notecalc.NoteCalcEditor) ? tmp$0 : Kotlin.throwCCE()).allVariables.keys;
              var destination = new Kotlin.ArrayList();
              var tmp$3;
              tmp$3 = $receiver.iterator();
              while (tmp$3.hasNext()) {
                var element = tmp$3.next();
                var tmp$4;
                var $receiver_0 = typeof (tmp$4 = closure$token_0.string) === 'string' ? tmp$4 : Kotlin.throwCCE();
                if (Kotlin.kotlin.text.contains_kzp0od$(element, Kotlin.kotlin.text.trim_gw00vq$($receiver_0).toString())) {
                  destination.add_za3rmp$(element);
                }
              }
              this.list = Kotlin.copyToArray(destination);
            }, null, /** @lends _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f */ {
              f: Kotlin.createClass(null, function (closure$cur_0, closure$token_0) {
                this.line = closure$cur_0.line;
                this.ch = closure$token_0.start;
              }, null, /** @lends _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f.f */ {
              }),
              f_0: Kotlin.createClass(null, function (closure$cur_0, closure$token_0) {
                this.line = closure$cur_0.line;
                this.ch = closure$token_0.end;
              }, null, /** @lends _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f.f_0 */ {
              })
            }),
            enableAutocompletion$f: function (cm, options) {
              var tmp$0, tmp$1, tmp$2;
              var cur = cm.getCursor();
              var token = cm.getTokenAt(cur);
              if (Kotlin.kotlin.text.startsWith_cjsvxq$(typeof (tmp$0 = token.string) === 'string' ? tmp$0 : Kotlin.throwCCE(), ' ')) {
                var $receiver = typeof (tmp$1 = token.string) === 'string' ? tmp$1 : Kotlin.throwCCE();
                var takeWhile_ggikb8$result;
                takeWhile_ggikb8$break: {
                  var tmp$3;
                  tmp$3 = $receiver.length - 1;
                  for (var index = 0; index <= tmp$3; index++) {
                    if (!($receiver.charAt(index) === ' ')) {
                      takeWhile_ggikb8$result = $receiver.substring(0, index);
                      break takeWhile_ggikb8$break;
                    }
                  }
                  takeWhile_ggikb8$result = $receiver;
                }
                var spaceCountAtStartOfTheString = takeWhile_ggikb8$result.length;
                token.start = token.start + spaceCountAtStartOfTheString;
              }
              if (token.end > cur.ch) {
                token.end = cur.ch;
                token.string = (typeof (tmp$2 = token.string) === 'string' ? tmp$2 : Kotlin.throwCCE()).substring(0, cur.ch - token.start);
              }
              return new _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion$f$f(cur, token, cm);
            },
            defineTokenizer$f$f: Kotlin.createClass(null, function (closure$options_0, closure$tokenizer_0) {
              this.startState = _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f.startState$f(closure$options_0);
              this.token = _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f.token$f(closure$options_0, closure$tokenizer_0);
            }, null, /** @lends _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f */ {
              f$f: Kotlin.createClass(null, function (closure$options_0) {
                this.index = 0;
                this.options = closure$options_0;
              }, null, /** @lends _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f.f$f */ {
              }),
              startState$f: function (closure$options) {
                return function () {
                  return new _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f.f$f(closure$options);
                };
              },
              token$f: function (closure$options, closure$tokenizer) {
                return function (stream, state) {
                  var tmp$0;
                  var tokenStyles = (Kotlin.isType(tmp$0 = closure$options.noteCalcEditor, _.hu.nevermind.notecalc.NoteCalcEditor) ? tmp$0 : Kotlin.throwCCE()).getHighlightedTexts();
                  return closure$tokenizer(tokenStyles, stream, state);
                };
              }
            }),
            defineTokenizer_27kw40$f: function (closure$tokenizer) {
              return function (options) {
                return new _.hu.nevermind.notecalc.CodeMirror.defineTokenizer$f$f(options, closure$tokenizer);
              };
            }
          }),
          main_kand9s$: function (args) {
            QUnit.config.autostart = false;
            if (Kotlin.equals(window.location.search, '?test')) {
              QUnit.start();
            }
            var allNoteCalcEntries = _.hu.nevermind.notecalc.getAllNoteCalcEntries_0(localStorage);
            _.hu.nevermind.notecalc.createNoteCalcEditors_0(allNoteCalcEntries);
            if (_.hu.nevermind.notecalc.nextNoteCalcIndex === 0) {
              _.hu.nevermind.notecalc.setNoteCalcTitle_0(localStorage, _.hu.nevermind.notecalc.nextNoteCalcIndex, 'Welcome');
              _.hu.nevermind.notecalc.setNoteCalcContent_0(localStorage, _.hu.nevermind.notecalc.nextNoteCalcIndex, _.hu.nevermind.notecalc.defaultText);
              _.hu.nevermind.notecalc.setNoteCaclcVisibility_0(localStorage, _.hu.nevermind.notecalc.nextNoteCalcIndex, 'true');
              _.hu.nevermind.notecalc.addButtonClicked();
            }
          },
          f: function (closure$noteCalcIndex) {
            return function (visible) {
              var tmp$0;
              if (visible) {
                _.hu.nevermind.notecalc.addNewEditorRow_0(closure$noteCalcIndex, _.hu.nevermind.notecalc.globalVariables);
              }
               else {
                (tmp$0 = document.getElementById(_.hu.nevermind.notecalc.editorDivId_0(closure$noteCalcIndex))) != null ? Kotlin.kotlin.dom.removeFromParent_asww5t$(tmp$0) : null;
              }
              _.hu.nevermind.notecalc.setNoteCaclcVisibility_0(localStorage, closure$noteCalcIndex, visible.toString());
            };
          },
          createNoteCalcEditors_0: function (allNoteCalcEntries) {
            var tmp$0;
            tmp$0 = allNoteCalcEntries.iterator();
            while (tmp$0.hasNext()) {
              var element = tmp$0.next();
              var tmp$1;
              if (_.hu.nevermind.notecalc.getNoteCalcContent_0(localStorage, element) != null) {
                window['onHideButtonClick' + element] = _.hu.nevermind.notecalc.f(element);
                if (Kotlin.equals(_.hu.nevermind.notecalc.getNoteCaclcVisibility_0(localStorage, element), 'true')) {
                  _.hu.nevermind.notecalc.addNewEditorRow_0(element, _.hu.nevermind.notecalc.globalVariables);
                }
                 else {
                  var $receiver_0 = document.createElement('option');
                  var title = _.hu.nevermind.notecalc.loadTitleOr_0(_.hu.nevermind.notecalc.nextNoteCalcIndex, _.hu.nevermind.notecalc.UNNAMED_TITLE);
                  $receiver_0.innerHTML = '<a href=' + '"' + '#' + '"' + ' onclick=' + '"' + 'onHideButtonClick' + element + '(true)' + '"' + '>' + title + '<\/a>';
                  var li = $receiver_0;
                  ((tmp$1 = document.getElementsByTagName('body')[0]) != null ? tmp$1 : Kotlin.throwNPE()).appendChild(Kotlin.kotlin.collections.first_a7ptmv$(Kotlin.kotlin.dom.childElements_ejp6nl$(li)));
                }
                if (element >= _.hu.nevermind.notecalc.nextNoteCalcIndex) {
                  _.hu.nevermind.notecalc.nextNoteCalcIndex = element + 1;
                }
              }
            }
          },
          addButtonClicked$f: function () {
            var allNoteCalcEntries = _.hu.nevermind.notecalc.getAllNoteCalcEntries_0(localStorage);
            localStorage[_.hu.nevermind.notecalc.NOTE_CALC_IDS_KEY] = Kotlin.kotlin.collections.joinToString_ld60a2$(Kotlin.kotlin.collections.plus_ukps2u$(allNoteCalcEntries, _.hu.nevermind.notecalc.nextNoteCalcIndex), ',');
            _.hu.nevermind.notecalc.setNoteCalcTitle_0(localStorage, _.hu.nevermind.notecalc.nextNoteCalcIndex, _.hu.nevermind.notecalc.loadTitleOr_0(_.hu.nevermind.notecalc.nextNoteCalcIndex, _.hu.nevermind.notecalc.UNNAMED_TITLE));
            _.hu.nevermind.notecalc.setNoteCaclcVisibility_0(localStorage, _.hu.nevermind.notecalc.nextNoteCalcIndex, 'true');
            _.hu.nevermind.notecalc.addNewEditorRow_0(_.hu.nevermind.notecalc.nextNoteCalcIndex, _.hu.nevermind.notecalc.globalVariables);
            return _.hu.nevermind.notecalc.nextNoteCalcIndex++;
          },
          loadTitleOr_0: function (noteCalcIndex, default_0) {
            var str = _.hu.nevermind.notecalc.getNoteCalcTitle_0(localStorage, noteCalcIndex);
            return str == null || str.length === 0 ? default_0 : str != null ? str : Kotlin.throwNPE();
          },
          f_1: function (closure$editorIndex, closure$panelTitle) {
            return function () {
              var tmp$0;
              _.hu.nevermind.notecalc.setNoteCalcTitle_0(localStorage, closure$editorIndex, (tmp$0 = window.prompt('Title', closure$panelTitle)) != null ? tmp$0 : '');
            };
          },
          f_2: function (closure$editorIndex) {
            return function (modifiedText) {
              if (modifiedText.length === 0) {
                _.hu.nevermind.notecalc.removeNoteCalcContent_0(localStorage, closure$editorIndex);
              }
               else {
                _.hu.nevermind.notecalc.setNoteCalcContent_0(localStorage, closure$editorIndex, modifiedText);
              }
            };
          },
          addNewEditorRow_0$f_0: function (closure$editorIndex, closure$globalVariables) {
            return function () {
              var tmp$0, tmp$1, tmp$2;
              return new _.hu.nevermind.notecalc.NoteCalcEditor((tmp$0 = _.hu.nevermind.notecalc.getNoteCalcContent_0(localStorage, closure$editorIndex)) != null ? tmp$0 : '', (tmp$1 = document.getElementById('textarea' + closure$editorIndex)) != null ? tmp$1 : Kotlin.throwNPE(), (tmp$2 = document.getElementById('results' + closure$editorIndex)) != null ? tmp$2 : Kotlin.throwNPE(), closure$globalVariables, _.hu.nevermind.notecalc.f_2(closure$editorIndex));
            };
          },
          addNewEditorRow_0: function (editorIndex, globalVariables) {
            var tmp$0;
            var $receiver = document.createElement('div');
            var tmp$1;
            $receiver.id = _.hu.nevermind.notecalc.editorDivId_0(editorIndex);
            $receiver.className = 'col-xs-12 col-md-12';
            var panelTitle = (tmp$1 = _.hu.nevermind.notecalc.getNoteCalcTitle_0(localStorage, editorIndex)) != null ? tmp$1 : '';
            window['onTitleClick' + editorIndex] = _.hu.nevermind.notecalc.f_1(editorIndex, panelTitle);
            $receiver.innerHTML = '\n' + '<div class=' + '"' + 'panel panel-default' + '"' + '>' + '\n' + '  <div class=' + '"' + 'panel-heading' + '"' + '>' + '\n' + '    <h3 class=' + '"' + 'panel-title pull-left' + '"' + ' onclick=' + '"' + 'onTitleClick' + editorIndex + '()' + '"' + '>' + panelTitle + '<\/h3>' + '\n' + '    <button class=' + '"' + 'btn btn-default pull-right' + '"' + ' onclick=' + '"' + 'onHideButtonClick' + editorIndex + '(false)' + '"' + '>Hide<\/button>' + '\n' + '    <div class=' + '"' + 'clearfix' + '"' + '><\/div>' + '\n' + '  <\/div>' + '\n' + '  <div class=' + '"' + 'panel-body' + '"' + '>' + '\n' + '    <div class=' + '"' + 'row' + '"' + '>' + '\n' + '        <div class=' + '"' + 'col-xs-6' + '"' + ' style=' + '"' + 'padding-right: 0px;padding-left: 0px;' + '"' + '>' + '\n' + '            <textarea id=' + '"' + 'textarea' + editorIndex + '"' + '  style=' + '"' + 'width: 100%;height: 100%' + '"' + '><\/textarea>' + '\n' + '        <\/div>' + '\n' + '        <div class=' + '"' + 'col-xs-6' + '"' + ' style=' + '"' + 'padding-right: 0px;padding-left: 0px;' + '"' + '>' + '\n' + '            <textarea id=' + '"' + 'results' + editorIndex + '"' + ' class=' + '"' + 'CodeMirror-code' + '"' + ' style=' + '"' + 'margin-top: 0px; font-family: monospace;' + '"' + '><\/textarea>' + '\n' + '        <\/div>' + '\n' + '    <\/div>' + '\n' + '  <\/div>' + '\n' + '<\/div>' + '\n';
            var newRow = $receiver;
            ((tmp$0 = document.getElementById('noteCalcTable')) != null ? tmp$0 : Kotlin.throwNPE()).appendChild(newRow);
            return window.setTimeout(_.hu.nevermind.notecalc.addNewEditorRow_0$f_0(editorIndex, globalVariables), 500);
          },
          getAllNoteCalcEntries_0: function ($receiver) {
            var tmp$0;
            var $receiver_0 = Kotlin.kotlin.text.split_rhc0qh$((tmp$0 = $receiver[_.hu.nevermind.notecalc.NOTE_CALC_IDS_KEY]) != null ? tmp$0 : '', [',']);
            var predicate = Kotlin.getCallableRefForExtensionFunction(Kotlin.kotlin.text.isNotEmpty_gw00vq$);
            var destination = new Kotlin.ArrayList();
            var tmp$2;
            tmp$2 = $receiver_0.iterator();
            while (tmp$2.hasNext()) {
              var element = tmp$2.next();
              if (predicate(element)) {
                destination.add_za3rmp$(element);
              }
            }
            var destination_0 = new Kotlin.ArrayList(Kotlin.kotlin.collections.collectionSizeOrDefault_0(destination, 10));
            var tmp$3;
            tmp$3 = destination.iterator();
            while (tmp$3.hasNext()) {
              var item = tmp$3.next();
              destination_0.add_za3rmp$(parseInt(item));
            }
            return destination_0;
          },
          getNoteCaclcVisibility_0: function ($receiver, noteCalcIndex) {
            return $receiver[_.hu.nevermind.notecalc.noteCaclcVisibleKey_0(noteCalcIndex)];
          },
          setNoteCaclcVisibility_0: function ($receiver, noteCalcIndex, text_0) {
            $receiver[_.hu.nevermind.notecalc.noteCaclcVisibleKey_0(noteCalcIndex)] = text_0;
          },
          getNoteCalcTitle_0: function ($receiver, noteCalcIndex) {
            return $receiver[_.hu.nevermind.notecalc.noteCalcTitleKey_0(noteCalcIndex)];
          },
          setNoteCalcTitle_0: function ($receiver, noteCalcIndex, text_0) {
            $receiver[_.hu.nevermind.notecalc.noteCalcTitleKey_0(noteCalcIndex)] = text_0;
          },
          getNoteCalcContent_0: function ($receiver, noteCalcIndex) {
            return $receiver[_.hu.nevermind.notecalc.noteCalcContentKey_0(noteCalcIndex)];
          },
          setNoteCalcContent_0: function ($receiver, noteCalcIndex, text_0) {
            $receiver[_.hu.nevermind.notecalc.noteCalcContentKey_0(noteCalcIndex)] = text_0;
          },
          removeNoteCalcContent_0: function ($receiver, noteCalcIndex) {
            $receiver.removeItem(_.hu.nevermind.notecalc.noteCalcContentKey_0(noteCalcIndex));
          },
          noteCalcContentKey_0: function (editorIndex) {
            return 'noteCalcContent' + editorIndex;
          },
          editorDivId_0: function (editorIndex) {
            return 'NoteCalcPanel' + editorIndex;
          },
          noteCalcTitleKey_0: function (editorIndex) {
            return 'storedNoteCalcTitle' + editorIndex;
          },
          noteCaclcVisibleKey_0: function (editorIndex) {
            return 'storedNoteCalcVisible' + editorIndex;
          },
          add_16iefo$: function ($receiver, other) {
            return math.add($receiver, other);
          },
          subtract_16iefo$: function ($receiver, other) {
            return math.subtract($receiver, other);
          },
          multiply_16iefo$: function ($receiver, other) {
            return math.multiply($receiver, other);
          },
          divide_16iefo$: function ($receiver, other) {
            return math.divide($receiver, other);
          },
          pow_16iefo$: function ($receiver, other) {
            return math.pow($receiver, other);
          },
          abs_7pybar$: function ($receiver) {
            return math.abs($receiver);
          },
          sqrt_7pybar$: function ($receiver) {
            return math.sqrt($receiver);
          },
          NoteCalcEditor: Kotlin.createClass(null, function NoteCalcEditor(defaultValue, editorTextArea, resultTextArea, globalVariables, onChange) {
            this.globalVariables = globalVariables;
            this.highlightedTexts_0 = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
            this.variables_0 = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([]);
            _.hu.nevermind.notecalc.CodeMirror.defineTokenizer_27kw40$(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.tokenizer_0);
            _.hu.nevermind.notecalc.CodeMirror.enableAutocompletion();
            var codeMirrorInstance = this.createMainCodeMirrorInstance_0(editorTextArea);
            var resultsCodeMirrorInstance = this.createCodeMirrorInstanceForResults_0(resultTextArea);
            resultsCodeMirrorInstance.setValue(this.textAreaChanged_0(defaultValue));
            codeMirrorInstance.setValue(defaultValue);
            this.setupEventHandlers_0(codeMirrorInstance, resultsCodeMirrorInstance, onChange);
          }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.prototype */ {
            getHighlightedTexts: function () {
              return this.highlightedTexts_0;
            },
            allVariables: {
              get: function () {
                return Kotlin.kotlin.collections.plus_y1w8a6$(this.variables_0, this.globalVariables);
              }
            },
            textAreaChanged_0: function (str) {
              this.highlightedTexts_0.clear();
              this.variables_0.clear();
              var resultString = new Kotlin.StringBuilder();
              var sum = {v: 0.0};
              var currentFunctionDefinition = {v: null};
              var functionDefsByName = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([]);
              var resultsByLineNumber = {v: Kotlin.kotlin.collections.emptyList()};
              var methodScopeVariableNames = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
              var $receiver = Kotlin.kotlin.text.lines_gw00vq$(str);
              var destination = new Kotlin.ArrayList(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
              var tmp$0;
              var index = 0;
              tmp$0 = $receiver.iterator();
              while (tmp$0.hasNext()) {
                var item = tmp$0.next();
                var tmp$2 = destination.add_za3rmp$.bind(destination);
                var nullBasedLineIndex = index++;
                var transform$result;
                var tmp$7, tmp$4, tmp$3;
                this.createVariablesForPreviousLineResults_0(resultsByLineNumber.v, this.variables_0);
                var functionDefInCurrentLine = this.tryParseFunctionDef_0(item);
                if (this.functionDefinitionStart_0(currentFunctionDefinition.v, functionDefInCurrentLine)) {
                  methodScopeVariableNames.addAll_wtfk93$((functionDefInCurrentLine != null ? functionDefInCurrentLine : Kotlin.throwNPE()).argumentNames);
                  currentFunctionDefinition.v = functionDefInCurrentLine;
                  functionDefsByName.put_wn2jw4$(((tmp$4 = currentFunctionDefinition.v) != null ? tmp$4 : Kotlin.throwNPE()).name, (tmp$7 = currentFunctionDefinition.v) != null ? tmp$7 : Kotlin.throwNPE());
                  transform$result = resultString.append('\n');
                }
                 else if (this.stillInTheFunctionBody_0(currentFunctionDefinition.v, item)) {
                  var oldCurrentFunctionDefinition = (tmp$3 = currentFunctionDefinition.v) != null ? tmp$3 : Kotlin.throwNPE();
                  var trimmedLine = Kotlin.kotlin.text.trim_gw00vq$(item).toString();
                  var evaluationResult = this.parseProcessAndEvaulate_0(functionDefsByName.keys, trimmedLine, Kotlin.kotlin.collections.plus_rp2n1o$(this.allVariables.keys, methodScopeVariableNames));
                  var tmp$6;
                  if (evaluationResult != null) {
                    var tmp$9, tmp$5;
                    resultString.append(this.createDebugString_0(evaluationResult.parsedTokens, evaluationResult.tokensWithMergedCompoundUnits, evaluationResult.postFixNotationTokens));
                    var lineAndTokens = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.LineAndTokens(trimmedLine, evaluationResult.postFixNotationTokens);
                    currentFunctionDefinition.v = oldCurrentFunctionDefinition.copy_irqjux$(void 0, void 0, Kotlin.kotlin.collections.plus_ukps2u$(oldCurrentFunctionDefinition.tokenLines, lineAndTokens));
                    functionDefsByName.put_wn2jw4$(((tmp$5 = currentFunctionDefinition.v) != null ? tmp$5 : Kotlin.throwNPE()).name, (tmp$9 = currentFunctionDefinition.v) != null ? tmp$9 : Kotlin.throwNPE());
                    this.highlightedTexts_0.addAll_wtfk93$(evaluationResult.highlightedTexts);
                    var currentVariableName = this.tryParseVariableName_0(evaluationResult.lastToken, trimmedLine);
                    if (currentVariableName != null) {
                      methodScopeVariableNames.add_za3rmp$(currentVariableName);
                    }
                    tmp$6 = evaluationResult;
                  }
                   else
                    tmp$6 = null;
                  tmp$6;
                  transform$result = resultString.append('\n');
                }
                 else {
                  if (currentFunctionDefinition.v != null) {
                    currentFunctionDefinition.v = null;
                    methodScopeVariableNames.clear();
                  }
                  var evaluationResult_0 = this.parseProcessAndEvaulate_0(functionDefsByName.keys, item, this.allVariables.keys);
                  var tmp$8;
                  if (evaluationResult_0 != null) {
                    resultString.append(this.createDebugString_0(evaluationResult_0.parsedTokens, evaluationResult_0.tokensWithMergedCompoundUnits, evaluationResult_0.postFixNotationTokens));
                    var currentVariableName_0 = this.tryParseVariableName_0(evaluationResult_0.lastToken, item);
                    var resultOperand = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.processPostfixNotationStack_ubooyd$(evaluationResult_0.postFixNotationTokens, this.variables_0, functionDefsByName);
                    this.saveResultIntoVariable_0(currentVariableName_0, resultOperand, this.variables_0, this.globalVariables);
                    if (resultOperand != null) {
                      sum.v += resultOperand.toRawNumber();
                      resultsByLineNumber.v = Kotlin.kotlin.collections.plus_ukps2u$(resultsByLineNumber.v, Kotlin.kotlin.to_l1ob02$(nullBasedLineIndex + 1, resultOperand));
                      resultString.append(this.createResultString_0(resultOperand, currentVariableName_0) + '\n');
                      this.variables_0.put_wn2jw4$('$prev', resultOperand);
                    }
                     else {
                      resultString.append('\n');
                      if (Kotlin.kotlin.text.startsWith_41xvrb$(item, '--') || Kotlin.kotlin.text.startsWith_41xvrb$(item, '==')) {
                        sum.v = 0.0;
                      }
                    }
                    this.highlightedTexts_0.addAll_wtfk93$(evaluationResult_0.highlightedTexts);
                    tmp$8 = evaluationResult_0;
                  }
                   else
                    tmp$8 = null;
                  tmp$8;
                  if (evaluationResult_0 == null) {
                    resultString.append('\n');
                    this.highlightedTexts_0.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(item, 'error'));
                  }
                  transform$result = this.variables_0.put_wn2jw4$('$sum', new _.hu.nevermind.notecalc.Operand.Number(sum.v, _.hu.nevermind.notecalc.NumberType.Float));
                }
                tmp$2(transform$result);
              }
              return resultString.toString();
            },
            createResultString_0: function (resultOperand, currentVariableName) {
              return this.createHumanizedResultString_0(resultOperand) + ('  ' + (currentVariableName != null ? currentVariableName : ''));
            },
            saveResultIntoVariable_0: function (currentVariableName, resultOperand, variables, globalVariables) {
              if (currentVariableName != null && resultOperand != null) {
                variables.put_wn2jw4$(currentVariableName, resultOperand);
                if (Kotlin.kotlin.text.startsWith_41xvrb$(currentVariableName, '$')) {
                  globalVariables.put_wn2jw4$(currentVariableName, resultOperand);
                }
              }
            },
            tryParseVariableName_0: function (lastToken, line) {
              var $receiver_0;
              if (Kotlin.isType(lastToken, _.hu.nevermind.notecalc.Token.Operator) && Kotlin.equals(lastToken.operator, '=')) {
                takeWhile_ggikb8$break: {
                  var tmp$2;
                  tmp$2 = line.length - 1;
                  for (var index = 0; index <= tmp$2; index++) {
                    if (!(line.charAt(index) !== '=')) {
                      $receiver_0 = line.substring(0, index);
                      break takeWhile_ggikb8$break;
                    }
                  }
                  $receiver_0 = line;
                }
                return Kotlin.kotlin.text.trim_gw00vq$($receiver_0).toString();
              }
               else
                return null;
            },
            createDebugString_0: function (parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens) {
              var debugEnabled = window.debugEnabled;
              if (debugEnabled) {
                var debugString = '';
                debugString += '| ' + Kotlin.kotlin.collections.joinToString_ld60a2$(parsedTokens) + ' | ' + Kotlin.kotlin.collections.joinToString_ld60a2$(tokensWithMergedCompoundUnits);
                debugString += '| ' + Kotlin.kotlin.collections.joinToString_ld60a2$(postFixNotationTokens);
                return debugString;
              }
               else
                return '';
            },
            parseProcessAndEvaulate_0: function (functionNames, line, variableNames) {
              try {
                var parsedTokens = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0(line, variableNames, functionNames);
                var tokensWithMergedCompoundUnits = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.mergeCompoundUnitsAndUnaryMinusOperators_0(parsedTokens);
                var postFixNotationTokens = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYard_0(tokensWithMergedCompoundUnits, functionNames);
                var highlightingInfos = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.createHighlightingNamesForTokens_0(parsedTokens);
                var lastToken = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(postFixNotationTokens);
                return new _.hu.nevermind.notecalc.NoteCalcEditor.EvaulationResult(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightingInfos, lastToken);
              }
               catch (e) {
                return null;
              }
            },
            functionDefinitionStart_0: function (currentFunctionDefinition, functionDefInCurrentLine) {
              return functionDefInCurrentLine != null && currentFunctionDefinition == null;
            },
            stillInTheFunctionBody_0: function (currentFunctionDefinition, line) {
              var tmp$0, tmp$1;
              return currentFunctionDefinition != null && ((tmp$1 = (tmp$0 = Kotlin.kotlin.text.firstOrNull_gw00vq$(line)) != null ? Kotlin.kotlin.text.isWhitespace_myv2d1$(tmp$0) : null) != null ? tmp$1 : false);
            },
            createVariablesForPreviousLineResults_0: function (resultOperands, variables) {
              var tmp$0;
              tmp$0 = resultOperands.iterator();
              while (tmp$0.hasNext()) {
                var element = tmp$0.next();
                variables.put_wn2jw4$('$' + element.first, element.second);
              }
            },
            tryParseFunctionDef_0: function (line) {
              var matches = line.match('fun ([^\\d\\s\\$\\-\\+\\*\\^\\:\\%][^\\(]*)\\(([^\\)]*(,[^\\)]*)*)\\)');
              if (matches != null) {
                var funName = matches[1];
                var $receiver = Kotlin.kotlin.text.split_rhc0qh$(matches[2], [',']);
                var transform = Kotlin.getCallableRefForExtensionFunction(Kotlin.kotlin.text.trim_pdl1w0$);
                var destination = new Kotlin.ArrayList(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
                var tmp$2;
                tmp$2 = $receiver.iterator();
                while (tmp$2.hasNext()) {
                  var item = tmp$2.next();
                  destination.add_za3rmp$(transform(item));
                }
                var predicate = Kotlin.getCallableRefForExtensionFunction(Kotlin.kotlin.text.isEmpty_gw00vq$);
                var destination_0 = new Kotlin.ArrayList();
                var tmp$3;
                tmp$3 = destination.iterator();
                while (tmp$3.hasNext()) {
                  var element = tmp$3.next();
                  if (!predicate(element)) {
                    destination_0.add_za3rmp$(element);
                  }
                }
                var arguments_0 = destination_0;
                return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.FunctionDefinition(funName, arguments_0, Kotlin.kotlin.collections.emptyList());
              }
               else
                return null;
            },
            createHumanizedResultString_0: function (quantity) {
              var unitPart;
              var tmp$1, tmp$3;
              var resultStr = quantity.asString();
              if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Number))
                tmp$1 = quantity.num;
              else if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Quantity))
                tmp$1 = quantity.quantity.toNumber();
              else if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Percentage))
                tmp$1 = quantity.num;
              var numberPart = tmp$1;
              if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Number))
                tmp$3 = quantity.type;
              else if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Quantity))
                tmp$3 = quantity.type;
              else if (Kotlin.isType(quantity, _.hu.nevermind.notecalc.Operand.Percentage))
                tmp$3 = quantity.type;
              var outputType = tmp$3;
              var it = Kotlin.kotlin.text.indexOf_30chhv$(resultStr, ' ');
              unitPart = it !== -1 ? resultStr.substring(it + 1) : '';
              var roundedNumber = Math.round(Kotlin.numberToDouble(numberPart) * 100.0) / 100.0;
              var localizedString = roundedNumber.toLocaleString('hu').toString();
              var indexOf = Kotlin.kotlin.text.indexOf_ilfvta$(localizedString, ',');
              var wholePart = indexOf === -1 ? localizedString : localizedString.substring(0, indexOf);
              var decimalPart = indexOf === -1 ? outputType === _.hu.nevermind.notecalc.NumberType.Float ? ',00' : '\xA0\xA0\xA0' : Kotlin.kotlin.text.padEnd_b68f8p$(localizedString.substring(indexOf), 3, '0');
              var resultNumberPart = Kotlin.kotlin.text.padStart_b68f8p$(wholePart + decimalPart, 16, '\xA0');
              var fullResult = resultNumberPart + ' ' + unitPart;
              return fullResult;
            },
            setupEventHandlers_0: function (codeMirrorInstance, resultsCodeMirrorInstance, onChange) {
              this.setupOnChangeHandling_0(codeMirrorInstance, resultsCodeMirrorInstance, onChange);
              this.setupScrollMirroring_0(codeMirrorInstance, resultsCodeMirrorInstance);
              this.setupCurorLineMirroring_0(codeMirrorInstance, resultsCodeMirrorInstance);
            },
            setupOnChangeHandling_0: function (codeMirrorInstance, resultsCodeMirrorInstance, onChange) {
              var timerId = {v: 0};
              codeMirrorInstance.on('change', _.hu.nevermind.notecalc.NoteCalcEditor.setupOnChangeHandling_0$f(timerId, codeMirrorInstance, this, resultsCodeMirrorInstance, onChange));
            },
            setupCurorLineMirroring_0: function (codeMirrorInstance, resultsCodeMirrorInstance) {
              codeMirrorInstance.on('cursorActivity', _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring_0$f(codeMirrorInstance, resultsCodeMirrorInstance));
              resultsCodeMirrorInstance.on('cursorActivity', _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring_0$f_0(resultsCodeMirrorInstance, codeMirrorInstance));
            },
            setupScrollMirroring_0: function (codeMirrorInstance, resultsCodeMirrorInstance) {
              codeMirrorInstance.on('scroll', _.hu.nevermind.notecalc.NoteCalcEditor.setupScrollMirroring_0$f(codeMirrorInstance, resultsCodeMirrorInstance));
              resultsCodeMirrorInstance.on('scroll', _.hu.nevermind.notecalc.NoteCalcEditor.setupScrollMirroring_0$f_0(resultsCodeMirrorInstance, codeMirrorInstance));
            },
            createCodeMirrorInstanceForResults_0: function (resultTextArea) {
              var resultsCodeMirrorInstance = _.hu.nevermind.notecalc.CodeMirror.fromTextArea_7k2llg$(resultTextArea, new _.hu.nevermind.notecalc.NoteCalcEditor.createCodeMirrorInstanceForResults$f());
              return resultsCodeMirrorInstance;
            },
            createMainCodeMirrorInstance_0: function (editorTextArea) {
              var codeMirrorInstance = _.hu.nevermind.notecalc.CodeMirror.fromTextArea_7k2llg$(editorTextArea, new _.hu.nevermind.notecalc.NoteCalcEditor.createMainCodeMirrorInstance$f(this));
              return codeMirrorInstance;
            },
            createObjectWithFields_0: function (initializer) {
              var jsObj = new _.hu.nevermind.notecalc.NoteCalcEditor.createObjectWithFields$f();
              initializer.call(initializer);
              return jsObj;
            }
          }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor */ {
            EvaulationResult: Kotlin.createClass(null, function EvaulationResult(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightedTexts, lastToken) {
              this.parsedTokens = parsedTokens;
              this.tokensWithMergedCompoundUnits = tokensWithMergedCompoundUnits;
              this.postFixNotationTokens = postFixNotationTokens;
              this.highlightedTexts = highlightedTexts;
              this.lastToken = lastToken;
            }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.EvaulationResult.prototype */ {
              component1: function () {
                return this.parsedTokens;
              },
              component2: function () {
                return this.tokensWithMergedCompoundUnits;
              },
              component3: function () {
                return this.postFixNotationTokens;
              },
              component4: function () {
                return this.highlightedTexts;
              },
              component5: function () {
                return this.lastToken;
              },
              copy_dbauy2$: function (parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightedTexts, lastToken) {
                return new _.hu.nevermind.notecalc.NoteCalcEditor.EvaulationResult(parsedTokens === void 0 ? this.parsedTokens : parsedTokens, tokensWithMergedCompoundUnits === void 0 ? this.tokensWithMergedCompoundUnits : tokensWithMergedCompoundUnits, postFixNotationTokens === void 0 ? this.postFixNotationTokens : postFixNotationTokens, highlightedTexts === void 0 ? this.highlightedTexts : highlightedTexts, lastToken === void 0 ? this.lastToken : lastToken);
              },
              toString: function () {
                return 'EvaulationResult(parsedTokens=' + Kotlin.toString(this.parsedTokens) + (', tokensWithMergedCompoundUnits=' + Kotlin.toString(this.tokensWithMergedCompoundUnits)) + (', postFixNotationTokens=' + Kotlin.toString(this.postFixNotationTokens)) + (', highlightedTexts=' + Kotlin.toString(this.highlightedTexts)) + (', lastToken=' + Kotlin.toString(this.lastToken)) + ')';
              },
              hashCode: function () {
                var result = 0;
                result = result * 31 + Kotlin.hashCode(this.parsedTokens) | 0;
                result = result * 31 + Kotlin.hashCode(this.tokensWithMergedCompoundUnits) | 0;
                result = result * 31 + Kotlin.hashCode(this.postFixNotationTokens) | 0;
                result = result * 31 + Kotlin.hashCode(this.highlightedTexts) | 0;
                result = result * 31 + Kotlin.hashCode(this.lastToken) | 0;
                return result;
              },
              equals_za3rmp$: function (other) {
                return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parsedTokens, other.parsedTokens) && Kotlin.equals(this.tokensWithMergedCompoundUnits, other.tokensWithMergedCompoundUnits) && Kotlin.equals(this.postFixNotationTokens, other.postFixNotationTokens) && Kotlin.equals(this.highlightedTexts, other.highlightedTexts) && Kotlin.equals(this.lastToken, other.lastToken)))));
              }
            }),
            f_1: function (closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange) {
              return function () {
                var resultRows = this$NoteCalcEditor.textAreaChanged_0(closure$codeMirrorInstance.getValue());
                closure$resultsCodeMirrorInstance.setValue(resultRows);
                closure$onChange(closure$codeMirrorInstance.getValue());
                var scrollInfo = closure$codeMirrorInstance.getScrollInfo();
                return closure$resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
              };
            },
            setupOnChangeHandling_0$f: function (closure$timerId, closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange) {
              return function (cm, changeObj) {
                window.clearTimeout(closure$timerId.v);
                closure$timerId.v = window.setTimeout(_.hu.nevermind.notecalc.NoteCalcEditor.f_1(closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange), 0);
                return 0;
              };
            },
            setupCurorLineMirroring$f$f: Kotlin.createClass(null, function (closure$cursor_0) {
              this.line = closure$cursor_0.line;
              this.ch = 0;
            }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring$f$f */ {
            }),
            setupCurorLineMirroring_0$f: function (closure$codeMirrorInstance, closure$resultsCodeMirrorInstance) {
              return function (cm) {
                if (closure$codeMirrorInstance.hasFocus()) {
                  var cursor = cm.getCursor('head');
                  closure$resultsCodeMirrorInstance.setCursor(new _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring$f$f(cursor));
                }
              };
            },
            setupCurorLineMirroring$f$f_0: Kotlin.createClass(null, function (closure$cursor_0) {
              this.line = closure$cursor_0.line;
              this.ch = 0;
            }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring$f$f_0 */ {
            }),
            setupCurorLineMirroring_0$f_0: function (closure$resultsCodeMirrorInstance, closure$codeMirrorInstance) {
              return function (cm) {
                if (closure$resultsCodeMirrorInstance.hasFocus()) {
                  var cursor = cm.getCursor('head');
                  closure$codeMirrorInstance.setCursor(new _.hu.nevermind.notecalc.NoteCalcEditor.setupCurorLineMirroring$f$f_0(cursor));
                }
              };
            },
            setupScrollMirroring_0$f: function (closure$codeMirrorInstance, closure$resultsCodeMirrorInstance) {
              return function (cm) {
                if (closure$codeMirrorInstance.hasFocus()) {
                  var scrollInfo = cm.getScrollInfo();
                  closure$resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
                }
              };
            },
            setupScrollMirroring_0$f_0: function (closure$resultsCodeMirrorInstance, closure$codeMirrorInstance) {
              return function (cm) {
                if (closure$resultsCodeMirrorInstance.hasFocus()) {
                  var scrollInfo = cm.getScrollInfo();
                  closure$codeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
                }
              };
            },
            createCodeMirrorInstanceForResults$f: Kotlin.createClass(null, function () {
              this.mode = 'c';
              this.styleActiveLine = true;
              this.lineNumbers = true;
              this.readOnly = true;
            }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.createCodeMirrorInstanceForResults$f */ {
            }),
            createMainCodeMirrorInstance$f: Kotlin.createClass(null, function (this$NoteCalcEditor_0) {
              this.mode = 'notecalc';
              this.styleActiveLine = true;
              this.lineNumbers = true;
              this.extraKeys = this$NoteCalcEditor_0.createObjectWithFields_0(_.hu.nevermind.notecalc.NoteCalcEditor.createMainCodeMirrorInstance$f.extraKeys$f);
              this.noteCalcEditor = this$NoteCalcEditor_0;
              this.highlightSelectionMatches = new _.hu.nevermind.notecalc.NoteCalcEditor.createMainCodeMirrorInstance$f.f();
            }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.createMainCodeMirrorInstance$f */ {
              extraKeys$f: function () {
                this['Ctrl-Space'] = 'autocomplete';
              },
              f: Kotlin.createClass(null, function () {
                this.showToken = /\w/;
                this.annotateScrollbar = true;
                this.showMatchesOnScrollbar = true;
              }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.createMainCodeMirrorInstance$f.f */ {
              })
            }),
            createObjectWithFields$f: Kotlin.createClass(null, function () {
            }, null, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.createObjectWithFields$f */ {
            }),
            Companion: Kotlin.createObject(null, function Companion() {
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.tokenizer_0 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.tokenizer_0$f;
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0 = Kotlin.kotlin.collections.hashMapOf_eoa9s7$([Kotlin.kotlin.to_l1ob02$('%', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(6, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f)), Kotlin.kotlin.to_l1ob02$('^', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(5, 'right', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_0)), Kotlin.kotlin.to_l1ob02$('unit', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(4, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_1)), Kotlin.kotlin.to_l1ob02$('=', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(0, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_2)), Kotlin.kotlin.to_l1ob02$('+', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(2, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_3)), Kotlin.kotlin.to_l1ob02$('-', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(2, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_4)), Kotlin.kotlin.to_l1ob02$('*', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(3, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_5(_.hu.nevermind.notecalc.NoteCalcEditor.Companion))), Kotlin.kotlin.to_l1ob02$('/', new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(3, 'left', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0$f_6(_.hu.nevermind.notecalc.NoteCalcEditor.Companion)))]);
              var num = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$num;
              var num_0 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$num_0;
              var op = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$op;
              var str = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$str;
              var unit = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$unit;
              var compoundUnit = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.Companion$compoundUnit;
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('1+2.0'), [num(1), op('+'), num_0(2.0)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('200kg alma + 300 kg ban\xE1n'), [num(200), unit('kg'), str('alma'), op('+'), num(300), unit('kg'), str('ban\xE1n')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('(1 alma + 4 k\xF6rte) * 3 ember'), [op('('), num(1), str('alma'), op('+'), num(4), str('k\xF6rte'), op(')'), op('*'), num(3), str('ember')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('1/2s'), [num(1), op('/'), num(2), unit('s')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYard_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.mergeCompoundUnitsAndUnaryMinusOperators_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('1/2s')), Kotlin.kotlin.collections.emptyList()), [num(1), num(2), unit('s'), op('/')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('0b00101 & 0xFF ^ 0xFF00 << 16 >> 16 ! 0xFF'), [num(5), op('&'), num(255), op('^'), num(65280), op('<<'), num(16), op('>>'), num(16), op('!'), num(255)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('10km/h * 45min in m'), [num(10), unit('km'), op('/'), unit('h'), op('*'), num(45), unit('min'), op('in'), unit('m')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('10(km/h)^2 * 45min in m'), [num(10), op('('), unit('km'), op('/'), unit('h'), op(')'), op('^'), num(2), op('*'), num(45), unit('min'), op('in'), unit('m')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.mergeCompoundUnitsAndUnaryMinusOperators_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('12km/h')), [num(12), compoundUnit('km/h')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.mergeCompoundUnitsAndUnaryMinusOperators_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('12km/h*3')), [num(12), compoundUnit('km/h'), op('*'), num(3)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-3'), [op('-'), num(3)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-0xFF'), [op('-'), num(255)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-0b110011'), [op('-'), num(51)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.mergeCompoundUnitsAndUnaryMinusOperators_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-3')), [op('-'), num(3)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-0xFF'), [op('-'), num(255)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('-0b110011'), [op('-'), num(51)]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('30 km', '(10+20)km');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('7500 m', '10(km/h) * 45min in m');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('500 kg', '200kg alma + 300 kg ban\xE1n');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(15, '(1 alma + 4 k\xF6rte) * 3 ember');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0('I traveled with 45km/h for / 13km in min'), [str('I'), str('traveled'), str('with'), num(45), unit('km'), op('/'), unit('h'), str('for'), op('/'), num(13), unit('km'), op('in'), unit('min')]);
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('19.5 min', 'I traveled 13km / at a rate 40km/h in min');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('12 mile/h', 'I traveled 24 miles and rode my bike  / 2 hours');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('40 mile', "Now let's say you rode your bike at a rate of 10 miles/h for * 4 h");
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(9, '12-3');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(1027, '2^10 + 3');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(163, '1+2*3^4');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('0.5s', '1/2s');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('0.5s', '1/(2s)');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(60, '15 EUR ad\xF3mentes azaz 75-15 eur\xF3b\xF3l kell ad\xF3zni');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('0.529 GB / seconds', 'transfer of around 1.587GB in about / 3 seconds');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$('37.5 MB', 'A is a unit but should not be handled here so... 37.5MB of DNA information in it.');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(1000, '3k - 2k');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(1000000, '3M - 2M');
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$(100, '1GB / 10MB');
            }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.prototype */ {
              assertEq_puj7f4$: function (expectedValue, actualInput) {
                QUnit.test(actualInput, _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_puj7f4$f(actualInput, _.hu.nevermind.notecalc.NoteCalcEditor.Companion, expectedValue));
              },
              assertEq_xfy9o8$: function (expectedValue, actualInput) {
                QUnit.test(actualInput, _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertEq_xfy9o8$f(actualInput, _.hu.nevermind.notecalc.NoteCalcEditor.Companion, expectedValue));
              },
              processPostfixNotationStackRec_7sgwk0$: function (quantitativeStack, tokens, lastUnit, variables, functions) {
                var tmp$1, tmp$2, tmp$3;
                if (tokens.isEmpty()) {
                  return quantitativeStack;
                }
                var lastUnit_0 = lastUnit;
                var incomingToken = Kotlin.kotlin.collections.first_a7ptmv$(tokens);
                if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.NumberLiteral))
                  tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(quantitativeStack, new _.hu.nevermind.notecalc.Operand.Number(incomingToken.num, incomingToken.type));
                else if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.Variable)) {
                  var variable = variables.get_za3rmp$(incomingToken.variableName);
                  if (variable != null) {
                    tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(quantitativeStack, variable);
                  }
                   else
                    tmp$3 = quantitativeStack;
                }
                 else if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.UnitOfMeasure)) {
                  var topOfStack = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(quantitativeStack);
                  if (topOfStack != null && Kotlin.isType(topOfStack, _.hu.nevermind.notecalc.Operand.Number)) {
                    tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1), _.hu.nevermind.notecalc.NoteCalcEditor.Companion.addUnitToTheTopOfStackEntry_0(topOfStack, incomingToken));
                  }
                   else {
                    lastUnit_0 = incomingToken.unitName;
                    tmp$3 = quantitativeStack;
                  }
                }
                 else if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.CompoundUnit)) {
                  var topOfStack_0 = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(quantitativeStack);
                  if (topOfStack_0 != null && Kotlin.isType(topOfStack_0, _.hu.nevermind.notecalc.Operand.Number)) {
                    tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1), _.hu.nevermind.notecalc.NoteCalcEditor.Companion.addUnitToTheTopOfStackEntry_0(topOfStack_0, incomingToken));
                  }
                   else {
                    lastUnit_0 = incomingToken.unitName;
                    tmp$3 = quantitativeStack;
                  }
                }
                 else if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.Operator))
                  if (Kotlin.kotlin.text.startsWith_41xvrb$(incomingToken.operator, 'fun ')) {
                    var funcName = Kotlin.kotlin.text.drop_n7iutu$(incomingToken.operator, 'fun '.length);
                    var functionDef = functions.get_za3rmp$(funcName);
                    if (functionDef != null && quantitativeStack.size >= functionDef.argumentNames.size) {
                      var arguments_0 = Kotlin.kotlin.collections.takeLast_3iu80n$(quantitativeStack, functionDef.argumentNames.size);
                      var methodScope = Kotlin.java.util.HashMap_r12sna$(Kotlin.kotlin.collections.plus_y1w8a6$(variables, Kotlin.kotlin.collections.toMap_mnrzhp$(Kotlin.kotlin.collections.zip_71wgqg$(functionDef.argumentNames, arguments_0))));
                      var $receiver = functionDef.tokenLines;
                      var destination = new Kotlin.ArrayList(Kotlin.kotlin.collections.collectionSizeOrDefault_0($receiver, 10));
                      var tmp$5;
                      tmp$5 = $receiver.iterator();
                      while (tmp$5.hasNext()) {
                        var item = tmp$5.next();
                        var tmp$7 = destination.add_za3rmp$.bind(destination);
                        var $receiver_0;
                        var currentVariableName;
                        var lastToken = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(item.postfixNotationStack);
                        var resultOperand_1 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.processPostfixNotationStack_ubooyd$(item.postfixNotationStack, methodScope, functions);
                        if (resultOperand_1 != null && Kotlin.isType(lastToken, _.hu.nevermind.notecalc.Token.Operator) && Kotlin.equals(lastToken.operator, '=')) {
                          var $receiver_1 = item.line;
                          takeWhile_ggikb8$break: {
                            var tmp$8;
                            tmp$8 = $receiver_1.length - 1;
                            for (var index = 0; index <= tmp$8; index++) {
                              if (!($receiver_1.charAt(index) !== '=')) {
                                $receiver_0 = $receiver_1.substring(0, index);
                                break takeWhile_ggikb8$break;
                              }
                            }
                            $receiver_0 = $receiver_1;
                          }
                          currentVariableName = Kotlin.kotlin.text.trim_gw00vq$($receiver_0).toString();
                        }
                         else
                          currentVariableName = null;
                        if (currentVariableName != null && resultOperand_1 != null) {
                          methodScope.put_wn2jw4$(currentVariableName, resultOperand_1);
                        }
                        tmp$7(resultOperand_1);
                      }
                      var resultOperand = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(destination);
                      if (resultOperand != null) {
                        tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, functionDef.argumentNames.size + 1), resultOperand);
                      }
                       else {
                        tmp$3 = Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, functionDef.argumentNames.size + 1);
                      }
                    }
                     else {
                      tmp$3 = Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1);
                    }
                  }
                   else {
                    if (!quantitativeStack.isEmpty() && Kotlin.equals(incomingToken.operator, '%')) {
                      var topOfStack_1 = Kotlin.kotlin.collections.last_a7ptmv$(quantitativeStack);
                      if (Kotlin.isType(topOfStack_1, _.hu.nevermind.notecalc.Operand.Number)) {
                        var num = topOfStack_1.num;
                        tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1), new _.hu.nevermind.notecalc.Operand.Percentage(num, topOfStack_1.type));
                      }
                       else {
                        tmp$3 = Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1);
                      }
                    }
                     else if (quantitativeStack.size >= 2) {
                      var lastTwo = Kotlin.kotlin.collections.takeLast_3iu80n$(quantitativeStack, 2);
                      var lhs = lastTwo.get_za3lpa$(0);
                      var rhs = lastTwo.get_za3lpa$(1);
                      try {
                        tmp$1 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.applyOperation_0(incomingToken.operator, lhs, rhs);
                      }
                       catch (e) {
                        console.error(e);
                        tmp$1 = null;
                      }
                      var resultOperand_0 = tmp$1;
                      if (resultOperand_0 != null) {
                        tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 2), resultOperand_0);
                      }
                       else {
                        tmp$3 = quantitativeStack;
                      }
                    }
                     else {
                      if (!quantitativeStack.isEmpty() && Kotlin.equals(incomingToken.operator, 'in')) {
                        var theQuantityThatWillBeConverted = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(quantitativeStack);
                        if (lastUnit_0 != null && Kotlin.isType(theQuantityThatWillBeConverted, _.hu.nevermind.notecalc.Operand.Quantity)) {
                          try {
                            tmp$2 = theQuantityThatWillBeConverted.quantity.to(lastUnit_0);
                          }
                           catch (e_0) {
                            tmp$2 = null;
                          }
                          var convertedQuantity = tmp$2;
                          if (convertedQuantity != null) {
                            tmp$3 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(quantitativeStack, 1), new _.hu.nevermind.notecalc.Operand.Quantity(convertedQuantity, theQuantityThatWillBeConverted.type));
                          }
                           else {
                            tmp$3 = quantitativeStack;
                          }
                        }
                         else {
                          tmp$3 = quantitativeStack;
                        }
                      }
                       else {
                        tmp$3 = quantitativeStack;
                      }
                    }
                  }
                 else if (Kotlin.isType(incomingToken, _.hu.nevermind.notecalc.Token.StringLiteral))
                  tmp$3 = quantitativeStack;
                var modifiedQuantitativeStack = tmp$3;
                return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.processPostfixNotationStackRec_7sgwk0$(modifiedQuantitativeStack, Kotlin.kotlin.collections.drop_cwv5p1$(tokens, 1), lastUnit_0, variables, functions);
              },
              processPostfixNotationStack_ubooyd$: function (tokens, variables, functions) {
                var quantitativeStack = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.processPostfixNotationStackRec_7sgwk0$(Kotlin.kotlin.collections.emptyList(), tokens, null, variables, functions);
                return Kotlin.kotlin.collections.lastOrNull_a7ptmv$(quantitativeStack);
              },
              applyOperation_0: function (operator, lhs, rhs) {
                try {
                  if (Kotlin.equals(operator, '*')) {
                    if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Number)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.multiplyNumbers_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return new _.hu.nevermind.notecalc.Operand.Quantity(math.eval(lhs.num + ' * ' + rhs.quantity), _.hu.nevermind.notecalc.NumberType.Float);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage)) {
                        var xPercentOfLeftHandSide = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
                        return new _.hu.nevermind.notecalc.Operand.Number(xPercentOfLeftHandSide, lhs.type);
                      }
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Quantity)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.multiplyQuantities_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Percentage))
                      return null;
                  }
                   else if (Kotlin.equals(operator, '/')) {
                    if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Number)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.divideNumbers_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return new _.hu.nevermind.notecalc.Operand.Quantity(math.eval(lhs.num + ' / ' + rhs.quantity), _.hu.nevermind.notecalc.NumberType.Float);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage)) {
                        var x = Kotlin.numberToDouble(lhs.num) / Kotlin.numberToDouble(rhs.num) * 100;
                        return new _.hu.nevermind.notecalc.Operand.Number(x, lhs.type);
                      }
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Quantity)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.divideQuantities_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Percentage))
                      return null;
                  }
                   else if (Kotlin.equals(operator, '+')) {
                    if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Number)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.addNumbers_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage)) {
                        var xPercentOfLeftHandSide_0 = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
                        return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) + xPercentOfLeftHandSide_0, lhs.type);
                      }
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Quantity)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.addQuantities_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Percentage))
                      return null;
                  }
                   else if (Kotlin.equals(operator, '-')) {
                    if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Number)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.subtractNumbers_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage)) {
                        var xPercentOfLeftHandSide_1 = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
                        return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) - xPercentOfLeftHandSide_1, lhs.type);
                      }
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Quantity)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.subtractQuantities_0(lhs, rhs);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Percentage))
                      return null;
                  }
                   else if (Kotlin.equals(operator, '^')) {
                    if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Number)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return new _.hu.nevermind.notecalc.Operand.Number(Math.pow(Kotlin.numberToDouble(lhs.num), Kotlin.numberToDouble(rhs.num)), lhs.type);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Quantity)) {
                      if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Quantity))
                        return null;
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Number))
                        return new _.hu.nevermind.notecalc.Operand.Quantity(_.hu.nevermind.notecalc.pow_16iefo$(lhs.quantity, Kotlin.numberToDouble(rhs.num)), lhs.type);
                      else if (Kotlin.isType(rhs, _.hu.nevermind.notecalc.Operand.Percentage))
                        return null;
                    }
                     else if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Operand.Percentage))
                      return null;
                  }
                   else
                    return null;
                }
                 catch (e) {
                  console.error(lhs.asString() + operator + rhs.asString());
                  console.error(e);
                  return null;
                }
              },
              multiplyQuantities_0: function (lhs, rhs) {
                var tmp$1, tmp$2;
                var result = _.hu.nevermind.notecalc.multiply_16iefo$(lhs.quantity, rhs.quantity);
                if (Kotlin.equals(typeof result, 'number'))
                  tmp$2 = new _.hu.nevermind.notecalc.Operand.Number(Kotlin.isNumber(tmp$1 = result) ? tmp$1 : Kotlin.throwCCE(), lhs.type);
                else {
                  tmp$2 = new _.hu.nevermind.notecalc.Operand.Quantity(result, lhs.type);
                }
                return tmp$2;
              },
              multiplyNumbers_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) * Kotlin.numberToDouble(rhs.num), lhs.type);
              },
              addNumbers_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) + Kotlin.numberToDouble(rhs.num), lhs.type);
              },
              subtractNumbers_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) - Kotlin.numberToDouble(rhs.num), lhs.type);
              },
              divideQuantities_0: function (lhs, rhs) {
                var tmp$1, tmp$2;
                var result = _.hu.nevermind.notecalc.divide_16iefo$(lhs.quantity, rhs.quantity);
                if (Kotlin.equals(typeof result, 'number'))
                  tmp$2 = new _.hu.nevermind.notecalc.Operand.Number(Kotlin.isNumber(tmp$1 = result) ? tmp$1 : Kotlin.throwCCE(), lhs.type);
                else {
                  tmp$2 = new _.hu.nevermind.notecalc.Operand.Quantity(result, lhs.type);
                }
                return tmp$2;
              },
              addQuantities_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Quantity(_.hu.nevermind.notecalc.add_16iefo$(lhs.quantity, rhs.quantity), lhs.type);
              },
              subtractQuantities_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Quantity(_.hu.nevermind.notecalc.subtract_16iefo$(lhs.quantity, rhs.quantity), lhs.type);
              },
              divideNumbers_0: function (lhs, rhs) {
                return new _.hu.nevermind.notecalc.Operand.Number(Kotlin.numberToDouble(lhs.num) / Kotlin.numberToDouble(rhs.num), lhs.type);
              },
              addUnitToTheTopOfStackEntry_0: function (targetNumber, token) {
                var number = targetNumber.num;
                var newQuantityWithUnit = math.unit(number + ' ' + token.unitName);
                return new _.hu.nevermind.notecalc.Operand.Quantity(newQuantityWithUnit, targetNumber.type);
              },
              getUnitnameAfterOperation_0: function (lhsUnitname, rhsUnitname, func) {
                var lhs = math.unit('1 ' + lhsUnitname);
                var rhs = math.unit('1 ' + rhsUnitname);
                var unitnameAfterOperation = Kotlin.kotlin.text.drop_n7iutu$(func(lhs, rhs).toString(), '1 '.length);
                return unitnameAfterOperation;
              },
              applyOrPutOperatorOnTheStack_0: function (operator, stack) {
                var tmp$0, tmp$1, tmp$2;
                if (stack.size < 2) {
                  tmp$2 = Kotlin.kotlin.collections.plus_ukps2u$(stack, operator);
                }
                 else {
                  var lastTwo = Kotlin.kotlin.collections.takeLast_3iu80n$(stack, 2);
                  var lhs = lastTwo.get_za3lpa$(0);
                  var rhs = lastTwo.get_za3lpa$(1);
                  var newTokenFromApplying = (tmp$1 = (tmp$0 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0.get_za3rmp$(operator.operator)) != null ? tmp$0.func : null) != null ? tmp$1(lhs, rhs) : null;
                  if (newTokenFromApplying != null) {
                    tmp$2 = Kotlin.kotlin.collections.plus_ukps2u$(Kotlin.kotlin.collections.dropLast_3iu80n$(stack, 2), newTokenFromApplying);
                  }
                   else {
                    tmp$2 = Kotlin.kotlin.collections.plus_ukps2u$(stack, operator);
                  }
                }
                return tmp$2;
              },
              shuntingYard_0: function (inputTokens, functionNames) {
                var output = Kotlin.kotlin.collections.emptyList();
                var operatorStack = Kotlin.kotlin.collections.emptyList();
                var tmp$0 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardRec_0(inputTokens, operatorStack, output, functionNames)
                , newOperatorStack = tmp$0.component1()
                , newOutput = tmp$0.component2();
                var tmp$1;
                var accumulator = newOutput;
                tmp$1 = Kotlin.kotlin.collections.asReversed_a7ptmv$(newOperatorStack).iterator();
                while (tmp$1.hasNext()) {
                  var element = tmp$1.next();
                  accumulator = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.applyOrPutOperatorOnTheStack_0(element, accumulator);
                }
                return accumulator;
              },
              shuntingYardRec_0: function (inputTokens, operatorStack, output, functionNames) {
                var tmp$2;
                if (inputTokens.isEmpty()) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, output);
                }
                 else {
                  var inputToken = Kotlin.kotlin.collections.first_a7ptmv$(inputTokens);
                  if (Kotlin.isType(inputToken, _.hu.nevermind.notecalc.Token.Operator))
                    if (Kotlin.equals(inputToken.operator, '(')) {
                      tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(Kotlin.kotlin.collections.plus_ukps2u$(operatorStack, inputToken), output);
                    }
                     else if (Kotlin.equals(inputToken.operator, ')')) {
                      var modifiedStacksAfterBracketRule = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.popAnythingUntilOpeningBracket_0(operatorStack, output);
                      tmp$2 = modifiedStacksAfterBracketRule;
                    }
                     else {
                      var tmp$1 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardOperatorRule_0(operatorStack, output, inputToken.operator)
                      , newOperatorStack = tmp$1.component1()
                      , newOutput = tmp$1.component2();
                      tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(Kotlin.kotlin.collections.plus_ukps2u$(newOperatorStack, inputToken), newOutput);
                    }
                   else if (Kotlin.isType(inputToken, _.hu.nevermind.notecalc.Token.NumberLiteral))
                    tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, Kotlin.kotlin.collections.plus_ukps2u$(output, inputToken));
                  else if (Kotlin.isType(inputToken, _.hu.nevermind.notecalc.Token.StringLiteral))
                    if (Kotlin.kotlin.collections.contains_cwuzrm$(functionNames, inputToken.str)) {
                      tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(Kotlin.kotlin.collections.plus_ukps2u$(operatorStack, new _.hu.nevermind.notecalc.Token.Operator('fun ' + inputToken.str)), Kotlin.kotlin.collections.plus_ukps2u$(output, inputToken));
                    }
                     else if (Kotlin.equals(inputToken.str, ',')) {
                      tmp$2 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardOperatorRule_0(operatorStack, output, ',');
                    }
                     else {
                      tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, Kotlin.kotlin.collections.plus_ukps2u$(output, inputToken));
                    }
                   else if (Kotlin.isType(inputToken, _.hu.nevermind.notecalc.Token.UnitOfMeasure)) {
                    _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardOperatorRule_0(operatorStack, output, 'unit');
                    tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, Kotlin.kotlin.collections.plus_ukps2u$(output, inputToken));
                  }
                   else if (Kotlin.isType(inputToken, _.hu.nevermind.notecalc.Token.Variable))
                    tmp$2 = new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, Kotlin.kotlin.collections.plus_ukps2u$(output, inputToken));
                  var tmp$3 = tmp$2
                  , newOperatorStack_0 = tmp$3.component1()
                  , newOutput_0 = tmp$3.component2();
                  return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardRec_0(Kotlin.kotlin.collections.drop_cwv5p1$(inputTokens, 1), newOperatorStack_0, newOutput_0, functionNames);
                }
              },
              popAnythingUntilOpeningBracket_0: function (operatorStack, output) {
                if (operatorStack.isEmpty()) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, output);
                }
                 else {
                  var topOfOpStack = Kotlin.kotlin.collections.last_a7ptmv$(operatorStack);
                  var newOperatorStack = Kotlin.kotlin.collections.dropLast_3iu80n$(operatorStack, 1);
                  if (Kotlin.equals(topOfOpStack.operator, '(')) {
                    return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(newOperatorStack, output);
                  }
                  var newOutput = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.applyOrPutOperatorOnTheStack_0(topOfOpStack, output);
                  return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.popAnythingUntilOpeningBracket_0(newOperatorStack, newOutput);
                }
              },
              shuntingYardOperatorRule_0: function (operatorStack, output, incomingOperatorName) {
                var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5;
                if (operatorStack.isEmpty()) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, output);
                }
                var topOfOpStack = Kotlin.kotlin.collections.last_a7ptmv$(operatorStack);
                if (Kotlin.kotlin.text.contains_kzp0od$('()', topOfOpStack.operator)) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, output);
                }
                var incomingOpPrecedence = (tmp$1 = (tmp$0 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0.get_za3rmp$(incomingOperatorName)) != null ? tmp$0.precedence : null) != null ? tmp$1 : 0;
                var topOfStackPrecedence = (tmp$3 = (tmp$2 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0.get_za3rmp$(topOfOpStack.operator)) != null ? tmp$2.precedence : null) != null ? tmp$3 : 0;
                var assoc = (tmp$5 = (tmp$4 = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.operatorInfosForUnits_0.get_za3rmp$(incomingOperatorName)) != null ? tmp$4.associativity : null) != null ? tmp$5 : 'left';
                var incomingPrecLeftAssocAndEqual = Kotlin.equals(assoc, 'left') && incomingOpPrecedence === topOfStackPrecedence;
                if (incomingOpPrecedence < topOfStackPrecedence || incomingPrecLeftAssocAndEqual) {
                  var last = Kotlin.kotlin.collections.last_a7ptmv$(operatorStack);
                  return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.shuntingYardOperatorRule_0(Kotlin.kotlin.collections.dropLast_3iu80n$(operatorStack, 1), _.hu.nevermind.notecalc.NoteCalcEditor.Companion.applyOrPutOperatorOnTheStack_0(last, output), incomingOperatorName);
                }
                 else {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack, output);
                }
              },
              mergeCompoundUnitsAndUnaryMinusOperators_0: function (tokens) {
                var restTokens = tokens;
                var output = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
                var prevToken = new _.hu.nevermind.notecalc.Token.StringLiteral('');
                var codeSmell = false;
                while (!restTokens.isEmpty()) {
                  var token = Kotlin.kotlin.collections.first_a7ptmv$(restTokens);
                  if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.NumberLiteral)) {
                    output.add_za3rmp$(token);
                    restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, 1);
                  }
                   else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.Variable)) {
                    output.add_za3rmp$(token);
                    restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, 1);
                  }
                   else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.StringLiteral)) {
                    output.add_za3rmp$(token);
                    restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, 1);
                  }
                   else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.Operator)) {
                    output.add_za3rmp$(token);
                    restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, 1);
                  }
                   else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.UnitOfMeasure)) {
                    if (Kotlin.isType(prevToken, _.hu.nevermind.notecalc.Token.Operator) || Kotlin.isType(prevToken, _.hu.nevermind.notecalc.Token.StringLiteral) || Kotlin.isType(prevToken, _.hu.nevermind.notecalc.Token.NumberLiteral) || Kotlin.isType(prevToken, _.hu.nevermind.notecalc.Token.Variable)) {
                      var compundUnitResult = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.parseCompundUnit_0(restTokens);
                      if (compundUnitResult != null) {
                        var tokenCountInThisUnit = compundUnitResult.tokens.size;
                        restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, tokenCountInThisUnit);
                        output.add_za3rmp$(compundUnitResult);
                        codeSmell = true;
                      }
                    }
                    if (codeSmell) {
                      restTokens = restTokens;
                    }
                     else {
                      output.add_za3rmp$(token);
                      restTokens = Kotlin.kotlin.collections.drop_cwv5p1$(restTokens, 1);
                    }
                  }
                  prevToken = token;
                  codeSmell = false;
                }
                return output;
              },
              createHighlightingNamesForTokens_0: function (tokens) {
                var highlightInfosForTokens = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
                var tmp$0;
                tmp$0 = tokens.iterator();
                while (tmp$0.hasNext()) {
                  var element = tmp$0.next();
                  if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.NumberLiteral)) {
                    var strRepr = element.originalStringRepresentation.length === 0 ? element.num.toString() : element.originalStringRepresentation;
                    highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(strRepr, 'number'));
                  }
                   else if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.Variable))
                    highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(element.variableName, 'variable'));
                  else if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.StringLiteral))
                    highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(element.str, 'comment'));
                  else if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.Operator))
                    highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(element.operator, 'operator'));
                  else if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.UnitOfMeasure))
                    highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(element.unitName, 'qualifier'));
                  else if (Kotlin.isType(element, _.hu.nevermind.notecalc.Token.CompoundUnit)) {
                    var tmp$1;
                    tmp$1 = element.tokens.iterator();
                    while (tmp$1.hasNext()) {
                      var element_0 = tmp$1.next();
                      highlightInfosForTokens.add_za3rmp$(new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(_.hu.nevermind.notecalc.NoteCalcEditor.Companion.getStringRepresentation_0(element_0), 'qualifier'));
                    }
                  }
                }
                return highlightInfosForTokens;
              },
              getStringRepresentation_0: function (token) {
                var text_0;
                if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.UnitOfMeasure))
                  text_0 = token.unitName;
                else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.NumberLiteral)) {
                  text_0 = token.originalStringRepresentation.length === 0 ? token.num.toString() : token.originalStringRepresentation;
                }
                 else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.Operator))
                  text_0 = token.operator;
                else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.StringLiteral))
                  text_0 = token.str;
                else if (Kotlin.isType(token, _.hu.nevermind.notecalc.Token.Variable))
                  text_0 = token.variableName;
                return text_0;
              },
              parseCompundUnit_0: function (tokens) {
                if (tokens.size <= 1) {
                  return null;
                }
                var prevToken = {v: new _.hu.nevermind.notecalc.Token.StringLiteral('')};
                var tmp$0;
                var list = new Kotlin.ArrayList();
                tmp$0 = tokens.iterator();
                while (tmp$0.hasNext()) {
                  var item = tmp$0.next();
                  var tmp$1, tmp$2;
                  if (Kotlin.isType(item, _.hu.nevermind.notecalc.Token.Operator))
                    tmp$2 = Kotlin.kotlin.collections.contains_ke19y6$(['*', '/', '^', '(', ')'], item.operator);
                  else if (Kotlin.isType(item, _.hu.nevermind.notecalc.Token.NumberLiteral))
                    tmp$2 = (Kotlin.isType(prevToken.v, _.hu.nevermind.notecalc.Token.Operator) && Kotlin.equals((Kotlin.isType(tmp$1 = prevToken.v, _.hu.nevermind.notecalc.Token.Operator) ? tmp$1 : Kotlin.throwCCE()).operator, '^'));
                  else if (Kotlin.isType(item, _.hu.nevermind.notecalc.Token.UnitOfMeasure))
                    tmp$2 = true;
                  else
                    tmp$2 = false;
                  var result = tmp$2;
                  prevToken.v = item;
                  if (!result) {
                    break;
                  }
                  list.add_za3rmp$(item);
                }
                var tokensThatTogetherMayFormACompundUnit = list;
                if (!tokensThatTogetherMayFormACompundUnit.isEmpty()) {
                  var maybeCompoundUnit = _.hu.nevermind.notecalc.NoteCalcEditor.Companion.tryFindCorrectCompoundUnit_0(tokensThatTogetherMayFormACompundUnit);
                  return maybeCompoundUnit;
                }
                return null;
              },
              tryFindCorrectCompoundUnit_0: function (tokenGroup) {
                var expressionString = Kotlin.kotlin.collections.joinToString_ld60a2$(tokenGroup, '', void 0, void 0, void 0, void 0, Kotlin.getCallableRefForMemberFunction(_.hu.nevermind.notecalc.Token, 'asString'));
                try {
                  var compundUnit = math.unit('1 ' + expressionString);
                  var compundUnitname = Kotlin.kotlin.text.replace_dn5w6f$(Kotlin.kotlin.text.drop_n7iutu$(compundUnit.toString(), '1 '.length), ' ', '');
                  if (!Kotlin.equals(compundUnitname, expressionString)) {
                    return null;
                  }
                  return new _.hu.nevermind.notecalc.Token.CompoundUnit(compundUnitname, tokenGroup);
                }
                 catch (e) {
                  return _.hu.nevermind.notecalc.NoteCalcEditor.Companion.tryFindCorrectCompoundUnit_0(Kotlin.kotlin.collections.dropLast_3iu80n$(tokenGroup, 1));
                }
              },
              assertTokenListEq_0: function (actualTokens, expectedTokens) {
                QUnit.test('', _.hu.nevermind.notecalc.NoteCalcEditor.Companion.assertTokenListEq_0$f(actualTokens, expectedTokens));
              },
              parse_0: function (text_0, variableNames, functionNames) {
                var tmp$0, tmp$1;
                if (variableNames === void 0)
                  variableNames = Kotlin.kotlin.collections.emptyList();
                if (functionNames === void 0)
                  functionNames = Kotlin.kotlin.collections.emptyList();
                var tokens = Kotlin.kotlin.collections.arrayListOf_9mqe4v$([]);
                var str = {v: Kotlin.kotlin.text.trim_gw00vq$(text_0).toString()};
                while (str.v.length > 0) {
                  var originalLength = str.v.length;
                  var tokenAndRest = _.hu.nevermind.notecalc.tryExtractToken_87btbk$(str.v, [_.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0$f(variableNames), _.hu.nevermind.notecalc.NoteCalcEditor.Companion.parse_0$f_0(functionNames), _.hu.nevermind.notecalc.tryExtractOperator_0, _.hu.nevermind.notecalc.tryExtractNumberLiteral_61zpoe$, _.hu.nevermind.notecalc.tryExtractUnit_0, _.hu.nevermind.notecalc.tryExtractStringLiteral_0]);
                  if (tokenAndRest != null) {
                    var $receiver_1 = tokenAndRest.second;
                    str.v = Kotlin.kotlin.text.trim_gw00vq$($receiver_1).toString();
                  }
                   else {
                    break;
                  }
                  var token = tokenAndRest.first;
                  var prevToken = Kotlin.kotlin.collections.lastOrNull_a7ptmv$(tokens);
                  if (Kotlin.isType(prevToken, _.hu.nevermind.notecalc.Token.NumberLiteral) && Kotlin.isType(token, _.hu.nevermind.notecalc.Token.StringLiteral) && token.str.length === 1 && Kotlin.kotlin.text.contains_cjsvxq$('kM', Kotlin.kotlin.text.first_gw00vq$(token.str))) {
                    tmp$0 = token.str;
                    if (Kotlin.equals(tmp$0, 'k'))
                      tmp$1 = Kotlin.numberToDouble(prevToken.num) * 1000;
                    else if (Kotlin.equals(tmp$0, 'M'))
                      tmp$1 = Kotlin.numberToDouble(prevToken.num) * 1000000;
                    else {
                      var message = "can't happen";
                      throw new Kotlin.IllegalStateException(message.toString());
                    }
                    var newNumber = tmp$1;
                    var newStringRepresentation = prevToken.originalStringRepresentation + token.str;
                    tokens.removeAt_za3lpa$(Kotlin.kotlin.collections.get_lastIndex_a7ptmv$(tokens));
                    tokens.add_za3rmp$(new _.hu.nevermind.notecalc.Token.NumberLiteral(newNumber, newStringRepresentation, prevToken.type));
                  }
                   else {
                    tokens.add_za3rmp$(token);
                  }
                  if (!(str.v.length < originalLength)) {
                    var message_0 = str.v + ': The length of the processing string must be shorter at the end of the block! ' + originalLength;
                    throw new Kotlin.IllegalArgumentException(message_0.toString());
                  }
                }
                return tokens;
              }
            }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion */ {
              assertEq_puj7f4$f: function (closure$actualInput, this$NoteCalcEditor$, closure$expectedValue) {
                return function (assert) {
                  var tmp$0, tmp$1;
                  var actual = Kotlin.isType(tmp$1 = (tmp$0 = this$NoteCalcEditor$.processPostfixNotationStack_ubooyd$(this$NoteCalcEditor$.shuntingYard_0(this$NoteCalcEditor$.mergeCompoundUnitsAndUnaryMinusOperators_0(this$NoteCalcEditor$.parse_0(closure$actualInput)), Kotlin.kotlin.collections.emptyList()), Kotlin.kotlin.collections.emptyMap(), Kotlin.kotlin.collections.emptyMap())) != null ? tmp$0 : Kotlin.throwNPE(), _.hu.nevermind.notecalc.Operand.Quantity) ? tmp$1 : Kotlin.throwCCE();
                  assert.ok(math.unit(closure$expectedValue).equals(actual.quantity), closure$expectedValue + ' != ' + actual);
                };
              },
              assertEq_xfy9o8$f: function (closure$actualInput, this$NoteCalcEditor$, closure$expectedValue) {
                return function (assert) {
                  var tmp$0, tmp$1;
                  var actual = Kotlin.isType(tmp$1 = (tmp$0 = this$NoteCalcEditor$.processPostfixNotationStack_ubooyd$(this$NoteCalcEditor$.shuntingYard_0(this$NoteCalcEditor$.mergeCompoundUnitsAndUnaryMinusOperators_0(this$NoteCalcEditor$.parse_0(closure$actualInput)), Kotlin.kotlin.collections.emptyList()), Kotlin.kotlin.collections.emptyMap(), Kotlin.kotlin.collections.emptyMap())) != null ? tmp$0 : Kotlin.throwNPE(), _.hu.nevermind.notecalc.Operand.Number) ? tmp$1 : Kotlin.throwCCE();
                  assert.ok(Kotlin.equals(closure$expectedValue, actual.num), closure$expectedValue + ' != ' + actual);
                };
              },
              OperatorInfo: Kotlin.createClass(null, function OperatorInfo(precedence, associativity, func) {
                this.precedence = precedence;
                this.associativity = associativity;
                this.func = func;
              }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo.prototype */ {
                component1: function () {
                  return this.precedence;
                },
                component2: function () {
                  return this.associativity;
                },
                component3: function () {
                  return this.func;
                },
                copy_w0zeag$: function (precedence, associativity, func) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.OperatorInfo(precedence === void 0 ? this.precedence : precedence, associativity === void 0 ? this.associativity : associativity, func === void 0 ? this.func : func);
                },
                toString: function () {
                  return 'OperatorInfo(precedence=' + Kotlin.toString(this.precedence) + (', associativity=' + Kotlin.toString(this.associativity)) + (', func=' + Kotlin.toString(this.func)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.precedence) | 0;
                  result = result * 31 + Kotlin.hashCode(this.associativity) | 0;
                  result = result * 31 + Kotlin.hashCode(this.func) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.precedence, other.precedence) && Kotlin.equals(this.associativity, other.associativity) && Kotlin.equals(this.func, other.func)))));
                }
              }),
              ShuntingYardStacks: Kotlin.createClass(null, function ShuntingYardStacks(operatorStack, output) {
                this.operatorStack = operatorStack;
                this.output = output;
              }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks.prototype */ {
                component1: function () {
                  return this.operatorStack;
                },
                component2: function () {
                  return this.output;
                },
                copy_gcfwhk$: function (operatorStack, output) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.ShuntingYardStacks(operatorStack === void 0 ? this.operatorStack : operatorStack, output === void 0 ? this.output : output);
                },
                toString: function () {
                  return 'ShuntingYardStacks(operatorStack=' + Kotlin.toString(this.operatorStack) + (', output=' + Kotlin.toString(this.output)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.operatorStack) | 0;
                  result = result * 31 + Kotlin.hashCode(this.output) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.operatorStack, other.operatorStack) && Kotlin.equals(this.output, other.output)))));
                }
              }),
              HighlightedText: Kotlin.createClass(null, function HighlightedText(text_0, cssClassName) {
                this.text = text_0;
                this.cssClassName = cssClassName;
              }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText.prototype */ {
                component1: function () {
                  return this.text;
                },
                component2: function () {
                  return this.cssClassName;
                },
                copy_puj7f4$: function (text_0, cssClassName) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.HighlightedText(text_0 === void 0 ? this.text : text_0, cssClassName === void 0 ? this.cssClassName : cssClassName);
                },
                toString: function () {
                  return 'HighlightedText(text=' + Kotlin.toString(this.text) + (', cssClassName=' + Kotlin.toString(this.cssClassName)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.text) | 0;
                  result = result * 31 + Kotlin.hashCode(this.cssClassName) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.cssClassName, other.cssClassName)))));
                }
              }),
              assertTokenListEq_0$f: function (closure$actualTokens, closure$expectedTokens) {
                return function (assert) {
                  assert.equal(closure$actualTokens.size, closure$expectedTokens.length);
                  var tmp$0;
                  tmp$0 = Kotlin.kotlin.collections.zip_k1u664$(closure$expectedTokens, closure$actualTokens).iterator();
                  while (tmp$0.hasNext()) {
                    var element = tmp$0.next();
                    var tmp$1 = element
                    , expected = tmp$1.component1()
                    , actual = tmp$1.component2();
                    assert.ok(Kotlin.equals(expected, actual), 'expected: ' + expected + ' but was: ' + actual);
                  }
                };
              },
              LineAndTokens: Kotlin.createClass(null, function LineAndTokens(line, postfixNotationStack) {
                this.line = line;
                this.postfixNotationStack = postfixNotationStack;
              }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.LineAndTokens.prototype */ {
                component1: function () {
                  return this.line;
                },
                component2: function () {
                  return this.postfixNotationStack;
                },
                copy_ver6v3$: function (line, postfixNotationStack) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.LineAndTokens(line === void 0 ? this.line : line, postfixNotationStack === void 0 ? this.postfixNotationStack : postfixNotationStack);
                },
                toString: function () {
                  return 'LineAndTokens(line=' + Kotlin.toString(this.line) + (', postfixNotationStack=' + Kotlin.toString(this.postfixNotationStack)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.line) | 0;
                  result = result * 31 + Kotlin.hashCode(this.postfixNotationStack) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.line, other.line) && Kotlin.equals(this.postfixNotationStack, other.postfixNotationStack)))));
                }
              }),
              FunctionDefinition: Kotlin.createClass(null, function FunctionDefinition(name, argumentNames, tokenLines) {
                this.name = name;
                this.argumentNames = argumentNames;
                this.tokenLines = tokenLines;
              }, /** @lends _.hu.nevermind.notecalc.NoteCalcEditor.Companion.FunctionDefinition.prototype */ {
                component1: function () {
                  return this.name;
                },
                component2: function () {
                  return this.argumentNames;
                },
                component3: function () {
                  return this.tokenLines;
                },
                copy_irqjux$: function (name, argumentNames, tokenLines) {
                  return new _.hu.nevermind.notecalc.NoteCalcEditor.Companion.FunctionDefinition(name === void 0 ? this.name : name, argumentNames === void 0 ? this.argumentNames : argumentNames, tokenLines === void 0 ? this.tokenLines : tokenLines);
                },
                toString: function () {
                  return 'FunctionDefinition(name=' + Kotlin.toString(this.name) + (', argumentNames=' + Kotlin.toString(this.argumentNames)) + (', tokenLines=' + Kotlin.toString(this.tokenLines)) + ')';
                },
                hashCode: function () {
                  var result = 0;
                  result = result * 31 + Kotlin.hashCode(this.name) | 0;
                  result = result * 31 + Kotlin.hashCode(this.argumentNames) | 0;
                  result = result * 31 + Kotlin.hashCode(this.tokenLines) | 0;
                  return result;
                },
                equals_za3rmp$: function (other) {
                  return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.argumentNames, other.argumentNames) && Kotlin.equals(this.tokenLines, other.tokenLines)))));
                }
              }),
              parse_0$f: function (closure$variableNames) {
                return function (str) {
                  return _.hu.nevermind.notecalc.tryParseVariableName_0(str, closure$variableNames);
                };
              },
              parse_0$f_0: function (closure$functionNames) {
                return function (str) {
                  return _.hu.nevermind.notecalc.tryParseFunctionInvocation_0(str, closure$functionNames);
                };
              },
              tokenizer_0$f: function (tokenStyles, stream, state) {
                var ok;
                var index = state.index;
                var tokenToHighlight = Kotlin.kotlin.collections.getOrNull_3iu80n$(tokenStyles, index);
                if (tokenToHighlight == null) {
                  return stream.skipToEnd();
                }
                 else {
                  if (stream.peek() == ' ' || stream.peek() == '\t') {
                    stream.eatSpace();
                    return 'space';
                  }
                   else {
                    var words = Kotlin.kotlin.text.split_l2gz7$(tokenToHighlight.text, ['\\s']);
                    all_udlcbx$break: {
                      var tmp$0;
                      tmp$0 = words.iterator();
                      while (tmp$0.hasNext()) {
                        var element = tmp$0.next();
                        stream.eatSpace();
                        if (!stream.match(element, true)) {
                          ok = false;
                          break all_udlcbx$break;
                        }
                      }
                      ok = true;
                    }
                    if (ok) {
                      state.index = index + 1;
                      return tokenToHighlight.cssClassName;
                    }
                     else {
                      stream.skipToEnd();
                      return 'error';
                    }
                  }
                }
              },
              operatorInfosForUnits_0$f: function (lhs, rhs) {
                return null;
              },
              operatorInfosForUnits_0$f_0: function (lhs, rhs) {
                if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Token.UnitOfMeasure) && Kotlin.isType(rhs, _.hu.nevermind.notecalc.Token.NumberLiteral)) {
                  var num = rhs.num;
                  var poweredUnit = _.hu.nevermind.notecalc.pow_16iefo$(math.unit('1 ' + lhs.unitName), num);
                  var poweredUnitname = Kotlin.kotlin.text.drop_n7iutu$(poweredUnit.toString(), '1 '.length);
                  return new _.hu.nevermind.notecalc.Token.UnitOfMeasure(poweredUnitname);
                }
                 else {
                  return null;
                }
              },
              operatorInfosForUnits_0$f_1: function (lhs, rhs) {
                return null;
              },
              operatorInfosForUnits_0$f_2: function (lhs, rhs) {
                return null;
              },
              operatorInfosForUnits_0$f_3: function (lhs, rhs) {
                return null;
              },
              operatorInfosForUnits_0$f_4: function (lhs, rhs) {
                return null;
              },
              operatorInfosForUnits_0$f_5: function (this$NoteCalcEditor$) {
                return function (lhs, rhs) {
                  if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Token.UnitOfMeasure) && Kotlin.isType(rhs, _.hu.nevermind.notecalc.Token.UnitOfMeasure)) {
                    var unitnameAfterOperation = this$NoteCalcEditor$.getUnitnameAfterOperation_0(lhs.unitName, rhs.unitName, Kotlin.getCallableRefForExtensionFunction(_.hu.nevermind.notecalc.multiply_16iefo$));
                    return new _.hu.nevermind.notecalc.Token.UnitOfMeasure(unitnameAfterOperation);
                  }
                   else {
                    return null;
                  }
                };
              },
              operatorInfosForUnits_0$f_6: function (this$NoteCalcEditor$) {
                return function (lhs, rhs) {
                  if (Kotlin.isType(lhs, _.hu.nevermind.notecalc.Token.UnitOfMeasure) && Kotlin.isType(rhs, _.hu.nevermind.notecalc.Token.UnitOfMeasure)) {
                    var unitnameAfterOperation = this$NoteCalcEditor$.getUnitnameAfterOperation_0(lhs.unitName, rhs.unitName, Kotlin.getCallableRefForExtensionFunction(_.hu.nevermind.notecalc.divide_16iefo$));
                    return new _.hu.nevermind.notecalc.Token.UnitOfMeasure(unitnameAfterOperation);
                  }
                   else {
                    return null;
                  }
                };
              },
              Companion$num: function (n) {
                return new _.hu.nevermind.notecalc.Token.NumberLiteral(n, '', _.hu.nevermind.notecalc.NumberType.Int);
              },
              Companion$num_0: function (n) {
                return new _.hu.nevermind.notecalc.Token.NumberLiteral(n, '', _.hu.nevermind.notecalc.NumberType.Float);
              },
              Companion$op: function (n) {
                return new _.hu.nevermind.notecalc.Token.Operator(n);
              },
              Companion$str: function (n) {
                return new _.hu.nevermind.notecalc.Token.StringLiteral(n);
              },
              Companion$unit: function (n) {
                return new _.hu.nevermind.notecalc.Token.UnitOfMeasure(n);
              },
              Companion$compoundUnit: function (n) {
                return new _.hu.nevermind.notecalc.Token.CompoundUnit(n, Kotlin.kotlin.collections.emptyList());
              }
            }),
            object_initializer$: function () {
              _.hu.nevermind.notecalc.NoteCalcEditor.Companion;
            }
          }),
          NumberType: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function NumberType() {
            NumberType.baseInitializer.call(this);
          }, function () {
            return {
              Float: function () {
                return new _.hu.nevermind.notecalc.NumberType();
              },
              Int: function () {
                return new _.hu.nevermind.notecalc.NumberType();
              }
            };
          }),
          Operand: Kotlin.createClass(null, function Operand() {
          }, null, /** @lends _.hu.nevermind.notecalc.Operand */ {
            Percentage: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Operand];
            }, function Percentage(num, type) {
              Percentage.baseInitializer.call(this);
              this.num = num;
              this.type = type;
            }, /** @lends _.hu.nevermind.notecalc.Operand.Percentage.prototype */ {
              asString: function () {
                return this.num.toString();
              },
              toRawNumber: function () {
                return Kotlin.numberToDouble(this.num);
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Operand.Percentage) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.num, other.num))
                  return false;
                if (this.type !== other.type)
                  return false;
                return true;
              },
              hashCode: function () {
                var result = Kotlin.hashCode(this.num);
                result = 31 * result + this.type.hashCode();
                return result;
              }
            }),
            Number: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Operand];
            }, function Number$(num, type) {
              Number$.baseInitializer.call(this);
              this.num = num;
              this.type = type;
            }, /** @lends _.hu.nevermind.notecalc.Operand.Number.prototype */ {
              asString: function () {
                return this.num.toString();
              },
              toRawNumber: function () {
                return Kotlin.numberToDouble(this.num);
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Operand.Number) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.num, other.num))
                  return false;
                if (this.type !== other.type)
                  return false;
                return true;
              },
              hashCode: function () {
                var result = Kotlin.hashCode(this.num);
                result = 31 * result + this.type.hashCode();
                return result;
              }
            }),
            Quantity: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Operand];
            }, function Quantity(quantity, type) {
              Quantity.baseInitializer.call(this);
              this.quantity = quantity;
              this.type = type;
            }, /** @lends _.hu.nevermind.notecalc.Operand.Quantity.prototype */ {
              asString: function () {
                return this.quantity.toString();
              },
              toRawNumber: function () {
                return Kotlin.numberToDouble(this.quantity.toNumber());
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Operand.Quantity) ? tmp$0 : Kotlin.throwCCE();
                if (!this.quantity.equals(other.quantity))
                  return false;
                if (this.type !== other.type)
                  return false;
                return true;
              },
              hashCode: function () {
                var result = Kotlin.hashCode(this.quantity);
                result = 31 * result + this.type.hashCode();
                return result;
              }
            })
          }),
          Token: Kotlin.createClass(null, function Token() {
          }, null, /** @lends _.hu.nevermind.notecalc.Token */ {
            UnitOfMeasure: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token];
            }, function UnitOfMeasure(unitName) {
              UnitOfMeasure.baseInitializer.call(this);
              this.unitName = unitName;
            }, /** @lends _.hu.nevermind.notecalc.Token.UnitOfMeasure.prototype */ {
              asString: function () {
                return this.unitName;
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Token.UnitOfMeasure) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.unitName, other.unitName))
                  return false;
                return true;
              },
              hashCode: function () {
                return Kotlin.hashCode(this.unitName);
              },
              toString: function () {
                return 'Unit(' + this.unitName + ')';
              }
            }),
            CompoundUnit: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token.UnitOfMeasure];
            }, function CompoundUnit(unitName, tokens) {
              CompoundUnit.baseInitializer.call(this, unitName);
              this.tokens = tokens;
            }, /** @lends _.hu.nevermind.notecalc.Token.CompoundUnit.prototype */ {
              toString: function () {
                return 'CompoundUnit(' + this.unitName + ')';
              }
            }),
            StringLiteral: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token];
            }, function StringLiteral(str) {
              StringLiteral.baseInitializer.call(this);
              this.str = str;
            }, /** @lends _.hu.nevermind.notecalc.Token.StringLiteral.prototype */ {
              asString: function () {
                return this.str;
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Token.StringLiteral) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.str, other.str))
                  return false;
                return true;
              },
              hashCode: function () {
                return Kotlin.hashCode(this.str);
              },
              toString: function () {
                return 'Str(' + this.str + ')';
              }
            }),
            Variable: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token];
            }, function Variable(variableName) {
              Variable.baseInitializer.call(this);
              this.variableName = variableName;
            }, /** @lends _.hu.nevermind.notecalc.Token.Variable.prototype */ {
              asString: function () {
                return this.variableName;
              },
              toString: function () {
                return 'Var(' + this.variableName + ')';
              }
            }),
            NumberLiteral: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token];
            }, function NumberLiteral(num, originalStringRepresentation, type) {
              NumberLiteral.baseInitializer.call(this);
              this.num = num;
              this.originalStringRepresentation = originalStringRepresentation;
              this.type = type;
            }, /** @lends _.hu.nevermind.notecalc.Token.NumberLiteral.prototype */ {
              asString: function () {
                return this.num.toString();
              },
              toString: function () {
                return 'Num(' + this.num + ')';
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Token.NumberLiteral) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.num, other.num))
                  return false;
                if (this.type !== other.type)
                  return false;
                return true;
              },
              hashCode: function () {
                var result = Kotlin.hashCode(this.num);
                result = 31 * result + this.type.hashCode();
                return result;
              }
            }),
            Operator: Kotlin.createClass(function () {
              return [_.hu.nevermind.notecalc.Token];
            }, function Operator(operator) {
              Operator.baseInitializer.call(this);
              this.operator = operator;
            }, /** @lends _.hu.nevermind.notecalc.Token.Operator.prototype */ {
              asString: function () {
                return this.operator;
              },
              toString: function () {
                return 'Op(' + this.operator + ')';
              },
              equals_za3rmp$: function (other) {
                var tmp$0;
                if (this === other)
                  return true;
                if (!Kotlin.equals(other != null ? Kotlin.kotlin.js.get_jsClass_s8jyvl$(other) : null, Kotlin.kotlin.js.get_jsClass_s8jyvl$(this)))
                  return false;
                Kotlin.isType(tmp$0 = other, _.hu.nevermind.notecalc.Token.Operator) ? tmp$0 : Kotlin.throwCCE();
                if (!Kotlin.equals(this.operator, other.operator))
                  return false;
                return true;
              },
              hashCode: function () {
                return Kotlin.hashCode(this.operator);
              }
            })
          }),
          tryExtractToken_87btbk$: function (str, tokenRecognizers) {
            var tmp$2;
            for (tmp$2 = 0; tmp$2 !== tokenRecognizers.length; ++tmp$2) {
              var element = tokenRecognizers[tmp$2];
              var tokenAndRest = element(str);
              if (tokenAndRest != null) {
                return tokenAndRest;
              }
            }
            return null;
          },
          tryExtractNumberLiteral_61zpoe$: function (str) {
            var numStr;
            var numStr_0;
            var numStr_1;
            var tmp$0, tmp$1;
            if (Kotlin.kotlin.text.startsWith_41xvrb$(str, '0b')) {
              var $receiver = Kotlin.kotlin.text.drop_n7iutu$(str, 2);
              takeWhile_ggikb8$break: {
                var tmp$2;
                tmp$2 = $receiver.length - 1;
                for (var index = 0; index <= tmp$2; index++) {
                  if (!Kotlin.kotlin.text.contains_cjsvxq$('01 ', $receiver.charAt(index))) {
                    numStr = $receiver.substring(0, index);
                    break takeWhile_ggikb8$break;
                  }
                }
                numStr = $receiver;
              }
              if (numStr.length === 0) {
                tmp$1 = null;
              }
               else {
                var num = parseInt(Kotlin.kotlin.text.replace_dn5w6f$(numStr, ' ', ''), 2);
                var rest = Kotlin.kotlin.text.drop_n7iutu$(str, 2 + numStr.length);
                tmp$1 = Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.NumberLiteral(num, '0b' + numStr, _.hu.nevermind.notecalc.NumberType.Int), rest);
              }
            }
             else if (Kotlin.kotlin.text.startsWith_41xvrb$(str, '0x')) {
              var $receiver_1 = Kotlin.kotlin.text.drop_n7iutu$(str, 2);
              takeWhile_ggikb8$break_0: {
                var tmp$3;
                tmp$3 = $receiver_1.length - 1;
                for (var index_0 = 0; index_0 <= tmp$3; index_0++) {
                  if (!Kotlin.kotlin.text.contains_cjsvxq$(' 0123456789abcdefABCDEF', $receiver_1.charAt(index_0))) {
                    numStr_0 = $receiver_1.substring(0, index_0);
                    break takeWhile_ggikb8$break_0;
                  }
                }
                numStr_0 = $receiver_1;
              }
              if (numStr_0.length === 0) {
                tmp$1 = null;
              }
               else {
                var num_0 = parseInt(Kotlin.kotlin.text.replace_dn5w6f$(numStr_0, ' ', ''), 16);
                var rest_0 = Kotlin.kotlin.text.drop_n7iutu$(str, 2 + numStr_0.length);
                tmp$1 = Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.NumberLiteral(num_0, '0x' + numStr_0, _.hu.nevermind.notecalc.NumberType.Int), rest_0);
              }
            }
             else {
              var c = Kotlin.kotlin.text.first_gw00vq$(str);
              if (Kotlin.kotlin.text.contains_cjsvxq$('0123456789', c) || c === '.') {
                takeWhile_ggikb8$break_1: {
                  var tmp$4;
                  tmp$4 = str.length - 1;
                  for (var index_1 = 0; index_1 <= tmp$4; index_1++) {
                    if (!Kotlin.kotlin.text.contains_cjsvxq$(' 0123456789.', str.charAt(index_1))) {
                      numStr_1 = str.substring(0, index_1);
                      break takeWhile_ggikb8$break_1;
                    }
                  }
                  numStr_1 = str;
                }
                var $receiver_5 = numStr_1;
                var tmp$5;
                var count = 0;
                tmp$5 = Kotlin.kotlin.text.iterator_gw00vq$($receiver_5);
                while (tmp$5.hasNext()) {
                  var element = tmp$5.next();
                  if (element === '.') {
                    count++;
                  }
                }
                var decimalPointCount = count;
                if (decimalPointCount <= 1) {
                  var num_1 = (tmp$0 = Kotlin.safeParseDouble(Kotlin.kotlin.text.replace_dn5w6f$(numStr_1, ' ', ''))) != null ? tmp$0 : Kotlin.throwNPE();
                  var rest_1 = Kotlin.kotlin.text.drop_n7iutu$(str, numStr_1.length);
                  tmp$1 = Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.NumberLiteral(num_1, numStr_1, decimalPointCount === 0 ? _.hu.nevermind.notecalc.NumberType.Int : _.hu.nevermind.notecalc.NumberType.Float), rest_1);
                }
                 else
                  tmp$1 = null;
              }
               else {
                tmp$1 = null;
              }
            }
            return tmp$1;
          },
          tryExtractOperator_0: function (str) {
            if (Kotlin.kotlin.text.contains_cjsvxq$('=+-/%*^()&|!', Kotlin.kotlin.text.first_gw00vq$(str))) {
              return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.Operator(Kotlin.kotlin.text.first_gw00vq$(str).toString()), Kotlin.kotlin.text.drop_n7iutu$(str, 1));
            }
             else if (Kotlin.kotlin.text.startsWith_41xvrb$(str, 'in ')) {
              return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.Operator('in'), Kotlin.kotlin.text.drop_n7iutu$(str, 2));
            }
             else if (str.length > 1) {
              var twoChars = str.substring(0, 2);
              if (Kotlin.equals(twoChars, '<<') || Kotlin.equals(twoChars, '>>')) {
                return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.Operator(twoChars), Kotlin.kotlin.text.drop_n7iutu$(str, 2));
              }
               else {
                return null;
              }
            }
             else {
              return null;
            }
          },
          isLetter_myv2d1$: function ($receiver) {
            return $receiver.toLowerCase() !== $receiver.toUpperCase();
          },
          isDigit_myv2d1$: function ($receiver) {
            return Kotlin.kotlin.text.contains_cjsvxq$('0123456789', $receiver);
          },
          tryExtractUnit_0: function (str) {
            var piece;
            var predicate = Kotlin.getCallableRefForExtensionFunction(_.hu.nevermind.notecalc.isLetter_myv2d1$);
            takeWhile_ggikb8$break: {
              var tmp$0;
              tmp$0 = str.length - 1;
              for (var index = 0; index <= tmp$0; index++) {
                if (!predicate(str.charAt(index))) {
                  piece = str.substring(0, index);
                  break takeWhile_ggikb8$break;
                }
              }
              piece = str;
            }
            try {
              var unit = math.unit('1 ' + piece);
              return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.UnitOfMeasure(Kotlin.kotlin.text.drop_n7iutu$(unit.toString(), '1 '.length)), Kotlin.kotlin.text.drop_n7iutu$(str, piece.length));
            }
             catch (e) {
            }
            return null;
          },
          tryExtractStringLiteral_0: function (str) {
            if (!!Kotlin.kotlin.text.isWhitespace_myv2d1$(Kotlin.kotlin.text.first_gw00vq$(str))) {
              var message = 'At this point, str must already be trimmed!';
              throw new Kotlin.IllegalArgumentException(message.toString());
            }
            var tmp$1 = Kotlin.kotlin.text.first_gw00vq$(str);
            var $receiver = Kotlin.kotlin.text.drop_n7iutu$(str, 1);
            var takeWhile_ggikb8$result;
            takeWhile_ggikb8$break: {
              var tmp$2;
              tmp$2 = $receiver.length - 1;
              for (var index = 0; index <= tmp$2; index++) {
                var it = $receiver.charAt(index);
                if (!(!_.hu.nevermind.notecalc.isDigit_myv2d1$(it) && !Kotlin.kotlin.text.contains_cjsvxq$('=%/+-*^() ', it))) {
                  takeWhile_ggikb8$result = $receiver.substring(0, index);
                  break takeWhile_ggikb8$break;
                }
              }
              takeWhile_ggikb8$result = $receiver;
            }
            var extractedStr = Kotlin.kotlin.text.plus_68uai5$(tmp$1, takeWhile_ggikb8$result);
            return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.StringLiteral(extractedStr), Kotlin.kotlin.text.drop_n7iutu$(str, extractedStr.length));
          },
          tryParseVariableName_0: function (str, variableNames) {
            var variableName;
            if (!!Kotlin.kotlin.text.isWhitespace_myv2d1$(Kotlin.kotlin.text.first_gw00vq$(str))) {
              var message = 'At this point, str must already be trimmed!';
              throw new Kotlin.IllegalArgumentException(message.toString());
            }
            firstOrNull_udlcbx$break: {
              var tmp$1;
              tmp$1 = variableNames.iterator();
              while (tmp$1.hasNext()) {
                var element = tmp$1.next();
                if (Kotlin.kotlin.text.startsWith_41xvrb$(str, element)) {
                  variableName = element;
                  break firstOrNull_udlcbx$break;
                }
              }
              variableName = null;
            }
            if (variableName != null) {
              return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.Variable(variableName), Kotlin.kotlin.text.drop_n7iutu$(str, variableName.length));
            }
             else {
              return null;
            }
          },
          tryParseFunctionInvocation_0: function (str, functionNames) {
            var functionName;
            if (!!Kotlin.kotlin.text.isWhitespace_myv2d1$(Kotlin.kotlin.text.first_gw00vq$(str))) {
              var message = 'At this point, str must already be trimmed!';
              throw new Kotlin.IllegalArgumentException(message.toString());
            }
            firstOrNull_udlcbx$break: {
              var tmp$1;
              tmp$1 = functionNames.iterator();
              while (tmp$1.hasNext()) {
                var element = tmp$1.next();
                if (Kotlin.kotlin.text.startsWith_41xvrb$(str, element)) {
                  functionName = element;
                  break firstOrNull_udlcbx$break;
                }
              }
              functionName = null;
            }
            if (functionName != null) {
              return Kotlin.kotlin.to_l1ob02$(new _.hu.nevermind.notecalc.Token.StringLiteral(functionName), Kotlin.kotlin.text.drop_n7iutu$(str, functionName.length));
            }
             else {
              return null;
            }
          }
        })
      })
    })
  });
  Kotlin.defineModule('NoteCalcJS', _);
  _.hu.nevermind.notecalc.main_kand9s$([]);
  return _;
}));
