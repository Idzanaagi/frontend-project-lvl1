import generateRandomNum from '../generaterandomnum.js';

const rules = 'What is the result of the expression?';

const calculatorGame = (roundCount) => {
  const questionAndCorrectAnswer = [];
  let gameData;

  for (let i = 0; i < roundCount; i += 1) {
    const firstRandomNum = generateRandomNum(1, 100);
    const secondRandomNum = generateRandomNum(1, 100);

    const arrOperator = ['+', '-', '*'];
    const random = Math.floor(Math.random() * arrOperator.length);
    const randomOperator = (arrOperator[random]);

    if (randomOperator === '+') {
      gameData = firstRandomNum + secondRandomNum;
    }
    if (randomOperator === '-') {
      gameData = firstRandomNum - secondRandomNum;
    }
    if (randomOperator === '*') {
      gameData = firstRandomNum * secondRandomNum;
    }

    const question = (`${firstRandomNum} ${randomOperator} ${secondRandomNum}`);
    questionAndCorrectAnswer.push([question, gameData.toString()]);
  }
  return questionAndCorrectAnswer;
};

export { rules, calculatorGame };
