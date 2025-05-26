import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
export default defineConfig({
  input: "src/index.js",
  output: {
    dir: "dist",
    format: "es",
    name: "react-reuse-hooks",
  },
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    postcss({
      modules: true,
      extensions: [".css"],
    }),
  ],
});
