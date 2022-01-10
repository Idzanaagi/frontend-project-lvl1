import generateRandomNum from '../generaterandomnum.js';
import { roundsCount } from '../index.js';

const rules = 'What is the result of the expression?';
const arrOfOperators = ['+', '-', '*'];

// eslint-disable-next-line consistent-return
const logicsOfMath = (firstRandomNum, secondRandomNum, randomOperator) => {
  if (randomOperator === '+') {
    return firstRandomNum + secondRandomNum;
  }
  if (randomOperator === '-') {
    return firstRandomNum - secondRandomNum;
  }
  if (randomOperator === '*') {
    return firstRandomNum * secondRandomNum;
  }
};

const generateOneRound = () => {
  const firstRandomNum = generateRandomNum(1, 100);
  const secondRandomNum = generateRandomNum(1, 100);
  const randomNumForOperator = Math.floor(Math.random() * arrOfOperators.length);
  const randomOperator = (arrOfOperators[randomNumForOperator]);
  const question = (`${firstRandomNum} ${randomOperator} ${secondRandomNum}`);
  const answer = (`${logicsOfMath(firstRandomNum, secondRandomNum, randomOperator)}`);
  return [question, answer];
};

const calculatorGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  return gameData;
};

export { rules, calculatorGame };
