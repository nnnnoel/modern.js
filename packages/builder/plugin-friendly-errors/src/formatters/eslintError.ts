import type * as webpack from 'webpack5';
import chalk from 'chalk';
import { concat } from '../utils';
import { Formatter } from '../core/formatErrors';

const infos = [
  'You may use special comments to disable some warnings.',
  `Use ${chalk.yellow('// eslint-disable-next-line')} to ignore the next line.`,
  `Use ${chalk.yellow(
    '/* eslint-disable */',
  )} to ignore all warnings in a file.`,
];

function displayError(error: webpack.WebpackError) {
  return [error.message, ''];
}

const format: Formatter = errors => {
  const lintErrors = errors.filter(e => e.type === 'lint-error');
  if (lintErrors.length > 0) {
    const flatten = (acc: string[], curr: string[]) => acc.concat(curr);
    return concat(
      lintErrors.map(error => displayError(error)).reduce(flatten, []),
      infos,
    );
  }

  return [];
};

module.exports = format;
