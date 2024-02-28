/**
 * Applies the spread operator to the arguments of a function.
 *
 * @param fn - The function to be called with spread arguments.
 * @returns A new function that accepts an array of arguments and calls the original function with spread arguments.
 */
export function spread<T extends Array<unknown>, R>(
  fn: (...args: T) => R
): (args: T) => R {
  return function (args: T) {
    return fn(...args);
  };
}
