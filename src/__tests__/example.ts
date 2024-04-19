import { expect, describe, it } from '@jest/globals';

describe('learn jest', () => {
  it('should be easy to test', () => {

    // further reading: https://jestjs.io/docs/expect

    expect(1 + 1).toBe(2)
    expect(2 + 2).not.toBe(5)

    expect({ name: 'John' }).toEqual({ name: 'John' })
    expect({ name: 'John' }).not.toEqual({ name: 'Doe' })

    expect([1, 2, 3]).toContain(2)

    expect(null).toBeNull()
    expect(undefined).toBeUndefined()
    expect(undefined).not.toBeTruthy()

    expect(1).toBeGreaterThan(0)
    expect(1).toBeLessThan(2)

    const throwError = () => {
      throw new Error('Error')
    }

    expect(throwError).toThrowError('Error')
  })
})