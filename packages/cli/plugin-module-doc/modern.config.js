module.exports = {
  buildConfig: [
    {
      buildType: 'bundle',
      format: 'cjs',
      target: 'es2020',
      dts: false,
      outDir: './dist/cjs',
      sourceMap: true,
      input: {
        index: './src/index.ts',
        api: './src/components/api/index.tsx',
        codeContainer: './src/components/codeContainer/index.tsx',
      },
      style: {
        inject: true,
      },
    },
    {
      buildType: 'bundle',
      format: 'esm',
      target: 'es2020',
      dts: false,
      outDir: './dist/esm',
      sourceMap: true,
      input: {
        index: './src/index.ts',
        api: './src/components/api/index.tsx',
        codeContainer: './src/components/codeContainer/index.tsx',
      },
      style: {
        inject: true,
      },
    },
  ],
};
