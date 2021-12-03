import generateRandomNum from './generaterandomnum.js';
import getEngine from './index.js';

const isPrime = (n) => {
  for (let i = 2; i < n; i += 1) {
    if (n % i === 0) {
      return false;
    }
    return n > 1;
  }
  return n;
};

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const primeGame = (roundCount) => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const randomNum = generateRandomNum();
    const correctAnswer = isPrime(randomNum) === true ? 'yes' : 'no';
    questionAndCorrectAnswer.push([randomNum, correctAnswer]);
  }
  console.log(questionAndCorrectAnswer);
  return questionAndCorrectAnswer;
};
console.log(getEngine(rules, primeGame(3)));
