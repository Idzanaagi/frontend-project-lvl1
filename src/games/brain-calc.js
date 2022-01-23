import generateRandomNum from '../generaterandomnum.js';
import { getEngine, roundsCount } from '../index.js';

const gameRules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const logicsOfMath = (firstRandomNum, secondRandomNum, randomOperator) => {
  switch (randomOperator) {
    case '+':
      return firstRandomNum + secondRandomNum;
    case '-':
      return firstRandomNum - secondRandomNum;
    case '*':
      return firstRandomNum * secondRandomNum;
    default:
      throw new Error(`operation ${randomOperator} is not supported`);
  }
};

const generateOneRound = () => {
  const firstRandomNum = generateRandomNum(1, 100);
  const secondRandomNum = generateRandomNum(1, 100);
  const randomOperator = (operators[(generateRandomNum(0, operators.length - 1))]);
  const question = (`${firstRandomNum} ${randomOperator} ${secondRandomNum}`);
  const answer = (`${logicsOfMath(firstRandomNum, secondRandomNum, randomOperator)}`);
  return [question, answer];
};

const calculatorGame = () => {
  const gameData = [];
  for (let i = 0; i < roundsCount; i += 1) {
    gameData.push(generateOneRound());
  }
  getEngine(gameRules, gameData);
};

export default calculatorGame;
