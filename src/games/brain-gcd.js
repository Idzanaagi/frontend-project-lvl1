import generateRandomNum from '../generaterandomnum.js';
import { getEngine, roundsCount } from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (b === 0) {
    return Math.abs(a);
  }
  return getGcd(b, a % b);
};

const generateOneRound = () => {
  const firstRandomNum = generateRandomNum(1, 100);
  const secondRandomNum = generateRandomNum(1, 100);
  const question = (`${firstRandomNum} ${secondRandomNum}`);
  const answer = getGcd(firstRandomNum, secondRandomNum);
  return [question, String(answer)];
};

const gcdGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  getEngine(gameRules, gameData);
};

export default gcdGame;
