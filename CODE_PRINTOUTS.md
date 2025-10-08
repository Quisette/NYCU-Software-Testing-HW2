# Code Printouts for TDD Homework Submission

## Final Version of Calc.js

```javascript
class Calc {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }
}

module.exports = Calc;
```

---

## Complete Test Suite - Calc.test.js

```javascript
const Calc = require('./Calc');

// Test for existing add functionality
function testAdd() {
    const result = Calc.add(2, 3);
    if (result !== 5) {
        throw new Error(`Expected 5 but got ${result}`);
    }
    console.log('✓ testAdd passed');
}

// TDD ITERATION 1: Test for subtract functionality (FAILING TEST)
function testSubtract() {
    const result = Calc.subtract(5, 3);
    if (result !== 2) {
        throw new Error(`Expected 2 but got ${result}`);
    }
    console.log('✓ testSubtract passed');
}

function testSubtractNegativeResult() {
    const result = Calc.subtract(3, 5);
    if (result !== -2) {
        throw new Error(`Expected -2 but got ${result}`);
    }
    console.log('✓ testSubtractNegativeResult passed');
}

// TDD ITERATION 2: Test for multiply functionality (FAILING TEST)
function testMultiply() {
    const result = Calc.multiply(4, 5);
    if (result !== 20) {
        throw new Error(`Expected 20 but got ${result}`);
    }
    console.log('✓ testMultiply passed');
}

function testMultiplyByZero() {
    const result = Calc.multiply(5, 0);
    if (result !== 0) {
        throw new Error(`Expected 0 but got ${result}`);
    }
    console.log('✓ testMultiplyByZero passed');
}

function testMultiplyNegative() {
    const result = Calc.multiply(-3, 4);
    if (result !== -12) {
        throw new Error(`Expected -12 but got ${result}`);
    }
    console.log('✓ testMultiplyNegative passed');
}

// TDD ITERATION 3: Test for divide functionality (FAILING TEST)
// Decision: divide should return floating point numbers for precision
function testDivide() {
    const result = Calc.divide(10, 2);
    if (result !== 5) {
        throw new Error(`Expected 5 but got ${result}`);
    }
    console.log('✓ testDivide passed');
}

function testDivideWithRemainder() {
    const result = Calc.divide(10, 3);
    // Test expects floating point result, not integer
    if (Math.abs(result - 3.3333333333333335) > 0.0000001) {
        throw new Error(`Expected 3.333... but got ${result}`);
    }
    console.log('✓ testDivideWithRemainder passed');
}

function testDivideByZero() {
    try {
        Calc.divide(10, 0);
        throw new Error('Expected error for division by zero');
    } catch (error) {
        if (error.message === 'Expected error for division by zero') {
            throw error;
        }
        // Expected to throw an error
        console.log('✓ testDivideByZero passed');
    }
}

function testDivideNegative() {
    const result = Calc.divide(-10, 2);
    if (result !== -5) {
        throw new Error(`Expected -5 but got ${result}`);
    }
    console.log('✓ testDivideNegative passed');
}

// Run tests
console.log('\n=== Running TDD Iteration 3: Divide ===\n');
try {
    testAdd();
    testSubtract();
    testSubtractNegativeResult();
    testMultiply();
    testMultiplyByZero();
    testMultiplyNegative();
    testDivide();
    testDivideWithRemainder();
    testDivideByZero();
    testDivideNegative();
    console.log('\n✓ All tests passed!\n');
} catch (error) {
    console.log('\n✗ Test failed:', error.message, '\n');
    process.exit(1);
}
```

---

## Test Execution Results

```
========================================
  FINAL TEST RESULTS - ALL TESTS PASS
========================================


=== Running TDD Iteration 3: Divide ===

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

✓ All tests passed!


========================================
  Test Summary:
  Total Tests: 10
  Passed: 10
  Failed: 0
  Success Rate: 100%
========================================
```

---

## Test Breakdown by Functionality

### Addition Tests (1 test)
- `testAdd()` - Verifies 2 + 3 = 5

### Subtraction Tests (2 tests)
- `testSubtract()` - Verifies 5 - 3 = 2
- `testSubtractNegativeResult()` - Verifies 3 - 5 = -2

### Multiplication Tests (3 tests)
- `testMultiply()` - Verifies 4 × 5 = 20
- `testMultiplyByZero()` - Verifies 5 × 0 = 0
- `testMultiplyNegative()` - Verifies -3 × 4 = -12

### Division Tests (4 tests)
- `testDivide()` - Verifies 10 ÷ 2 = 5
- `testDivideWithRemainder()` - Verifies 10 ÷ 3 = 3.333... (floating-point)
- `testDivideByZero()` - Verifies division by zero throws error
- `testDivideNegative()` - Verifies -10 ÷ 2 = -5

---

## How to Run Tests

```bash
node Calc.test.js
```
