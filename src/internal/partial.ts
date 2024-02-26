/**
 * author: Long <hglong16> Nguyen
 * create date: 2024-2-25
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

type PartialTuple<
  TUPLE extends Array<unknown>,
  EXTRACTED extends Array<unknown> = [],
> = TUPLE extends [infer HEAD, ...infer TAIL]
  ? PartialTuple<TAIL, [...EXTRACTED, HEAD?]>
  : [...EXTRACTED, ...TUPLE];

type PartialParams<Fn extends (...args: Array<any>) => ReturnType<Fn>> =
  PartialTuple<Parameters<Fn>>;

/**
 * Creates a partially applied function by fixing some arguments of the original function.
 * @param fn - The original function to be partially applied.
 * @param presetArgs - The arguments to be fixed in the partial application.
 * @returns A new function with the fixed arguments.
 *
 * @example
 * const add = (a: number, b: number) => a + b;
 * const add5 = partial(add, 5);
 * const result = add5(10); // 15
 */
export function partial<
  F extends (...args: Array<any>) => ReturnType<F>,
>(fn: F, ...presetArgs: PartialParams<F>) {
  return function (...laterArgs: PartialParams<F>): ReturnType<F> {
    return fn(...presetArgs, ...laterArgs);
  };
}

/**
 * Creates a new function that applies preset arguments to the right side of the original function.
 * @param fn - The original function.
 * @param presetArgs - The preset arguments to be applied to the right side of the function.
 * @returns A new function that applies the preset arguments and invokes the original function.
 *
 * @example
 * const add = (a: string, b: string) => a + b;
 * const addFirstName = partialRight(add, " Doe");
 * const result = addFirstName("John"); // "John Doe"
 *
 */
export function partialRight<
  F extends (...args: Array<any>) => ReturnType<F>,
>(fn: F, ...presetArgs: PartialParams<F>) {
  return function (...laterArgs: PartialParams<F>): ReturnType<F> {
    return fn(...laterArgs, ...presetArgs);
  };
}
