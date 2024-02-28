/**
 * Returns a function that always returns the specified value.
 *
 * @template T The type of the value.
 * @param value The value to be returned.
 * @returns A function that always returns the specified value.
 */
export function constant<T>(value: T): () => T {
  return function () {
    return value;
  };
}
