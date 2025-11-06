# Testing Guide

## Manual Testing Checklist

### Prerequisites
- App compiled successfully (`npm run compile`)
- Dependencies installed (`npm install`)

### Running the App

```bash
npm run dev
```

This will:
1. Compile TypeScript to JavaScript
2. Launch Electron app
3. Open DevTools automatically (for debugging)

### Test Cases

#### TC-001: App Launch
- [ ] App window opens successfully
- [ ] Window size is appropriate (900x700)
- [ ] UI renders correctly
- [ ] No console errors in DevTools

#### TC-002: Problem Display
- [ ] Initial problem is displayed
- [ ] Operands are visible and readable
- [ ] Operator symbol displays correctly (+, −, ×, ÷)
- [ ] Answer input field is focused and ready

#### TC-003: Keypad Input
- [ ] All number buttons (0-9) work
- [ ] Numbers appear in answer input field
- [ ] Clear button clears the input
- [ ] Submit button (✓) submits the answer

#### TC-004: Keyboard Input
- [ ] Number keys (0-9) work
- [ ] Enter key submits answer
- [ ] Backspace/Delete clears input
- [ ] Input field accepts numeric input only

#### TC-005: Answer Validation
- [ ] Correct answer shows "Correct! ✓" feedback (green)
- [ ] Incorrect answer shows correct answer (red)
- [ ] Feedback appears immediately
- [ ] New problem generates after 2 seconds

#### TC-006: Scoring System
- [ ] Score increases by 10 for correct answers
- [ ] Total problems counter increments
- [ ] Correct answers counter increments
- [ ] Score display updates in real-time

#### TC-007: Difficulty Levels
- [ ] Easy mode: Problems use numbers 1-10
- [ ] Medium mode: Problems use numbers 1-50
- [ ] Hard mode: Problems use numbers 1-100
- [ ] Changing difficulty generates new problem

#### TC-008: Operator Selection
- [ ] Addition mode: Only addition problems
- [ ] Subtraction mode: Only subtraction problems (non-negative results)
- [ ] Multiplication mode: Only multiplication problems
- [ ] Division mode: Only division problems (whole number answers)
- [ ] Mixed mode: Random operations

#### TC-009: New Game Button
- [ ] Resets score to 0
- [ ] Resets correct/total counters to 0
- [ ] Generates new problem
- [ ] Clears feedback

#### TC-010: Problem Generation Quality
- [ ] Problems are random (not repetitive)
- [ ] Subtraction never produces negative results
- [ ] Division always produces whole numbers
- [ ] Multiplication operands are manageable
- [ ] All operations work correctly

#### TC-011: UI Responsiveness
- [ ] UI is responsive and looks good
- [ ] Buttons are clickable and responsive
- [ ] Colors and styling are consistent
- [ ] Layout works on different window sizes

#### TC-012: Error Handling
- [ ] Empty input shows appropriate message
- [ ] Invalid input is handled gracefully
- [ ] App doesn't crash on edge cases
- [ ] Console shows no errors

### Windows Installer Testing

#### TC-013: Installer Functionality
- [ ] Installer runs without errors
- [ ] Installation directory can be customized
- [ ] App installs successfully
- [ ] App launches from Start Menu/Desktop shortcut
- [ ] App runs correctly after installation
- [ ] Uninstaller works correctly

#### TC-014: Cross-Architecture Support
- [ ] Windows x64 installer works on x64 systems
- [ ] Windows ARM64 installer works on ARM64 systems
- [ ] App functionality is consistent across architectures

### macOS Installer Testing (when available)

#### TC-015: macOS Installer
- [ ] DMG/PKG installer works
- [ ] App installs correctly
- [ ] App runs on macOS (Intel)
- [ ] App runs on macOS (Apple Silicon)
- [ ] App can be uninstalled cleanly

## Automated Testing

Currently, automated tests are not implemented. Future improvements:
- Unit tests for math problem generation
- Integration tests for game logic
- E2E tests for UI interactions

## Reporting Issues

If you find bugs or issues:
1. Check the console for errors (DevTools)
2. Document the steps to reproduce
3. Note your platform and version
4. Create an issue in the GitHub repository

## Performance Testing

### Expected Performance
- App startup: < 2 seconds
- Problem generation: Instant
- Answer validation: Instant
- UI responsiveness: Smooth

### Memory Usage
- Expected: ~100-200MB (typical for Electron apps)
- Monitor via Task Manager (Windows) or Activity Monitor (macOS)

## Browser Compatibility

Since Electron uses Chromium:
- All modern web features are supported
- CSS3 and ES2020+ JavaScript features work
- No browser compatibility concerns

---

*Last Updated: 2025-11-06*

