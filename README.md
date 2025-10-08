# TDD Homework - Calc Class Extension

## 📋 Assignment Overview
This project demonstrates Test-Driven Development (TDD) by extending a simple calculator class from addition-only to a full four-function calculator.

## ✅ Completion Status
- ✓ Subtract functionality added via TDD
- ✓ Multiply functionality added via TDD
- ✓ Divide functionality added via TDD
- ✓ All tests passing (10/10)
- ✓ Complete narrative documentation provided
- ✓ Design decisions encoded in tests

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

## 🚀 How to Run

### Run All Tests
```bash
node Calc.test.js
```

### Expected Output
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
├── Calc.js                    # Final implementation
├── Calc.test.js              # Test suite
├── TDD_NARRATIVE.md          # ⭐ Main deliverable
├── CODE_PRINTOUTS.md         # Code printouts
├── test_results.txt          # Test execution screenshot
├── SUBMISSION_SUMMARY.md     # Executive summary
├── README.md                 # This file
└── CalcTDD.pdf              # Assignment specification
```

## 🎯 Submission Checklist

- [x] All required functionality implemented
- [x] All tests passing (10/10)
- [x] Test printouts provided
- [x] Final Calc.js provided
- [x] Screenshot of passing tests
- [x] **Comprehensive TDD narrative**
- [x] Design decisions documented
- [x] Red-Green-Refactor cycle documented

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
