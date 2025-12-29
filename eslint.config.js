import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default [
  js.configs.recommended,

  // TypeScript (se não usar TS, pode remover esse bloco inteiro)
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      'unused-imports': unusedImports,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React
      'react/react-in-jsx-scope': 'off', // Vite/React 17+
      'react/prop-types': 'off', // se você usa TS, isso é redundante

      // Hooks
      ...reactHooks.configs.recommended.rules,

      // Imports
      'import/order': [
        'warn',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // Remove imports não usados automaticamente (muito bom)
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],

      // Deixa o Prettier mandar na formatação (evita conflito ESLint vs Prettier)
      // (por isso instalamos eslint-config-prettier)
    },
  },
  {
    ignores: ['dist', 'node_modules'],
  },
];
