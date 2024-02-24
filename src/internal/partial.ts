/* eslint-disable @typescript-eslint/no-explicit-any */

type PartialTuple<
  TUPLE extends Array<unknown>,
  EXTRACTED extends Array<unknown> = [],
> = TUPLE extends [infer HEAD, ...infer TAIL]
  ? PartialTuple<TAIL, [...EXTRACTED, HEAD?]>
  : [...EXTRACTED, ...TUPLE];

type PartialParams<
  Fn extends (
    ...args: Array<any>
  ) => ReturnType<Fn>,
> = PartialTuple<Parameters<Fn>>;

export function partial<
  F extends (...args: Array<any>) => ReturnType<F>,
>(fn: F, ...presetArgs: PartialParams<F>) {
  return function (
    ...laterArgs: PartialParams<F>
  ): ReturnType<F> {
    return fn(...presetArgs, ...laterArgs);
  };
}
