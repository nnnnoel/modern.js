import type { Compiler, RspackOptions } from '@rspack/core';

export { Compiler };

export interface RspackConfig extends RspackOptions {
  /** multi type is useless in builder and make get value difficult */
  entry?: Record<string, string | string[]>;
  // can't use htmlPlugin & builtins.html at the same time.
  builtins?: Omit<NonNullable<RspackOptions['builtins']>, 'html'>;
}

/** T[] => T */
type GetElementType<T extends any[]> = T extends (infer U)[] ? U : never;

export type RspackRuleSet = GetElementType<
  NonNullable<NonNullable<RspackConfig['module']>['rules']>
>;

export type RspackPluginInstance = GetElementType<
  NonNullable<RspackConfig['plugins']>
>;