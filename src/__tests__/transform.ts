import { it, expect, describe } from '@jest/globals';
import { parseRawInput, transformRawCalculationToCalculation } from '../utils/inputParser'

describe('inputParser', () => {

  describe('operations', () => {
    it('should recognise all predefined symbols', () => {
      const argvString1 = '1+2'
      const argvString2 = '1-2'
      const argvString3 = '1*2'
      const argvString4 = '1/2'

      expect(parseRawInput(argvString1).operator).toBe('+')
      expect(parseRawInput(argvString2).operator).toBe('-')
      expect(parseRawInput(argvString3).operator).toBe('*')
      expect(parseRawInput(argvString4).operator).toBe('/')
    })

    it('should recognise all predefiended symbols in combination with negative numbers', () => {
      const argvString1 = '1+-2'
      const argvString2 = '1--2'
      const argvString3 = '1*-2'
      const argvString4 = '1/-2'

      expect(parseRawInput(argvString1).operator).toBe('+')
      expect(parseRawInput(argvString2).operator).toBe('-')
      expect(parseRawInput(argvString3).operator).toBe('*')
      expect(parseRawInput(argvString4).operator).toBe('/')
    })


    it('should reject all non predefiended symbols', () => {
      const argvString1 = '1^2'
      const argvString2 = '1%2'
      const argvString3 = '1^-2'
      const argvString4 = '1%-2'

      expect(() => parseRawInput(argvString1)).toThrowError()
      expect(() => parseRawInput(argvString2)).toThrowError()
      expect(() => parseRawInput(argvString3)).toThrowError()
      expect(() => parseRawInput(argvString4)).toThrowError()

    })
  })

  describe('numbers', () => {

    it('should recognise positive and negative numbers', () => {
      const argvString1 = '1+2'
      const argvString2 = '1+-2'
      const argvString3 = '-1+2'
      const argvString4 = '-1+-2'

      expect(parseRawInput(argvString1).number1).toBe('1')
      expect(parseRawInput(argvString1).number2).toBe('2')

      expect(parseRawInput(argvString2).number1).toBe('1')
      expect(parseRawInput(argvString2).number2).toBe('-2')

      expect(parseRawInput(argvString3).number1).toBe('-1')
      expect(parseRawInput(argvString3).number2).toBe('2')

      expect(parseRawInput(argvString4).number1).toBe('-1')
      expect(parseRawInput(argvString4).number2).toBe('-2')

    })

  })

  describe('decimals', () => {

    it('should recognise positive numbers with decimal parts', () => {
      const argvString1 = '1.1+2.2'
      const argvString2 = '1.1+-2.2'
      const argvString3 = '-1.1+-2.2'
      const argvString4 = '-1.1+2.2'

      expect(parseRawInput(argvString1).number1).toBe('1.1')
      expect(parseRawInput(argvString1).number2).toBe('2.2')

      expect(parseRawInput(argvString2).number1).toBe('1.1')
      expect(parseRawInput(argvString2).number2).toBe('-2.2')

      expect(parseRawInput(argvString3).number1).toBe('-1.1')
      expect(parseRawInput(argvString3).number2).toBe('-2.2')

      expect(parseRawInput(argvString4).number1).toBe('-1.1')
      expect(parseRawInput(argvString4).number2).toBe('2.2')
    })

  })

})


describe('transformRawCalculationToCalculation', () => {

  it('should transform a ParsedRawCalculation to a Calculation', () => {
    const rawCalculation = {
      number1: '1.1',
      number2: '2.2',
      operator: '+',
      decimalPart1: '.1',
      decimalPart2: '.2'
    }

    const calculation = transformRawCalculationToCalculation(rawCalculation)

    expect(calculation.number1).toBe(1.1)
    expect(calculation.number2).toBe(2.2)
    expect(calculation.operator).toBe('+')
    expect(calculation.decimalPart1).toBe(0.1)
    expect(calculation.decimalPart2).toBe(0.2)
  })

  it('should transform a ParsedRawCalculation to a Calculation without decimal parts', () => {
    const rawCalculation = {
      number1: '1',
      number2: '2',
      operator: '+',
      decimalPart1: undefined,
      decimalPart2: undefined
    }

    const calculation = transformRawCalculationToCalculation(rawCalculation)

    expect(calculation.number1).toBe(1)
    expect(calculation.number2).toBe(2)
    expect(calculation.operator).toBe('+')
    expect(calculation.decimalPart1).toBe(undefined)
    expect(calculation.decimalPart2).toBe(undefined)
  })

  it('should transform a ParsedRawCalculation to a Calculation with only one decimal part', () => {
    const rawCalculation = {
      number1: '1.1',
      number2: '2',
      operator: '+',
      decimalPart1: '.1',
      decimalPart2: undefined
    }

    const calculation = transformRawCalculationToCalculation(rawCalculation)

    expect(calculation.number1).toBe(1.1)
    expect(calculation.number2).toBe(2)
    expect(calculation.operator).toBe('+')
    expect(calculation.decimalPart1).toBe(0.1)
    expect(calculation.decimalPart2).toBe(undefined)

    expect(calculation).toStrictEqual({
      number1: 1.1,
      number2: 2,
      operator: '+',
      decimalPart1: 0.1,
      decimalPart2: undefined
    })
  })

  it('should throw if operation is not recognised', () => {
    const rawCalculation = {
      number1: '1.1',
      number2: '2',
      operator: '^',
      decimalPart1: '.1',
      decimalPart2: undefined
    }

    expect(() => transformRawCalculationToCalculation(rawCalculation)).toThrowError()
  })

})