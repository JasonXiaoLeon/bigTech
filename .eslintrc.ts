module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: [
        'eslint:recommended', // 官方推荐规则
        'plugin:react/recommended', // React 相关规则
        'plugin:@typescript-eslint/recommended', // TypeScript 规则（如果用 TS）
        'plugin:prettier/recommended', // 启用 Prettier
    ],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react', '@typescript-eslint', 'prettier'],
    rules: {
        'prettier/prettier': [
            'error',
            { tabWidth: 4, printWidth: 100, semi: false, singleQuote: true },
        ],
        'react/react-in-jsx-scope': 'off', // Next.js 不需要手动 import React
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}
