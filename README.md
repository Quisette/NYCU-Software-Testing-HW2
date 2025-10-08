# TDD Homework - Calc Class Extension

## 📋 Assignment Overview
This project demonstrates Test-Driven Development (TDD) by extending a simple calculator class from addition-only to a full four-function calculator.

## ✅ Completion Status

### Required Exercise (Exercise 1)
- ✓ Subtract functionality added via TDD
- ✓ Multiply functionality added via TDD
- ✓ Divide functionality added via TDD
- ✓ All tests passing (10/10)
- ✓ Complete narrative documentation provided
- ✓ Design decisions encoded in tests

### Optional Exercises (ALL COMPLETED)
- ✓ **Optional 2:** CI/CD with GitHub Actions (breaking & restoring build)
- ✓ **Optional 3:** Code coverage (100%) + Static analysis (ESLint)
- ✓ **Optional 4:** Refactoring with test preservation
- ✓ **Optional 5:** Fault detection and repair

## 📁 Files for Submission

### Required Deliverables
1. **Calc.js** - Final implementation with all four operations
2. **Calc.test.js** - Complete test suite (10 tests)
3. **TDD_NARRATIVE.md** - Detailed TDD process narrative ⭐
4. **CODE_PRINTOUTS.md** - Formatted code printouts
5. **test_results.txt** - Screenshot showing all tests pass

### Additional Documentation
- **README.md** - This file
- **SUBMISSION_SUMMARY.md** - Executive summary
- **OPTIONAL_EXERCISES.md** - Complete optional exercises documentation ⭐

### Optional Exercise Files
- **Calc.test.refactored.js** - Refactored test suite (Optional 4)
- **Calc.test.refactor-before.js** - Original before refactoring
- **Calc.buggy.js** - Buggy version with fault (Optional 5)
- **Calc.fault-test.js** - Tests demonstrating fault
- **Calc.repaired.js** - Repaired version
- **Calc.repair-test.js** - Tests verifying repair
- **.github/workflows/ci.yml** - CI/CD pipeline (Optional 2)
- **.eslintrc.json** - ESLint config (Optional 3)
- **package.json** - npm scripts for coverage and linting

## 🚀 How to Run

### Run Main Tests
```bash
node Calc.test.js
```

### Run Optional Exercise Tests
```bash
# Refactored test suite
node Calc.test.refactored.js

# Fault detection (will fail, demonstrating bug)
node Calc.fault-test.js

# Fault repair verification (all pass)
node Calc.repair-test.js
```

### Run Coverage and Linting
```bash
npm install           # Install dependencies
npm test             # Run tests
npm run coverage     # Generate coverage report
npm run lint         # Run ESLint
```

### Expected Output (Main Tests)
```
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
```

## 📊 Test Coverage Summary

| Operation | Tests | Status |
|-----------|-------|--------|
| Add | 1 | ✓ Pass |
| Subtract | 2 | ✓ Pass |
| Multiply | 3 | ✓ Pass |
| Divide | 4 | ✓ Pass |
| **Total** | **10** | **✓ 100%** |

## 🎯 Key Features

### Implemented Operations
- **add(a, b)** - Returns sum of two numbers
- **subtract(a, b)** - Returns difference of two numbers
- **multiply(a, b)** - Returns product of two numbers
- **divide(a, b)** - Returns quotient; throws error on division by zero

### Test Coverage
- ✓ Normal cases (basic operations)
- ✓ Edge cases (zero, negative numbers)
- ✓ Error handling (division by zero)
- ✓ Floating-point precision (division with remainder)

## 🔑 Important Design Decisions

### 1. Division Returns Floating-Point Numbers
**Decision:** Division returns floating-point results, not integers.

**Rationale:** Provides mathematical precision. For example, 10 ÷ 3 = 3.333..., not 3.

**Encoded in Test:** `testDivideWithRemainder()` explicitly tests for floating-point result.

### 2. Division by Zero Throws Error
**Decision:** Division by zero throws an error instead of returning Infinity.

**Rationale:** More explicit error handling; prevents undefined behavior.

**Encoded in Test:** `testDivideByZero()` verifies error is thrown.

### 3. All Operations Handle Negative Numbers
**Decision:** All operations correctly process negative numbers.

**Rationale:** Complete mathematical functionality.

**Encoded in Tests:** `testSubtractNegativeResult()`, `testMultiplyNegative()`, `testDivideNegative()`

## 📝 TDD Process Summary

### For Each Feature (Subtract, Multiply, Divide):

