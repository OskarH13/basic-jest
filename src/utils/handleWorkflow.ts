import { add } from "../calculations/add"
import { divide } from "../calculations/divide"
import { multiply } from "../calculations/multiply"
import { subtract } from "../calculations/subtract"
import { Calculation } from "../types/calculation"
import { parseRawInput, transformRawCalculationToCalculation } from "./inputParser"

export function chooseCalculationAndExecute(calculation: Calculation): number {
  switch (calculation.operator) {
    case '+':
      return add(calculation)
    case '-':
      return subtract(calculation)
    case '*':
      return multiply(calculation)
    case '/':
      return divide(calculation)
    default:
      throw new Error('Invalid operator')
  }
}

export function main(argv: string[]) {

  const calculationString = argv[2]

  if (!calculationString) {
    throw new Error('Please provide a calculation string')
  }

  const rawInputObject = parseRawInput(calculationString)
  const calculationObject = transformRawCalculationToCalculation(rawInputObject)
  const result = chooseCalculationAndExecute(calculationObject)

  return result

}