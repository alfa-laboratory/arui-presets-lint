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
yarn add arui-presets-lint --dev
```

Использование линтеров
----------------------

#### commitlint
Вы можете унаследовать конфигурацию вашего commitlint от `arui-presets-lint/commitlint`.


Файл `commitlint.config.js` вашего проекта:
```js
module.exports = {
    extends: ['./node_modules/arui-presets-lint/commitlint']
};
```


#### eslint
Вы можете унаследовать конфигурацию вашего eslint от `arui-presets-lint/eslint`.
К сожалению, разработчики eslint [очень не хотят](https://github.com/eslint/eslint/issues/3458) делать полноценную систему для общих конфигураций, так что вам 
необходимо так же установить `peerDependencies`.

```
yarn add eslint eslint-config-airbnb eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y\
 eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin --dev
```


Файл `.eslintrc.js` вашего проекта:
```js
module.exports = {
    extends: require.resolve('arui-presets-lint/eslint')
};
```

#### stylelint
Вы можете унаследовать конфигурацию вашего stylelint от `arui-presets-lint/stylelint`.


Файл `stylelint.config.js` вашего проекта:
```js
module.exports = {
    extends: 'arui-presets-lint/stylelint'
};
```

В зависимостях этого проекта уже имеются stylelint и eslint с нужными наборами плагинов, поэтому
для использования валидации достаточно добавить в "scripts" вашего package.json
```
"lint-css": "stylelint ./src/**/*.css",
"lint-js": "eslint ./src/ --ext .js,.jsx",
"lint": "npm run lint-css && npm run lint-js",
```

#### prettier
Файл `package.json` вашего проекта:
```
...
    "prettier": "arui-presets-lint/prettier",
...
```

Для корректной работы с правилами линтера рекомендуется использовать `prettier-eslint`
```
yarn add prettier-eslint --dev
```

Файл `package.json`:
```
...
    "scripts": {
        "format": "prettier-eslint --write \"./src/**/*.{ts,tsx,js,jsx,css}\""
    },
...
```

Автоматическое форматирование на прекомит хуке возможно с помощью пакетов `lint-staged` и `husky`.
Конфигурация в `package.json`:

```
...
    "lint-staged": {
        "concurrent": true,
        "linters": {
            "src/**/*.{js,jsx,ts,tsx}": ["prettier-eslint --write", "git add", "eslint"],
            "*.css": ["prettier-eslint --write", "git add", "stylelint"]
        }
    },
    "husky": {
        "hooks": {
            "pre-commit": "yarn lint-staged",
        }
    },
...
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
