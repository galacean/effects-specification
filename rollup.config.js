import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

const pkg = require('./package.json');
const banner = `/*!
 * Name: ${pkg.name}
 * Description: ${pkg.description}
 * Author: ${pkg.author}
 * Version: v${pkg.version}
 */
`;

const plugins = [
  typescript({ tsconfig: './tsconfig.bundle.json' }),
  resolve(),
  commonjs({
    ignoreGlobal: true,
  }),
];

export default (commandLineArgs) => {
  if (commandLineArgs.watch) {
    const contentBase = '.';
    const plugins = [
      typescript({ compilerOptions: { declaration: false, declarationDir: null } }),
      resolve(),
      commonjs(),
      serve({
        contentBase,
        host: 'localhost',
        port: 9003,
      }),
      livereload(contentBase),
    ];

    if (commandLineArgs.test) {
      // test server 配置
    }
  }

  const config = [];

  ['src', 'fallback'].forEach(entry => {
    config.push({
      input: `${entry}/index.ts`,
      output: [{
        file: entry === 'src' ? pkg.module : `./dist/${entry}.mjs`,
        format: 'es',
        banner,
        sourcemap: true,
      }, {
        file: entry === 'src' ? pkg.main : `./dist/${entry}.js`,
        format: 'cjs',
        banner,
        sourcemap: true,
      }],
      plugins,
    });
  });

  return config;
}
