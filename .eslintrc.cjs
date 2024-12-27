module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['!**/.server', '!**/.client'],
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {},
        },
      },
    },
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
      ],
      files: ['**/*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint', 'import'],
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['prettier', 'import', 'react'],
  root: true,
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        multiline: 'first',
        shorthandFirst: false,
        reservedFirst: false,
        ignoreCase: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'use-braces': 'off',
  },
}
