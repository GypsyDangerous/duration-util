# duration-util

[![npm package][npm-img]][npm-url]

<!-- [![Build Status][build-img]][build-url] -->

[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]

> A comprehensive, flexible, and efficient duration manipulation utility for JavaScript.

Inspired by the Dart programming language's Duration class, `duration-util` offers a similar experience for JavaScript developers, providing a rich set of functionalities to handle time durations with ease.

## Install

```bash
npm install duration-util
```

## Usage

```ts
import { Duration, setDurationTimeout, setDurationInterval, sleep } from "duration-util";

const duration = new Duration({ hours: 1, minutes: 30 });

console.log(duration.toMinutes()); //=> 90

// Using utility functions
setDurationTimeout(() => {
	console.log("Timeout after 2 minutes");
}, Duration.fromMinutes(2));

setDurationInterval(() => {
	console.log("Interval every 10 seconds");
}, Duration.fromSeconds(10));

(async () => {
	await sleep(Duration.fromSeconds(5));
	console.log("Slept for 5 seconds");
})();
```

## API

### Class: `Duration`

#### new Duration(options?)

- `options`: `DurationOptions` | `number` - Duration options or milliseconds.
- Returns: `Duration` instance.

#### Duration.fromMilliseconds(milliseconds), Duration.fromSeconds(seconds), etc.

- Static methods to create `Duration` from different time units.
- `milliseconds`, `seconds`, `minutes`, etc.: `number`
- Returns: `Duration` instance.

#### toMilliseconds(), toSeconds(), toMinutes(), etc.

- Conversion methods to get the duration in different time units.
- Returns: `number`

#### add(other), subtract(other), multiply(factor), divide(divisor)

- Arithmetic methods to manipulate durations.
- `other`: `Duration`, `factor`, `divisor`: `number`
- Returns: `Duration` instance.

#### get days(), get hours(), get minutes(), etc.

- Getter methods for different time units.
- Returns: `number`

#### format(template)

- Formats the duration according to a template string.
- `template`: `string`
- Returns: `string`

#### toString()

- Returns a string representation of the duration.
- Returns: `string`

### Function: `setDurationTimeout(callback, duration)`

- `callback`: `() => void` - Function to execute after timeout.
- `duration`: `Duration` - Duration to wait before executing the callback.

### Function: `setDurationInterval(callback, duration)`

- `callback`: `() => void` - Function to execute at each interval.
- `duration`: `Duration` - Interval duration.

### Function: `sleep(duration)`

- `duration`: `Duration` - Duration to sleep.
- Returns: `Promise<void>`

[build-img]: https://github.com/gypsydangerous/duration-util/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/gypsydangerous/duration-util/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/duration-util
[downloads-url]: https://www.npmtrends.gypsydangerous/duration-util
[npm-img]: https://img.shields.io/npm/v/duration-util
[npm-url]: https://www.npmjs.com/package/duration-util
[issues-img]: https://img.shields.io/github/issues/gypsydangerous/duration-util
[issues-url]: https://github.com/gypsydangerous/duration-util/issues
[codecov-img]: https://codecov.io/gh/gypsydangerous/duration-util/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/gypsydangerous/duration-util
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
