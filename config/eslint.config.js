import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended
    ],
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-console': ['warn'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-process-env': ['error'],
    },
  },
);