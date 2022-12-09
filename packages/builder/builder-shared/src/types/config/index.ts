import type { SharedDevConfig, NormalizedSharedDevConfig } from './dev';
import type { SharedHtmlConfig, NormalizedHtmlConfig } from './html';
import type {
  SharedOutputConfig,
  NormalizedSharedOutputConfig,
} from './output';
import type {
  SharedSourceConfig,
  NormalizedSharedSourceConfig,
} from './source';
import type { SharedSecurityConfig } from './security';
import type { SharedPerformanceConfig } from './performance';
import type { SharedExperimentsConfig } from './experiments';

/**
 * The shared Builder Config.
 * Can be used with webpack-provider or rspack-provider.
 * */
export interface SharedBuilderConfig {
  dev?: SharedDevConfig;
  html?: SharedHtmlConfig;
  source?: SharedSourceConfig;
  output?: SharedOutputConfig;
  security?: SharedSecurityConfig;
  performance?: SharedPerformanceConfig;
  experiments?: SharedExperimentsConfig;
}

export interface ShareNormalizedConfig {
  dev: NormalizedSharedDevConfig;
  html: NormalizedHtmlConfig;
  // alias type incompatible between webpack and rspack
  source: Omit<NormalizedSharedSourceConfig, 'alias'>;
  output: NormalizedSharedOutputConfig;
}

export * from './dev';
export * from './html';
export * from './output';
export * from './source';
export * from './security';
export * from './performance';
export * from './experiments';