const { test, describe } = require('node:test');
const assert = require('node:assert');
const Calc = require('./Calc');

describe('Calc', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      assert.strictEqual(Calc.add(2, 3), 5);
    });

    test('should add two negative numbers', () => {
      assert.strictEqual(Calc.add(-2, -3), -5);
    });

    test('should add positive and negative numbers', () => {
      assert.strictEqual(Calc.add(10, -5), 5);
    });

    test('should add zero to a number', () => {
      assert.strictEqual(Calc.add(5, 0), 5);
      assert.strictEqual(Calc.add(0, 5), 5);
    });

    test('should add two zeros', () => {
      assert.strictEqual(Calc.add(0, 0), 0);
    });

    test('should add decimal numbers', () => {
      const result = Calc.add(1.5, 2.3);
      assert.ok(Math.abs(result - 3.8) < 0.0001, `Expected ~3.8, got ${result}`);
    });

    test('should add large numbers', () => {
      assert.strictEqual(Calc.add(1000000, 2000000), 3000000);
    });

    test('should handle floating point precision', () => {
      const result = Calc.add(0.1, 0.2);
      assert.ok(Math.abs(result - 0.3) < 0.0001, `Expected ~0.3, got ${result}`);
    });

    test('should return correct result for commutative property (a+b = b+a)', () => {
      const a = 7;
      const b = 3;
      assert.strictEqual(Calc.add(a, b), Calc.add(b, a));
    });

    test('should add when one argument is negative zero', () => {
      assert.strictEqual(Calc.add(-0, 5), 5);
      assert.strictEqual(Calc.add(5, -0), 5);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      assert.strictEqual(Calc.subtract(10, 3), 7);
    });

    test('should subtract two negative numbers', () => {
      assert.strictEqual(Calc.subtract(-10, -3), -7);
    });

    test('should subtract positive and negative numbers', () => {
      assert.strictEqual(Calc.subtract(10, -5), 15);
    });

    test('should subtract zero from a number', () => {
      assert.strictEqual(Calc.subtract(5, 0), 5);
    });

    test('should subtract a number from zero', () => {
      assert.strictEqual(Calc.subtract(0, 5), -5);
    });

    test('should subtract two zeros', () => {
      assert.strictEqual(Calc.subtract(0, 0), 0);
    });

    test('should subtract decimal numbers', () => {
      const result = Calc.subtract(5.5, 2.3);
      assert.ok(Math.abs(result - 3.2) < 0.0001, `Expected ~3.2, got ${result}`);
    });

    test('should subtract large numbers', () => {
      assert.strictEqual(Calc.subtract(1000000, 500000), 500000);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      assert.strictEqual(Calc.multiply(3, 4), 12);
    });

    test('should multiply two negative numbers', () => {
      assert.strictEqual(Calc.multiply(-3, -4), 12);
    });

    test('should multiply positive and negative numbers', () => {
      assert.strictEqual(Calc.multiply(10, -5), -50);
    });

    test('should multiply by zero', () => {
      assert.strictEqual(Calc.multiply(5, 0), 0);
      assert.strictEqual(Calc.multiply(0, 5), 0);
    });

    test('should multiply one by a number', () => {
      assert.strictEqual(Calc.multiply(1, 5), 5);
    });

    test('should multiply decimal numbers', () => {
      const result = Calc.multiply(2.5, 4.0);
      assert.ok(Math.abs(result - 10.0) < 0.0001, `Expected ~10.0, got ${result}`);
    });

    test('should multiply large numbers', () => {
      assert.strictEqual(Calc.multiply(1000, 2000), 2000000);
    });

    test('should verify commutative property (a*b = b*a)', () => {
      const a = 7;
      const b = 3;
      assert.strictEqual(Calc.multiply(a, b), Calc.multiply(b, a));
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      assert.strictEqual(Calc.divide(10, 2), 5);
    });

    test('should divide and return floating point result', () => {
      const result = Calc.divide(10, 3);
      assert.ok(Math.abs(result - 3.3333333) < 0.0001, `Expected ~3.3333333, got ${result}`);
    });

    test('should divide two negative numbers', () => {
      assert.strictEqual(Calc.divide(-10, -2), 5);
    });

    test('should divide positive and negative numbers', () => {
      assert.strictEqual(Calc.divide(10, -2), -5);
    });

    test('should divide zero by a number', () => {
      assert.strictEqual(Calc.divide(0, 5), 0);
    });

    test('should divide decimal numbers', () => {
      const result = Calc.divide(10.0, 2.5);
      assert.ok(Math.abs(result - 4.0) < 0.0001, `Expected ~4.0, got ${result}`);
    });

    test('should divide large numbers', () => {
      assert.strictEqual(Calc.divide(1000000, 1000), 1000);
    });

    test('should throw error when dividing by zero', () => {
      assert.throws(() => {
        Calc.divide(10, 0);
      }, Error);
    });

    test('should divide and return floating point for non-integer results', () => {
      const result = Calc.divide(7, 2);
      assert.ok(Math.abs(result - 3.5) < 0.0001, `Expected ~3.5, got ${result}`);
    });
  });
});
