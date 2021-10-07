import babel from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: 'src/index.jsx',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [
      babel({
        exclude: "node_module/**",
        presets: ['@babel/preset-react']
      }),
      commonjs(),
      terser(),
    ]
};