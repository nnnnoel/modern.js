import path from 'path';
import VirtualModulesPlugin from 'webpack-virtual-modules';

export const PACKAGE_ROOT = path.join(__dirname, '..');
export const demosVirtualModules = new VirtualModulesPlugin({});

export const defaultDemos = [
  `./demos/**/*.demos.mdx`,
  `./demos/**/*.demos.@(js|jsx|ts|tsx)`,
];
