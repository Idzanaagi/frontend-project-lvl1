import readlineSync from 'readline-sync';

function calculatorGame() {
  function getRandomNumber() {
    return Math.floor(Math.random() * 100);
  }
  let calculationResult;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstRandomNumber = getRandomNumber();
    const secondRandomNumber = getRandomNumber();

    const arrOperator = ['+', '-', '*'];
    const random = Math.floor(Math.random() * arrOperator.length);
    const randomOperator = (arrOperator[random]);

    console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);

    const userAnswer = readlineSync.question('You answer: ');

    if (randomOperator === '+') {
      calculationResult = firstRandomNumber + secondRandomNumber;
    }
    if (randomOperator === '-') {
      calculationResult = firstRandomNumber - secondRandomNumber;
    }
    if (randomOperator === '*') {
      calculationResult = firstRandomNumber * secondRandomNumber;
    }

    if (Number(userAnswer) !== calculationResult) {
      return (`${userAnswer} is wrong answer ;(. Correct answer was ${calculationResult}.\nLet's try again, ${userName}`);
    }
    if (Number(userAnswer) === calculationResult) {
      console.log('Correct!');
    }
  }
  return (`Congratulation, ${userName}!`);
}

export default calculatorGame;
