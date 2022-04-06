# Polling Service Project
**Estimated time:** 1 hour<br/>
**Technologies:** TypeScript and Node.js

Implement a polling service that can periodically fetch data from arbitrary sources and store it using the provided storage implementation.

You are not expected to spend more than 1 hour on this so please make a simple implementation. We are more interested in your thoughts and reflections about how this should be implemented rather than the actual implementation. It's perfectly acceptable and even encouraged to do something in a suboptimal way if you have reflected on why it's suboptimal and how it could be improved.

**Feel free to use third-party libraries and snippets of code.**

## Requirements
- Data should only be updated if something has changed.
- The polling frequency should be adjustable for each source.

## Getting started
Run `npm i`.

The main entry point is `src/main.ts`. A primitive storage implementation is included in `src/storage.ts`. There's also a `Source` type in `src/types/source.ts` and two sources in `src/sources/products-source.ts` and `src/sources/random-number-source.ts`. The products source simulates a products API. It simply returns one of three hard-coded product collections at random. The random number source simply returns a new random number each time. You do not need to change these or add more sources, but you are free to do so.

You are **not** expected to improve or change any of the provided code. You are free to do so but it will not affect your evaluation.

To build, run, and watch for changes run `npm run start`.

### Testing
You are **not** expected to write any tests for your code but if you have time, complete the test in `src/CHANGEME.tests.ts`. To run tests run `npm run test`.

## Submission
Please send an email to emil.k.intern@conmedia.dk with a link to a repository with your solution.