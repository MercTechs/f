import { unary } from "./unary";

describe("unary", () => {
  it("simple test", () => {
    const fn = (a: number) => a + 1;
    const unaryFn = unary(fn);
    expect(unaryFn(1)).toBe(2);
  });

  it("numToStr", () => {
    const fn = (a: number) => a.toString();
    const unaryFn = unary(fn);
    expect(unaryFn(1)).toBe("1");
  });
});
