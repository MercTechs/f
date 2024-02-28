import { identity } from "./identity";

describe("identity", () => {
  it("returns the same value", () => {
    expect(identity(1)).toBe(1);
    expect(identity("hello")).toBe("hello");
    expect(identity(true)).toBe(true);
    expect(identity(null)).toBe(null);
    expect(identity(undefined)).toBe(undefined);
    const obj = { name: "John" };
    expect(identity(obj)).toBe(obj);
  });
});
