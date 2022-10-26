import type * as webpack from 'webpack5';
import extractError from './extractWebpackError';

export type AnnotatedError = webpack.WebpackError;

export type ErrorTransformer = (error: webpack.WebpackError) => AnnotatedError;

/**
 * Applies all transformers to all errors and returns "annotated"
 * errors.
 *
 * Each transformer should have the following signature WebpackError => AnnotatedError
 *
 * A WebpackError has the following fields:
 * - message
 * - file
 * - origin
 * - name
 * - severity
 * - webpackError (original error)
 *
 * An AnnotatedError should be an extension (Object.assign) of the WebpackError
 * and add whatever information is convenient for formatting.
 * In particular, they should have a 'priority' field.
 *
 * The plugin will only display errors having maximum priority at the same time.
 *
 * If they don't have a 'type' field, the will be handled by the default formatter.
 */
function processErrors(
  errors: webpack.WebpackError[],
  transformers: ErrorTransformer[],
) {
  const transform = (
    error: webpack.WebpackError,
    transformer: ErrorTransformer,
  ) => transformer(error);
  const applyTransformations = (error: webpack.WebpackError) =>
    transformers.reduce(transform, error);

  return errors.map(extractError).map(applyTransformations);
}

export default processErrors;
