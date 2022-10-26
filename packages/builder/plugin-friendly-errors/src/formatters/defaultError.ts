import type * as webpack from 'webpack5';
import { Formatter } from '../core/formatErrors';
import { concat } from '../utils';
import { formatTitle } from '../utils/colors';

export type Severity = string;

function displayError(severity: Severity, error: webpack.WebpackError) {
  const baseError = formatTitle(severity, severity);

  return concat(
    `${baseError} ${removeLoaders(error.file)}`,
    '',
    error.message,
    error.origin ? error.origin : undefined,
    '',
    error.infos,
  );
}

function removeLoaders(file?: string) {
  if (!file) {
    return '';
  }
  const split = file.split('!');
  const filePath = split[split.length - 1];
  return `in ${filePath}`;
}

function isDefaultError(error: webpack.WebpackError) {
  return !('type' in error);
}

/**
 * Format errors without a type
 */
const format: Formatter = (errors, type) => {
  return errors
    .filter(isDefaultError)
    .reduce(
      (acc, error) => acc.concat(displayError(type, error)),
      [] as string[],
    );
};

export default format;
