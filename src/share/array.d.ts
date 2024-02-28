/**
 * Reverses the elements of an array.
 * @template T - The type of the array.
 * @param {T} arr - The array to reverse.
 * @returns {ReverseArray<T>} - The reversed array.
 */
type ReverseArray<T extends Array<unknown>> = T extends [
  infer A,
  ...infer B,
]
  ? [...ReverseArray<B>, A]
  : [];
