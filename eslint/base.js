module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ['@typescript-eslint', 'import', 'cypress'],
    rules: {
        quotes: ['warn', 'single', { avoidEscape: true }],
        'comma-dangle': ['warn', 'always-multiline'],
        'comma-spacing': ['warn', { before: false, after: true }],
        'comma-style': ['warn', 'last'],
        'computed-property-spacing': ['warn', 'never'],
        'func-call-spacing': ['warn', 'never'],
        indent: ['warn', 4],
        'key-spacing': ['warn'],
        'no-trailing-spaces': ['warn'],
        'no-whitespace-before-property': ['warn'],
        'quote-props': ['warn', 'as-needed'],
        semi: ['warn'],
        'semi-spacing': ['warn'],
        'semi-style': ['warn'],
        'space-before-blocks': ['warn'],
        'space-in-parens': ['warn'],
        'space-infix-ops': ['warn'],
        'space-unary-ops': ['warn'],
        'switch-colon-spacing': ['warn'],
        // This rules conflicts with prettier formatter
        'operator-linebreak': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',

        // Override default airbnb rules
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-negated-condition': 'warn',
        'default-case': 'off',
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],

        // rules should be transformed to errors
        'no-shadow': 'warn',

        // code smell detection
        complexity: ['warn', 20],
        'max-nested-callbacks': 'warn',

        // typescript
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/array-type': [
            'error',
            { default: 'array-simple', readonly: 'array-simple' },
        ],
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/consistent-type-assertions': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-use-before-define': [
            'error',
            { functions: false, classes: true, variables: true },
        ],

        // Imports, file extensions
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.{stories,test,tests,spec}.{js,jsx,ts,tsx}'] },
        ],
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-useless-path-segments': ['error', {
            noUselessIndex: true,
        }],
    },
    overrides: [
        {
            files: ['*.{test,tests,spec}.{js,jsx,ts,tsx}'],
            env: {
                node: true,
                jest: true,
                browser: true,
            },
        },
        {
            files: ['**/cypress/**/*'],
            env: {
                'cypress/globals': true,
            },
            rules: {
                'cypress/no-assigning-return-values': 'error',
                'cypress/no-unnecessary-waiting': 'error',
            },
        },
    ],
};
