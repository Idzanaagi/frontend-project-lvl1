import generateRandomNum from '../generaterandomnum.js';
import { getEngine, roundsCount } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const squareRoot = Math.sqrt(number);

  for (let i = 2; i <= squareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateOneRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const question = String(randomNum);
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const primeGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  getEngine(gameRules, gameData);
};

export default primeGame;
