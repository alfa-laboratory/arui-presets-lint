# Alfa Laboratory UI Presets

[![npm][npm-img]][npm]
[![license][license-img]][license]
[![travis][travis-img]][travis]

[license]: https://opensource.org/licenses/MIT
[license-img]: https://img.shields.io/badge/License-MIT-brightgreen.svg
[npm-img]: https://img.shields.io/npm/v/arui-presets-lint.svg
[npm]: https://www.npmjs.org/package/arui-presets-lint
[travis]: https://travis-ci.org/alfa-laboratory/arui-presets-lint?branch=master
[travis-img]: https://img.shields.io/travis/alfa-laboratory/arui-presets-lint/master.svg?label=unix

<br />

Набор конфигурационных файлов для валидации проектов, основанных на [arui-feather](https://github.com/alfa-laboratory/arui-feather).

[Как я могу улучшить стандарты?](./.github/CONTRIBUTING.md)

## Установка
Для установки всех зависимостей проекта рекомендуется использовать [install-peerdeps](https://github.com/nathanhleung/install-peerdeps)

```
npx install-peerdeps --dev arui-presets-lint
```

Если вы используете yarn на данный момент у вас могут возникнуть проблемы при использовании `install-peerdeps`.
См. этот [issue](https://github.com/nathanhleung/install-peerdeps/issues/70). Временным решением может служить использование
версии `1.11.0`.

```
npx install-peerdeps@1.11.0 --dev arui-presets-lint
```

Так же вы можете поставить все необходимые peerDependencies вручную. Для этого узнайте требуемые версии
с помощью команды

```
npm info "arui-presets-lint@latest" peerDependencies
```

И добавьте их себе в проект как dev зависимости.

## Конфигурация всех линтеров через `package.json`:

```json
{
    "prettier": "arui-presets-lint/prettier",
    "eslintConfig": {
        "extends": "./node_modules/arui-presets-lint/eslint/index.js"
    },
    "stylelint": {
        "extends": "arui-presets-lint/stylelint"
    },
    "commitlint": {
        "extends": ["./node_modules/arui-presets-lint/commitlint"]
    }
}
```

## Конфигурация скриптов для запуска линтеров и форматтера в `package.json`:

```json
{
    "scripts": {
        "lint:css": "stylelint ./src/**/*.css",
        "lint:scripts": "eslint \"**/*.{js,jsx,ts,tsx}\" --ext .js,.jsx,.ts,.tsx",
        "lint": "yarn lint:css && yarn lint:scripts",
        "format": "prettier-eslint --write $INIT_CWD/{config,src}/**/*.{ts,tsx,js,jsx,css}"
    }
}
```

Если eslint пытается валидировать файлы, над которыми вы не имеете контроль, вы можете исключить
их с помощью `.eslintignore`

```
.build
.idea
coverage
```

## Конфигурация `husky` и `lint-staged`:

```json
{
    "lint-staged": {
        "{src,config}/**/*.{js,jsx,ts,tsx}": ["prettier-eslint --write", "eslint"],
        "*.css": ["prettier-eslint --write", "stylelint"]
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }
}
```
В lint-staged так же рекомендуется добавить запуск юнит-тестов, например, `yarn karma --findRelatedTests`

## Итоговая конфигурация линтеров:

```json
{
    "scripts": {
        "lint:css": "stylelint ./src/**/*.css",
        "lint:scripts": "eslint \"**/*.{js,jsx,ts,tsx}\" --ext .js,.jsx,.ts,.tsx",
        "lint": "yarn lint:css && yarn lint:scripts",
        "format": "prettier-eslint --write $INIT_CWD/{config,src}/**/*.{ts,tsx,js,jsx,css}"
    },
    "lint-staged": {
        "{src,config}/**/*.{js,jsx,ts,tsx}": ["prettier-eslint --write", "eslint"],
        "*.css": ["prettier-eslint --write", "stylelint"]
    },
    "husky": {
        "hooks": {
            "pre-commit": "lint-staged",
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    },
    "prettier": "arui-presets-lint/prettier",
    "eslintConfig": {
        "extends": "./node_modules/arui-presets-lint/eslint/index.js"
    },
    "stylelint": {
        "extends": "arui-presets-lint/stylelint"
    },
    "commitlint": {
        "extends": ["./node_modules/arui-presets-lint/commitlint"]
    }
}
```

## Настройка для VS Code:

https://github.com/prettier/prettier-vscode

## Настройка для WebStorm:

https://prettier.io/docs/en/webstorm.html#using-prettier-with-eslint
Вместо `$ProjectFileDir$/node_modules/.bin/prettier` указывать `$ProjectFileDir$/node_modules/arui-presets-lint/node_modules/.bin/prettier-eslint`

## Лицензия

```
The MIT License (MIT)

Copyright (c) 2020 Alfa-Bank

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
