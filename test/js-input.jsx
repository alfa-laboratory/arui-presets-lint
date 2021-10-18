/* eslint-disable no-console */
/* eslint-disable-next-line import/no-extraneous-dependencies */
import React from 'react';
import babelCore from 'stylelint';

import cn from './cn';

const someArray = [
    'hello',
    'this',
    'is',
    'some',
    'array',
    'and',
    'it',
    'has',
    'many',
    'items',
    'that',
    'should',
    'be',
    'wrapped',
];

@cn('answer-giver')
class AnswersGiver {
    question = 'The answer to the ultimate question of life, the universe and everything is';

    getAnswer() {
        return `${this.question} 42`;
    }
}

const giver = new AnswersGiver();

definedAfterUsage();

console.log(giver.getAnswer(), someArray);
console.log(babelCore.version);

function definedAfterUsage() {
    console.log('Because it is normal!');
}

export const element = <div style={ { color: 'black' } } />;

const it = () => {};

// eslint-disable-next-line no-restricted-properties
it.only('this is a test');
