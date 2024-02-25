import { partial, partialRight } from "./partial";

function add<T extends string | number>(a: T, b: T): T {
  if (typeof a === "number" && typeof b === "number") {
    return (a + b) as T;
  } else if (typeof a === "string" && typeof b === "string") {
    return (a + " " + b) as T;
  } else {
    throw new Error("Operands must be of the same type.");
  }
}

function sum(a: number, b: number, c: number): number {
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

  it("partial on array", () => {
    const add5 = partial(add, 5);
    expect([1, 2, 3].map(add5)).toEqual([6, 7, 8]);
  });

  it("partialRight on string", () => {
    const addFirstName = partialRight(add, "Doe");
    expect(addFirstName("John")).toEqual("John Doe");
  });
});
