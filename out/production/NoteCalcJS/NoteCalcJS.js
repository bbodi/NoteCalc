if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'NoteCalcJS'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NoteCalcJS'.");
}
var NoteCalcJS = function (_, Kotlin) {
  'use strict';
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Throwable = Error;
  var asReversed = Kotlin.kotlin.collections.asReversed_2p1efm$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var contains_0 = Kotlin.kotlin.collections.contains_2ws7j4$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var dropLast = Kotlin.kotlin.collections.dropLast_yzln2o$;
  var takeLast = Kotlin.kotlin.collections.takeLast_yzln2o$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var Pair = Kotlin.kotlin.Pair;
  var drop_0 = Kotlin.kotlin.text.drop_6ic1pp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var hashMapOf = Kotlin.kotlin.collections.hashMapOf_qfcya0$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var plus_0 = Kotlin.kotlin.collections.plus_iwxh38$;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var plus_1 = Kotlin.kotlin.collections.plus_khz7k3$;
  var firstOrNull = Kotlin.kotlin.text.firstOrNull_gw00vp$;
  var isWhitespace = Kotlin.kotlin.text.isWhitespace_myv2d0$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var indexOf_0 = Kotlin.kotlin.text.indexOf_8eortd$;
  var padEnd = Kotlin.kotlin.text.padEnd_vrc1nu$;
  var padStart = Kotlin.kotlin.text.padStart_vrc1nu$;
  var split_0 = Kotlin.kotlin.text.split_ip8yn$;
  var Enum = Kotlin.kotlin.Enum;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var zip = Kotlin.kotlin.collections.zip_evp5ax$;
  var zip_0 = Kotlin.kotlin.collections.zip_45mdf7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_73mtqc$;
  var contains_1 = Kotlin.kotlin.collections.contains_mjy6jw$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var first_0 = Kotlin.kotlin.text.first_gw00vp$;
  var contains_2 = Kotlin.kotlin.text.contains_sgbm27$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  NumberType.prototype = Object.create(Enum.prototype);
  NumberType.prototype.constructor = NumberType;
  Operand$Percentage.prototype = Object.create(Operand.prototype);
  Operand$Percentage.prototype.constructor = Operand$Percentage;
  Operand$Number.prototype = Object.create(Operand.prototype);
  Operand$Number.prototype.constructor = Operand$Number;
  Operand$Quantity.prototype = Object.create(Operand.prototype);
  Operand$Quantity.prototype.constructor = Operand$Quantity;
  Token$UnitOfMeasure.prototype = Object.create(Token.prototype);
  Token$UnitOfMeasure.prototype.constructor = Token$UnitOfMeasure;
  Token$StringLiteral.prototype = Object.create(Token.prototype);
  Token$StringLiteral.prototype.constructor = Token$StringLiteral;
  Token$Variable.prototype = Object.create(Token.prototype);
  Token$Variable.prototype.constructor = Token$Variable;
  Token$NumberLiteral.prototype = Object.create(Token.prototype);
  Token$NumberLiteral.prototype.constructor = Token$NumberLiteral;
  Token$Operator.prototype = Object.create(Token.prototype);
  Token$Operator.prototype.constructor = Token$Operator;
  function CodeMirrorWrapper() {
    CodeMirrorWrapper_instance = this;
  }
  function CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral(closure$cur, closure$token, closure$cm) {
    this.from = new CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$from$ObjectLiteral(closure$cur, closure$token);
    this.to = new CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$to$ObjectLiteral(closure$cur, closure$token);
    var tmp$;
    var $receiver = (Kotlin.isType(tmp$ = closure$cm.options.noteCalcEditor, NoteCalcEditor) ? tmp$ : Kotlin.throwCCE()).allVariables.keys;
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var tmp$_1;
      var $receiver_0 = typeof (tmp$_1 = closure$token.string) === 'string' ? tmp$_1 : Kotlin.throwCCE();
      var tmp$_2;
      if (contains(element, Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_2 = $receiver_0) ? tmp$_2 : Kotlin.throwCCE()).toString())) {
        destination.add_11rb$(element);
      }
    }
    this.list = Kotlin.kotlin.collections.copyToArray(destination);
  }
  function CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$from$ObjectLiteral(closure$cur, closure$token) {
    this.line = closure$cur.line;
    this.ch = closure$token.start;
  }
  CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$from$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$to$ObjectLiteral(closure$cur, closure$token) {
    this.line = closure$cur.line;
    this.ch = closure$token.end;
  }
  CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral$to$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function CodeMirrorWrapper$enableAutocompletion$lambda(cm, options) {
    var tmp$, tmp$_0, tmp$_1;
    var cur = cm.getCursor();
    var token = cm.getTokenAt(cur);
    if (startsWith(typeof (tmp$ = token.string) === 'string' ? tmp$ : Kotlin.throwCCE(), 32)) {
      var $receiver = typeof (tmp$_0 = token.string) === 'string' ? tmp$_0 : Kotlin.throwCCE();
      var takeWhile$result;
      takeWhile$break: {
        var tmp$_2;
        tmp$_2 = $receiver.length - 1 | 0;
        for (var index = 0; index <= tmp$_2; index++) {
          if (!(Kotlin.unboxChar(Kotlin.toBoxedChar($receiver.charCodeAt(index))) === 32)) {
            takeWhile$result = $receiver.substring(0, index);
            break takeWhile$break;
          }
        }
        takeWhile$result = $receiver;
      }
      var spaceCountAtStartOfTheString = takeWhile$result.length;
      token.start = token.start + spaceCountAtStartOfTheString;
    }
    if (token.end > cur.ch) {
      token.end = cur.ch;
      var $receiver_0 = typeof (tmp$_1 = token.string) === 'string' ? tmp$_1 : Kotlin.throwCCE();
      var endIndex = cur.ch - token.start;
      token.string = $receiver_0.substring(0, endIndex);
    }
    return new CodeMirrorWrapper$enableAutocompletion$lambda$ObjectLiteral(cur, token, cm);
  }
  CodeMirrorWrapper.prototype.enableAutocompletion = function () {
    CodeMirror.registerHelper('hint', 'notecalc', CodeMirrorWrapper$enableAutocompletion$lambda);
  };
  function CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral(closure$options, closure$tokenizer) {
    this.startState = CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$startState$lambda(closure$options);
    this.token = CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$token$lambda(closure$options, closure$tokenizer);
  }
  function CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$startState$lambda$ObjectLiteral(closure$options) {
    this.index = 0;
    this.options = closure$options;
  }
  CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$startState$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$startState$lambda(closure$options) {
    return function () {
      return new CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$startState$lambda$ObjectLiteral(closure$options);
    };
  }
  function CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral$token$lambda(closure$options, closure$tokenizer) {
    return function (stream, state) {
      var tmp$;
      var tokenStyles = (Kotlin.isType(tmp$ = closure$options.noteCalcEditor, NoteCalcEditor) ? tmp$ : Kotlin.throwCCE()).getHighlightedTexts();
      return closure$tokenizer(tokenStyles, stream, state);
    };
  }
  CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function CodeMirrorWrapper$defineTokenizer$lambda(closure$tokenizer) {
    return function (options) {
      return new CodeMirrorWrapper$defineTokenizer$lambda$ObjectLiteral(options, closure$tokenizer);
    };
  }
  CodeMirrorWrapper.prototype.defineTokenizer_uic2nj$ = function (tokenizer) {
    CodeMirror.defineMode('notecalc', CodeMirrorWrapper$defineTokenizer$lambda(tokenizer));
  };
  CodeMirrorWrapper.prototype.fromTextArea_7k2llg$ = function (element, properties) {
    return CodeMirror.fromTextArea(element, properties);
  };
  CodeMirrorWrapper.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CodeMirrorWrapper',
    interfaces: []
  };
  var CodeMirrorWrapper_instance = null;
  function CodeMirrorWrapper_getInstance() {
    if (CodeMirrorWrapper_instance === null) {
      new CodeMirrorWrapper();
    }
    return CodeMirrorWrapper_instance;
  }
  var UNARY_MINUS_TOKEN_SYMBOL;
  var UNARY_PLUS_TOKEN_SYMBOL;
  function LineParser() {
    this.tokenParser_0 = new TokenParser();
    this.tokenListSimplifier_0 = new TokenListSimplifier();
    this.operatorInfosForUnits_0 = hashMapOf([to('%', new LineParser$OperatorInfo(6, 'left', LineParser$operatorInfosForUnits$lambda)), to('^', new LineParser$OperatorInfo(5, 'right', LineParser$operatorInfosForUnits$lambda_0(this))), to('unit', new LineParser$OperatorInfo(4, 'left', LineParser$operatorInfosForUnits$lambda_1)), to('=', new LineParser$OperatorInfo(0, 'left', LineParser$operatorInfosForUnits$lambda_2)), to('+', new LineParser$OperatorInfo(2, 'left', LineParser$operatorInfosForUnits$lambda_3)), to('-', new LineParser$OperatorInfo(2, 'left', LineParser$operatorInfosForUnits$lambda_4)), to(UNARY_MINUS_TOKEN_SYMBOL, new LineParser$OperatorInfo(4, 'left', LineParser$operatorInfosForUnits$lambda_5)), to(UNARY_PLUS_TOKEN_SYMBOL, new LineParser$OperatorInfo(4, 'left', LineParser$operatorInfosForUnits$lambda_6)), to('*', new LineParser$OperatorInfo(3, 'left', LineParser$operatorInfosForUnits$lambda_7(this))), to('/', new LineParser$OperatorInfo(3, 'left', LineParser$operatorInfosForUnits$lambda_8(this)))]);
  }
  LineParser.prototype.parseProcessAndEvaulate_0 = function (functionNames, line, variableNames) {
    var tmp$;
    try {
      var parsedTokens = this.tokenParser_0.parse_0(line, variableNames, functionNames);
      var tokensWithMergedCompoundUnits = this.tokenListSimplifier_0.mergeCompoundUnits_0(parsedTokens);
      var postFixNotationTokens = this.shuntingYard_0(tokensWithMergedCompoundUnits, functionNames);
      var highlightingInfos = this.createHighlightingNamesForTokens_0(parsedTokens);
      var lastToken = lastOrNull(postFixNotationTokens);
      tmp$ = new LineParser$EvaulationResult(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightingInfos, lastToken);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = null;
      }
       else
        throw e;
    }
    return tmp$;
  };
  LineParser.prototype.shuntingYard_0 = function (inputTokens, functionNames) {
    var output = Kotlin.kotlin.collections.emptyList_287e2$();
    var operatorStack = Kotlin.kotlin.collections.emptyList_287e2$();
    var tmp$ = this.shuntingYardRec_0(inputTokens, operatorStack, output, functionNames, null)
    , newOperatorStack = tmp$.component1()
    , newOutput = tmp$.component2();
    var tmp$_0;
    var accumulator = newOutput;
    tmp$_0 = asReversed(newOperatorStack).iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      accumulator = this.applyOrPutOperatorOnTheStack_0(element, accumulator);
    }
    return accumulator;
  };
  LineParser.prototype.shuntingYardRec_0 = function (inputTokens, operatorStack, output, functionNames, lastToken) {
    var tmp$_0;
    if (inputTokens.isEmpty()) {
      return new LineParser$ShuntingYardStacks(operatorStack, output);
    }
     else {
      var inputToken = first(inputTokens);
      if (Kotlin.isType(inputToken, Token$Operator))
        if (Kotlin.equals(inputToken.operator, '(')) {
          tmp$_0 = new LineParser$ShuntingYardStacks(plus(operatorStack, inputToken), output);
        }
         else if (Kotlin.equals(inputToken.operator, ')')) {
          var modifiedStacksAfterBracketRule = this.popAnythingUntilOpeningBracket_0(operatorStack, output);
          tmp$_0 = modifiedStacksAfterBracketRule;
        }
         else if (Kotlin.equals(inputToken.operator, '-')) {
          tmp$_0 = this.handleUnaryOperator_0(inputToken, lastToken, operatorStack, output, UNARY_MINUS_TOKEN_SYMBOL);
        }
         else if (Kotlin.equals(inputToken.operator, '+')) {
          tmp$_0 = this.handleUnaryOperator_0(inputToken, lastToken, operatorStack, output, UNARY_PLUS_TOKEN_SYMBOL);
        }
         else {
          var tmp$ = this.shuntingYardOperatorRule_0(operatorStack, output, inputToken.operator)
          , newOperatorStack = tmp$.component1()
          , newOutput = tmp$.component2();
          tmp$_0 = new LineParser$ShuntingYardStacks(plus(newOperatorStack, inputToken), newOutput);
        }
       else if (Kotlin.isType(inputToken, Token$NumberLiteral))
        tmp$_0 = new LineParser$ShuntingYardStacks(operatorStack, plus(output, inputToken));
      else if (Kotlin.isType(inputToken, Token$StringLiteral))
        if (contains_0(functionNames, inputToken.str)) {
          tmp$_0 = new LineParser$ShuntingYardStacks(plus(operatorStack, new Token$Operator('fun ' + inputToken.str)), plus(output, inputToken));
        }
         else if (Kotlin.equals(inputToken.str, ',')) {
          tmp$_0 = this.shuntingYardOperatorRule_0(operatorStack, output, ',');
        }
         else {
          tmp$_0 = new LineParser$ShuntingYardStacks(operatorStack, plus(output, inputToken));
        }
       else if (Kotlin.isType(inputToken, Token$UnitOfMeasure)) {
        this.shuntingYardOperatorRule_0(operatorStack, output, 'unit');
        tmp$_0 = new LineParser$ShuntingYardStacks(operatorStack, plus(output, inputToken));
      }
       else if (Kotlin.isType(inputToken, Token$Variable))
        tmp$_0 = new LineParser$ShuntingYardStacks(operatorStack, plus(output, inputToken));
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      var tmp$_1 = tmp$_0
      , newOperatorStack_0 = tmp$_1.component1()
      , newOutput_0 = tmp$_1.component2();
      return this.shuntingYardRec_0(drop(inputTokens, 1), newOperatorStack_0, newOutput_0, functionNames, inputToken);
    }
  };
  LineParser.prototype.handleUnaryOperator_0 = function (inputToken, lastToken, operatorStack, output, unaryOperatorSymbol) {
    var tmp$_0;
    if (lastToken == null || (Kotlin.isType(lastToken, Token$Operator) && !contains(')%', lastToken.operator))) {
      tmp$_0 = new LineParser$ShuntingYardStacks(plus(operatorStack, new Token$Operator(unaryOperatorSymbol)), output);
    }
     else {
      var tmp$ = this.shuntingYardOperatorRule_0(operatorStack, output, inputToken.operator)
      , newOperatorStack = tmp$.component1()
      , newOutput = tmp$.component2();
      tmp$_0 = new LineParser$ShuntingYardStacks(plus(newOperatorStack, inputToken), newOutput);
    }
    return tmp$_0;
  };
  function LineParser$ShuntingYardStacks(operatorStack, output) {
    this.operatorStack = operatorStack;
    this.output = output;
  }
  LineParser$ShuntingYardStacks.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShuntingYardStacks',
    interfaces: []
  };
  LineParser$ShuntingYardStacks.prototype.component1 = function () {
    return this.operatorStack;
  };
  LineParser$ShuntingYardStacks.prototype.component2 = function () {
    return this.output;
  };
  LineParser$ShuntingYardStacks.prototype.copy_84mo7y$ = function (operatorStack, output) {
    return new LineParser$ShuntingYardStacks(operatorStack === void 0 ? this.operatorStack : operatorStack, output === void 0 ? this.output : output);
  };
  LineParser$ShuntingYardStacks.prototype.toString = function () {
    return 'ShuntingYardStacks(operatorStack=' + Kotlin.toString(this.operatorStack) + (', output=' + Kotlin.toString(this.output)) + ')';
  };
  LineParser$ShuntingYardStacks.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.operatorStack) | 0;
    result = result * 31 + Kotlin.hashCode(this.output) | 0;
    return result;
  };
  LineParser$ShuntingYardStacks.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.operatorStack, other.operatorStack) && Kotlin.equals(this.output, other.output)))));
  };
  LineParser.prototype.popAnythingUntilOpeningBracket_0 = function (operatorStack, output) {
    if (operatorStack.isEmpty()) {
      return new LineParser$ShuntingYardStacks(operatorStack, output);
    }
     else {
      var topOfOpStack = last(operatorStack);
      var newOperatorStack = dropLast(operatorStack, 1);
      if (Kotlin.equals(topOfOpStack.operator, '(')) {
        return new LineParser$ShuntingYardStacks(newOperatorStack, output);
      }
      var newOutput = this.applyOrPutOperatorOnTheStack_0(topOfOpStack, output);
      return this.popAnythingUntilOpeningBracket_0(newOperatorStack, newOutput);
    }
  };
  LineParser.prototype.shuntingYardOperatorRule_0 = function (operatorStack, output, incomingOperatorName) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (operatorStack.isEmpty()) {
      return new LineParser$ShuntingYardStacks(operatorStack, output);
    }
    var topOfOpStack = last(operatorStack);
    if (contains('()', topOfOpStack.operator)) {
      return new LineParser$ShuntingYardStacks(operatorStack, output);
    }
    var incomingOpPrecedence = (tmp$_0 = (tmp$ = this.operatorInfosForUnits_0.get_11rb$(incomingOperatorName)) != null ? tmp$.precedence : null) != null ? tmp$_0 : 0;
    var topOfStackPrecedence = (tmp$_2 = (tmp$_1 = this.operatorInfosForUnits_0.get_11rb$(topOfOpStack.operator)) != null ? tmp$_1.precedence : null) != null ? tmp$_2 : 0;
    var assoc = (tmp$_4 = (tmp$_3 = this.operatorInfosForUnits_0.get_11rb$(incomingOperatorName)) != null ? tmp$_3.associativity : null) != null ? tmp$_4 : 'left';
    var incomingPrecLeftAssocAndEqual = Kotlin.equals(assoc, 'left') && incomingOpPrecedence === topOfStackPrecedence;
    if (incomingOpPrecedence < topOfStackPrecedence || incomingPrecLeftAssocAndEqual) {
      var last_0 = last(operatorStack);
      return this.shuntingYardOperatorRule_0(dropLast(operatorStack, 1), this.applyOrPutOperatorOnTheStack_0(last_0, output), incomingOperatorName);
    }
     else {
      return new LineParser$ShuntingYardStacks(operatorStack, output);
    }
  };
  LineParser.prototype.applyOrPutOperatorOnTheStack_0 = function (operator, outputStack) {
    var tmp$, tmp$_0;
    var newOutputStackFromApplying = (tmp$_0 = (tmp$ = this.operatorInfosForUnits_0.get_11rb$(operator.operator)) != null ? tmp$.func : null) != null ? tmp$_0(operator, outputStack) : null;
    return newOutputStackFromApplying != null ? newOutputStackFromApplying : plus(outputStack, operator);
  };
  LineParser.prototype.getTopTwoElements_0 = function (outputStack) {
    var lastTwo = takeLast(outputStack, 2);
    var lhs = getOrNull(lastTwo, 0);
    var rhs = getOrNull(lastTwo, 1);
    return new Pair(lhs, rhs);
  };
  function LineParser$OperatorInfo(precedence, associativity, func) {
    this.precedence = precedence;
    this.associativity = associativity;
    this.func = func;
  }
  LineParser$OperatorInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OperatorInfo',
    interfaces: []
  };
  LineParser$OperatorInfo.prototype.component1 = function () {
    return this.precedence;
  };
  LineParser$OperatorInfo.prototype.component2 = function () {
    return this.associativity;
  };
  LineParser$OperatorInfo.prototype.component3 = function () {
    return this.func;
  };
  LineParser$OperatorInfo.prototype.copy_1fqtyv$ = function (precedence, associativity, func) {
    return new LineParser$OperatorInfo(precedence === void 0 ? this.precedence : precedence, associativity === void 0 ? this.associativity : associativity, func === void 0 ? this.func : func);
  };
  LineParser$OperatorInfo.prototype.toString = function () {
    return 'OperatorInfo(precedence=' + Kotlin.toString(this.precedence) + (', associativity=' + Kotlin.toString(this.associativity)) + (', func=' + Kotlin.toString(this.func)) + ')';
  };
  LineParser$OperatorInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.precedence) | 0;
    result = result * 31 + Kotlin.hashCode(this.associativity) | 0;
    result = result * 31 + Kotlin.hashCode(this.func) | 0;
    return result;
  };
  LineParser$OperatorInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.precedence, other.precedence) && Kotlin.equals(this.associativity, other.associativity) && Kotlin.equals(this.func, other.func)))));
  };
  LineParser.prototype.getUnitnameAfterOperation_0 = function (lhsUnitname, rhsUnitname, func) {
    var lhs = math.unit('1 ' + lhsUnitname);
    var rhs = math.unit('1 ' + rhsUnitname);
    var unitnameAfterOperation = drop_0(func(lhs, rhs).toString(), '1 '.length);
    return unitnameAfterOperation;
  };
  LineParser.prototype.createHighlightingNamesForTokens_0 = function (tokens) {
    var highlightInfosForTokens = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$;
    tmp$ = tokens.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Token$NumberLiteral)) {
        var strRepr = element.originalStringRepresentation.length === 0 ? element.num.toString() : element.originalStringRepresentation;
        highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(strRepr, 'number'));
      }
       else if (Kotlin.isType(element, Token$Variable))
        highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(element.variableName, 'variable'));
      else if (Kotlin.isType(element, Token$StringLiteral))
        highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(element.str, 'comment'));
      else if (Kotlin.isType(element, Token$Operator))
        highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(element.operator, 'operator'));
      else if (Kotlin.isType(element, Token$UnitOfMeasure))
        if (element.tokens.isEmpty()) {
          highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(element.unitName, 'qualifier'));
        }
         else {
          var tmp$_0;
          tmp$_0 = element.tokens.iterator();
          while (tmp$_0.hasNext()) {
            var element_0 = tmp$_0.next();
            highlightInfosForTokens.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(this.getStringRepresentation_0(element_0), 'qualifier'));
          }
        }
       else
        Kotlin.noWhenBranchMatched();
    }
    return highlightInfosForTokens;
  };
  LineParser.prototype.getStringRepresentation_0 = function (token) {
    var tmp$;
    if (Kotlin.isType(token, Token$UnitOfMeasure))
      tmp$ = token.unitName;
    else if (Kotlin.isType(token, Token$NumberLiteral)) {
      tmp$ = token.originalStringRepresentation.length === 0 ? token.num.toString() : token.originalStringRepresentation;
    }
     else if (Kotlin.isType(token, Token$Operator))
      tmp$ = token.operator;
    else if (Kotlin.isType(token, Token$StringLiteral))
      tmp$ = token.str;
    else if (Kotlin.isType(token, Token$Variable))
      tmp$ = token.variableName;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var text_0 = tmp$;
    return text_0;
  };
  function LineParser$EvaulationResult(parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightedTexts, lastToken) {
    this.parsedTokens = parsedTokens;
    this.tokensWithMergedCompoundUnits = tokensWithMergedCompoundUnits;
    this.postFixNotationTokens = postFixNotationTokens;
    this.highlightedTexts = highlightedTexts;
    this.lastToken = lastToken;
  }
  LineParser$EvaulationResult.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EvaulationResult',
    interfaces: []
  };
  LineParser$EvaulationResult.prototype.component1 = function () {
    return this.parsedTokens;
  };
  LineParser$EvaulationResult.prototype.component2 = function () {
    return this.tokensWithMergedCompoundUnits;
  };
  LineParser$EvaulationResult.prototype.component3 = function () {
    return this.postFixNotationTokens;
  };
  LineParser$EvaulationResult.prototype.component4 = function () {
    return this.highlightedTexts;
  };
  LineParser$EvaulationResult.prototype.component5 = function () {
    return this.lastToken;
  };
  LineParser$EvaulationResult.prototype.copy_vy96hp$ = function (parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens, highlightedTexts, lastToken) {
    return new LineParser$EvaulationResult(parsedTokens === void 0 ? this.parsedTokens : parsedTokens, tokensWithMergedCompoundUnits === void 0 ? this.tokensWithMergedCompoundUnits : tokensWithMergedCompoundUnits, postFixNotationTokens === void 0 ? this.postFixNotationTokens : postFixNotationTokens, highlightedTexts === void 0 ? this.highlightedTexts : highlightedTexts, lastToken === void 0 ? this.lastToken : lastToken);
  };
  LineParser$EvaulationResult.prototype.toString = function () {
    return 'EvaulationResult(parsedTokens=' + Kotlin.toString(this.parsedTokens) + (', tokensWithMergedCompoundUnits=' + Kotlin.toString(this.tokensWithMergedCompoundUnits)) + (', postFixNotationTokens=' + Kotlin.toString(this.postFixNotationTokens)) + (', highlightedTexts=' + Kotlin.toString(this.highlightedTexts)) + (', lastToken=' + Kotlin.toString(this.lastToken)) + ')';
  };
  LineParser$EvaulationResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parsedTokens) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokensWithMergedCompoundUnits) | 0;
    result = result * 31 + Kotlin.hashCode(this.postFixNotationTokens) | 0;
    result = result * 31 + Kotlin.hashCode(this.highlightedTexts) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastToken) | 0;
    return result;
  };
  LineParser$EvaulationResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parsedTokens, other.parsedTokens) && Kotlin.equals(this.tokensWithMergedCompoundUnits, other.tokensWithMergedCompoundUnits) && Kotlin.equals(this.postFixNotationTokens, other.postFixNotationTokens) && Kotlin.equals(this.highlightedTexts, other.highlightedTexts) && Kotlin.equals(this.lastToken, other.lastToken)))));
  };
  function LineParser$operatorInfosForUnits$lambda(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_0(this$LineParser) {
    return function (operator, outputStack) {
      var tmp$ = this$LineParser.getTopTwoElements_0(outputStack)
      , lhs = tmp$.component1()
      , rhs = tmp$.component2();
      if (Kotlin.isType(lhs, Token$UnitOfMeasure) && Kotlin.isType(rhs, Token$NumberLiteral)) {
        var num_1 = rhs.num;
        var poweredUnit = pow(math.unit('1 ' + lhs.unitName), num_1);
        var poweredUnitname = drop_0(poweredUnit.toString(), '1 '.length);
        return plus(dropLast(outputStack, 2), new Token$UnitOfMeasure(poweredUnitname));
      }
       else {
        return plus(outputStack, operator);
      }
    };
  }
  function LineParser$operatorInfosForUnits$lambda_1(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_2(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_3(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_4(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_5(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_6(operator, outputStack) {
    return plus(outputStack, operator);
  }
  function LineParser$operatorInfosForUnits$lambda_7(this$LineParser) {
    return function (operator, outputStack) {
      var tmp$ = this$LineParser.getTopTwoElements_0(outputStack)
      , lhs = tmp$.component1()
      , rhs = tmp$.component2();
      if (Kotlin.isType(lhs, Token$UnitOfMeasure) && Kotlin.isType(rhs, Token$UnitOfMeasure)) {
        var unitnameAfterOperation = this$LineParser.getUnitnameAfterOperation_0(lhs.unitName, rhs.unitName, Kotlin.getCallableRef('multiply', function ($receiver, other) {
          return multiply($receiver, other);
        }));
        return plus(dropLast(outputStack, 2), new Token$UnitOfMeasure(unitnameAfterOperation));
      }
       else {
        return plus(outputStack, operator);
      }
    };
  }
  function LineParser$operatorInfosForUnits$lambda_8(this$LineParser) {
    return function (operator, outputStack) {
      var tmp$ = this$LineParser.getTopTwoElements_0(outputStack)
      , lhs = tmp$.component1()
      , rhs = tmp$.component2();
      if (Kotlin.isType(lhs, Token$UnitOfMeasure) && Kotlin.isType(rhs, Token$UnitOfMeasure)) {
        var unitnameAfterOperation = this$LineParser.getUnitnameAfterOperation_0(lhs.unitName, rhs.unitName, Kotlin.getCallableRef('divide', function ($receiver, other) {
          return divide($receiver, other);
        }));
        return plus(dropLast(outputStack, 2), new Token$UnitOfMeasure(unitnameAfterOperation));
      }
       else {
        return plus(outputStack, operator);
      }
    };
  }
  LineParser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineParser',
    interfaces: []
  };
  var nextNoteCalcIndex;
  var globalVariables;
  var NOTE_CALC_IDS_KEY;
  var UNNAMED_TITLE;
  function main(args) {
    QUnit.config.autostart = false;
    if (startsWith_0(window.location.search, '?test')) {
      QUnit.start();
      (new NoteCalcEditorTest()).runTests();
    }
     else {
      var allNoteCalcEntries = getAllNoteCalcEntries(localStorage);
      createNoteCalcEditors(allNoteCalcEntries);
      if (nextNoteCalcIndex === 0) {
        setNoteCalcTitle(localStorage, nextNoteCalcIndex, 'Welcome');
        setNoteCalcContent(localStorage, nextNoteCalcIndex, defaultText);
        setNoteCaclcVisibility(localStorage, nextNoteCalcIndex, 'true');
        addButtonClicked();
      }
    }
  }
  function createNoteCalcEditors$lambda$lambda(closure$noteCalcIndex) {
    return function (visible) {
      var tmp$;
      if (visible) {
        addNewEditorRow(closure$noteCalcIndex, globalVariables);
      }
       else {
        if ((tmp$ = document.getElementById(editorDivId(closure$noteCalcIndex))) != null) {
          var tmp$_0;
          (tmp$_0 = tmp$.parentNode) != null ? tmp$_0.removeChild(tmp$) : null;
        }
      }
      setNoteCaclcVisibility(localStorage, closure$noteCalcIndex, visible.toString());
    };
  }
  function createNoteCalcEditors(allNoteCalcEntries) {
    var tmp$;
    tmp$ = allNoteCalcEntries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1;
      if (getNoteCalcContent(localStorage, element) != null) {
        window['onHideButtonClick' + element] = createNoteCalcEditors$lambda$lambda(element);
        if (Kotlin.equals(getNoteCaclcVisibility(localStorage, element), 'true')) {
          addNewEditorRow(element, globalVariables);
        }
         else {
          var $receiver = document.createElement('option');
          var title = loadTitleOr(nextNoteCalcIndex, UNNAMED_TITLE);
          $receiver.innerHTML = '<a href=' + '"' + '#' + '"' + ' onclick=' + '"' + 'onHideButtonClick' + element + '(true)' + '"' + '>' + title + '<\/a>';
          var li = $receiver;
          ((tmp$_0 = document.getElementsByTagName('body')[0]) != null ? tmp$_0 : Kotlin.throwNPE()).appendChild((tmp$_1 = li.children[0]) != null ? tmp$_1 : Kotlin.throwNPE());
        }
        if (element >= nextNoteCalcIndex) {
          nextNoteCalcIndex = element + 1 | 0;
        }
      }
    }
  }
  function addButtonClicked$lambda() {
    var tmp$;
    var allNoteCalcEntries = getAllNoteCalcEntries(localStorage);
    localStorage.setItem(NOTE_CALC_IDS_KEY, joinToString(plus(allNoteCalcEntries, nextNoteCalcIndex), ','));
    setNoteCalcTitle(localStorage, nextNoteCalcIndex, loadTitleOr(nextNoteCalcIndex, UNNAMED_TITLE));
    setNoteCaclcVisibility(localStorage, nextNoteCalcIndex, 'true');
    addNewEditorRow(nextNoteCalcIndex, globalVariables);
    return tmp$ = nextNoteCalcIndex, nextNoteCalcIndex = tmp$ + 1 | 0, tmp$;
  }
  var addButtonClicked;
  function loadTitleOr(noteCalcIndex, default_0) {
    var str_0 = getNoteCalcTitle(localStorage, noteCalcIndex);
    return str_0 == null || str_0.length === 0 ? default_0 : str_0 != null ? str_0 : Kotlin.throwNPE();
  }
  function addNewEditorRow$lambda$lambda(closure$editorIndex, closure$panelTitle) {
    return function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = window.prompt('Title', closure$panelTitle)) != null ? tmp$ : '';
      setNoteCalcTitle(localStorage, closure$editorIndex, tmp$_0);
    };
  }
  function addNewEditorRow$lambda$lambda_0(closure$editorIndex) {
    return function (modifiedText) {
      if (modifiedText.length === 0) {
        removeNoteCalcContent(localStorage, closure$editorIndex);
      }
       else {
        setNoteCalcContent(localStorage, closure$editorIndex, modifiedText);
      }
    };
  }
  function addNewEditorRow$lambda(closure$editorIndex, closure$globalVariables) {
    return function () {
      var tmp$, tmp$_2, tmp$_0, tmp$_3, tmp$_1, tmp$_4, tmp$_5;
      tmp$_2 = (tmp$ = getNoteCalcContent(localStorage, closure$editorIndex)) != null ? tmp$ : '';
      tmp$_3 = (tmp$_0 = document.getElementById('textarea' + closure$editorIndex)) != null ? tmp$_0 : Kotlin.throwNPE();
      tmp$_4 = (tmp$_1 = document.getElementById('results' + closure$editorIndex)) != null ? tmp$_1 : Kotlin.throwNPE();
      tmp$_5 = addNewEditorRow$lambda$lambda_0(closure$editorIndex);
      return new NoteCalcEditor(tmp$_2, tmp$_3, tmp$_4, closure$globalVariables, tmp$_5);
    };
  }
  function addNewEditorRow(editorIndex, globalVariables_0) {
    var tmp$;
    var $receiver = document.createElement('div');
    var tmp$_0;
    $receiver.id = editorDivId(editorIndex);
    $receiver.className = 'col-xs-12 col-md-12';
    var panelTitle = (tmp$_0 = getNoteCalcTitle(localStorage, editorIndex)) != null ? tmp$_0 : '';
    window['onTitleClick' + editorIndex] = addNewEditorRow$lambda$lambda(editorIndex, panelTitle);
    $receiver.innerHTML = '\n' + '<div class=' + '"' + 'panel panel-default' + '"' + '>' + '\n' + '  <div class=' + '"' + 'panel-heading' + '"' + '>' + '\n' + '    <h3 class=' + '"' + 'panel-title pull-left' + '"' + ' onclick=' + '"' + 'onTitleClick' + editorIndex + '()' + '"' + '>' + panelTitle + '<\/h3>' + '\n' + '    <!--button class=' + '"' + 'btn btn-default pull-right' + '"' + ' onclick=' + '"' + 'onHideButtonClick' + editorIndex + '(false)' + '"' + '>Hide<\/button-->' + '\n' + '    <div class=' + '"' + 'clearfix' + '"' + '><\/div>' + '\n' + '  <\/div>' + '\n' + '  <div class=' + '"' + 'panel-body' + '"' + '>' + '\n' + '    <div class=' + '"' + 'row' + '"' + '>' + '\n' + '        <div class=' + '"' + 'col-xs-6' + '"' + ' style=' + '"' + 'padding-right: 0px;padding-left: 0px;' + '"' + '>' + '\n' + '            <textarea id=' + '"' + 'textarea' + editorIndex + '"' + '  style=' + '"' + 'width: 100%;height: 100%' + '"' + '><\/textarea>' + '\n' + '        <\/div>' + '\n' + '        <div class=' + '"' + 'col-xs-6' + '"' + ' style=' + '"' + 'padding-right: 0px;padding-left: 0px;' + '"' + '>' + '\n' + '            <textarea id=' + '"' + 'results' + editorIndex + '"' + ' class=' + '"' + 'CodeMirror-code' + '"' + ' style=' + '"' + 'margin-top: 0px; font-family: monospace;' + '"' + '><\/textarea>' + '\n' + '        <\/div>' + '\n' + '    <\/div>' + '\n' + '  <\/div>' + '\n' + '<\/div>' + '\n';
    var newRow = $receiver;
    ((tmp$ = document.getElementById('noteCalcTable')) != null ? tmp$ : Kotlin.throwNPE()).appendChild(newRow);
    return window.setTimeout(addNewEditorRow$lambda(editorIndex, globalVariables_0), 500);
  }
  function getAllNoteCalcEntries($receiver) {
    var tmp$;
    var $receiver_0 = split((tmp$ = $receiver.getItem(NOTE_CALC_IDS_KEY)) != null ? tmp$ : '', [44]);
    var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.length > 0) {
        destination.add_11rb$(element);
      }
    }
    var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(toInt(item));
    }
    return destination_0;
  }
  function getNoteCaclcVisibility($receiver, noteCalcIndex) {
    return $receiver.getItem(noteCaclcVisibleKey(noteCalcIndex));
  }
  function setNoteCaclcVisibility($receiver, noteCalcIndex, text_0) {
    $receiver.setItem(noteCaclcVisibleKey(noteCalcIndex), text_0);
  }
  function getNoteCalcTitle($receiver, noteCalcIndex) {
    return $receiver.getItem(noteCalcTitleKey(noteCalcIndex));
  }
  function setNoteCalcTitle($receiver, noteCalcIndex, text_0) {
    $receiver.setItem(noteCalcTitleKey(noteCalcIndex), text_0);
  }
  function getNoteCalcContent($receiver, noteCalcIndex) {
    return $receiver.getItem(noteCalcContentKey(noteCalcIndex));
  }
  function setNoteCalcContent($receiver, noteCalcIndex, text_0) {
    $receiver.setItem(noteCalcContentKey(noteCalcIndex), text_0);
  }
  function removeNoteCalcContent($receiver, noteCalcIndex) {
    $receiver.removeItem(noteCalcContentKey(noteCalcIndex));
  }
  function noteCalcContentKey(editorIndex) {
    return 'noteCalcContent' + editorIndex;
  }
  function editorDivId(editorIndex) {
    return 'NoteCalcPanel' + editorIndex;
  }
  function noteCalcTitleKey(editorIndex) {
    return 'storedNoteCalcTitle' + editorIndex;
  }
  function noteCaclcVisibleKey(editorIndex) {
    return 'storedNoteCalcVisible' + editorIndex;
  }
  var defaultText;
  function add($receiver, other) {
    return math.add($receiver, other);
  }
  function subtract($receiver, other) {
    return math.subtract($receiver, other);
  }
  function multiply($receiver, other) {
    return math.multiply($receiver, other);
  }
  function divide($receiver, other) {
    return math.divide($receiver, other);
  }
  function pow($receiver, other) {
    return math.pow($receiver, other);
  }
  function abs($receiver) {
    return math.abs($receiver);
  }
  function sqrt($receiver) {
    return math.sqrt($receiver);
  }
  function NoteCalcEditor(defaultValue, editorTextArea, resultTextArea, globalVariables_0, onChange) {
    NoteCalcEditor$Companion_getInstance();
    this.globalVariables = globalVariables_0;
    this.lineParser_0 = new LineParser();
    this.tokenListEvaulator_0 = new TokenListEvaulator();
    this.highlightedTexts_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    this.variables_0 = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    CodeMirrorWrapper_getInstance().defineTokenizer_uic2nj$(NoteCalcEditor$Companion_getInstance().tokenizer_0);
    CodeMirrorWrapper_getInstance().enableAutocompletion();
    var codeMirrorInstance = this.createMainCodeMirrorInstance_0(editorTextArea);
    var resultsCodeMirrorInstance = this.createCodeMirrorInstanceForResults_0(resultTextArea);
    resultsCodeMirrorInstance.setValue(this.textAreaChanged_0(defaultValue));
    codeMirrorInstance.setValue(defaultValue);
    this.setupEventHandlers_0(codeMirrorInstance, resultsCodeMirrorInstance, onChange);
  }
  NoteCalcEditor.prototype.getHighlightedTexts = function () {
    return this.highlightedTexts_0;
  };
  Object.defineProperty(NoteCalcEditor.prototype, 'allVariables', {
    get: function () {
      return plus_0(this.variables_0, this.globalVariables);
    }
  });
  NoteCalcEditor.prototype.textAreaChanged_0 = function (str_0) {
    this.highlightedTexts_0.clear();
    this.variables_0.clear();
    var resultString = new StringBuilder();
    var sum = {v: 0.0};
    var currentFunctionDefinition = {v: null};
    var functionDefsByName = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
    var resultsByLineNumber = {v: Kotlin.kotlin.collections.emptyList_287e2$()};
    var methodScopeVariableNames = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = lines(str_0).iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var nullBasedLineIndex = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
      this.createVariablesForPreviousLineResults_0(resultsByLineNumber.v, this.variables_0);
      var functionDefInCurrentLine = this.tryParseFunctionDef_0(item);
      if (this.functionDefinitionStart_0(currentFunctionDefinition.v, functionDefInCurrentLine)) {
        methodScopeVariableNames.addAll_brywnq$((functionDefInCurrentLine != null ? functionDefInCurrentLine : Kotlin.throwNPE()).argumentNames);
        currentFunctionDefinition.v = functionDefInCurrentLine;
        tmp$_3 = ((tmp$_2 = currentFunctionDefinition.v) != null ? tmp$_2 : Kotlin.throwNPE()).name;
        tmp$_4 = (tmp$_1 = currentFunctionDefinition.v) != null ? tmp$_1 : Kotlin.throwNPE();
        functionDefsByName.put_xwzc9p$(tmp$_3, tmp$_4);
        resultString.append_s8itvh$(10);
      }
       else if (this.stillInTheFunctionBody_0(currentFunctionDefinition.v, item)) {
        var oldCurrentFunctionDefinition = (tmp$_5 = currentFunctionDefinition.v) != null ? tmp$_5 : Kotlin.throwNPE();
        var tmp$_10;
        var trimmedLine = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_10 = item) ? tmp$_10 : Kotlin.throwCCE()).toString();
        var evaluationResult = this.lineParser_0.parseProcessAndEvaulate_0(functionDefsByName.keys, trimmedLine, plus_1(this.allVariables.keys, methodScopeVariableNames));
        if (evaluationResult != null) {
          resultString.append_gw00v9$(this.createDebugString_0(evaluationResult.parsedTokens, evaluationResult.tokensWithMergedCompoundUnits, evaluationResult.postFixNotationTokens));
          var lineAndTokens = new NoteCalcEditor$Companion$LineAndTokens(trimmedLine, evaluationResult.postFixNotationTokens);
          currentFunctionDefinition.v = oldCurrentFunctionDefinition.copy_3elgw5$(void 0, void 0, plus(oldCurrentFunctionDefinition.tokenLines, lineAndTokens));
          tmp$_8 = ((tmp$_7 = currentFunctionDefinition.v) != null ? tmp$_7 : Kotlin.throwNPE()).name;
          tmp$_9 = (tmp$_6 = currentFunctionDefinition.v) != null ? tmp$_6 : Kotlin.throwNPE();
          functionDefsByName.put_xwzc9p$(tmp$_8, tmp$_9);
          this.highlightedTexts_0.addAll_brywnq$(evaluationResult.highlightedTexts);
          var currentVariableName = this.tryParseVariableName_0(evaluationResult.lastToken, trimmedLine);
          if (currentVariableName != null) {
            methodScopeVariableNames.add_11rb$(currentVariableName);
          }
        }
        resultString.append_s8itvh$(10);
      }
       else {
        if (currentFunctionDefinition.v != null) {
          currentFunctionDefinition.v = null;
          methodScopeVariableNames.clear();
        }
        var evaluationResult_0 = this.lineParser_0.parseProcessAndEvaulate_0(functionDefsByName.keys, item, this.allVariables.keys);
        if (evaluationResult_0 == null) {
          resultString.append_s8itvh$(10);
          this.highlightedTexts_0.add_11rb$(new NoteCalcEditor$Companion$HighlightedText(item, 'error'));
        }
         else {
          resultString.append_gw00v9$(this.createDebugString_0(evaluationResult_0.parsedTokens, evaluationResult_0.tokensWithMergedCompoundUnits, evaluationResult_0.postFixNotationTokens));
          var currentVariableName_0 = this.tryParseVariableName_0(evaluationResult_0.lastToken, item);
          var resultOperand = this.tokenListEvaulator_0.processPostfixNotationStack_h27eq8$(evaluationResult_0.postFixNotationTokens, this.variables_0, functionDefsByName);
          this.saveResultIntoVariable_0(currentVariableName_0, resultOperand, this.variables_0, this.globalVariables);
          if (resultOperand != null) {
            sum.v += resultOperand.toRawNumber();
            resultsByLineNumber.v = plus(resultsByLineNumber.v, to(nullBasedLineIndex + 1 | 0, resultOperand));
            resultString.append_gw00v9$(this.createResultString_0(resultOperand, currentVariableName_0) + '\n');
            this.variables_0.put_xwzc9p$('$prev', resultOperand);
          }
           else {
            resultString.append_s8itvh$(10);
            if (startsWith_0(item, '--') || startsWith_0(item, '==')) {
              sum.v = 0.0;
            }
          }
          this.highlightedTexts_0.addAll_brywnq$(evaluationResult_0.highlightedTexts);
        }
        var $receiver = this.variables_0;
        var value = new Operand$Number(sum.v, NumberType$Float_getInstance());
        $receiver.put_xwzc9p$('$sum', value);
      }
    }
    return resultString.toString();
  };
  NoteCalcEditor.prototype.createResultString_0 = function (resultOperand, currentVariableName) {
    return this.createHumanizedResultString_0(resultOperand) + ('  ' + Kotlin.toString(currentVariableName != null ? currentVariableName : ''));
  };
  NoteCalcEditor.prototype.saveResultIntoVariable_0 = function (currentVariableName, resultOperand, variables, globalVariables_0) {
    if (currentVariableName != null && resultOperand != null) {
      variables.put_xwzc9p$(currentVariableName, resultOperand);
      if (startsWith_0(currentVariableName, '$')) {
        globalVariables_0.put_xwzc9p$(currentVariableName, resultOperand);
      }
    }
  };
  NoteCalcEditor.prototype.tryParseVariableName_0 = function (lastToken, line) {
    var tmp$;
    if (Kotlin.isType(lastToken, Token$Operator) && Kotlin.equals(lastToken.operator, '=')) {
      var takeWhile$result;
      takeWhile$break: {
        var tmp$_0;
        tmp$_0 = line.length - 1 | 0;
        for (var index = 0; index <= tmp$_0; index++) {
          if (!(Kotlin.unboxChar(Kotlin.toBoxedChar(line.charCodeAt(index))) !== 61)) {
            takeWhile$result = line.substring(0, index);
            break takeWhile$break;
          }
        }
        takeWhile$result = line;
      }
      var $receiver = takeWhile$result;
      var tmp$_1;
      tmp$ = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : Kotlin.throwCCE()).toString();
    }
     else
      tmp$ = null;
    return tmp$;
  };
  NoteCalcEditor.prototype.createDebugString_0 = function (parsedTokens, tokensWithMergedCompoundUnits, postFixNotationTokens) {
    var tmp$;
    var debugEnabled = window.debugEnabled;
    if (debugEnabled) {
      var debugString = '';
      debugString += '| ' + joinToString(parsedTokens) + ' | ' + joinToString(tokensWithMergedCompoundUnits);
      debugString += '| ' + joinToString(postFixNotationTokens);
      tmp$ = debugString;
    }
     else
      tmp$ = '';
    return tmp$;
  };
  NoteCalcEditor.prototype.functionDefinitionStart_0 = function (currentFunctionDefinition, functionDefInCurrentLine) {
    return functionDefInCurrentLine != null && currentFunctionDefinition == null;
  };
  NoteCalcEditor.prototype.stillInTheFunctionBody_0 = function (currentFunctionDefinition, line) {
    var tmp$, tmp$_0;
    return currentFunctionDefinition != null && ((tmp$_0 = (tmp$ = Kotlin.unboxChar(firstOrNull(line))) != null ? isWhitespace(tmp$) : null) != null ? tmp$_0 : false);
  };
  NoteCalcEditor.prototype.createVariablesForPreviousLineResults_0 = function (resultOperands, variables) {
    var tmp$;
    tmp$ = resultOperands.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      variables.put_xwzc9p$('$' + element.first, element.second);
    }
  };
  NoteCalcEditor.prototype.tryParseFunctionDef_0 = function (line) {
    var tmp$;
    var regex = 'fun ([^\\d\\s\\$\\-\\+\\*\\^\\:\\%][^\\(]*)\\(([^\\)]*(,[^\\)]*)*)\\)';
    var matches = line.match(regex);
    if (matches != null) {
      var funName = matches[1];
      var $receiver = split(matches[2], [44]);
      var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1;
        destination.add_11rb$(Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_1 = item) ? tmp$_1 : Kotlin.throwCCE()).toString());
      }
      var destination_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
      var tmp$_2;
      tmp$_2 = destination.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!(element.length === 0)) {
          destination_0.add_11rb$(element);
        }
      }
      var arguments_0 = destination_0;
      tmp$ = new NoteCalcEditor$Companion$FunctionDefinition(funName, arguments_0, emptyList());
    }
     else
      tmp$ = null;
    return tmp$;
  };
  NoteCalcEditor.prototype.createHumanizedResultString_0 = function (quantity) {
    var tmp$, tmp$_0;
    var resultStr = quantity.asString();
    if (Kotlin.isType(quantity, Operand$Number))
      tmp$ = quantity.num;
    else if (Kotlin.isType(quantity, Operand$Quantity))
      tmp$ = quantity.quantity.toNumber();
    else if (Kotlin.isType(quantity, Operand$Percentage))
      tmp$ = quantity.num;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var numberPart = tmp$;
    if (Kotlin.isType(quantity, Operand$Number))
      tmp$_0 = quantity.type;
    else if (Kotlin.isType(quantity, Operand$Quantity))
      tmp$_0 = quantity.type;
    else if (Kotlin.isType(quantity, Operand$Percentage))
      tmp$_0 = quantity.type;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var outputType = tmp$_0;
    var it = indexOf(resultStr, ' ');
    var tmp$_1;
    if (it !== -1) {
      var startIndex = it + 1 | 0;
      tmp$_1 = resultStr.substring(startIndex);
    }
     else
      tmp$_1 = '';
    var unitPart = tmp$_1;
    var roundedNumber = Math.round(Kotlin.numberToDouble(numberPart) * 100.0) / 100.0;
    var localizedString = roundedNumber.toLocaleString('hu').toString();
    var indexOf_1 = indexOf_0(localizedString, 44);
    var wholePart = indexOf_1 === -1 ? localizedString : localizedString.substring(0, indexOf_1);
    var decimalPart = indexOf_1 === -1 ? outputType === NumberType$Float_getInstance() ? ',00' : '\xA0\xA0\xA0' : padEnd(localizedString.substring(indexOf_1), 3, 48);
    var resultNumberPart = padStart(wholePart + decimalPart, 16, 160);
    var fullResult = resultNumberPart + ' ' + unitPart;
    return fullResult;
  };
  NoteCalcEditor.prototype.setupEventHandlers_0 = function (codeMirrorInstance, resultsCodeMirrorInstance, onChange) {
    this.setupOnChangeHandling_0(codeMirrorInstance, resultsCodeMirrorInstance, onChange);
    this.setupScrollMirroring_0(codeMirrorInstance, resultsCodeMirrorInstance);
    this.setupCursorLineMirroring_0(codeMirrorInstance, resultsCodeMirrorInstance);
  };
  function NoteCalcEditor$setupOnChangeHandling$lambda$lambda(closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange) {
    return function () {
      var resultRows = this$NoteCalcEditor.textAreaChanged_0(closure$codeMirrorInstance.getValue());
      closure$resultsCodeMirrorInstance.setValue(resultRows);
      closure$onChange(closure$codeMirrorInstance.getValue());
      var scrollInfo = closure$codeMirrorInstance.getScrollInfo();
      return closure$resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
    };
  }
  function NoteCalcEditor$setupOnChangeHandling$lambda(closure$timerId, closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange) {
    return function (cm, changeObj) {
      window.clearTimeout(closure$timerId.v);
      closure$timerId.v = window.setTimeout(NoteCalcEditor$setupOnChangeHandling$lambda$lambda(closure$codeMirrorInstance, this$NoteCalcEditor, closure$resultsCodeMirrorInstance, closure$onChange), 200);
      return 0;
    };
  }
  NoteCalcEditor.prototype.setupOnChangeHandling_0 = function (codeMirrorInstance, resultsCodeMirrorInstance, onChange) {
    var timerId = {v: 0};
    codeMirrorInstance.on('change', NoteCalcEditor$setupOnChangeHandling$lambda(timerId, codeMirrorInstance, this, resultsCodeMirrorInstance, onChange));
  };
  function NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral(closure$cursor) {
    this.line = closure$cursor.line;
    this.ch = 0;
  }
  NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function NoteCalcEditor$setupCursorLineMirroring$lambda(closure$codeMirrorInstance, closure$resultsCodeMirrorInstance) {
    return function (cm) {
      if (closure$codeMirrorInstance.hasFocus()) {
        var cursor = cm.getCursor('head');
        closure$resultsCodeMirrorInstance.setCursor(new NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral(cursor));
      }
    };
  }
  function NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral_0(closure$cursor) {
    this.line = closure$cursor.line;
    this.ch = 0;
  }
  NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  function NoteCalcEditor$setupCursorLineMirroring$lambda_0(closure$resultsCodeMirrorInstance, closure$codeMirrorInstance) {
    return function (cm) {
      if (closure$resultsCodeMirrorInstance.hasFocus()) {
        var cursor = cm.getCursor('head');
        closure$codeMirrorInstance.setCursor(new NoteCalcEditor$setupCursorLineMirroring$lambda$ObjectLiteral_0(cursor));
      }
    };
  }
  NoteCalcEditor.prototype.setupCursorLineMirroring_0 = function (codeMirrorInstance, resultsCodeMirrorInstance) {
    codeMirrorInstance.on('cursorActivity', NoteCalcEditor$setupCursorLineMirroring$lambda(codeMirrorInstance, resultsCodeMirrorInstance));
    resultsCodeMirrorInstance.on('cursorActivity', NoteCalcEditor$setupCursorLineMirroring$lambda_0(resultsCodeMirrorInstance, codeMirrorInstance));
  };
  function NoteCalcEditor$setupScrollMirroring$lambda(closure$codeMirrorInstance, closure$resultsCodeMirrorInstance) {
    return function (cm) {
      if (closure$codeMirrorInstance.hasFocus()) {
        var scrollInfo = cm.getScrollInfo();
        closure$resultsCodeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    };
  }
  function NoteCalcEditor$setupScrollMirroring$lambda_0(closure$resultsCodeMirrorInstance, closure$codeMirrorInstance) {
    return function (cm) {
      if (closure$resultsCodeMirrorInstance.hasFocus()) {
        var scrollInfo = cm.getScrollInfo();
        closure$codeMirrorInstance.scrollTo(scrollInfo.left, scrollInfo.top);
      }
    };
  }
  NoteCalcEditor.prototype.setupScrollMirroring_0 = function (codeMirrorInstance, resultsCodeMirrorInstance) {
    codeMirrorInstance.on('scroll', NoteCalcEditor$setupScrollMirroring$lambda(codeMirrorInstance, resultsCodeMirrorInstance));
    resultsCodeMirrorInstance.on('scroll', NoteCalcEditor$setupScrollMirroring$lambda_0(resultsCodeMirrorInstance, codeMirrorInstance));
  };
  function NoteCalcEditor$createCodeMirrorInstanceForResults$ObjectLiteral() {
    this.mode = 'c';
    this.styleActiveLine = true;
    this.lineNumbers = true;
    this.readOnly = true;
  }
  NoteCalcEditor$createCodeMirrorInstanceForResults$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  NoteCalcEditor.prototype.createCodeMirrorInstanceForResults_0 = function (resultTextArea) {
    var resultsCodeMirrorInstance = CodeMirrorWrapper_getInstance().fromTextArea_7k2llg$(resultTextArea, new NoteCalcEditor$createCodeMirrorInstanceForResults$ObjectLiteral());
    return resultsCodeMirrorInstance;
  };
  function NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral(this$NoteCalcEditor) {
    this.mode = 'notecalc';
    this.styleActiveLine = true;
    this.lineNumbers = true;
    this.extraKeys = this$NoteCalcEditor.createObjectWithFields_0(NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral$extraKeys$lambda);
    this.noteCalcEditor = this$NoteCalcEditor;
    this.highlightSelectionMatches = new NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral$highlightSelectionMatches$ObjectLiteral();
  }
  function NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral$extraKeys$lambda(js_0) {
    js_0['Ctrl-Space'] = 'autocomplete';
  }
  function NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral$highlightSelectionMatches$ObjectLiteral() {
    this.showToken = /\w/;
    this.annotateScrollbar = true;
    this.showMatchesOnScrollbar = true;
  }
  NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral$highlightSelectionMatches$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  NoteCalcEditor.prototype.createMainCodeMirrorInstance_0 = function (editorTextArea) {
    var codeMirrorInstance = CodeMirrorWrapper_getInstance().fromTextArea_7k2llg$(editorTextArea, new NoteCalcEditor$createMainCodeMirrorInstance$ObjectLiteral(this));
    return codeMirrorInstance;
  };
  function NoteCalcEditor$createObjectWithFields$ObjectLiteral() {
  }
  NoteCalcEditor$createObjectWithFields$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: []
  };
  NoteCalcEditor.prototype.createObjectWithFields_0 = function (initializer) {
    var jsObj = new NoteCalcEditor$createObjectWithFields$ObjectLiteral();
    initializer(jsObj);
    return jsObj;
  };
  function NoteCalcEditor$Companion() {
    NoteCalcEditor$Companion_instance = this;
    this.tokenizer_0 = NoteCalcEditor$Companion$tokenizer$lambda;
  }
  function NoteCalcEditor$Companion$HighlightedText(text_0, cssClassName) {
    this.text = text_0;
    this.cssClassName = cssClassName;
  }
  NoteCalcEditor$Companion$HighlightedText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HighlightedText',
    interfaces: []
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.component1 = function () {
    return this.text;
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.component2 = function () {
    return this.cssClassName;
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.copy_puj7f4$ = function (text_0, cssClassName) {
    return new NoteCalcEditor$Companion$HighlightedText(text_0 === void 0 ? this.text : text_0, cssClassName === void 0 ? this.cssClassName : cssClassName);
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.toString = function () {
    return 'HighlightedText(text=' + Kotlin.toString(this.text) + (', cssClassName=' + Kotlin.toString(this.cssClassName)) + ')';
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    result = result * 31 + Kotlin.hashCode(this.cssClassName) | 0;
    return result;
  };
  NoteCalcEditor$Companion$HighlightedText.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.text, other.text) && Kotlin.equals(this.cssClassName, other.cssClassName)))));
  };
  function NoteCalcEditor$Companion$LineAndTokens(line, postfixNotationStack) {
    this.line = line;
    this.postfixNotationStack = postfixNotationStack;
  }
  NoteCalcEditor$Companion$LineAndTokens.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineAndTokens',
    interfaces: []
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.component1 = function () {
    return this.line;
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.component2 = function () {
    return this.postfixNotationStack;
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.copy_v3d600$ = function (line, postfixNotationStack) {
    return new NoteCalcEditor$Companion$LineAndTokens(line === void 0 ? this.line : line, postfixNotationStack === void 0 ? this.postfixNotationStack : postfixNotationStack);
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.toString = function () {
    return 'LineAndTokens(line=' + Kotlin.toString(this.line) + (', postfixNotationStack=' + Kotlin.toString(this.postfixNotationStack)) + ')';
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.line) | 0;
    result = result * 31 + Kotlin.hashCode(this.postfixNotationStack) | 0;
    return result;
  };
  NoteCalcEditor$Companion$LineAndTokens.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.line, other.line) && Kotlin.equals(this.postfixNotationStack, other.postfixNotationStack)))));
  };
  function NoteCalcEditor$Companion$FunctionDefinition(name, argumentNames, tokenLines) {
    this.name = name;
    this.argumentNames = argumentNames;
    this.tokenLines = tokenLines;
  }
  NoteCalcEditor$Companion$FunctionDefinition.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FunctionDefinition',
    interfaces: []
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.component1 = function () {
    return this.name;
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.component2 = function () {
    return this.argumentNames;
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.component3 = function () {
    return this.tokenLines;
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.copy_3elgw5$ = function (name, argumentNames, tokenLines) {
    return new NoteCalcEditor$Companion$FunctionDefinition(name === void 0 ? this.name : name, argumentNames === void 0 ? this.argumentNames : argumentNames, tokenLines === void 0 ? this.tokenLines : tokenLines);
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.toString = function () {
    return 'FunctionDefinition(name=' + Kotlin.toString(this.name) + (', argumentNames=' + Kotlin.toString(this.argumentNames)) + (', tokenLines=' + Kotlin.toString(this.tokenLines)) + ')';
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.argumentNames) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokenLines) | 0;
    return result;
  };
  NoteCalcEditor$Companion$FunctionDefinition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.argumentNames, other.argumentNames) && Kotlin.equals(this.tokenLines, other.tokenLines)))));
  };
  function NoteCalcEditor$Companion$tokenizer$lambda(tokenStyles, stream, state) {
    var index = state.index;
    var tokenToHighlight = getOrNull(tokenStyles, index);
    if (tokenToHighlight == null) {
      return stream.skipToEnd();
    }
     else {
      if (stream.peek() == ' ' || stream.peek() == '\t') {
        stream.eatSpace();
        return 'space';
      }
       else {
        var words = split_0(tokenToHighlight.text, ['\\s']);
        var all$result;
        all$break: {
          var tmp$;
          tmp$ = words.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            stream.eatSpace();
            if (!stream.match(element, true)) {
              all$result = false;
              break all$break;
            }
          }
          all$result = true;
        }
        var ok = all$result;
        if (ok) {
          state.index = index + 1 | 0;
          return tokenToHighlight.cssClassName;
        }
         else {
          stream.skipToEnd();
          return 'error';
        }
      }
    }
  }
  NoteCalcEditor$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NoteCalcEditor$Companion_instance = null;
  function NoteCalcEditor$Companion_getInstance() {
    if (NoteCalcEditor$Companion_instance === null) {
      new NoteCalcEditor$Companion();
    }
    return NoteCalcEditor$Companion_instance;
  }
  NoteCalcEditor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NoteCalcEditor',
    interfaces: []
  };
  function NumberType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function NumberType_initFields() {
    NumberType_initFields = function () {
    };
    NumberType$Float_instance = new NumberType('Float', 0);
    NumberType$Int_instance = new NumberType('Int', 1);
  }
  var NumberType$Float_instance;
  function NumberType$Float_getInstance() {
    NumberType_initFields();
    return NumberType$Float_instance;
  }
  var NumberType$Int_instance;
  function NumberType$Int_getInstance() {
    NumberType_initFields();
    return NumberType$Int_instance;
  }
  NumberType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NumberType',
    interfaces: [Enum]
  };
  function NumberType$values() {
    return [NumberType$Float_getInstance(), NumberType$Int_getInstance()];
  }
  NumberType.values = NumberType$values;
  function NumberType$valueOf(name) {
    switch (name) {
      case 'Float':
        return NumberType$Float_getInstance();
      case 'Int':
        return NumberType$Int_getInstance();
      default:Kotlin.throwISE('No enum constant hu.nevermind.notecalc.NumberType.' + name);
    }
  }
  NumberType.valueOf_61zpoe$ = NumberType$valueOf;
  function NoteCalcEditorTest() {
    this.tokenParser_0 = new TokenParser();
    this.tokenListSimplifier_0 = new TokenListSimplifier();
  }
  function NoteCalcEditorTest$runTests$num(n) {
    return new Token$NumberLiteral(n, '', NumberType$Int_getInstance());
  }
  function NoteCalcEditorTest$runTests$num_0(n) {
    return new Token$NumberLiteral(n, '', NumberType$Float_getInstance());
  }
  function NoteCalcEditorTest$runTests$op(n) {
    return new Token$Operator(n);
  }
  function NoteCalcEditorTest$runTests$str(n) {
    return new Token$StringLiteral(n);
  }
  function NoteCalcEditorTest$runTests$unit(n) {
    return new Token$UnitOfMeasure(n);
  }
  function NoteCalcEditorTest$runTests$lambda(assert) {
    var tmp$;
    var result = (tmp$ = (new LineParser()).parseProcessAndEvaulate_0(emptyList(), 'ab', listOf_0(['a', 'ab']))) != null ? tmp$ : Kotlin.throwNPE();
    assert.equal(result.parsedTokens.size, 1, "The parser must find the longest variable name 'ab' instead of 'a'");
    assert.equal(first(result.parsedTokens).asString(), 'ab');
  }
  function NoteCalcEditorTest$runTests$lambda_0(assert) {
    var tmp$;
    var result = (tmp$ = (new LineParser()).parseProcessAndEvaulate_0(listOf_0(['a', 'ab']), 'ab()', emptyList())) != null ? tmp$ : Kotlin.throwNPE();
    assert.equal(first(result.parsedTokens).asString(), 'ab');
  }
  NoteCalcEditorTest.prototype.runTests = function () {
    var num = NoteCalcEditorTest$runTests$num;
    var num_0 = NoteCalcEditorTest$runTests$num_0;
    var op = NoteCalcEditorTest$runTests$op;
    var str = NoteCalcEditorTest$runTests$str;
    var unit = NoteCalcEditorTest$runTests$unit;
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('1+2.0'), [num(1), op('+'), num_0(2.0)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('200kg alma + 300 kg ban\xE1n'), [num(200), unit('kg'), str('alma'), op('+'), num(300), unit('kg'), str('ban\xE1n')]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('(1 alma + 4 k\xF6rte) * 3 ember'), [op('('), num(1), str('alma'), op('+'), num(4), str('k\xF6rte'), op(')'), op('*'), num(3), str('ember')]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('1/2s'), [num(1), op('/'), num(2), unit('s')]);
    this.assertTokenListEq_0(this.shuntingYard_0('1/2s'), [num(1), num(2), unit('s'), op('/')]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('0b00101 & 0xFF ^ 0xFF00 << 16 >> 16 ! 0xFF'), [num(5), op('&'), num(255), op('^'), num(65280), op('<<'), num(16), op('>>'), num(16), op('!'), num(255)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('10km/h * 45min in m'), [num(10), unit('km'), op('/'), unit('h'), op('*'), num(45), unit('min'), op('in'), unit('m')]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('10(km/h)^2 * 45min in m'), [num(10), op('('), unit('km'), op('/'), unit('h'), op(')'), op('^'), num(2), op('*'), num(45), unit('min'), op('in'), unit('m')]);
    this.assertTokenListEq_0(this.tokenListSimplifier_0.mergeCompoundUnits_0(this.tokenParser_0.parse_0('12km/h')), [num(12), unit('km/h')]);
    this.assertTokenListEq_0(this.tokenListSimplifier_0.mergeCompoundUnits_0(this.tokenParser_0.parse_0('12km/h*3')), [num(12), unit('km/h'), op('*'), num(3)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('-3'), [op('-'), num(3)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('-0xFF'), [op('-'), num(255)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('-0b110011'), [op('-'), num(51)]);
    this.assertTokenListEq_0(this.tokenListSimplifier_0.mergeCompoundUnits_0(this.tokenParser_0.parse_0('-3')), [op('-'), num(3)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('-0xFF'), [op('-'), num(255)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('-0b110011'), [op('-'), num(51)]);
    this.assertEq_0('30 km', '(10+20)km');
    this.assertEq_0('7500 m', '10(km/h) * 45min in m');
    this.assertEq_0('500 kg', '200kg alma + 300 kg ban\xE1n');
    this.assertEq_1(new Operand$Number(15), '(1 alma + 4 k\xF6rte) * 3 ember');
    this.assertEq_1(new Operand$Percentage(5), '10 as a % of 200');
    this.assertEq_1(new Operand$Percentage(30), '10% + 20%');
    this.assertEq_1(new Operand$Percentage(20), '30% - 10%');
    this.assertEq_1(new Operand$Number(220), '200 + 10%');
    this.assertEq_1(new Operand$Number(180), '200 - 10%');
    this.assertEq_1(new Operand$Number(20), '200 * 10%');
    this.assertEq_1(new Operand$Percentage(30), '(10 + 20)%');
    this.assertEq_1(new Operand$Number(181.82, NumberType$Float_getInstance()), '10% on what is $200');
    this.assertEq_1(new Operand$Number(2000), '10% of what is $200');
    this.assertEq_1(new Operand$Number(222.22, NumberType$Float_getInstance()), '10% off what is $200');
    this.assertTokenListEq_0(this.shuntingYard_0('30% - 10%'), [num(30), op('%'), num(10), op('%'), op('-')]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('I traveled with 45km/h for / 13km in min'), [str('I'), str('traveled'), str('with'), num(45), unit('km'), op('/'), unit('h'), str('for'), op('/'), num(13), unit('km'), op('in'), unit('min')]);
    this.assertEq_0('19.5 min', 'I traveled 13km / at a rate 40km/h in min');
    this.assertEq_0('12 mile/h', 'I traveled 24 miles and rode my bike  / 2 hours');
    this.assertEq_0('40 mile', "Now let's say you rode your bike at a rate of 10 miles/h for * 4 h");
    this.assertEq_1(new Operand$Number(9), '12-3');
    this.assertEq_1(new Operand$Number(1027), '2^10 + 3');
    this.assertEq_1(new Operand$Number(163), '1+2*3^4');
    this.assertEq_0('0.5s', '1/2s');
    this.assertEq_0('0.5s', '1/(2s)');
    this.assertEq_1(new Operand$Number(60), '15 EUR ad\xF3mentes azaz 75-15 eur\xF3b\xF3l kell ad\xF3zni');
    this.assertEq_0('0.529 GB / seconds', 'transfer of around 1.587GB in about / 3 seconds');
    this.assertEq_0('37.5 MB', 'A is a unit but should not be handled here so... 37.5MB of DNA information in it.');
    this.assertEq_1(new Operand$Number(1000), '3k - 2k');
    this.assertEq_1(new Operand$Number(1000000), '3M - 2M');
    this.assertEq_1(new Operand$Number(100), '1GB / 10MB');
    QUnit.test('The parser must find the longest variable name.', NoteCalcEditorTest$runTests$lambda);
    QUnit.test('The parser must find the longest function name.', NoteCalcEditorTest$runTests$lambda_0);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('9-3'), [num(9), op('-'), num(3)]);
    this.assertTokenListEq_0(this.tokenParser_0.parse_0('200 - 10%'), [num(200), op('-'), num(10), op('%')]);
    this.assertTokenListEq_0(this.shuntingYard_0('-1 + -2'), [num(1), op(UNARY_MINUS_TOKEN_SYMBOL), num(2), op(UNARY_MINUS_TOKEN_SYMBOL), op('+')]);
    this.assertTokenListEq_0(this.shuntingYard_0('-1 - -2'), [num(1), op(UNARY_MINUS_TOKEN_SYMBOL), num(2), op(UNARY_MINUS_TOKEN_SYMBOL), op('-')]);
    this.assertEq_1(new Operand$Number(-3), '-3');
    this.assertEq_1(new Operand$Percentage(-30), '-30%');
    this.assertEq_1(new Operand$Number(-3), '-1 + -2');
    this.assertEq_1(new Operand$Number(1), '(-1) - (-2)');
    this.assertEq_1(new Operand$Number(1), '-1 - -(2)');
    this.assertEq_1(new Operand$Number(1), '-1 - -2');
    this.assertEq_1(new Operand$Number(3), '+3');
    this.assertEq_1(new Operand$Number(6), '+3 + +3');
    this.assertEq_1(new Operand$Number(1), '+3 - +2');
    this.assertEq_1(new Operand$Number(5), '+3 - -2');
    this.assertEq_1(new Operand$Number(-3), '+(-(+(3)))');
    this.assertEq_1(new Operand$Number(3), '+-+-3');
    this.assertEq_1(new Operand$Number(-3), '-+-+-3');
  };
  function NoteCalcEditorTest$assertEq$lambda(closure$actualInput, this$NoteCalcEditorTest, closure$expectedValue) {
    return function (assert) {
      var tmp$, tmp$_0;
      var actual = Kotlin.isType(tmp$_0 = (tmp$ = (new TokenListEvaulator()).processPostfixNotationStack_h27eq8$(this$NoteCalcEditorTest.shuntingYard_0(closure$actualInput), emptyMap(), emptyMap())) != null ? tmp$ : Kotlin.throwNPE(), Operand$Quantity) ? tmp$_0 : Kotlin.throwCCE();
      assert.ok(math.unit(closure$expectedValue).equals(actual.quantity), closure$expectedValue + ' != ' + actual);
    };
  }
  NoteCalcEditorTest.prototype.assertEq_0 = function (expectedValue, actualInput) {
    QUnit.test(actualInput, NoteCalcEditorTest$assertEq$lambda(actualInput, this, expectedValue));
  };
  function NoteCalcEditorTest$assertEq$lambda_0(a, b) {
    return Math.round(Kotlin.numberToDouble(a) * 100) === Math.round(Kotlin.numberToDouble(b) * 100);
  }
  function NoteCalcEditorTest$assertEq$lambda_1(closure$actualInput, this$NoteCalcEditorTest, closure$expectedValue, closure$floatEq) {
    return function (assert) {
      var tmp$, tmp$_0, tmp$_1;
      var actual = (tmp$ = (new TokenListEvaulator()).processPostfixNotationStack_h27eq8$(this$NoteCalcEditorTest.shuntingYard_0(closure$actualInput), emptyMap(), emptyMap())) != null ? tmp$ : Kotlin.throwNPE();
      tmp$_0 = closure$expectedValue;
      if (Kotlin.isType(tmp$_0, Operand$Number))
        tmp$_1 = (Kotlin.isType(actual, Operand$Number) && closure$floatEq(actual.num, closure$expectedValue.num));
      else if (Kotlin.isType(tmp$_0, Operand$Quantity))
        tmp$_1 = (Kotlin.isType(actual, Operand$Quantity) && actual.quantity.equals(closure$expectedValue.quantity));
      else if (Kotlin.isType(tmp$_0, Operand$Percentage))
        tmp$_1 = (Kotlin.isType(actual, Operand$Percentage) && closure$floatEq(actual.num, closure$expectedValue.num));
      else
        tmp$_1 = Kotlin.noWhenBranchMatched();
      var ok = tmp$_1;
      assert.ok(ok, 'expected(' + closure$expectedValue.asString() + ') != actual(' + actual.asString() + ')');
    };
  }
  NoteCalcEditorTest.prototype.assertEq_1 = function (expectedValue, actualInput) {
    var floatEq = NoteCalcEditorTest$assertEq$lambda_0;
    QUnit.test(actualInput, NoteCalcEditorTest$assertEq$lambda_1(actualInput, this, expectedValue, floatEq));
  };
  function NoteCalcEditorTest$assertTokenListEq$lambda(closure$actualTokens, closure$expectedTokens, this$NoteCalcEditorTest) {
    return function (assert) {
      assert.equal(closure$actualTokens.size, closure$expectedTokens.length, 'token count');
      var $receiver = zip(closure$expectedTokens, closure$actualTokens);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var this$NoteCalcEditorTest_0 = this$NoteCalcEditorTest;
        var expected = element.component1()
        , actual = element.component2();
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
        if (Kotlin.isType(expected, Token$NumberLiteral)) {
          tmp$_0 = expected.type;
          if (Kotlin.equals(tmp$_0, NumberType$Int_getInstance()))
            tmp$_3 = Kotlin.numberToInt(expected.num) === Kotlin.numberToInt((Kotlin.isType(tmp$_1 = actual, Token$NumberLiteral) ? tmp$_1 : Kotlin.throwCCE()).num);
          else if (Kotlin.equals(tmp$_0, NumberType$Float_getInstance()))
            tmp$_3 = this$NoteCalcEditorTest_0.compareFloats_0(actual, expected, 2);
          else
            tmp$_3 = Kotlin.noWhenBranchMatched();
        }
         else if (Kotlin.isType(expected, Token$UnitOfMeasure))
          tmp$_3 = Kotlin.equals(expected.unitName, (Kotlin.isType(tmp$_2 = actual, Token$UnitOfMeasure) ? tmp$_2 : Kotlin.throwCCE()).unitName);
        else
          tmp$_3 = Kotlin.equals(expected, actual);
        var ok = tmp$_3;
        assert.ok(ok, 'expected: ' + expected + ' but was: ' + actual);
      }
    };
  }
  NoteCalcEditorTest.prototype.assertTokenListEq_0 = function (actualTokens, expectedTokens) {
    QUnit.test(joinToString(actualTokens), NoteCalcEditorTest$assertTokenListEq$lambda(actualTokens, expectedTokens, this));
  };
  NoteCalcEditorTest.prototype.shuntingYard_0 = function (actualInput) {
    return (new LineParser()).shuntingYard_0(this.tokenListSimplifier_0.mergeCompoundUnits_0(this.tokenParser_0.parse_0(actualInput)), emptyList());
  };
  NoteCalcEditorTest.prototype.compareFloats_0 = function (actual, expected, decimalCount) {
    var tmp$;
    return (Kotlin.numberToDouble(expected.num) * Math.pow(10.0, decimalCount) | 0) === (Kotlin.numberToDouble((Kotlin.isType(tmp$ = actual, Token$NumberLiteral) ? tmp$ : Kotlin.throwCCE()).num) * 100 | 0);
  };
  NoteCalcEditorTest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NoteCalcEditorTest',
    interfaces: []
  };
  function Operand() {
  }
  function Operand$Percentage(num_1, type) {
    if (type === void 0)
      type = typeof num_1 === 'number' ? NumberType$Int_getInstance() : NumberType$Float_getInstance();
    Operand.call(this);
    this.num = num_1;
    this.type = type;
  }
  Operand$Percentage.prototype.asString = function () {
    return this.num.toString();
  };
  Operand$Percentage.prototype.toRawNumber = function () {
    return Kotlin.numberToDouble(this.num);
  };
  Operand$Percentage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Percentage',
    interfaces: [Operand]
  };
  Operand$Percentage.prototype.component1 = function () {
    return this.num;
  };
  Operand$Percentage.prototype.component2 = function () {
    return this.type;
  };
  Operand$Percentage.prototype.copy_eilmgh$ = function (num_1, type) {
    return new Operand$Percentage(num_1 === void 0 ? this.num : num_1, type === void 0 ? this.type : type);
  };
  Operand$Percentage.prototype.toString = function () {
    return 'Percentage(num=' + Kotlin.toString(this.num) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Operand$Percentage.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Operand$Percentage.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.type, other.type)))));
  };
  function Operand$Number(num_1, type) {
    if (type === void 0)
      type = typeof num_1 === 'number' ? NumberType$Int_getInstance() : NumberType$Float_getInstance();
    Operand.call(this);
    this.num = num_1;
    this.type = type;
  }
  Operand$Number.prototype.asString = function () {
    return this.num.toString();
  };
  Operand$Number.prototype.toRawNumber = function () {
    return Kotlin.numberToDouble(this.num);
  };
  Operand$Number.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Number',
    interfaces: [Operand]
  };
  Operand$Number.prototype.component1 = function () {
    return this.num;
  };
  Operand$Number.prototype.component2 = function () {
    return this.type;
  };
  Operand$Number.prototype.copy_eilmgh$ = function (num_1, type) {
    return new Operand$Number(num_1 === void 0 ? this.num : num_1, type === void 0 ? this.type : type);
  };
  Operand$Number.prototype.toString = function () {
    return 'Number(num=' + Kotlin.toString(this.num) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Operand$Number.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Operand$Number.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.type, other.type)))));
  };
  function Operand$Quantity(quantity, type) {
    Operand.call(this);
    this.quantity = quantity;
    this.type = type;
  }
  Operand$Quantity.prototype.asString = function () {
    return this.quantity.toString();
  };
  Operand$Quantity.prototype.toRawNumber = function () {
    return Kotlin.numberToDouble(this.quantity.toNumber());
  };
  Operand$Quantity.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Quantity',
    interfaces: [Operand]
  };
  Operand$Quantity.prototype.component1 = function () {
    return this.quantity;
  };
  Operand$Quantity.prototype.component2 = function () {
    return this.type;
  };
  Operand$Quantity.prototype.copy_zans0s$ = function (quantity, type) {
    return new Operand$Quantity(quantity === void 0 ? this.quantity : quantity, type === void 0 ? this.type : type);
  };
  Operand$Quantity.prototype.toString = function () {
    return 'Quantity(quantity=' + Kotlin.toString(this.quantity) + (', type=' + Kotlin.toString(this.type)) + ')';
  };
  Operand$Quantity.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.quantity) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Operand$Quantity.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.quantity, other.quantity) && Kotlin.equals(this.type, other.type)))));
  };
  Operand.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Operand',
    interfaces: []
  };
  function Token() {
  }
  function Token$UnitOfMeasure(unitName, tokens) {
    if (tokens === void 0)
      tokens = emptyList();
    Token.call(this);
    this.unitName = unitName;
    this.tokens = tokens;
  }
  Token$UnitOfMeasure.prototype.asString = function () {
    return this.unitName;
  };
  Token$UnitOfMeasure.prototype.toString = function () {
    return 'Unit(' + this.unitName + ')';
  };
  Token$UnitOfMeasure.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'UnitOfMeasure',
    interfaces: [Token]
  };
  Token$UnitOfMeasure.prototype.component1 = function () {
    return this.unitName;
  };
  Token$UnitOfMeasure.prototype.component2 = function () {
    return this.tokens;
  };
  Token$UnitOfMeasure.prototype.copy_v3d600$ = function (unitName, tokens) {
    return new Token$UnitOfMeasure(unitName === void 0 ? this.unitName : unitName, tokens === void 0 ? this.tokens : tokens);
  };
  Token$UnitOfMeasure.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.unitName) | 0;
    result = result * 31 + Kotlin.hashCode(this.tokens) | 0;
    return result;
  };
  Token$UnitOfMeasure.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.unitName, other.unitName) && Kotlin.equals(this.tokens, other.tokens)))));
  };
  function Token$StringLiteral(str_0) {
    Token.call(this);
    this.str = str_0;
  }
  Token$StringLiteral.prototype.asString = function () {
    return this.str;
  };
  Token$StringLiteral.prototype.toString = function () {
    return 'Str(' + this.str + ')';
  };
  Token$StringLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StringLiteral',
    interfaces: [Token]
  };
  Token$StringLiteral.prototype.component1 = function () {
    return this.str;
  };
  Token$StringLiteral.prototype.copy_61zpoe$ = function (str_0) {
    return new Token$StringLiteral(str_0 === void 0 ? this.str : str_0);
  };
  Token$StringLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.str) | 0;
    return result;
  };
  Token$StringLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.str, other.str))));
  };
  function Token$Variable(variableName) {
    Token.call(this);
    this.variableName = variableName;
  }
  Token$Variable.prototype.asString = function () {
    return this.variableName;
  };
  Token$Variable.prototype.toString = function () {
    return 'Var(' + this.variableName + ')';
  };
  Token$Variable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Variable',
    interfaces: [Token]
  };
  Token$Variable.prototype.component1 = function () {
    return this.variableName;
  };
  Token$Variable.prototype.copy_61zpoe$ = function (variableName) {
    return new Token$Variable(variableName === void 0 ? this.variableName : variableName);
  };
  Token$Variable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.variableName) | 0;
    return result;
  };
  Token$Variable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.variableName, other.variableName))));
  };
  function Token$NumberLiteral(num_1, originalStringRepresentation, type) {
    Token.call(this);
    this.num = num_1;
    this.originalStringRepresentation = originalStringRepresentation;
    this.type = type;
  }
  Token$NumberLiteral.prototype.asString = function () {
    return this.num.toString();
  };
  Token$NumberLiteral.prototype.toString = function () {
    return 'Num(' + this.num + ')';
  };
  Token$NumberLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NumberLiteral',
    interfaces: [Token]
  };
  Token$NumberLiteral.prototype.component1 = function () {
    return this.num;
  };
  Token$NumberLiteral.prototype.component2 = function () {
    return this.originalStringRepresentation;
  };
  Token$NumberLiteral.prototype.component3 = function () {
    return this.type;
  };
  Token$NumberLiteral.prototype.copy_lwrnp9$ = function (num_1, originalStringRepresentation, type) {
    return new Token$NumberLiteral(num_1 === void 0 ? this.num : num_1, originalStringRepresentation === void 0 ? this.originalStringRepresentation : originalStringRepresentation, type === void 0 ? this.type : type);
  };
  Token$NumberLiteral.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.originalStringRepresentation) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    return result;
  };
  Token$NumberLiteral.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.originalStringRepresentation, other.originalStringRepresentation) && Kotlin.equals(this.type, other.type)))));
  };
  function Token$Operator(operator, asStringValue) {
    if (asStringValue === void 0)
      asStringValue = operator;
    Token.call(this);
    this.operator = operator;
    this.asStringValue = asStringValue;
  }
  Token$Operator.prototype.asString = function () {
    return this.asStringValue;
  };
  Token$Operator.prototype.toString = function () {
    return 'Op(' + this.operator + ')';
  };
  Token$Operator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Operator',
    interfaces: [Token]
  };
  Token$Operator.prototype.component1 = function () {
    return this.operator;
  };
  Token$Operator.prototype.component2 = function () {
    return this.asStringValue;
  };
  Token$Operator.prototype.copy_puj7f4$ = function (operator, asStringValue) {
    return new Token$Operator(operator === void 0 ? this.operator : operator, asStringValue === void 0 ? this.asStringValue : asStringValue);
  };
  Token$Operator.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.operator) | 0;
    result = result * 31 + Kotlin.hashCode(this.asStringValue) | 0;
    return result;
  };
  Token$Operator.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.operator, other.operator) && Kotlin.equals(this.asStringValue, other.asStringValue)))));
  };
  Token.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Token',
    interfaces: []
  };
  function TokenListEvaulator() {
  }
  TokenListEvaulator.prototype.processPostfixNotationStack_h27eq8$ = function (tokens, variables, functions) {
    var quantitativeStack = this.processPostfixNotationStackRec_oxe9kf$.call(this, Kotlin.kotlin.collections.emptyList_287e2$(), tokens, null, variables, functions);
    return lastOrNull(quantitativeStack);
  };
  TokenListEvaulator.prototype.processPostfixNotationStackRec_oxe9kf$ = function (quantitativeStack, tokens, lastUnit, variables, functions) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (tokens.isEmpty()) {
      return quantitativeStack;
    }
    var lastUnit_0 = lastUnit;
    var incomingToken = first(tokens);
    if (Kotlin.isType(incomingToken, Token$NumberLiteral))
      tmp$_2 = plus(quantitativeStack, new Operand$Number(incomingToken.num, incomingToken.type));
    else if (Kotlin.isType(incomingToken, Token$Variable)) {
      var variable = variables.get_11rb$(incomingToken.variableName);
      if (variable != null) {
        tmp$_2 = plus(quantitativeStack, variable);
      }
       else
        tmp$_2 = quantitativeStack;
    }
     else if (Kotlin.isType(incomingToken, Token$UnitOfMeasure)) {
      var topOfStack = lastOrNull(quantitativeStack);
      if (topOfStack != null && Kotlin.isType(topOfStack, Operand$Number)) {
        tmp$_2 = plus(dropLast(quantitativeStack, 1), this.addUnitToTheTopOfStackEntry_0(topOfStack, incomingToken));
      }
       else {
        lastUnit_0 = incomingToken.unitName;
        tmp$_2 = quantitativeStack;
      }
    }
     else if (Kotlin.isType(incomingToken, Token$Operator))
      if (startsWith_0(incomingToken.operator, 'fun ')) {
        var funcName = drop_0(incomingToken.operator, 'fun '.length);
        var functionDef = functions.get_11rb$(funcName);
        if (functionDef != null && quantitativeStack.size >= functionDef.argumentNames.size) {
          var arguments_0 = takeLast(quantitativeStack, functionDef.argumentNames.size);
          var methodScope = HashMap_init(plus_0(variables, toMap(zip_0(functionDef.argumentNames, arguments_0))));
          var $receiver = functionDef.tokenLines;
          var destination = Kotlin.kotlin.collections.ArrayList_init_ww73n8$(Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$($receiver, 10));
          var tmp$_3;
          tmp$_3 = $receiver.iterator();
          while (tmp$_3.hasNext()) {
            var item = tmp$_3.next();
            var tmp$_4 = destination.add_11rb$;
            var tmp$_5;
            var lastToken = lastOrNull(item.postfixNotationStack);
            var resultOperand_0 = this.processPostfixNotationStack_h27eq8$(item.postfixNotationStack, methodScope, functions);
            if (resultOperand_0 != null && Kotlin.isType(lastToken, Token$Operator) && Kotlin.equals(lastToken.operator, '=')) {
              var $receiver_0 = item.line;
              var takeWhile$result;
              takeWhile$break: {
                var tmp$_6;
                tmp$_6 = $receiver_0.length - 1 | 0;
                for (var index = 0; index <= tmp$_6; index++) {
                  if (!(Kotlin.unboxChar(Kotlin.toBoxedChar($receiver_0.charCodeAt(index))) !== 61)) {
                    takeWhile$result = $receiver_0.substring(0, index);
                    break takeWhile$break;
                  }
                }
                takeWhile$result = $receiver_0;
              }
              var $receiver_1 = takeWhile$result;
              var tmp$_7;
              tmp$_5 = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_7 = $receiver_1) ? tmp$_7 : Kotlin.throwCCE()).toString();
            }
             else
              tmp$_5 = null;
            var currentVariableName = tmp$_5;
            if (currentVariableName != null && resultOperand_0 != null) {
              methodScope.put_xwzc9p$(currentVariableName, resultOperand_0);
            }
            tmp$_4.call(destination, resultOperand_0);
          }
          var resultOperand = lastOrNull(destination);
          if (resultOperand != null) {
            tmp$_2 = plus(dropLast(quantitativeStack, functionDef.argumentNames.size + 1 | 0), resultOperand);
          }
           else {
            tmp$_2 = dropLast(quantitativeStack, functionDef.argumentNames.size + 1 | 0);
          }
        }
         else {
          tmp$_2 = dropLast(quantitativeStack, 1);
        }
      }
       else {
        if (!quantitativeStack.isEmpty() && Kotlin.equals(incomingToken.operator, '%')) {
          var topOfStack_0 = last(quantitativeStack);
          if (Kotlin.isType(topOfStack_0, Operand$Number)) {
            var num_1 = topOfStack_0.num;
            tmp$_2 = plus(dropLast(quantitativeStack, 1), new Operand$Percentage(num_1, topOfStack_0.type));
          }
           else {
            tmp$_2 = dropLast(quantitativeStack, 1);
          }
        }
         else {
          if (!quantitativeStack.isEmpty()) {
            var lastTwo = takeLast(quantitativeStack, 2);
            var lhs = lastTwo.get_za3lpa$(0);
            var rhs = getOrNull(lastTwo, 1);
            try {
              tmp$ = this.applyOperation_0(incomingToken.operator, lhs, rhs);
            }
             catch (e) {
              if (Kotlin.isType(e, Throwable)) {
                console.error(e);
                tmp$ = to(null, 0);
              }
               else
                throw e;
            }
            var resultOperandAnddropCount = tmp$;
            if (resultOperandAnddropCount.first != null) {
              tmp$_2 = plus(dropLast(quantitativeStack, resultOperandAnddropCount.second), (tmp$_0 = resultOperandAnddropCount.first) != null ? tmp$_0 : Kotlin.throwNPE());
            }
             else {
              tmp$_2 = quantitativeStack;
            }
          }
           else {
            if (!quantitativeStack.isEmpty() && Kotlin.equals(incomingToken.operator, 'in')) {
              var theQuantityThatWillBeConverted = lastOrNull(quantitativeStack);
              if (lastUnit_0 != null && Kotlin.isType(theQuantityThatWillBeConverted, Operand$Quantity)) {
                try {
                  tmp$_1 = theQuantityThatWillBeConverted.quantity.to(lastUnit_0);
                }
                 catch (e) {
                  if (Kotlin.isType(e, Throwable)) {
                    tmp$_1 = null;
                  }
                   else
                    throw e;
                }
                var convertedQuantity = tmp$_1;
                if (convertedQuantity != null) {
                  tmp$_2 = plus(dropLast(quantitativeStack, 1), new Operand$Quantity(convertedQuantity, theQuantityThatWillBeConverted.type));
                }
                 else {
                  tmp$_2 = quantitativeStack;
                }
              }
               else {
                tmp$_2 = quantitativeStack;
              }
            }
             else {
              tmp$_2 = quantitativeStack;
            }
          }
        }
      }
     else if (Kotlin.isType(incomingToken, Token$StringLiteral))
      tmp$_2 = quantitativeStack;
    else
      tmp$_2 = Kotlin.noWhenBranchMatched();
    var modifiedQuantitativeStack = tmp$_2;
    return this.processPostfixNotationStackRec_oxe9kf$(modifiedQuantitativeStack, drop(tokens, 1), lastUnit_0, variables, functions);
  };
  TokenListEvaulator.prototype.addUnitToTheTopOfStackEntry_0 = function (targetNumber, token) {
    var number = targetNumber.num;
    var newQuantityWithUnit = math.unit(number + ' ' + token.unitName);
    return new Operand$Quantity(newQuantityWithUnit, targetNumber.type);
  };
  TokenListEvaulator.prototype.applyOperation_0 = function (operator, lhs, rhs) {
    var tmp$;
    try {
      if (Kotlin.equals(operator, 'as a % of'))
        tmp$ = to(this.asAPercentOfOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, 'on what is'))
        tmp$ = to(this.onWhatIsOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, 'of what is'))
        tmp$ = to(this.ofWhatIsOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, 'off what is'))
        tmp$ = to(this.offWhatIsOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, '*'))
        tmp$ = to(this.multiplyOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, '/'))
        tmp$ = to(this.divideOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, '+'))
        tmp$ = to(this.plusOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, '-'))
        tmp$ = to(this.minusOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else if (Kotlin.equals(operator, UNARY_MINUS_TOKEN_SYMBOL))
        tmp$ = to(this.unaryMinusOperator_0(rhs != null ? rhs : lhs), 1);
      else if (Kotlin.equals(operator, UNARY_PLUS_TOKEN_SYMBOL))
        tmp$ = to(this.unaryPlusOperator_0(rhs != null ? rhs : lhs), 1);
      else if (Kotlin.equals(operator, '^'))
        tmp$ = to(this.powerOperator_0(lhs, rhs != null ? rhs : Kotlin.throwNPE()), 2);
      else
        tmp$ = to(null, 0);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(lhs.asString() + operator + Kotlin.toString(rhs != null ? rhs.asString() : null));
        console.error(e);
        tmp$ = to(null, 0);
      }
       else
        throw e;
    }
    return tmp$;
  };
  TokenListEvaulator.prototype.powerOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Number(Math.pow(Kotlin.numberToDouble(lhs.num), Kotlin.numberToDouble(rhs.num)), lhs.type);
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Quantity(pow(lhs.quantity, Kotlin.numberToDouble(rhs.num)), lhs.type);
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.unaryMinusOperator_0 = function (operand) {
    var tmp$;
    if (Kotlin.isType(operand, Operand$Number))
      tmp$ = operand.copy_eilmgh$(-Kotlin.numberToDouble(operand.num));
    else if (Kotlin.isType(operand, Operand$Quantity))
      tmp$ = operand.copy_zans0s$(operand.quantity);
    else if (Kotlin.isType(operand, Operand$Percentage))
      tmp$ = operand.copy_eilmgh$(-Kotlin.numberToDouble(operand.num));
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.unaryPlusOperator_0 = function (operand) {
    var tmp$;
    if (Kotlin.isType(operand, Operand$Number))
      tmp$ = operand.copy_eilmgh$(+Kotlin.numberToDouble(operand.num));
    else if (Kotlin.isType(operand, Operand$Quantity))
      tmp$ = operand.copy_zans0s$(operand.quantity);
    else if (Kotlin.isType(operand, Operand$Percentage))
      tmp$ = operand.copy_eilmgh$(+Kotlin.numberToDouble(operand.num));
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.minusOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = this.subtractNumbers_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage)) {
        var xPercentOfLeftHandSide = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
        tmp$ = new Operand$Number(Kotlin.numberToDouble(lhs.num) - xPercentOfLeftHandSide, lhs.type);
      }
       else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = this.subtractQuantities_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = new Operand$Percentage(Kotlin.numberToDouble(lhs.num) - Kotlin.numberToDouble(rhs.num), lhs.type);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.plusOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = this.addNumbers_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage)) {
        var xPercentOfLeftHandSide = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
        tmp$ = new Operand$Number(Kotlin.numberToDouble(lhs.num) + xPercentOfLeftHandSide, lhs.type);
      }
       else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = this.addQuantities_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = new Operand$Percentage(Kotlin.numberToDouble(lhs.num) + Kotlin.numberToDouble(rhs.num), lhs.type);
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.divideOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = this.divideNumbers_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = new Operand$Quantity(math.eval(lhs.num + ' / ' + rhs.quantity), NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Percentage)) {
        var x = Kotlin.numberToDouble(lhs.num) / Kotlin.numberToDouble(rhs.num) * 100;
        tmp$ = new Operand$Number(x, lhs.type);
      }
       else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = this.divideQuantities_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.multiplyOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = this.multiplyNumbers_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = new Operand$Quantity(math.eval(lhs.num + ' * ' + rhs.quantity), NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Percentage)) {
        var xPercentOfLeftHandSide = Kotlin.numberToDouble(lhs.num) / 100 * Kotlin.numberToDouble(rhs.num);
        tmp$ = new Operand$Number(xPercentOfLeftHandSide, lhs.type);
      }
       else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = this.multiplyQuantities_0(lhs, rhs);
      else if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.asAPercentOfOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Percentage(Kotlin.numberToDouble(lhs.num) / Kotlin.numberToDouble(rhs.num) * 100, NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Quantity)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = new Operand$Percentage(lhs.toRawNumber() / rhs.toRawNumber() * 100, NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else if (Kotlin.isType(lhs, Operand$Percentage))
      tmp$ = null;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.onWhatIsOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Quantity))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Percentage)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Number(Kotlin.numberToDouble(rhs.num) / (1 + Kotlin.numberToDouble(lhs.num) / 100), NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.ofWhatIsOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Quantity))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Percentage)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Number(Kotlin.numberToDouble(rhs.num) / (Kotlin.numberToDouble(lhs.num) / 100), NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.offWhatIsOperator_0 = function (lhs, rhs) {
    var tmp$;
    if (Kotlin.isType(lhs, Operand$Number))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Quantity))
      tmp$ = null;
    else if (Kotlin.isType(lhs, Operand$Percentage)) {
      if (Kotlin.isType(rhs, Operand$Number))
        tmp$ = new Operand$Number(Kotlin.numberToDouble(rhs.num) / (1 - Kotlin.numberToDouble(lhs.num) / 100), NumberType$Float_getInstance());
      else if (Kotlin.isType(rhs, Operand$Quantity))
        tmp$ = null;
      else if (Kotlin.isType(rhs, Operand$Percentage))
        tmp$ = null;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  TokenListEvaulator.prototype.multiplyQuantities_0 = function (lhs, rhs) {
    var tmp$, tmp$_0;
    var result = multiply(lhs.quantity, rhs.quantity);
    if (Kotlin.equals(typeof result, 'number')) {
      tmp$_0 = new Operand$Number(Kotlin.isNumber(tmp$ = result) ? tmp$ : Kotlin.throwCCE(), lhs.type);
    }
     else {
      tmp$_0 = new Operand$Quantity(result, lhs.type);
    }
    return tmp$_0;
  };
  TokenListEvaulator.prototype.multiplyNumbers_0 = function (lhs, rhs) {
    return new Operand$Number(Kotlin.numberToDouble(lhs.num) * Kotlin.numberToDouble(rhs.num), lhs.type);
  };
  TokenListEvaulator.prototype.addNumbers_0 = function (lhs, rhs) {
    return new Operand$Number(Kotlin.numberToDouble(lhs.num) + Kotlin.numberToDouble(rhs.num), lhs.type);
  };
  TokenListEvaulator.prototype.subtractNumbers_0 = function (lhs, rhs) {
    return new Operand$Number(Kotlin.numberToDouble(lhs.num) - Kotlin.numberToDouble(rhs.num), lhs.type);
  };
  TokenListEvaulator.prototype.divideQuantities_0 = function (lhs, rhs) {
    var tmp$, tmp$_0;
    var result = divide(lhs.quantity, rhs.quantity);
    if (Kotlin.equals(typeof result, 'number')) {
      tmp$_0 = new Operand$Number(Kotlin.isNumber(tmp$ = result) ? tmp$ : Kotlin.throwCCE(), lhs.type);
    }
     else {
      tmp$_0 = new Operand$Quantity(result, lhs.type);
    }
    return tmp$_0;
  };
  TokenListEvaulator.prototype.addQuantities_0 = function (lhs, rhs) {
    return new Operand$Quantity(add(lhs.quantity, rhs.quantity), lhs.type);
  };
  TokenListEvaulator.prototype.subtractQuantities_0 = function (lhs, rhs) {
    return new Operand$Quantity(subtract(lhs.quantity, rhs.quantity), lhs.type);
  };
  TokenListEvaulator.prototype.divideNumbers_0 = function (lhs, rhs) {
    return new Operand$Number(Kotlin.numberToDouble(lhs.num) / Kotlin.numberToDouble(rhs.num), lhs.type);
  };
  TokenListEvaulator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TokenListEvaulator',
    interfaces: []
  };
  function TokenListSimplifier() {
  }
  TokenListSimplifier.prototype.mergeCompoundUnits_0 = function (tokens) {
    var tmp$;
    var restTokens = tokens;
    var output = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var prevToken = new Token$StringLiteral('');
    var codeSmell = false;
    while (!restTokens.isEmpty()) {
      var token = first(restTokens);
      if (Kotlin.isType(token, Token$NumberLiteral)) {
        output.add_11rb$(token);
        tmp$ = drop(restTokens, 1);
      }
       else if (Kotlin.isType(token, Token$Variable)) {
        output.add_11rb$(token);
        tmp$ = drop(restTokens, 1);
      }
       else if (Kotlin.isType(token, Token$StringLiteral)) {
        output.add_11rb$(token);
        tmp$ = drop(restTokens, 1);
      }
       else if (Kotlin.isType(token, Token$Operator)) {
        output.add_11rb$(token);
        tmp$ = drop(restTokens, 1);
      }
       else if (Kotlin.isType(token, Token$UnitOfMeasure)) {
        if (Kotlin.isType(prevToken, Token$Operator) || Kotlin.isType(prevToken, Token$StringLiteral) || Kotlin.isType(prevToken, Token$NumberLiteral) || Kotlin.isType(prevToken, Token$Variable)) {
          var compundUnitResult = this.parseCompundUnit_0(restTokens);
          if (compundUnitResult != null) {
            var tokenCountInThisUnit = compundUnitResult.tokens.size;
            restTokens = drop(restTokens, tokenCountInThisUnit);
            output.add_11rb$(compundUnitResult);
            codeSmell = true;
          }
        }
        if (codeSmell) {
          tmp$ = restTokens;
        }
         else {
          output.add_11rb$(token);
          tmp$ = drop(restTokens, 1);
        }
      }
       else
        tmp$ = Kotlin.noWhenBranchMatched();
      restTokens = tmp$;
      prevToken = token;
      codeSmell = false;
    }
    return output;
  };
  TokenListSimplifier.prototype.parseCompundUnit_0 = function (tokens) {
    if (tokens.size <= 1) {
      return null;
    }
    var prevToken = {v: new Token$StringLiteral('')};
    var tmp$;
    var list = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    tmp$ = tokens.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0, tmp$_1;
      if (Kotlin.isType(item, Token$Operator))
        tmp$_1 = contains_1(['*', '/', '^', '(', ')'], item.operator);
      else if (Kotlin.isType(item, Token$NumberLiteral))
        tmp$_1 = (Kotlin.isType(prevToken.v, Token$Operator) && Kotlin.equals((Kotlin.isType(tmp$_0 = prevToken.v, Token$Operator) ? tmp$_0 : Kotlin.throwCCE()).operator, '^'));
      else if (Kotlin.isType(item, Token$UnitOfMeasure))
        tmp$_1 = true;
      else
        tmp$_1 = false;
      var result = tmp$_1;
      prevToken.v = item;
      if (!result) {
        break;
      }
      list.add_11rb$(item);
    }
    var tokensThatTogetherMayFormACompundUnit = list;
    if (!tokensThatTogetherMayFormACompundUnit.isEmpty()) {
      var maybeCompoundUnit = this.tryFindCorrectCompoundUnit_0(tokensThatTogetherMayFormACompundUnit);
      return maybeCompoundUnit;
    }
    return null;
  };
  TokenListSimplifier.prototype.tryFindCorrectCompoundUnit_0 = function (tokenGroup) {
    var expressionString = joinToString(tokenGroup, '', void 0, void 0, void 0, void 0, Kotlin.getCallableRef('asString', function ($receiver) {
      return $receiver.asString();
    }));
    try {
      var compundUnit = math.unit('1 ' + expressionString);
      var compundUnitname = replace(drop_0(compundUnit.toString(), '1 '.length), ' ', '');
      if (!Kotlin.equals(compundUnitname, expressionString)) {
        return null;
      }
      return new Token$UnitOfMeasure(compundUnitname, tokenGroup);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return this.tryFindCorrectCompoundUnit_0(dropLast(tokenGroup, 1));
      }
       else
        throw e;
    }
  };
  TokenListSimplifier.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TokenListSimplifier',
    interfaces: []
  };
  function TokenParser() {
  }
  function TokenParser$parse$lambda(it) {
    return it.length;
  }
  function TokenParser$parse$lambda_0(it) {
    return it.length;
  }
  function TokenParser$parse$lambda_1(closure$sortedFunctionNames) {
    return function (str_0) {
      return tryParseFunctionInvocation(str_0, closure$sortedFunctionNames);
    };
  }
  function TokenParser$parse$lambda_2(closure$sortedVariableNames) {
    return function (str_0) {
      return tryParseVariableName(str_0, closure$sortedVariableNames);
    };
  }
  TokenParser.prototype.parse_0 = function (text_0, variableNames, functionNames) {
    if (variableNames === void 0)
      variableNames = emptyList();
    if (functionNames === void 0)
      functionNames = emptyList();
    var tmp$, tmp$_0;
    var tokens = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    var tmp$_1;
    var str_0 = {v: Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_1 = text_0) ? tmp$_1 : Kotlin.throwCCE()).toString()};
    var $receiver = variableNames;
    var sortedVariableNames = Kotlin.kotlin.collections.sortedWith_eknfly$($receiver, new Kotlin.kotlin.comparisons.compareByDescending$f(TokenParser$parse$lambda));
    var $receiver_0 = functionNames;
    var sortedFunctionNames = Kotlin.kotlin.collections.sortedWith_eknfly$($receiver_0, new Kotlin.kotlin.comparisons.compareByDescending$f(TokenParser$parse$lambda_0));
    while (str_0.v.length > 0) {
      var originalLength = str_0.v.length;
      var tokenAndRest = tryExtractToken(str_0.v, [TokenParser$parse$lambda_1(sortedFunctionNames), TokenParser$parse$lambda_2(sortedVariableNames), Kotlin.getCallableRef('tryExtractOperator', function (str_1) {
        return tryExtractOperator(str_1);
      }), Kotlin.getCallableRef('tryExtractNumberLiteral', function (str_1) {
        return tryExtractNumberLiteral(str_1);
      }), Kotlin.getCallableRef('tryExtractUnit', function (str_1) {
        return tryExtractUnit(str_1);
      }), Kotlin.getCallableRef('tryExtractStringLiteral', function (str_1) {
        return tryExtractStringLiteral(str_1);
      })]);
      if (tokenAndRest != null) {
        var $receiver_1 = tokenAndRest.second;
        var tmp$_2;
        str_0.v = Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$_2 = $receiver_1) ? tmp$_2 : Kotlin.throwCCE()).toString();
      }
       else {
        break;
      }
      var token = tokenAndRest.first;
      var prevToken = lastOrNull(tokens);
      if (Kotlin.isType(prevToken, Token$NumberLiteral) && Kotlin.isType(token, Token$StringLiteral) && token.str.length === 1 && contains_2('kM', Kotlin.unboxChar(first_0(token.str)))) {
        tmp$ = token.str;
        if (Kotlin.equals(tmp$, 'k'))
          tmp$_0 = Kotlin.numberToDouble(prevToken.num) * 1000;
        else if (Kotlin.equals(tmp$, 'M'))
          tmp$_0 = Kotlin.numberToDouble(prevToken.num) * 1000000;
        else {
          var message = "can't happen";
          throw new Kotlin.kotlin.IllegalStateException(message.toString());
        }
        var newNumber = tmp$_0;
        var newStringRepresentation = prevToken.originalStringRepresentation + token.str;
        tokens.removeAt_za3lpa$(get_lastIndex(tokens));
        tokens.add_11rb$(new Token$NumberLiteral(newNumber, newStringRepresentation, prevToken.type));
      }
       else {
        tokens.add_11rb$(token);
      }
      if (!(str_0.v.length < originalLength)) {
        var message_0 = str_0.v + ': The length of the processing string must be shorter at the end of the block! ' + originalLength;
        throw new Kotlin.kotlin.IllegalArgumentException(message_0.toString());
      }
    }
    return tokens;
  };
  TokenParser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TokenParser',
    interfaces: []
  };
  function tryExtractToken(str_0, tokenRecognizers) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== tokenRecognizers.length; ++tmp$) {
      var element = tokenRecognizers[tmp$];
      var tokenAndRest = element(str_0);
      if (tokenAndRest != null) {
        return tokenAndRest;
      }
    }
    return null;
  }
  function tryExtractNumberLiteral(str_0) {
    var tmp$;
    if (startsWith_0(str_0, '0b')) {
      var $receiver = drop_0(str_0, 2);
      var takeWhile$result;
      takeWhile$break: {
        var tmp$_0;
        tmp$_0 = $receiver.length - 1 | 0;
        for (var index = 0; index <= tmp$_0; index++) {
          if (!contains_2('01 ', Kotlin.unboxChar(Kotlin.toBoxedChar($receiver.charCodeAt(index))))) {
            takeWhile$result = $receiver.substring(0, index);
            break takeWhile$break;
          }
        }
        takeWhile$result = $receiver;
      }
      var numStr = takeWhile$result;
      if (numStr.length === 0) {
        tmp$ = null;
      }
       else {
        var num_1 = toInt_0(replace(numStr, ' ', ''), 2);
        var rest = drop_0(str_0, 2 + numStr.length | 0);
        tmp$ = to(new Token$NumberLiteral(num_1, '0b' + numStr, NumberType$Int_getInstance()), rest);
      }
    }
     else if (startsWith_0(str_0, '0x')) {
      var $receiver_0 = drop_0(str_0, 2);
      var takeWhile$result_0;
      takeWhile$break_0: {
        var tmp$_1;
        tmp$_1 = $receiver_0.length - 1 | 0;
        for (var index_0 = 0; index_0 <= tmp$_1; index_0++) {
          if (!contains_2(' 0123456789abcdefABCDEF', Kotlin.unboxChar(Kotlin.toBoxedChar($receiver_0.charCodeAt(index_0))))) {
            takeWhile$result_0 = $receiver_0.substring(0, index_0);
            break takeWhile$break_0;
          }
        }
        takeWhile$result_0 = $receiver_0;
      }
      var numStr_0 = takeWhile$result_0;
      if (numStr_0.length === 0) {
        tmp$ = null;
      }
       else {
        var num_2 = toInt_0(replace(numStr_0, ' ', ''), 16);
        var rest_0 = drop_0(str_0, 2 + numStr_0.length | 0);
        tmp$ = to(new Token$NumberLiteral(num_2, '0x' + numStr_0, NumberType$Int_getInstance()), rest_0);
      }
    }
     else {
      var c = Kotlin.toBoxedChar(first_0(str_0));
      if (contains_2('0123456789', Kotlin.unboxChar(c)) || Kotlin.unboxChar(c) === 46) {
        var takeWhile$result_1;
        takeWhile$break_1: {
          var tmp$_2;
          tmp$_2 = str_0.length - 1 | 0;
          for (var index_1 = 0; index_1 <= tmp$_2; index_1++) {
            if (!contains_2(' 0123456789.', Kotlin.unboxChar(Kotlin.toBoxedChar(str_0.charCodeAt(index_1))))) {
              takeWhile$result_1 = str_0.substring(0, index_1);
              break takeWhile$break_1;
            }
          }
          takeWhile$result_1 = str_0;
        }
        var numStr_1 = takeWhile$result_1;
        var tmp$_3;
        var count_26 = 0;
        tmp$_3 = Kotlin.kotlin.text.iterator_gw00vp$(numStr_1);
        while (tmp$_3.hasNext()) {
          var element = tmp$_3.next();
          if (Kotlin.unboxChar(Kotlin.toBoxedChar(element)) === 46) {
            count_26 = count_26 + 1 | 0;
          }
        }
        var decimalPointCount = count_26;
        if (decimalPointCount <= 1) {
          var num_3 = toDouble(replace(numStr_1, ' ', ''));
          var rest_1 = drop_0(str_0, numStr_1.length);
          tmp$ = to(new Token$NumberLiteral(num_3, numStr_1, decimalPointCount === 0 ? NumberType$Int_getInstance() : NumberType$Float_getInstance()), rest_1);
        }
         else
          tmp$ = null;
      }
       else {
        tmp$ = null;
      }
    }
    return tmp$;
  }
  function tryExtractOperator(str_0) {
    var tmp$;
    if (startsWith_0(str_0, 'on what is')) {
      tmp$ = to(new Token$Operator('on what is'), drop_0(str_0, 'on what is'.length));
    }
     else if (startsWith_0(str_0, 'of what is')) {
      tmp$ = to(new Token$Operator('of what is'), drop_0(str_0, 'of what is'.length));
    }
     else if (startsWith_0(str_0, 'off what is')) {
      tmp$ = to(new Token$Operator('off what is'), drop_0(str_0, 'off what is'.length));
    }
     else if (startsWith_0(str_0, 'as a % of')) {
      tmp$ = to(new Token$Operator('as a % of'), drop_0(str_0, 'as a % of'.length));
    }
     else if (contains_2('=+-/%*^()&|!', Kotlin.unboxChar(first_0(str_0)))) {
      tmp$ = to(new Token$Operator(String.fromCharCode(Kotlin.toBoxedChar(first_0(str_0)))), drop_0(str_0, 1));
    }
     else if (startsWith_0(str_0, 'in ')) {
      tmp$ = to(new Token$Operator('in'), drop_0(str_0, 2));
    }
     else if (str_0.length > 1) {
      var twoChars = str_0.substring(0, 2);
      if (Kotlin.equals(twoChars, '<<') || Kotlin.equals(twoChars, '>>')) {
        tmp$ = to(new Token$Operator(twoChars), drop_0(str_0, 2));
      }
       else {
        tmp$ = null;
      }
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  }
  function isLetter($receiver) {
    var $receiver_0 = Kotlin.unboxChar($receiver);
    var tmp$ = Kotlin.unboxChar(String.fromCharCode(Kotlin.toBoxedChar($receiver_0)).toLowerCase().charCodeAt(0));
    var $receiver_1 = Kotlin.unboxChar($receiver);
    return tmp$ !== Kotlin.unboxChar(String.fromCharCode(Kotlin.toBoxedChar($receiver_1)).toUpperCase().charCodeAt(0));
  }
  function isDigit($receiver) {
    return contains_2('0123456789', Kotlin.unboxChar($receiver));
  }
  function tryExtractUnit(str_0) {
    var tmp$;
    var takeWhile$result;
    takeWhile$break: {
      var tmp$_0;
      tmp$_0 = str_0.length - 1 | 0;
      for (var index = 0; index <= tmp$_0; index++) {
        if (!isLetter(Kotlin.toBoxedChar(str_0.charCodeAt(index)))) {
          takeWhile$result = str_0.substring(0, index);
          break takeWhile$break;
        }
      }
      takeWhile$result = str_0;
    }
    var piece = takeWhile$result;
    try {
      var unit_0 = math.unit('1 ' + piece);
      tmp$ = to(new Token$UnitOfMeasure(drop_0(unit_0.toString(), '1 '.length)), drop_0(str_0, piece.length));
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        tmp$ = null;
      }
       else
        throw e;
    }
    return tmp$;
  }
  function tryExtractStringLiteral(str_0) {
    if (!!isWhitespace(Kotlin.unboxChar(first_0(str_0)))) {
      var message = 'At this point, str must already be trimmed!';
      throw new Kotlin.kotlin.IllegalArgumentException(message.toString());
    }
    var tmp$ = Kotlin.unboxChar(first_0(str_0));
    var $receiver = drop_0(str_0, 1);
    var takeWhile$result;
    takeWhile$break: {
      var tmp$_0;
      tmp$_0 = $receiver.length - 1 | 0;
      for (var index = 0; index <= tmp$_0; index++) {
        var it = Kotlin.toBoxedChar($receiver.charCodeAt(index));
        if (!(!isDigit(Kotlin.unboxChar(it)) && !contains_2('=%/+-*^() ', Kotlin.unboxChar(it)))) {
          takeWhile$result = $receiver.substring(0, index);
          break takeWhile$break;
        }
      }
      takeWhile$result = $receiver;
    }
    var other = takeWhile$result;
    var extractedStr = String.fromCharCode(Kotlin.toBoxedChar(tmp$)) + other;
    return to(new Token$StringLiteral(extractedStr), drop_0(str_0, extractedStr.length));
  }
  function tryParseVariableName(str_0, variableNames) {
    var tmp$;
    if (!!isWhitespace(Kotlin.unboxChar(first_0(str_0)))) {
      var message = 'At this point, str must already be trimmed!';
      throw new Kotlin.kotlin.IllegalArgumentException(message.toString());
    }
    var firstOrNull$result;
    firstOrNull$break: {
      var tmp$_0;
      tmp$_0 = variableNames.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (startsWith_0(str_0, element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
    var variableName = firstOrNull$result;
    if (variableName != null) {
      tmp$ = to(new Token$Variable(variableName), drop_0(str_0, variableName.length));
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  }
  function tryParseFunctionInvocation(str_0, functionNames) {
    var tmp$;
    if (!!isWhitespace(Kotlin.unboxChar(first_0(str_0)))) {
      var message = 'At this point, str must already be trimmed!';
      throw new Kotlin.kotlin.IllegalArgumentException(message.toString());
    }
    var firstOrNull$result;
    firstOrNull$break: {
      var tmp$_0;
      tmp$_0 = functionNames.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (startsWith_0(str_0, element)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
    var functionName = firstOrNull$result;
    if (functionName != null) {
      tmp$ = to(new Token$StringLiteral(functionName), drop_0(str_0, functionName.length));
    }
     else {
      tmp$ = null;
    }
    return tmp$;
  }
  var package$hu = _.hu || (_.hu = {});
  var package$nevermind = package$hu.nevermind || (package$hu.nevermind = {});
  var package$notecalc = package$nevermind.notecalc || (package$nevermind.notecalc = {});
  Object.defineProperty(package$notecalc, 'CodeMirrorWrapper', {
    get: CodeMirrorWrapper_getInstance
  });
  Object.defineProperty(package$notecalc, 'UNARY_MINUS_TOKEN_SYMBOL', {
    get: function () {
      return UNARY_MINUS_TOKEN_SYMBOL;
    }
  });
  Object.defineProperty(package$notecalc, 'UNARY_PLUS_TOKEN_SYMBOL', {
    get: function () {
      return UNARY_PLUS_TOKEN_SYMBOL;
    }
  });
  LineParser.ShuntingYardStacks = LineParser$ShuntingYardStacks;
  LineParser.OperatorInfo = LineParser$OperatorInfo;
  package$notecalc.LineParser = LineParser;
  package$notecalc.main_kand9s$ = main;
  package$notecalc.add_uwdaz7$ = add;
  package$notecalc.subtract_uwdaz7$ = subtract;
  package$notecalc.multiply_uwdaz7$ = multiply;
  package$notecalc.divide_uwdaz7$ = divide;
  package$notecalc.pow_uwdaz7$ = pow;
  package$notecalc.abs_7pybaq$ = abs;
  package$notecalc.sqrt_7pybaq$ = sqrt;
  NoteCalcEditor$Companion.prototype.HighlightedText = NoteCalcEditor$Companion$HighlightedText;
  NoteCalcEditor$Companion.prototype.LineAndTokens = NoteCalcEditor$Companion$LineAndTokens;
  NoteCalcEditor$Companion.prototype.FunctionDefinition = NoteCalcEditor$Companion$FunctionDefinition;
  Object.defineProperty(NoteCalcEditor, 'Companion', {
    get: NoteCalcEditor$Companion_getInstance
  });
  package$notecalc.NoteCalcEditor = NoteCalcEditor;
  Object.defineProperty(NumberType, 'Float', {
    get: NumberType$Float_getInstance
  });
  Object.defineProperty(NumberType, 'Int', {
    get: NumberType$Int_getInstance
  });
  package$notecalc.NumberType = NumberType;
  package$notecalc.NoteCalcEditorTest = NoteCalcEditorTest;
  Operand.Percentage = Operand$Percentage;
  Operand.Number = Operand$Number;
  Operand.Quantity = Operand$Quantity;
  package$notecalc.Operand = Operand;
  Token.UnitOfMeasure = Token$UnitOfMeasure;
  Token.StringLiteral = Token$StringLiteral;
  Token.Variable = Token$Variable;
  Token.NumberLiteral = Token$NumberLiteral;
  Token.Operator = Token$Operator;
  package$notecalc.Token = Token;
  package$notecalc.TokenListEvaulator = TokenListEvaulator;
  package$notecalc.TokenListSimplifier = TokenListSimplifier;
  package$notecalc.TokenParser = TokenParser;
  UNARY_MINUS_TOKEN_SYMBOL = 'unary-';
  UNARY_PLUS_TOKEN_SYMBOL = 'unary+';
  nextNoteCalcIndex = 0;
  globalVariables = Kotlin.kotlin.collections.HashMap_init_q3lmfv$();
  NOTE_CALC_IDS_KEY = 'commaSeparatedNoteCaclcIds';
  UNNAMED_TITLE = 'Unnamed';
  addButtonClicked = addButtonClicked$lambda;
  defaultText = '==========================================================\n========================== Welcome =======================\n==========================================================\n\nNotecalc is a handy calculator trying to bring the advantages of Soulver\nto the web.\n\nYou can use it as a combination of a calculator and a notepad, mixing calculations,\nnumbers, operators, units of measurement with meaningful, descriptive texts around them,\nproviding context for your calculations. Results on the right are automatically\nupdated when text changes.\n\nText is automatically saved in your local browser, nothing is sent to the server.\nYou can rename the single NoteCalc editors by clicking on the current name at the\nheader of the panel (which is now "Welcome").\nYou can create new editors with the "Add" button at the bottom of the page.\n\nSome examples. Feel free to change them and play around.\n\nPercentages\n===========\n100 + 10%\n200 * 5%\n200 - 20%\n\nNumbers, Hex and binary digits\n==============================\nYou don\'t have to count zeros\n100k\n10M\nspace separated numbers 10 000 000\nBinary and Hex numbers\n0xFF\n0b1100 + 0b0011\n\nVariables\n=========\nBank of America = 50 000 + 5.25%\nCitibank = 50 000 + 6%\nDifference of Citibank - Bank of America\n$prev * 3 years\n$prev holds the result of the previous calculation\n--\n12$ for beer\n2*13$ for tickets\nall spending = $sum\n\n$sum always holds the sum of the previous calculations\n-- you can reset them with at least two dashes (--) or equal signs (==)\n$sum is now zero\n\nUnits of measure\n================\nThe road took 45minutes and the speed of the vehicle was * 12km/h\n(This is an example that comments can be anywhere in an expressions. The previous line works because\nit is basically a simple multiplication between 45minutes and 12km/h, but there are\nwords between the operands and the operator, which, of course, are ignored when calculating the result)\nDownloading a 1GB file with / 10Mb/s in min\nor simply 1GB / 10Mb/s in min\n\nConversions\n===========\n11years in weeks\n1 day in seconds\n12 km/h in m/s\n5m*m/s in km*km/h\n\n\nMethods\n=======\nMethods are defined at the start of the line with a "fun" keyword and a method name.\nMethod name should not contain any space or special characters.\nEvery line starting with a whitespace character after the method name is the body of the method.\n\nfun motion(time)\n  a = (0 - 9.8)m/s^2\n  v0 = 100 m/s\n  x0 = 490 m\n  1/2 * a * time^2 + v0 * time + x0\n\nmotion(1s)\nmotion(10s)\nmotion(20s)\nmotion(30s)';
  Kotlin.defineModule('NoteCalcJS', _);
  main([]);
  return _;
}(typeof NoteCalcJS === 'undefined' ? {} : NoteCalcJS, kotlin);
