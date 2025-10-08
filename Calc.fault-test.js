// Test to capture the fault in Calc.buggy.js
const CalcBuggy = require('./Calc.buggy');

console.log('\n=== Testing Buggy Calc - Capturing Current Behavior ===\n');

// Test 1: This should pass even with buggy code
function testDivideIntegers() {
    const result = CalcBuggy.divide(10, 2);
    if (result !== 5) {
        throw new Error(`Expected 5 but got ${result}`);
    }
    console.log('✓ testDivideIntegers passed');
}

// Test 2: This will FAIL - demonstrates the fault
// The bug uses Math.floor which rounds DOWN for negative results
function testDivideNegativeNumbers() {
    const result = CalcBuggy.divide(-10, 3);
    // Expected: -3.333... (floating point)
    // Actual with bug: Math.floor(-10/3) = Math.floor(-3.333...) = -4
    if (result !== -3.3333333333333335) {
        console.log(`✗ testDivideNegativeNumbers FAILED: Expected -3.333... but got ${result}`);
        throw new Error(`Expected -3.333... but got ${result} (FAULT DETECTED)`);
    }
    console.log('✓ testDivideNegativeNumbers passed');
}

// Test 3: This will FAIL - demonstrates the fault
function testDivideFloatingPoint() {
    const result = CalcBuggy.divide(7, 2);
    // Expected: 3.5
    // Actual with bug: Math.floor(7/2) = Math.floor(3.5) = 3
    if (result !== 3.5) {
        console.log(`✗ testDivideFloatingPoint FAILED: Expected 3.5 but got ${result}`);
        throw new Error(`Expected 3.5 but got ${result} (FAULT DETECTED)`);
    }
    console.log('✓ testDivideFloatingPoint passed');
}

// Test 4: This should pass with buggy code
function testDivideByZero() {
    try {
        CalcBuggy.divide(10, 0);
        throw new Error('Expected error for division by zero');
    } catch (error) {
        if (error.message === 'Expected error for division by zero') {
            throw error;
        }
        console.log('✓ testDivideByZero passed');
    }
}

console.log('--- Running tests to demonstrate fault ---\n');

try {
    testDivideIntegers();
    testDivideByZero();
    console.log('\n--- Tests that expose the fault ---\n');
    testDivideFloatingPoint();  // This will fail
    testDivideNegativeNumbers(); // This will fail
    console.log('\n✓ All tests passed!\n');
} catch (error) {
    console.log(`\n✗ FAULT CONFIRMED: ${error.message}\n`);
    console.log('The divide method uses Math.floor, which:');
    console.log('1. Truncates floating-point results to integers');
    console.log('2. Rounds negative results incorrectly (down instead of toward zero)');
    console.log('\nFault location: Calc.buggy.js line 23');
    console.log('Fix needed: Remove Math.floor to return floating-point results\n');
    process.exit(1);
}
