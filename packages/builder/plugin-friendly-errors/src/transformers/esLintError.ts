import { ErrorTransformer } from 'src/core/transformErrors';
import type * as webpack from 'webpack5';

function isEslintError(e: webpack.WebpackError) {
  return e.originalStack.some(
    stackframe =>
      stackframe.fileName && stackframe.fileName.indexOf('eslint-loader') > 0,
  );
}

const transform: ErrorTransformer = error => {
  if (isEslintError(error)) {
    return { ...error, name: 'Lint error', type: 'lint-error' };
  }

  return error;
};

module.exports = transform;
