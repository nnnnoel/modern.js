import { expect, describe, it } from 'vitest';
import { PluginOutput } from '../../src/plugins/output';
import { createStubBuilder } from '../utils/builder';

describe('plugins/output', () => {
  it('should set output correctly', async () => {
    const builder = createStubBuilder({
      plugins: [PluginOutput()],
    });

    const config = await builder.unwrapWebpackConfig();
    expect(config).toMatchSnapshot();
  });

  it('should allow to use filename.js to modify filename', async () => {
    const builder = createStubBuilder({
      plugins: [PluginOutput()],
      builderConfig: {
        output: {
          filename: {
            js: 'foo.js',
          },
        },
      },
    });

    const config = await builder.unwrapWebpackConfig();
    expect(config).toMatchSnapshot();
  });
});