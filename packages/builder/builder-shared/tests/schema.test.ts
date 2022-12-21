import { expect, test } from 'vitest';
import Ajv from '@modern-js/utils/ajv';
import { sharedSourceConfigSchema } from '../src/schema';
import { SharedSourceConfig } from '../src/types';

const sourceConfigSamples: Record<string, SharedSourceConfig[]> = {
  valid: [{}, { preEntry: '' }],
  invalid: [{ foo: 123 } as any, { include: [123] } as any],
};

test('sharedSourceConfigSchema', async () => {
  const ajv = new Ajv();
  const validate = ajv.compile(sharedSourceConfigSchema);
  for (const data of sourceConfigSamples.valid) {
    expect(validate(data)).toBe(true);
  }
  for (const data of sourceConfigSamples.invalid) {
    expect(validate(data)).toBe(false);
  }
});
