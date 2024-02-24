import { partial } from "./partial";

function add(a: number, b: number): number {
  return a + b;
}

describe("partial", () => {
  test("partial function with preset arguments", () => {
    const add5 = partial(add, 5);
    expect(add5(10)).toEqual(15);
  });
});
