import generateRandomNum from '../generaterandomnum.js';
import { roundsCount } from '../index.js';

const isEven = (number) => (number % 2 === 0);
const checkParity = (number) => (isEven(number) ? 'yes' : 'no');

const rules = 'Answer "yes" if number is even. Or answer "no"';

const generateOneRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const question = (`${randomNum}`);
  const answer = checkParity(randomNum);
  return [question, answer];
};

const evenGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  return gameData;
};

export { rules, evenGame };
