import generateRandomNum from './generaterandomnum.js';
import getEngine from './index.js';

const rules = 'What is the result of the expression?';

const calculatorGame = (roundCount) => {
  const questionAndCorrectAnswer = [];
  let correctAnswer;

  for (let i = 0; i < roundCount; i += 1) {
    const firstRandomNum = generateRandomNum(1, 100);
    const secondRandomNum = generateRandomNum(1, 100);

    const arrOperator = ['+', '-', '*'];
    const random = Math.floor(Math.random() * arrOperator.length);
    const randomOperator = (arrOperator[random]);

    if (randomOperator === '+') {
      correctAnswer = firstRandomNum + secondRandomNum;
    }
    if (randomOperator === '-') {
      correctAnswer = firstRandomNum - secondRandomNum;
    }
    if (randomOperator === '*') {
      correctAnswer = firstRandomNum * secondRandomNum;
    }

    const question = (`${firstRandomNum} ${randomOperator} ${secondRandomNum}`);
    questionAndCorrectAnswer.push([question, correctAnswer.toString()]);
  }
  return questionAndCorrectAnswer;
};

console.log(getEngine(rules, calculatorGame(3)));
