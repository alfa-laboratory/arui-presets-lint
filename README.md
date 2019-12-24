Alfa Laboratory UI Presets
==========================

[![npm][npm-img]][npm]
[![license][license-img]][license]
[![travis][travis-img]][travis]

[license]:         https://opensource.org/licenses/MIT
[license-img]:     https://img.shields.io/badge/License-MIT-brightgreen.svg
[npm-img]:         https://img.shields.io/npm/v/arui-presets-lint.svg
[npm]:             https://www.npmjs.org/package/arui-presets-lint
[travis]:          https://travis-ci.org/alfa-laboratory/arui-presets-lint?branch=master
[travis-img]:      https://img.shields.io/travis/alfa-laboratory/arui-presets-lint/master.svg?label=unix

<br />

Набор конфигурационных файлов для валидации проектов, основанных на [arui-feather](https://github.com/alfa-laboratory/arui-feather).

Установка
---------
В качестве пакетного менеджера, проект использует yarn:

```
yarn add --dev arui-presets-lint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-import-resolver-typescript \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

## Конфигурация всех линтеров через `package.json`:

```json
{
  "prettier": "arui-presets-lint/prettier",
  "eslintConfig": {
    "extends": "./node_modules/arui-presets-lint/eslint/index.js"
  },
  "stylelint": {
    "extends": "arui-presets-lint/stylelint"
  }
}
```

## Конфигурация скриптов для запуска линтеров и форматтера в `package.json`:

```json
{
  "script": {
    "lint-css": "stylelint ./src/**/*.css",
    "lint-scripts": "eslint ./src/ ./config/ --ext .js,.jsx,.ts,.tsx",
    "lint": "npm run lint-css && npm run lint-scripts",
    "format": "prettier-eslint --write \"./{config,src}/**/*.{ts,tsx,js,jsx,css}\""
  }
}
```

## Конфигурация `husky` и `lint-staged`:
```json
{
  "lint-staged": {
    "concurrent": true,
    "linters": {
      "src/**/*.{js,jsx,ts,tsx}": [
        "prettier-eslint --write",
        "git add",
        "eslint"
      ],
      "*.css": [
        "prettier-eslint --write",
        "git add",
        "stylelint"
      ]
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint-staged"
    }
  }
}
```

## Итоговая конфигурация линтеров:
```json
{
  "script": {
    "lint-css": "stylelint ./src/**/*.css",
    "lint-scripts": "eslint ./src/ ./config/ --ext .js,.jsx,.ts,.tsx",
    "lint": "npm run lint-css && npm run lint-scripts",
    "format": "prettier-eslint --write \"./{config,src}/**/*.{ts,tsx,js,jsx,css}\""
  },
  "lint-staged": {
    "concurrent": true,
    "linters": {
      "src/**/*.{js,jsx,ts,tsx}": [
        "prettier-eslint --write",
        "git add",
        "eslint"
      ],
      "*.css": [
        "prettier-eslint --write",
        "git add",
        "stylelint"
      ]
    }
  },
  "husky": {
    "hooks": {
      "pre-commit": "yarn lint-staged"
    }
  },
  "prettier": "arui-presets-lint/prettier",
  "eslintConfig": {
    "extends": "./node_modules/arui-presets-lint/eslint/index.js"
  },
  "stylelint": {
    "extends": "arui-presets-lint/stylelint"
  }
}
```

#### commitlint
Вы можете унаследовать конфигурацию вашего commitlint от `arui-presets-lint/commitlint`.


Файл `commitlint.config.js` вашего проекта:
```js
module.exports = {
    extends: ['./node_modules/arui-presets-lint/commitlint']
};
```

Лицензия
--------

```
The MIT License (MIT)

Copyright (c) 2017 Alfa Laboratory

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
