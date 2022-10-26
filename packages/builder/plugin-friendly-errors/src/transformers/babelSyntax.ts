import { ErrorTransformer } from 'src/core/transformErrors';
import type * as webpack from 'webpack5';

/**
 * This will be removed in next versions as it is not handled in the babel-loader
 * See: https://github.com/geowarin/friendly-errors-webpack-plugin/issues/2
 */
function cleanStackTrace(message: string) {
  return message.replace(/^\s*at\s.*:\d+:\d+[\s)]*\n/gm, ''); // at ... ...:x:y
}

function cleanMessage(message: string) {
  return (
    message
      // match until the last semicolon followed by a space
      // this should match
      // linux => "(SyntaxError: )Unexpected token (5:11)"
      // windows => "(SyntaxError: C:/projects/index.js: )Unexpected token (5:11)"
      .replace(/^Module build failed.*:\s/, 'Syntax Error: ')
      // remove mini-css-extract-plugin loader tracing errors
      .replace(/^Syntax Error: ModuleBuildError:.*:\s/, '')
      // remove babel extra wording and path
      .replace(
        /^Syntax Error: SyntaxError: (([A-Z]:)?\/.*:\s)?/,
        'Syntax Error: ',
      )
  );
}

function isBabelSyntaxError(e: webpack.WebpackError) {
  return (
    e.name === 'ModuleBuildError' ||
    (e.name === 'ModuleBuildError' && e.message.indexOf('SyntaxError') >= 0)
  );
}

const transform: ErrorTransformer = error => {
  if (isBabelSyntaxError(error)) {
    return {
      ...error,
      message: cleanStackTrace(`${cleanMessage(error.message)}\n`),
      severity: 1000,
      name: 'Syntax Error',
    };
  }

  return error;
};

export default transform;
