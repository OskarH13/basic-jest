import { describe, it, expect } from "@jest/globals"
import { multiply } from "../../calculations/multiply"
import { Calculation } from "../../types/calculation"

describe('mulitiply', () => {
  it('should multiply two numbers', () => {
    const calculation1: Calculation = {
      number1: 2.5,
      number2: -6,
      operator: "*",
      decimalPart1: 0.5,
      decimalPart2: undefined
    }

    const calculation2: Calculation = {
      number1: 5,
      number2: 0,
      operator: "*",
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(multiply(calculation1)).toBe(-15)
    expect(multiply(calculation2)).toBe(0)
  })

  it('should throw an error if the operator is not *', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 2,
      operator: '-',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(() => multiply(calculation)).toThrowError('Invalid operator')
  })
})