import { Calculation } from "../types/calculation";

export function divide(calculation: Calculation): number {
  if (calculation.operator !== '/') {
    throw new Error('Invalid operator')
  }

  if (calculation.number2 === 0) {
    throw new Error('Cannot divide by zero')
  }

  return calculation.number1 / calculation.number2
}