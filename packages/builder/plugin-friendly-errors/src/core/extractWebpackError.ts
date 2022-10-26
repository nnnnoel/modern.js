import type * as webpack from 'webpack5';
import ErrorStackParser from 'error-stack-parser';
import RequestShortener from 'webpack/lib/RequestShortener';

// TODO: allow the location to be customized in options
const requestShortener = new RequestShortener(process.cwd());

/*
 This logic is mostly duplicated from webpack/lib/Stats.js#toJson()
 See: https://github.com/webpack/webpack/blob/2f618e733aab4755deb42e9d8e859609005607c0/lib/Stats.js#L89
*/

function extractError(e: webpack.WebpackError): webpack.WebpackError {
  return {
    message: e.message,
    file: getFile(e),
    origin: getOrigin(e),
    name: e.name,
    severity: 0,
    webpackError: e,
    originalStack: getOriginalErrorStack(e),
  };
}

function getOriginalErrorStack(e: webpack.WebpackError) {
  if (e.stack) {
    return ErrorStackParser.parse(e);
  }
  return [];
}

function getFile(e: webpack.WebpackError) {
  if (e.file) {
    return e.file;
  } else if (typeof e.module?.readableIdentifier === 'function') {
    return e.module.readableIdentifier(requestShortener);
  }
  return '';
}

function getOrigin(e: webpack.WebpackError) {
  let origin = '';
  if (e.module.dependencies) {
    origin += `\n @ ${e.module.readableIdentifier(requestShortener)}`;
    e.module.dependencies.forEach(function (dep) {
      if (!dep.loc) {
        return;
      }
      if (typeof dep.loc === 'string') {
        return;
      }
      if ('name' in dep.loc || !dep.loc.start || !dep.loc.end) {
        return;
      }
      origin += ` ${dep.loc.start.line}:${dep.loc.start.column}-${
        dep.loc.start.line !== dep.loc.end.line ? `${dep.loc.end.line}:` : ''
      }${dep.loc.end.column}`;
    });
    let current = e.module;
    while (
      current.issuer &&
      typeof current.issuer.readableIdentifier === 'function'
    ) {
      current = current.issuer;
      origin += `\n @ ${current.readableIdentifier(requestShortener)}`;
    }
  }
  return origin;
}

export default extractError;
