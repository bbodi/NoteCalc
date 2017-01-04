package hu.nevermind.notecalc

@native("Unit")
class Quantity {
    fun equalBase(quantity: Quantity): Boolean = noImpl
    fun toNumber(): Number = noImpl
    @native("to") fun convertTo(unitName: String): Quantity = noImpl
    fun toNumber(unitName: String): Number = noImpl
    fun equals(other: Any): Boolean = noImpl
}

@native("math")
object MathJs {
    @native("add") fun add(a: Any, b: Any): Quantity = noImpl
    @native("subtract") fun subtract(a: Any, b: Any): Quantity = noImpl
    @native("multiply") fun multiply(a: Any, b: Any): Quantity = noImpl
    @native("divide") fun divide(a: Any, b: Any): Quantity = noImpl
    @native("pow") fun pow(a: Any, b: Any): Quantity = noImpl
    @native("abs") fun abs(a: Any): Quantity = noImpl
    @native("sqrt") fun sqrt(a: Any): Quantity = noImpl

}

fun Quantity.add(other: Any): Quantity = MathJs.add(this, other)
fun Quantity.subtract(other: Any): Quantity = MathJs.subtract(this, other)
fun Quantity.multiply(other: Any): Any = MathJs.multiply(this, other)
fun Quantity.divide(other: Any): Any = MathJs.divide(this, other)
fun Quantity.pow(other: Any): Quantity = MathJs.pow(this, other)
fun Quantity.abs(): Quantity = MathJs.abs(this)
fun Quantity.sqrt(): Quantity = MathJs.sqrt(this)

@native("math.unit")
fun parseUnitName(expressionString: String): Quantity = noImpl

@native("math.eval")
fun evaluateUnitExpression(expressionString: String): Quantity = noImpl
