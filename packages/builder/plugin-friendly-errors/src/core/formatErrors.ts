import type * as webpack from 'webpack5';

export type FormattedError = webpack.WebpackError;
export type Formatter = (errors: FormattedError[], type: ErrorType) => string[];
export type ErrorType = 'success' | 'info' | 'note' | 'warning' | 'error';

/**
 * Applies formatters to all AnnotatedErrors.
 *
 * A formatter has the following signature: FormattedError => Array<String>.
 * It takes a formatted error produced by a transformer and returns a list
 * of log statements to print.
 *
 */
function formatErrors(
  errors: FormattedError[],
  formatters: Formatter[],
  errorType: ErrorType,
) {
  const format = (formatter: Formatter) => formatter(errors, errorType) || [];
  const flatten = (acc: string[], curr: string[]) => acc.concat(curr);

  return formatters.map(format).reduce(flatten, []);
}

export default formatErrors;
