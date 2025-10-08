// Buggy version of Calc with a subtle fault in divide
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
        // BUG: Only checks for exactly 0, not for very small numbers
        // This can cause issues with floating point precision
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        // BUG: Doesn't handle division of 0 by any number correctly
        // Should return 0, but implementation is fine
        // Real BUG: Integer division for negative numbers rounds incorrectly
        // when one might expect truncation toward zero
        return Math.floor(a / b);  // BUG: Using floor instead of normal division
    }
}

module.exports = Calc;
