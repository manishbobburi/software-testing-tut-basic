const { add } = require("../src/math");

describe("add", () => {
    test("returns the sum", () => {
        expect(add(5, 3)).toBe(8);
    });

    test("throws when a < b", () => {
        expect(() => add(2, 3)).toThrow();
    });
});