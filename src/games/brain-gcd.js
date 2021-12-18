import generateRandomNum from '../generaterandomnum.js';
import { roundCount } from '../index.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const rules = 'Find the greatest common divisor of given numbers.';

const gcdGame = () => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const firstRandomNum = generateRandomNum(1, 100);
    const secondRandomNum = generateRandomNum(1, 100);
    const question = (`${firstRandomNum} ${secondRandomNum}`);
    const gameData = getGcd(firstRandomNum, secondRandomNum);
    questionAndCorrectAnswer.push([question, gameData.toString()]);
  }
  return questionAndCorrectAnswer;
};

export { rules, gcdGame };
