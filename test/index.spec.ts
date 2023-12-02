import { Duration } from "../src";

describe("Duration", () => {
	describe("constructor", () => {
		it("should create a Duration with 0 milliseconds when no arguments are provided", () => {
			const duration = new Duration();
			expect(duration.toMilliseconds()).toBe(0);
		});

		it("should create a Duration with the correct milliseconds when a number is provided", () => {
			const duration = new Duration(5000);
			expect(duration.toMilliseconds()).toBe(5000);
		});

		it("should create a Duration with the correct milliseconds from an options object", () => {
			const duration = new Duration({ seconds: 1, minutes: 1 });
			expect(duration.toMilliseconds()).toBe(61000);
		});
	});
});

describe("static methods", () => {
	it("fromMilliseconds should create the correct Duration", () => {
		const duration = Duration.fromMilliseconds(1000);
		expect(duration.toMilliseconds()).toBe(1000);
	});

	it("fromSeconds should create the correct Duration", () => {
		const duration = Duration.fromSeconds(1);
		expect(duration.toMilliseconds()).toBe(1000);
	});
});

describe("conversion methods", () => {
	const baseMilliseconds = 1000; // 1 second
	const duration = new Duration(baseMilliseconds);

	it("toMilliseconds should return correct value", () => {
		expect(duration.toMilliseconds()).toBe(baseMilliseconds);
	});

	it("toSeconds should return correct value", () => {
		expect(duration.toSeconds()).toBe(1);
	});

	it("toMinutes should return correct value", () => {
		expect(duration.toMinutes()).toBe(baseMilliseconds / 60000);
	});

	// Continue with similar tests for toHours, toDays, etc.
});

describe("arithmetic methods", () => {
	const duration = new Duration({ seconds: 60 }); // 1 minute

	it("add should return correct Duration", () => {
		const addedDuration = duration.add(new Duration({ seconds: 30 }));
		expect(addedDuration.toSeconds()).toBe(90);
	});

	it("subtract should return correct Duration", () => {
		const subtractedDuration = duration.subtract(new Duration({ seconds: 30 }));
		expect(subtractedDuration.toSeconds()).toBe(30);
	});

	it("multiply should return correct Duration", () => {
		const multipliedDuration = duration.multiply(2);
		expect(multipliedDuration.toMinutes()).toBe(2);
	});

	it("divide should return correct Duration", () => {
		const dividedDuration = duration.divide(2);
		expect(dividedDuration.toSeconds()).toBe(30);
	});
});

describe("utility methods", () => {
	const duration = new Duration({ days: 1, hours: 1 });

	it("valueOf should return correct value", () => {
		expect(duration.valueOf()).toBe(90000000); // 1 day and 1 hour in milliseconds
	});

	it("days getter should return correct value", () => {
		expect(duration.days).toBe(1);
	});
});
