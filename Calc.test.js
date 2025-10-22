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
});
