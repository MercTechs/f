import { partial } from "./partial";

function add(a: number, b: number): number {
  return a + b;
}

function sum(
  a: number,
  b: number,
  c: number
): number {
  return a + b + c;
}

describe("partial", () => {
  it("partial function with preset arguments", () => {
    const add5 = partial(add, 5);
    expect(add5(10)).toEqual(15);
  });

  it("partial function with multiple preset arguments", () => {
    const add5 = partial(sum, 5, 10);
    expect(add5(15)).toEqual(30);
  });

  it("partial function with multiple preset arguments", () => {
    const add5 = partial(sum, 5);
    expect(add5(10, 15)).toEqual(30);
  });
});
