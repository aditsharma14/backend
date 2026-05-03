# syncio

A simple Node.js demonstration of synchronous file input/output using the built-in `fs` module.

## Overview

This example shows how to read JSON files synchronously with `fs.readFileSync()` in Node.js. It reads two files from the `syncio` folder:

- `courseDetails.json` — contains course metadata for a Cloud Application Development course.
- `sampleData.json` — contains sample user details.

The script logs the complete file contents to the console and prints status messages before and after each read.

## Files

- `index.js` — main script demonstrating synchronous file reads.
- `courseDetails.json` — course information and module topics.
- `sampleData.json` — a sample data record with user information.
- `readme.md` — project documentation.

## How it works

1. The script imports Node.js `fs`.
2. It defines two file paths:
   - `syncio\\courseDetails.json`
   - `syncio\\sampleData.json`
3. It defines two functions, `readFile1()` and `readFile2()`, each using `fs.readFileSync()` to read a file.
4. It prints the file contents and a completion message for each read.
5. It logs `All done!` after reading both files.

## Run

From the `backend` folder, run:

```powershell
node syncio\index.js
```

## Notes

- This example uses blocking I/O. In real applications, prefer asynchronous methods like `fs.readFile()` for better performance and scalability.
- The paths are relative and assume the script is executed from the workspace root where the `syncio` folder exists.
