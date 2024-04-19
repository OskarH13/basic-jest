import { Calculation, ParsedRawCalculation, Operators, operators } from "../types/calculation";

export function parseRawInput(input: string): ParsedRawCalculation {

  // ensure that the input looks something like this: '1 + 2' or '-1.1 * 2.2'
  const regexPattern = /^(-?\d+(\.\d+)?)\s*([+\-*\/])\s*(-?\d+(\.\d+)?)$/

  if (!regexPattern.test(input)) {
    throw new Error('Please provide a valid calculation string')
  }

  const matches = input.match(regexPattern)!

  const rawInput: ParsedRawCalculation = {
    number1: matches[1], // number on the left side of the operator
    number2: matches[4], // number on the right side of the operator
    operator: matches[3], // operator
    decimalPart1: matches[2], // decimal part of the number on the left side of the operator
    decimalPart2: matches[5] // decimal part of the number on the right side of the operator
  }

  return rawInput

}


export function transformRawCalculationToCalculation(rawCalculation: ParsedRawCalculation): Calculation {

  if (!operators.includes(rawCalculation.operator as Operators)) {
    throw new Error('Please provide a valid operator')
  }

  const calculation: Calculation = {
    number1: parseFloat(rawCalculation.number1),
    number2: parseFloat(rawCalculation.number2),
    operator: rawCalculation.operator as Operators,
    decimalPart1: rawCalculation.decimalPart1 ? parseFloat(rawCalculation.decimalPart1) : undefined,
    decimalPart2: rawCalculation.decimalPart2 ? parseFloat(rawCalculation.decimalPart2) : undefined
  }

  return calculation

}