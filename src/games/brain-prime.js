import generateRandomNum from '../generaterandomnum.js';
import { roundsCount } from '../index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const checkPrime = (number) => (isPrime(number) ? 'yes' : 'no');

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateOneRound = () => {
  const randomNum = generateRandomNum(1, 100);
  const question = (`${randomNum}`);
  const answer = checkPrime(randomNum);
  return [question, answer];
};

const primeGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  return gameData;
};

export { rules, primeGame };
