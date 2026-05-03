# asyncio

A Node.js demonstration of asynchronous file input/output using the built-in `fs` module and callback-based `fs.readFile()`.

## Overview

This example shows how to read JSON files asynchronously in Node.js. The script reads two files from the `asyncio` directory:

- `sampleData.json` — sample user data.
- `courseDetails.json` — course metadata for a Cloud Application Development course.

The first file is read and logged using a callback, and then the second file is read in the same way. Because the reads are asynchronous, Node.js can continue processing while waiting for each file to finish.

## Files

- `index.js` — main asynchronous file read example.
- `sampleData.json` — example user record.
- `courseDetails.json` — example course and module information.
- `readme.md` — documentation for this example.

## How it works

1. The script imports Node.js `fs`.
2. It defines two file paths:
   - `asyncio/sampleData.json`
   - `asyncio/courseDetails.json`
3. It defines two functions, `readfile1()` and `readfile2()`, each calling `fs.readFile()`.
4. Each callback logs an error if one occurs, or prints the file data and a completion message.

## Run

From the repository root, run:

```powershell
node asyncio\index.js
```

## Notes

- This example uses asynchronous, non-blocking I/O.
- The file contents are returned as buffers by `fs.readFile()`, so one result is converted to a string before logging.
