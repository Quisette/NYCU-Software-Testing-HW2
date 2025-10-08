// Repaired version of Calc with fault fixed
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
        // FIXED: Removed Math.floor to return proper floating-point results
        return a / b;
    }
}

module.exports = Calc;
