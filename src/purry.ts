// /* eslint-disable @typescript-eslint/no-explicit-any */

// export function purry(
//   fn: (...args: Array<unknown>) => any,
//   args: IArguments | ReadonlyArray<any>,
//   lazy?: any
// ) {
//   const diff = fn.length - args.length;
//   const arrayArgs = Array.from(args);
//   console.log("fn", fn, fn.length);
//   console.log("args", args, args.length);
//   console.log("lazy", lazy);

//   if (diff === 0) {
//     return fn(...arrayArgs);
//   }

//   if (diff === 1) {
//     const ret: any = (data: any) =>
//       fn(data, ...arrayArgs);
//     if (lazy || fn.lazy) {
//       ret.lazy = lazy || fn.lazy;
//       ret.lazyArgs = arrayArgs;
//     }

//     console.log("ret", ret);

//     return ret;
//   }

//   throw new Error("Wrong number of arguments");
// }
