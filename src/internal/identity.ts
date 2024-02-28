/**
 * A generic identity function that returns the input value as is.
 *
 * @param {T} value - The input value of any type.
 * @return {T} The same input value.
 */
export function identity<T>(value: T): T {
  return value;
}
