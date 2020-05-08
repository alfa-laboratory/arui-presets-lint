/* eslint-disable no-console */
import React from 'react';
import babelCore from 'stylelint';

function cn(target) {
    return target;
}

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

export const element = <div style={ { color: 'black' } } prop='prop' />;
