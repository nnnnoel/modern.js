module.exports = {
  buildConfig: [
    {
      buildType: 'bundle',
      format: 'cjs',
      target: 'es2019',
      dts: false,
      outDir: './dist/cjs',
      sourceMap: true,
    },
    {
      buildType: 'bundle',
      format: 'esm',
      target: 'es2019',
      dts: false,
      outDir: './dist/esm',
      sourceMap: true,
    },
  ],
};
