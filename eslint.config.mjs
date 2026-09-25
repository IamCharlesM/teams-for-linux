import globals from "globals";
import pluginJs from "@eslint/js";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
];
