/**
 * Reverses the order of arguments passed to a function.
 *
 * @param fn - The function whose arguments need to be reversed.
 * @returns A new function that accepts arguments in reverse order and invokes the original function.
 */
export function reverseArgs<
  F extends (...args: Array<never>) => ReturnType<F>,
>(fn: F): (...args: ReverseArray<Parameters<F>>) => ReturnType<F> {
  return function (
    ...args: ReverseArray<Parameters<F>>
  ): ReturnType<F> {
    return fn(...args.reverse());
  };
}
