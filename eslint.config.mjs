import react from 'eslint-plugin-react';
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import { defineConfig, globalIgnores } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{ts,tsx}"], plugins: { react }, languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } }, globals: {...globals.browser}  } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  globalIgnores(["lib/*","stories/*","**/*.js"]),
]);

