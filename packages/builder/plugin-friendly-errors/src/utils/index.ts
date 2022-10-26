/**
 * Concat and flattens non-null values.
 * Ex: concat(1, undefined, 2, [3, 4]) = [1, 2, 3, 4]
 */
export function concat<T>(...args: T[]): T[] {
  const _args = Array.from(args).filter(e => e != null);
  const baseArray = Array.isArray(_args[0]) ? _args[0] : [_args[0]];
  return Array.prototype.concat.apply(baseArray, _args.slice(1));
}

/**
 * Dedupes array based on criterion returned from iteratee function.
 * Ex: uniqueBy(
 *     [{ id: 1 }, { id: 1 }, { id: 2 }],
 *     val => val.id
 * ) = [{ id: 1 }, { id: 2 }]
 */
export function uniqueBy<T>(arr: T[], func: (val: T) => any) {
  const seen: Record<any, number> = {};
  return arr.filter(el => {
    const e = func(el);
    return !(e in seen) && (seen[e] = 1);
  });
}
