import { describe, it, expect } from "@jest/globals"
import { divide } from "../../calculations/divide"
import { Calculation } from "../../types/calculation"

// now we test the divide function using AAA pattern

describe('divide', () => {
  it('should divide two numbers', () => {

    /// Arrange (multiple tests in the same test suit)

    const calculation1: Calculation = {
      number1: 4,
      number2: 2,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation2: Calculation = {
      number1: 10,
      number2: -5,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation3: Calculation = {
      number1: -20,
      number2: 10,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation4: Calculation = {
      number1: -6,
      number2: -3,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation5: Calculation = {
      number1: 7,
      number2: 2,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation6: Calculation = {
      number1: -1,
      number2: 3,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    // Act (invoke the function)

    const divide1 = divide(calculation1)
    const divide2 = divide(calculation2)
    const divide3 = divide(calculation3)
    const divide4 = divide(calculation4)
    const divide5 = divide(calculation5)
    const divide6 = divide(calculation6)

    // Assert (check the result)

    expect(divide1).toBe(2)
    expect(divide2).toBe(-2)
    expect(divide3).toBe(-2)
    expect(divide4).toBe(2)
    expect(divide5).toBe(3.5)
    expect(divide6).toBe(-0.3333333333333333)

  })

  it('should throw an error if the operator is not /', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 2,
      operator: '+',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(() => divide(calculation)).toThrowError('Invalid operator')
  })

  it('should throw an error if the second number is 0', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 0,
      operator: '/',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(() => divide(calculation)).toThrowError('Cannot divide by zero')
  })
})
