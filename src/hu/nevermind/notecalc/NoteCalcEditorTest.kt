package hu.nevermind.notecalc

import kotlin.js.Math


class NoteCalcEditorTest {

    private val tokenParser: TokenParser = TokenParser()
    private val tokenListSimplifier: TokenListSimplifier = TokenListSimplifier()

    fun runTests() {
        fun num(n: Int) = Token.NumberLiteral(n, "", NumberType.Int)
        fun num(n: Double) = Token.NumberLiteral(n, "", NumberType.Float)
        fun op(n: String) = Token.Operator(n)
        fun str(n: String) = Token.StringLiteral(n)
        fun unit(n: String) = Token.UnitOfMeasure(n)

        assertTokenListEq(tokenParser.parse("1+2.0"),
                num(1),
                op("+"),
                num(2.0))
        assertTokenListEq(tokenParser.parse("200kg alma + 300 kg banán"),
                num(200),
                unit("kg"),
                str("alma"),
                op("+"),
                num(300),
                unit("kg"),
                str("banán")
        )
        assertTokenListEq(tokenParser.parse("(1 alma + 4 körte) * 3 ember"),
                op("("), num(1), str("alma"), op("+"), num(4), str("körte"), op(")"), op("*"), num(3), str("ember")
        )
        assertTokenListEq(tokenParser.parse("1/2s"),
                num(1), op("/"), num(2), unit("s")
        )
        assertTokenListEq(LineParser().shuntingYard(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse("1/2s")), emptyList()),
                num(1), num(2), unit("s"), op("/")
        )
        assertTokenListEq(tokenParser.parse("0b00101 & 0xFF ^ 0xFF00 << 16 >> 16 ! 0xFF"),
                num(0b00101), op("&"), num(0xFF), op("^"), num(0xFF00), op("<<"), num(16), op(">>"), num(16), op("!"), num(0xFF)
        )
        assertTokenListEq(tokenParser.parse("10km/h * 45min in m"),
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
        assertTokenListEq(tokenParser.parse("10(km/h)^2 * 45min in m"),
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
        assertTokenListEq(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse("12km/h")),
                num(12),
                unit("km/h")
        )
        assertTokenListEq(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse("12km/h*3")),
                num(12),
                unit("km/h"),
                op("*"),
                num(3)
        )
        assertTokenListEq(tokenParser.parse("-3"), op("-"), num(3))
        assertTokenListEq(tokenParser.parse("-0xFF"), op("-"), num(255))
        assertTokenListEq(tokenParser.parse("-0b110011"), op("-"), num(51))
        assertTokenListEq(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse("-3")), op("-"), num(3))
        assertTokenListEq(tokenParser.parse("-0xFF"), op("-"), num(255))
        assertTokenListEq(tokenParser.parse("-0b110011"), op("-"), num(51))

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

        assertTokenListEq(tokenParser.parse("I traveled with 45km/h for / 13km in min"),
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

    private fun assertEq(expectedValue: String, actualInput: String) {
        QUnit.test(actualInput) { assert ->
            val actual = TokenListEvaulator().processPostfixNotationStack(LineParser().shuntingYard(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse(actualInput)), emptyList()), emptyMap(), emptyMap())!! as Operand.Quantity
            assert.ok(MathJs.parseUnitName(expectedValue).equals(actual.quantity),
                    "$expectedValue != $actual")
        }
    }

    private fun assertEq(expectedValue: Operand, actualInput: String) {
        val floatEq = { a: Number, b: Number -> Math.round(a.toDouble() * 100) == Math.round(b.toDouble() * 100) }
        QUnit.test(actualInput) { assert ->
            val actual = TokenListEvaulator().processPostfixNotationStack(LineParser().shuntingYard(tokenListSimplifier.mergeCompoundUnitsAndUnaryMinusOperators(tokenParser.parse(actualInput)), emptyList()), emptyMap(), emptyMap())!!
            val ok = when (expectedValue) {
                is Operand.Number -> actual is Operand.Number && floatEq(actual.num, expectedValue.num)
                is Operand.Quantity -> actual is Operand.Quantity && actual.quantity.equals(expectedValue.quantity)
                is Operand.Percentage -> actual is Operand.Percentage && floatEq(actual.num, expectedValue.num)
            }
            assert.ok(ok, "${expectedValue.asString()} != ${actual.asString()}")
        }
    }

    private fun assertTokenListEq(actualTokens: List<Token>, vararg expectedTokens: Token) {
        QUnit.test("") { assert ->
            assert.equal(actualTokens.size, expectedTokens.size)
            expectedTokens.zip(actualTokens).forEach { (expected, actual) ->
                val ok = when (expected) {
                    is Token.NumberLiteral -> {
                        when (expected.type) {
                            NumberType.Int -> expected.num.toInt() == (actual as Token.NumberLiteral).num.toInt()
                            NumberType.Float -> compareFloats(actual, expected, decimalCount = 2)
                        }
                    }
                    is Token.UnitOfMeasure -> expected.unitName == (actual as Token.UnitOfMeasure).unitName
                    else -> expected.equals(actual)
                }
                assert.ok(ok, "expected: $expected but was: $actual")
            }
        }
    }

    private fun compareFloats(actual: Token, expected: Token.NumberLiteral, decimalCount: Int) = (expected.num.toFloat() * Math.pow(10.0, decimalCount.toDouble())).toInt() == ((actual as Token.NumberLiteral).num.toFloat() * 100).toInt()


}