export type ParsedRawCalculation = {
  number1: string
  number2: string,
  operator: string,
  decimalPart1: string | undefined,
  decimalPart2: string | undefined
}

export const operators = ['+', '-', '*', '/'] as const
export type Operators = typeof operators[number]

export type Calculation = {
  number1: number,
  number2: number,
  operator: Operators,
  decimalPart1: number | undefined,
  decimalPart2: number | undefined
}