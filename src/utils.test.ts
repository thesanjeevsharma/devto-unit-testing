import { doubleItIfEven } from "./utils";

describe("doubleItIfEven function", () => {
  it("should double a number if it's even", () => {
    const input = 2;
    const expected = 4;

    const actual = doubleItIfEven(input);

    expect(actual).toBe(expected);
  });

  it("should increment a number if it's odd", () => {
    const input = 3;
    const expected = 4;

    const actual = doubleItIfEven(input);

    expect(actual).toBe(expected);
  });
});
