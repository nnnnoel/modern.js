import path from 'path';
// import { fileURLToPath } from 'url';
/**
 * FIXME:
 * 1. treeshaking not work
 * 2. path not work in webpack < 5, need polyfill
 * 3. propsMarkdownMap not work, because they are not bundle in one file and can not  share the same instance
 */

// const dirname = path.dirname(fileURLToPath(new URL(import.meta.url)));

// export const PACKAGE_ROOT = path.join(dirname, '../..');
// export const PACKAGE_ROOT = path.join(__dirname, '../..');
export const PACKAGE_ROOT =
  '/Users/bytedance/modern.js/packages/cli/plugin-module-doc';
export const PropsMarkdownMap = new Map<string, string>();
