import { describe, expect, it } from "@jest/globals";
import { add } from "../calculations/add";
import { divide } from "../calculations/divide";
import { multiply } from "../calculations/multiply";
import { subtract } from "../calculations/subtract";
import { main, chooseCalculationAndExecute } from "../utils/handleWorkflow";
import { Calculation } from "../types/calculation";

describe('workflow', () => {
  describe('chooseCalculation', () => {
    it('should return the correct function for the given operator', () => {

      const calculation1: Calculation = {
        number1: 1,
        number2: 2,
        operator: '+',
        decimalPart1: undefined,
        decimalPart2: undefined
      }

      const calculation2: Calculation = {
        number1: 1,
        number2: 2,
        operator: '-',
        decimalPart1: undefined,
        decimalPart2: undefined
      }

      const calculation3: Calculation = {
        number1: 1,
        number2: 2,
        operator: '*',
        decimalPart1: undefined,
        decimalPart2: undefined
      }

      const calculation4: Calculation = {
        number1: 1,
        number2: 2,
        operator: '/',
        decimalPart1: undefined,
        decimalPart2: undefined
      }

      expect(chooseCalculationAndExecute(calculation1)).toBe(add(calculation1))
      expect(chooseCalculationAndExecute(calculation2)).toBe(subtract(calculation2))
      expect(chooseCalculationAndExecute(calculation3)).toBe(multiply(calculation3))
      expect(chooseCalculationAndExecute(calculation4)).toBe(divide(calculation4))

    })

    it('should throw an error if the operator is not valid', () => {
      const calculation: Calculation = {
        number1: 1,
        number2: 2,
        // @ts-expect-error
        operator: '!',
        decimalPart1: undefined,
        decimalPart2: undefined
      }

      expect(() => chooseCalculationAndExecute(calculation)).toThrowError('Invalid operator')
    })
  })

  describe('main', () => {
    it('should return the correct result for a given calculation string', () => {
      const argv = ['', '', '1+2']
      expect(main(argv)).toBe(3)
    })

    it('should throw an error if no calculation string is provided', () => {
      const argv = ['', '']
      expect(() => main(argv)).toThrowError('Please provide a calculation string')
    })
  })
})