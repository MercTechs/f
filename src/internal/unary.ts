/**
 * Applies a unary function to an argument.
 * @param fn - The unary function to apply.
 * @returns A new function that takes an argument and applies the unary function to it.
 */
export function unary<T, R>(fn: (arg: T) => R) {
  return function (arg: T) {
    return fn(arg);
  };
}
