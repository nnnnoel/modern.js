import { defineConfig } from '@modern-js/self/defineConfig';

export default defineConfig({
  buildConfig: {
    buildType: 'bundle',
    format: 'esm',
    outDir: './dist/bundle',
  },
});
