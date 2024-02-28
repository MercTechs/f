import { ReverseArray } from "./array";

describe("ReverseArray", () => {
  it("basic", () => {
    type Test1 = ReverseArray<[1, "2", true, "alo", 5]>; // [5, 4, 3, 2, 1]
    type Test2 = ReverseArray<["a", false, true]>; // ["c", "b", "a"]
    type Test3 = ReverseArray<[]>; // []

    expectTypeOf([5, "alo", true, "2", 1]).toEqualTypeOf<Test1>();
    expectTypeOf(["a", false, true]).toEqualTypeOf<Test2>();
    expectTypeOf([]).toEqualTypeOf<Test3>();
  });

  it("should reverse an empty array", () => {
    const arr: [] = [];
    const reversedArr: ReverseArray<typeof arr> = [];
    expect(reversedArr).toEqual([]);
  });

  it("should reverse an array with one element", () => {
    const arr: [number] = [1];
    const reversedArr: ReverseArray<typeof arr> = [1];
    expect(reversedArr).toEqual([1]);
  });

  it("should reverse an array with multiple elements", () => {
    const arr: [number, string, boolean] = [1, "hello", true];
    const reversedArr: ReverseArray<typeof arr> = [true, "hello", 1];
    expect(reversedArr).toEqual([true, "hello", 1]);
  });
});
