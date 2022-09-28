import type { DevConfig, NormalizedDevConfig } from './dev';
import type { HtmlConfig, NormalizedHtmlConfig } from './html';
import type { ToolsConfig, NormalizedToolsConfig } from './tools';
import type { SourceConfig, NormalizedSourceConfig } from './source';
import type { NormalizedOutputConfig, OutputConfig } from './output';
import type { SecurityConfig, NormalizedSecurityConfig } from './security';
import type {
  PerformanceConfig,
  NormalizedPerformanceConfig,
} from './performance';
import type {
  ExperimentsConfig,
  NormalizedExperimentsConfig,
} from './experiments';

export interface BuilderConfig {
  dev?: DevConfig;
  html?: HtmlConfig;
  tools?: ToolsConfig;
  source?: SourceConfig;
  output?: OutputConfig;
  security?: SecurityConfig;
  performance?: PerformanceConfig;
  experiments?: ExperimentsConfig;
}

export interface NormalizedConfig extends Required<BuilderConfig> {
  dev: NormalizedDevConfig;
  html: NormalizedHtmlConfig;
  tools: NormalizedToolsConfig;
  source: NormalizedSourceConfig;
  output: NormalizedOutputConfig;
  security: NormalizedSecurityConfig;
  performance: NormalizedPerformanceConfig;
  experiments: NormalizedExperimentsConfig;
}

/* eslint-disable @typescript-eslint/no-restricted-imports */
export * from './dev';
export * from './html';
export * from './tools';
export * from './source';
export * from './output';
export * from './security';
export * from './performance';
export * from './experiments';
/* eslint-enable @typescript-eslint/no-restricted-imports */