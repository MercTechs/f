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
  it("unary parseInt", () => {
    const t = ["1", "2", "3"].map(unary(parseInt));
    console.log(t);
    expect(t).toEqual([1, 2, 3]);
  });
});
