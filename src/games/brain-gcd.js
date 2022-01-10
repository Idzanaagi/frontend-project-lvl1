import generateRandomNum from '../generaterandomnum.js';
import { roundsCount } from '../index.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const rules = 'Find the greatest common divisor of given numbers.';

const generateOneRound = () => {
  const firstRandomNum = generateRandomNum(1, 100);
  const secondRandomNum = generateRandomNum(1, 100);
  const question = (`${firstRandomNum} ${secondRandomNum}`);
  const answer = getGcd(firstRandomNum, secondRandomNum);
  return [question, answer.toString()];
};

const gcdGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  return gameData;
};

export { rules, gcdGame };
