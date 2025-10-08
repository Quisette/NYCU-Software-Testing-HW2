const Calc = require('./Calc');

// Refactored: Test framework helper
class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    assertEquals(actual, expected, testName) {
        if (actual !== expected) {
            throw new Error(`Expected ${expected} but got ${actual}`);
        }
        console.log(`✓ ${testName} passed`);
        this.passed++;
    }

    assertThrows(fn, testName) {
        try {
            fn();
            throw new Error('Expected error but none was thrown');
        } catch (error) {
            if (error.message === 'Expected error but none was thrown') {
                throw error;
            }
            console.log(`✓ ${testName} passed`);
            this.passed++;
        }
    }

    assertAlmostEquals(actual, expected, tolerance, testName) {
        if (Math.abs(actual - expected) > tolerance) {
            throw new Error(`Expected ${expected} but got ${actual}`);
        }
        console.log(`✓ ${testName} passed`);
        this.passed++;
    }

    run(testSuite) {
        console.log(`\n=== Running ${testSuite.name} ===\n`);
        try {
            for (const test of this.tests) {
                test();
            }
            console.log(`\n✓ All ${this.passed} tests passed!\n`);
            return true;
        } catch (error) {
            this.failed++;
            console.log(`\n✗ Test failed: ${error.message}\n`);
            process.exit(1);
        }
    }

    test(name, fn) {
        this.tests.push(fn);
    }
}

// Refactored test suite with helper
const runner = new TestRunner();

// Addition tests
runner.test('testAdd', () => {
    runner.assertEquals(Calc.add(2, 3), 5, 'testAdd');
});

// Subtraction tests
runner.test('testSubtract', () => {
    runner.assertEquals(Calc.subtract(5, 3), 2, 'testSubtract');
});

runner.test('testSubtractNegativeResult', () => {
    runner.assertEquals(Calc.subtract(3, 5), -2, 'testSubtractNegativeResult');
});

// Multiplication tests
runner.test('testMultiply', () => {
    runner.assertEquals(Calc.multiply(4, 5), 20, 'testMultiply');
});

runner.test('testMultiplyByZero', () => {
    runner.assertEquals(Calc.multiply(5, 0), 0, 'testMultiplyByZero');
});

runner.test('testMultiplyNegative', () => {
    runner.assertEquals(Calc.multiply(-3, 4), -12, 'testMultiplyNegative');
});

// Division tests
runner.test('testDivide', () => {
    runner.assertEquals(Calc.divide(10, 2), 5, 'testDivide');
});

runner.test('testDivideWithRemainder', () => {
    runner.assertAlmostEquals(Calc.divide(10, 3), 3.3333333333333335, 0.0000001, 'testDivideWithRemainder');
});

runner.test('testDivideByZero', () => {
    runner.assertThrows(() => Calc.divide(10, 0), 'testDivideByZero');
});

runner.test('testDivideNegative', () => {
    runner.assertEquals(Calc.divide(-10, 2), -5, 'testDivideNegative');
});

// Run all tests
runner.run({ name: 'Refactored Calc Test Suite' });
