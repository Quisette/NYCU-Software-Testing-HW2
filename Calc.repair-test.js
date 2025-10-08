// Test to verify the repair worked
const CalcRepaired = require('./Calc.repaired');

console.log('\n=== Testing Repaired Calc - All Tests Should Pass ===\n');

// Test 1: Integer division
function testDivideIntegers() {
    const result = CalcRepaired.divide(10, 2);
    if (result !== 5) {
        throw new Error(`Expected 5 but got ${result}`);
    }
    console.log('✓ testDivideIntegers passed');
}

// Test 2: Now should pass - negative numbers with floating point
function testDivideNegativeNumbers() {
    const result = CalcRepaired.divide(-10, 3);
    if (Math.abs(result - (-3.3333333333333335)) > 0.0000001) {
        throw new Error(`Expected -3.333... but got ${result}`);
    }
    console.log('✓ testDivideNegativeNumbers passed');
}

// Test 3: Now should pass - floating point results
function testDivideFloatingPoint() {
    const result = CalcRepaired.divide(7, 2);
    if (result !== 3.5) {
        throw new Error(`Expected 3.5 but got ${result}`);
    }
    console.log('✓ testDivideFloatingPoint passed');
}

// Test 4: Error handling still works
function testDivideByZero() {
    try {
        CalcRepaired.divide(10, 0);
        throw new Error('Expected error for division by zero');
    } catch (error) {
        if (error.message === 'Expected error for division by zero') {
            throw error;
        }
        console.log('✓ testDivideByZero passed');
    }
}

// Additional test: Positive floating point
function testDividePositiveFloat() {
    const result = CalcRepaired.divide(10, 3);
    if (Math.abs(result - 3.3333333333333335) > 0.0000001) {
        throw new Error(`Expected 3.333... but got ${result}`);
    }
    console.log('✓ testDividePositiveFloat passed');
}

console.log('--- Running all tests on repaired code ---\n');

try {
    testDivideIntegers();
    testDivideByZero();
    testDivideFloatingPoint();
    testDivideNegativeNumbers();
    testDividePositiveFloat();
    console.log('\n✓ All tests passed! Fault successfully repaired.\n');
    console.log('Summary:');
    console.log('- Fault: Math.floor truncated division results');
    console.log('- Fix: Removed Math.floor to return proper floating-point');
    console.log('- Verification: All 5 tests now pass\n');
} catch (error) {
    console.log(`\n✗ Test failed: ${error.message}\n`);
    process.exit(1);
}
