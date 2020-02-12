module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb'],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    env: {
        browser: true,
        mocha: true,
        node: true
    },
    globals: {
        benchmark: true,
        chai: true,
        expect: true,
        geminiReact: true,
        React: true,
        suite: true
    },
    plugins: [
        'chai-friendly',
        'sort-class-members',
        'react-hooks'
    ],
    rules: {
        // Style Guide
        'brace-style': ['warn', '1tbs', { allowSingleLine: false }],
        camelcase: ['warn', { properties: 'never' }],
        'comma-dangle': ['error', 'never'],
        curly: ['warn', 'all'],
        'func-names': 'off',
        'function-paren-newline': 'off',
        'implicit-arrow-linebreak': ['warn', 'beside'],
        indent: ['error', 4, { SwitchCase: 1 }],
        'jsx-quotes': ['error', 'prefer-single'],
        'max-len': ['error', 120, 4, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        'multiline-comment-style': 'off',
        'no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 1 }],
        'no-negated-condition': 'warn',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'no-underscore-dangle': 'off',
        'object-curly-newline': ['warn', { // TODO: delete after update airbnb config
            ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
            ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
            ImportDeclaration: { minProperties: 4, multiline: true, consistent: true },
            ExportDeclaration: { minProperties: 4, multiline: true, consistent: true }
        }],
        'operator-linebreak': ['warn', 'after', {
            overrides: {
                '?': 'before',
                ':': 'before',
                '=': 'none'
            }
        }],
        'padded-blocks': 'off',
        'padding-line-between-statements': [
            'warn',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] }
        ],
        'prefer-object-spread': 'off', // TODO: enable after update eslint

        // Best Practices
        'class-methods-use-this': ['warn', { // TODO: delete after update airbnb config
            exceptMethods: [
                'render',
                'getInitialState',
                'getDefaultProps',
                'getChildContext',
                'componentWillMount',
                'UNSAFE_componentWillMount',
                'componentDidMount',
                'componentWillReceiveProps',
                'UNSAFE_componentWillReceiveProps',
                'shouldComponentUpdate',
                'componentWillUpdate',
                'UNSAFE_componentWillUpdate',
                'componentDidUpdate',
                'componentWillUnmount',
                'componentDidCatch',
                'getSnapshotBeforeUpdate'
            ]
        }],
        'default-case': 'off',
        'no-param-reassign': 'off',
        'no-unused-expressions': 'off',

        // Variables
        'no-shadow': 'off',
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],

        // ES6
        'prefer-arrow-callback': 'warn',
        'prefer-const': ['warn', { destructuring: 'any' }],

        // React
        'react/jsx-boolean-value': ['error', 'always'],
        'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx'] }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-no-target-blank': 'error',
        'react/no-unused-prop-types': 'off',
        'react/prefer-stateless-function': 'off',
        'react/require-default-props': 'off',
        'react/sort-comp': 'off',

        // React hooks
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        // A11Y
        'jsx-a11y/href-no-hash': 'off',
        'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['invalidHref'] }],
        'jsx-a11y/label-has-for': ['error', { components: ['label'], allowChildren: true }],

        // Import
        'import/prefer-default-export': 'off',

        // Sort class members
        'sort-class-members/sort-class-members': ['error', {
            order: [
                '[static-properties]',
                '[static-methods]',
                '[static-stuff]',
                '[properties]',
                '[lifecycle]',
                '[rendering]',
                '[handling]',
                '[everything-else]'
            ],
            groups: {
                'static-stuff': [
                    { type: 'property', static: true, name: 'propTypes' },
                    { type: 'property', static: true, name: 'defaultProps' },
                    { type: 'property', static: true, name: 'contextTypes' },
                    { type: 'property', static: true, name: 'childContextTypes' },
                    { type: 'property', static: false, name: 'state' }
                ],
                lifecycle: [
                    { type: 'method', static: false, name: 'constructor' },
                    { type: 'method', static: false, name: 'getChildContext' },
                    { type: 'method', static: false, name: 'componentWillMount' },
                    { type: 'method', static: false, name: 'componentDidMount' },
                    { type: 'method', static: false, name: 'componentWillReceiveProps' },
                    { type: 'method', static: false, name: 'shouldComponentUpdate' },
                    { type: 'method', static: false, name: 'componentWillUpdate' },
                    { type: 'method', static: false, name: 'componentDidUpdate' },
                    { type: 'method', static: false, name: 'componentWillUnmount' },
                    { type: 'method', static: false, name: 'componentDidCatch' }
                ],
                rendering: [
                    { type: 'method', static: false, name: 'render' },
                    { type: 'method', static: false, name: '/^render.+$/' }
                ],
                handling: [
                    { type: 'method', static: false, name: '/^handle.+$/' }
                ]
            },
            accessorPairPositioning: 'getThenSet'
        }],

        // Chai
        'chai-friendly/no-unused-expressions': 'error'
    }
};
