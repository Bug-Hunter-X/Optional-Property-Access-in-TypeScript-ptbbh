# Optional Property Access in TypeScript

This repository demonstrates a common error in TypeScript related to accessing optional properties of objects.  Incorrectly accessing an optional property that might be undefined will result in a runtime error.

The `bug.ts` file contains code that incorrectly handles an optional property, leading to a potential runtime error.  The `bugSolution.ts` file shows the corrected code that avoids this issue by using optional chaining (?.)

## How to run

1. Clone this repository
2. Navigate to the repository directory
3. Run `tsc bug.ts` and `tsc bugSolution.ts` to compile the code
4. Run `node bug.js` and `node bugSolution.js` to execute the code