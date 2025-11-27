// my-project/__tests__/math.test.ts

// Import the functions you want to test
import { square, isEven } from '../utils/math';

// describe() groups related tests together (e.g., all tests for 'math' functions)
describe('Math Utility Functions', () => {

  // A single test case for the square function
  it('should correctly calculate the square of a positive number', () => {
    // Arrange: Define inputs
    const input = 5;

    // Act: Call the function
    const result = square(input);

    // Assert: Check the output using Jest matchers
    expect(result).toBe(25); // Checks for strict equality
  });

  // Another test case for a different scenario
  it('should calculate the square of a negative number', () => {
    const result = square(-4);
    expect(result).toBe(16);
  });

  // A test case for the isEven function
  it('should return true for an even number', () => {
    expect(isEven(10)).toBe(true);
  });

  // A test case for the isEven function
  it('should return false for an odd number', () => {
    expect(isEven(7)).toBe(false);
  });
});
