import readlineSync from 'readline-sync';

const getEngine = (rules, gameData) => {
  const roundCount = 3;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < roundCount; i += 1) {
    console.log(`Question: ${gameData[i][0]}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer !== gameData[i][1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData[i][1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default getEngine;
