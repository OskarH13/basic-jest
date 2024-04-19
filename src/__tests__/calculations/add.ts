import { describe, it, expect } from "@jest/globals"
import { add } from "../../calculations/add"
import { Calculation } from "../../types/calculation"

describe('add', () => {
  it('should add two numbers', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 2,
      operator: '+',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(add(calculation)).toBe(3)
  })

  it('should throw an error if the operator is not +', () => {
    const calculation: Calculation = {
      number1: 1,
      number2: 2,
      operator: '-',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    expect(() => add(calculation)).toThrowError('Invalid operator')
  })
})
