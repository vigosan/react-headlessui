const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.esm.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    format: 'esm',
    target: 'esnext',
    external: ['react', 'react-dom'],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.cjs.js',
    bundle: true,
    sourcemap: true,
    minify: true,
    platform: 'node',
    target: 'node14',
    external: ['react', 'react-dom'],
  })
  .catch(() => process.exit(1));
