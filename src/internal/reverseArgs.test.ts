import { reverseArgs } from "./reverseArgs";

describe("reverseArgs", () => {
  it("reverses arguments for a function", () => {
    const fn = (a: number, b: string, c: boolean) => `${a} ${b} ${c}`;
    const reversedFn = reverseArgs(fn);
    expect(reversedFn(true, "world", 42)).toBe("42 world true");
  });

  it("reverses arguments for a function with different argument types", () => {
    const fn = (a: string, b: number, c: boolean) => `${a} ${b} ${c}`;
    const reversedFn = reverseArgs(fn);
    expect(reversedFn(true, 42, "hello")).toBe("hello 42 true");
  });
});
