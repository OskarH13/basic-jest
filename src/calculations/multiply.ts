import { Calculation } from "../types/calculation";

export function multiply(calculation: Calculation): number {
  if (calculation.operator !== '*') {
    throw new Error('Invalid operator')
  }

  return calculation.number1 * calculation.number2
}