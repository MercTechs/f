import { constant } from "./constant";

describe("constant", () => {
  it("returns a function that always returns the provided value", () => {
    const value = "Hello, World!";
    const constantFn = constant(value);
    expect(constantFn()).toBe(value);
  });
});
