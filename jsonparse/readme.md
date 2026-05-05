# JSON Parse Example

## Overview

This directory demonstrates how to fetch JSON data from a remote source using **Axios** and format it nicely using **JSON.stringify()**.

## What it Does

The `index.js` file fetches course details from a remote JSON file and displays it in a formatted, human-readable way.

## Files

### index.js

- Uses `axios.get()` to fetch `courseDetails.json` from a remote GitHub URL
- Logs the initial promise object
- Handles the promise using `.then()` to:
  - Extract the response data
  - Use `JSON.stringify(courseDetails, null, 4)` to format the JSON with 4-space indentation
  - Print the formatted JSON to the console
- Includes `.catch()` for error handling

## Key Concepts

### JSON.stringify()

The second and third parameters make the output readable:

- **Second parameter (null)**: No replacer function
- **Third parameter (4)**: 4 spaces for indentation

This transforms raw JSON data into a nicely indented string.

## Running the Example

```bash
node index.js
```

## Expected Output

A formatted JSON object with course details, printed with proper indentation for readability.

## Prerequisites

Install Axios before running:

```bash
npm install axios
```

## Use Cases

- Fetching and displaying API responses
- Debugging JSON data structures
- Formatting JSON for logging or file output
