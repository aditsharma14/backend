# Async Axios Example

## Overview

This directory contains a Node.js example demonstrating how to use **Axios promises** to make HTTP GET requests.

## What it Does

The `index.js` file defines a function to fetch data from a URL using `axios.get()`. It shows how the returned promise can be handled with:

- `.then()` for successful responses
- `.catch()` for request failures

## Files

### index.js

- Calls `connectToURL()` twice with different URLs.
- Logs the initial request promise object.
- Prints `"Fulfilled"` and response data when the request succeeds.
- Prints `"Rejected for url <url>"` and the error message when the request fails.

## Example URLs

- A valid URL pointing to `sampleData.json`
- An invalid URL pointing to `sampleDate.json` (intentional typo to demonstrate rejection handling)

## Running the Example

```bash
node index.js
```

## Expected Behavior

- The code will print the pending promise object immediately.
- For the first URL, it should log `Fulfilled` and the JSON data from the response.
- For the second URL, it should log a rejection message and the error details.

## Notes

- `axios` must be installed in this directory before running the example:

```bash
npm install axios
```

- This example is useful for learning how promise-based HTTP requests behave in Node.js.
