import { describe, it, expect } from "@jest/globals"
import { subtract } from "../../calculations/subtract"
import { Calculation } from "../../types/calculation"

describe('subtract', () => {
  it('should subtract two numbers', () => {
    const calculation1: Calculation = {
      number1: 2.5,
      number2: -6,
      operator: "-",
      decimalPart1: 0.5,
      decimalPart2: undefined
    }

    const calculation2: Calculation = {
      number1: 5,
      number2: 0,
      operator: "-",
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(subtract(calculation1)).toBe(8.5)
    expect(subtract(calculation2)).toBe(5)
  })

  it('should throw an error if the operator is not -', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 2,
      operator: '+',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(() => subtract(calculation)).toThrowError('Invalid operator')
  })
})