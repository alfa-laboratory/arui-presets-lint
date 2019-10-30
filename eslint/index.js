module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    plugins: ['react-hooks'],
    rules: {
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'implicit-arrow-linebreak': 'off',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        indent: ['error', 4, { SwitchCase: 1 }],
        'jsx-quotes': ['error', 'prefer-single'],
        'max-len': [
            'error',
            120,
            4,
            {
                ignoreUrls: true,
                ignoreComments: true,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-negated-condition': 'warn',
        // Variables
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: true,
                variables: true,
            },
        ],
        'import/prefer-default-export': 'off',

        // React
        'react/sort-comp': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-spacing': [
            'error',
            {
                when: 'always',
                children: true,
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/state-in-constructor': ['error', 'never'],
        'react/prefer-stateless-function': 'off',
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/*.test.{ts,tsx,js,jsx}'] },
        ],
        'react/destructuring-assignment': 'off',

        // hooks rules
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn',

        // rules should be transform to errors
        'no-shadow': 'warn',
        // немного спорные штуки. Надо думать про это. Возможно пользы как таковой не несут.
        complexity: ['warn', 20],
        'max-nested-callbacks': 'warn',
        'max-depth': 'warn',
    },
    overrides: [
        {
            files: ['*.test.{js,jsx,ts,tsx}'],
            env: {
                node: true,
                jest: true,
                browser: true,
            },
        },
    ],
};
