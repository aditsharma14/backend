# Callback Example

## Overview

This directory contains a simple example demonstrating **callbacks** in Node.js.

## What is a Callback?

A callback is a function that is passed as an argument to another function, and is executed after some operation has been performed.

## Files

### index.js

This file demonstrates a basic asynchronous callback pattern using `setTimeout`.

**How it works:**

1. Logs "This is the main function" immediately
2. Schedules a callback function `firstcallback` to execute after 8 seconds
3. The `firstcallback` function logs "This is the first callback function" after the delay

**Key Concepts:**

- Synchronous execution: The main message logs immediately
- Asynchronous execution: The callback is delayed and executes after 8 seconds
- Non-blocking: While waiting for the callback, the program doesn't block

## Running the Example

```bash
node index.js
```

**Expected Output:**

```
This is the main function
This is the first callback function  (appears after 8 seconds)
```

## Use Cases

Callbacks are commonly used for:

- Handling asynchronous operations (API calls, file operations, timers)
- Event listeners
- Error handling patterns

## Related Topics

- Promises
- Async/Await
- Event Emitters
