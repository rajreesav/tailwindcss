// my-project/utils/math.ts

/**
 * Calculates the square of a given number.
 * @param a The number to square.
 * @returns The result of a * a.
 */
export function square(a: number): number {
  return a * a;
}

/**
 * Checks if a number is even.
 * @param n The number to check.
 * @returns True if the number is even, false otherwise.
 */
export function isEven(n: number): boolean {
  return n % 2 === 0;
}
