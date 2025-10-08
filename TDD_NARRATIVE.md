# Test-Driven Development (TDD) Narrative for Calc Class

## Overview
This document describes the Test-Driven Development process used to extend the Calc class from a simple addition calculator to a full four-function calculator supporting addition, subtraction, multiplication, and division.

## Initial State
The Calc class started with only one method:
- `add(a, b)` - adds two integers and returns the sum

## TDD Process

### TDD Iteration 1: Subtract Functionality

#### 1. Red Phase - Write Failing Tests
**Tests Created:**
- `testSubtract()` - Tests basic subtraction (5 - 3 = 2)
- `testSubtractNegativeResult()` - Tests subtraction resulting in negative number (3 - 5 = -2)

**Test Outcome:** ✗ FAILED
```
Error: Calc.subtract is not a function
```

**Rationale:** The tests encode the requirement that subtraction should work with both positive results and negative results, demonstrating that the method handles all cases correctly.

#### 2. Green Phase - Implement Minimum Code
**Implementation:**
```javascript
static subtract(a, b) {
    return a - b;
}
```

**Test Outcome:** ✓ PASSED
All tests passed including the new subtract tests.

#### 3. Refactor Phase
**Analysis:** No refactoring needed. The implementation is simple, clear, and follows the same pattern as the existing `add` method.

---

### TDD Iteration 2: Multiply Functionality

#### 1. Red Phase - Write Failing Tests
**Tests Created:**
- `testMultiply()` - Tests basic multiplication (4 × 5 = 20)
- `testMultiplyByZero()` - Tests multiplication by zero (5 × 0 = 0)
- `testMultiplyNegative()` - Tests multiplication with negative numbers (-3 × 4 = -12)

**Test Outcome:** ✗ FAILED
```
Error: Calc.multiply is not a function
```

**Rationale:** The tests encode requirements for:
1. Basic multiplication functionality
2. Proper handling of zero (important edge case)
3. Correct handling of negative numbers

#### 2. Green Phase - Implement Minimum Code
**Implementation:**
```javascript
static multiply(a, b) {
    return a * b;
}
```

**Test Outcome:** ✓ PASSED
All tests passed including the new multiply tests.

#### 3. Refactor Phase
**Analysis:** No refactoring needed. The implementation is minimal and correct. All methods maintain consistent naming and structure.

---

### TDD Iteration 3: Divide Functionality

#### 1. Red Phase - Write Failing Tests
**Critical Design Decision:** The tests encode the requirement that division should return **floating-point numbers** rather than integers. This provides greater precision and is more mathematically correct.

**Tests Created:**
- `testDivide()` - Tests basic division (10 ÷ 2 = 5)
- `testDivideWithRemainder()` - Tests division with remainder (10 ÷ 3 = 3.333...)
  - **This test is crucial**: it explicitly requires floating-point results
- `testDivideByZero()` - Tests that division by zero throws an error
  - **Design decision**: Division by zero should throw an error rather than return Infinity
- `testDivideNegative()` - Tests division with negative numbers (-10 ÷ 2 = -5)

**Test Outcome:** ✗ FAILED
```
Error: Calc.divide is not a function
```

**Rationale:**
- The `testDivideWithRemainder()` test is particularly important as it encodes the design decision to return floating-point numbers
- The `testDivideByZero()` test encodes error-handling requirements
- Tests cover normal cases, edge cases, and error conditions

#### 2. Green Phase - Implement Minimum Code
**Implementation:**
```javascript
static divide(a, b) {
    if (b === 0) {
        throw new Error('Division by zero is not allowed');
    }
    return a / b;
}
```

**Test Outcome:** ✓ PASSED
All 10 tests passed.

**Implementation Notes:**
- JavaScript's `/` operator naturally returns floating-point results, satisfying our design decision
- Added explicit error handling for division by zero
- The error message is descriptive and helpful

#### 3. Refactor Phase
**Analysis:** No refactoring needed. The implementation:
- Is clear and concise
- Properly handles the error case
- Returns floating-point numbers as specified by tests
- Maintains consistency with other methods

---

## Final Test Suite Summary

### All Tests Pass ✓
```
✓ testAdd passed
✓ testSubtract passed
✓ testSubtractNegativeResult passed
✓ testMultiply passed
✓ testMultiplyByZero passed
✓ testMultiplyNegative passed
✓ testDivide passed
✓ testDivideWithRemainder passed
✓ testDivideByZero passed
✓ testDivideNegative passed
```

**Total: 10 tests, 10 passing**

---

## Key TDD Principles Demonstrated

1. **Red-Green-Refactor Cycle**: Each feature followed the strict TDD cycle:
   - Write failing tests first (Red)
   - Write minimum code to pass (Green)
   - Refactor if needed (Refactor)

2. **Tests Define Requirements**: Important design decisions were encoded in tests BEFORE implementation:
   - Division returns floating-point numbers (not integers)
   - Division by zero throws an error (not Infinity)
   - All operations handle negative numbers correctly

3. **Incremental Development**: Each iteration added one feature at a time, ensuring the codebase always had working, tested functionality.

4. **Test Coverage**: Tests cover:
   - Normal cases (basic operations)
   - Edge cases (zero, negative numbers)
   - Error conditions (division by zero)

5. **Minimal Implementation**: Each implementation was the simplest code that could pass the tests, avoiding over-engineering.

---

## Final Implementation

The final Calc class implements four operations:
- **add(a, b)** - Returns sum of two numbers
- **subtract(a, b)** - Returns difference of two numbers
- **multiply(a, b)** - Returns product of two numbers
- **divide(a, b)** - Returns quotient as floating-point; throws error on division by zero

All methods are static, maintaining a consistent interface. All operations handle integers, floating-point numbers, and negative numbers correctly.

---

## Conclusion

This TDD exercise successfully demonstrated:
- How tests drive design decisions (float vs integer division)
- How tests define requirements before code is written
- How TDD leads to well-tested, reliable code
- How incremental development reduces risk

The resulting Calc class has 100% test coverage and handles all specified operations correctly, including edge cases and error conditions.
