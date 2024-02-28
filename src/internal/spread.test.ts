import { vi } from "vitest";
import { spread } from "./spread";

describe("spread", () => {
  it("should spread arguments and call the function", () => {
    const fn = vi.fn((a: number, b: number, c: number) => a + b + c);
    const spreadFn = spread(fn);
    const result = spreadFn([1, 2, 3]);
    expect(result).toBe(6);
    expect(fn).toHaveBeenCalledWith(1, 2, 3);
  });

  it("should work with different argument types", () => {
    const fn = vi.fn(
      (a: string, b: boolean, c: number) => `${a}${b}${c}`
    );
    const spreadFn = spread(fn);
    const result = spreadFn(["Hello", true, 42]);
    expect(result).toBe("Hellotrue42");
    expect(fn).toHaveBeenCalledWith("Hello", true, 42);
  });

  it("should handle empty argument array", () => {
    const fn = vi.fn(() => "empty");
    const spreadFn = spread(fn);
    const result = spreadFn([]);
    expect(result).toBe("empty");
    expect(fn).toHaveBeenCalledWith();
  });
});
