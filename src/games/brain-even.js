import generateRandomNum from '../generaterandomnum.js';
import { getEngine, roundsCount } from '../index.js';

const isEven = (number) => (number % 2 === 0);

const gameRules = 'Answer "yes" if number is even. Or answer "no"';

const generateOneRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const evenGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  getEngine(gameRules, gameData);
};

export default evenGame;