#### 1. 🔴 RED Phase - Write Failing Tests
- Created test cases encoding requirements
- Made design decisions in tests BEFORE coding
- Verified tests fail without implementation

#### 2. 🟢 GREEN Phase - Implement Minimal Code
- Wrote simplest code to pass all tests
- No over-engineering
- Focused solely on passing tests

#### 3. 🔵 REFACTOR Phase - Improve Quality
- Analyzed code for improvements
- Maintained consistent structure
- Ensured clean, readable code

## 📖 Documentation Highlights

### TDD_NARRATIVE.md Contains:
- Complete description of each TDD iteration
- Rationale for each test case
- Design decisions and why they were made
- Red-Green-Refactor cycle for each feature
- Analysis of what was learned

### Example Iteration Structure:
```
TDD Iteration X: [Feature Name]
├── Red Phase
│   ├── Tests created
│   ├── Expected failure
│   └── Design decisions
├── Green Phase
│   ├── Implementation
│   └── Tests passing
└── Refactor Phase
    └── Code improvements
```

## 🎓 TDD Principles Demonstrated

1. ✓ **Tests First** - All tests written before implementation
2. ✓ **Design in Tests** - Critical decisions encoded in tests
3. ✓ **Incremental Development** - One feature at a time
4. ✓ **Red-Green-Refactor** - Strict adherence to TDD cycle
5. ✓ **Minimal Implementation** - Simplest code that passes
6. ✓ **Comprehensive Testing** - Normal, edge, and error cases

## 🔍 What Makes This TDD?

### ❌ NOT TDD:
- Writing code first, then tests
- Writing all tests at once
- Skipping the "fail" step

### ✅ TRUE TDD:
- ✓ Write ONE failing test
- ✓ Watch it fail (Red)
- ✓ Write minimal code to pass (Green)
- ✓ Refactor if needed
- ✓ Repeat for next feature

**This project followed TRUE TDD throughout.**

## 📦 Project Structure

```
hw2/
├── Calc.js                           # Final implementation
├── Calc.test.js                      # Main test suite
├── TDD_NARRATIVE.md                  # ⭐ TDD process narrative
├── CODE_PRINTOUTS.md                 # Code printouts
├── test_results.txt                  # Test results
├── SUBMISSION_SUMMARY.md             # Executive summary
├── README.md                         # This file
├── OPTIONAL_EXERCISES.md             # ⭐ Optional exercises doc
│
├── Optional Exercise Files:
├── .github/workflows/ci.yml          # CI/CD pipeline
├── .eslintrc.json                    # ESLint config
├── package.json                      # npm configuration
├── Calc.test.refactored.js          # Refactored tests
├── Calc.test.refactor-before.js     # Original tests
├── Calc.buggy.js                    # Buggy version
├── Calc.fault-test.js               # Fault detection tests
├── Calc.repaired.js                 # Repaired version
├── Calc.repair-test.js              # Repair verification
│
└── CalcTDD.pdf                      # Assignment specification
```

## 🎯 Submission Checklist

### Required Exercise
- [x] All required functionality implemented
- [x] All tests passing (10/10)
- [x] Test printouts provided
- [x] Final Calc.js provided
- [x] Screenshot of passing tests
- [x] **Comprehensive TDD narrative**
- [x] Design decisions documented
- [x] Red-Green-Refactor cycle documented

### Optional Exercises (ALL COMPLETED)
- [x] **Optional 2:** GitHub repo with CI/CD
- [x] **Optional 2:** Demonstrated breaking build
- [x] **Optional 2:** Demonstrated restoring build
- [x] **Optional 3:** Code coverage (100%)
- [x] **Optional 3:** Static analysis (ESLint)
- [x] **Optional 4:** Refactoring with tests
- [x] **Optional 5:** Fault detection with failing test
- [x] **Optional 5:** Fault repair with passing tests

## 💡 Key Takeaways

1. **Tests drive design** - Division returns float vs int decided in tests
2. **Fail first is crucial** - Ensures tests actually test something
3. **Small steps work** - One feature at a time reduces complexity
4. **Documentation matters** - TDD process should be clearly explained
5. **Error handling counts** - Division by zero needed explicit testing

## 📞 Notes

- Language: JavaScript (Node.js)
- Testing: Custom test runner (no external framework needed)
- Test Execution: `node Calc.test.js`
- All tests are independent and can run in any order

---

**Author:** Software Testing Course Assignment
**Date:** 2025
**Status:** ✅ Complete - Ready for Submission
