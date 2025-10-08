# Quick Start Guide

## 🚀 Getting Started

### Prerequisites
- Node.js (18.x or 20.x)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/Quisette/NYCU-Software-Testing-HW2.git
cd NYCU-Software-Testing-HW2

# Install dependencies
npm install
```

## 📋 Running Tests

### Main Test Suite
```bash
node Calc.test.js
```
Expected: ✓ All 10 tests passed!

### Code Coverage
```bash
npm run coverage
```
Expected: 100% coverage

### Static Analysis
```bash
npm run lint
```
Expected: No errors

### Optional Exercise Tests
```bash
# Refactored tests
node Calc.test.refactored.js

# Fault detection (will show fault)
node Calc.fault-test.js

# Fault repair (all pass)
node Calc.repair-test.js
```

## 📚 Key Documentation

1. **[TDD_NARRATIVE.md](TDD_NARRATIVE.md)** - Detailed TDD process
2. **[OPTIONAL_EXERCISES.md](OPTIONAL_EXERCISES.md)** - All optional exercises
3. **[FINAL_SUMMARY.md](FINAL_SUMMARY.md)** - Complete summary
4. **[README.md](README.md)** - Full documentation

## ✅ What's Included

### Required (Exercise 1)
- ✅ Complete Calc implementation (add, subtract, multiply, divide)
- ✅ 10 comprehensive tests (all passing)
- ✅ TDD narrative with design decisions

### Optional (Exercises 2-5)
- ✅ CI/CD pipeline with GitHub Actions
- ✅ 100% code coverage + ESLint
- ✅ Refactored test suite
- ✅ Fault detection and repair demo

## 🎯 Quick Verification

```bash
# Verify everything works
node Calc.test.js && npm run coverage && npm run lint
```

If all three commands succeed, everything is working! ✅

## 📊 Expected Results

- **Tests:** 10/10 passing
- **Coverage:** 100% (all metrics)
- **Linting:** 0 errors
- **CI/CD:** Automated pipeline operational

## 🔗 Links

- **GitHub Repo:** https://github.com/Quisette/NYCU-Software-Testing-HW2
- **CI/CD Status:** Check Actions tab on GitHub

## 💡 Need Help?

See the detailed documentation:
- Technical details → [README.md](README.md)
- TDD process → [TDD_NARRATIVE.md](TDD_NARRATIVE.md)
- Optional exercises → [OPTIONAL_EXERCISES.md](OPTIONAL_EXERCISES.md)
- Complete summary → [FINAL_SUMMARY.md](FINAL_SUMMARY.md)
