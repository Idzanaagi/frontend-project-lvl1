import generateRandomNum from './generaterandomnum.js';
import getEngine from './index.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = (roundCount) => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const firstRandomNum = generateRandomNum();
    const secondRandomNum = generateRandomNum();
    const question = (`${firstRandomNum} ${secondRandomNum}`);
    const correctAnswer = getGcd(firstRandomNum, secondRandomNum);
    questionAndCorrectAnswer.push([question, correctAnswer.toString()]);
  }
  console.log(questionAndCorrectAnswer);
  return questionAndCorrectAnswer;
};
console.log(getEngine(rules, gcdGame(3)));
