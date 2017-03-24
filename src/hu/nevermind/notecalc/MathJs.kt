package hu.nevermind.notecalc

@JsName("Unit")
@JsNonModule
external class Quantity {
    fun equalBase(quantity: Quantity): Boolean = definedExternally
    fun toNumber(): Number = definedExternally
    @JsName("to") fun convertTo(unitName: String): Quantity = definedExternally
    fun toNumber(unitName: String): Number = definedExternally
    fun equals(other: Any): Boolean = definedExternally
}

@JsName("math")
@JsNonModule
external
object MathJs {
    fun add(a: Any, b: Any): Quantity = definedExternally
    fun subtract(a: Any, b: Any): Quantity = definedExternally
    fun multiply(a: Any, b: Any): Quantity = definedExternally
    fun divide(a: Any, b: Any): Quantity = definedExternally
    fun pow(a: Any, b: Any): Quantity = definedExternally
    fun abs(a: Any): Quantity = definedExternally
    fun sqrt(a: Any): Quantity = definedExternally

    @JsName("unit")
    fun parseUnitName(expressionString: String): Quantity

    @JsName("eval")
    fun evaluateUnitExpression(expressionString: String): Quantity = definedExternally
}

fun Quantity.add(other: Any): Quantity = MathJs.add(this, other)
fun Quantity.subtract(other: Any): Quantity = MathJs.subtract(this, other)
fun Quantity.multiply(other: Any): Any = MathJs.multiply(this, other)
fun Quantity.divide(other: Any): Any = MathJs.divide(this, other)
fun Quantity.pow(other: Any): Quantity = MathJs.pow(this, other)
fun Quantity.abs(): Quantity = MathJs.abs(this)
fun Quantity.sqrt(): Quantity = MathJs.sqrt(this)
