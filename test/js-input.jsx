import babelCore from 'stylelint';

function cn(target) {
    return target;
}

@cn('answer-giver')
class AnswersGiver {
    question =
        'The answer to the ultimate question of life, the universe and everything is';

    getAnswer() {
        return `${this.question} 42`;
    }
}

const giver = new AnswersGiver();
definedAfterUsage();

console.log(giver.getAnswer()); // eslint-disable-line no-console
console.log(babelCore.version); // eslint-disable-line no-console

function definedAfterUsage() {
    console.log('Because it is normal!'); // eslint-disable-line no-console
}
