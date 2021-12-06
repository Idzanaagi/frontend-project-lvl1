import readlineSync from 'readline-sync';

function getEngine(rules, correctAnswer) {
  const roundCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  for (let i = 0; i < roundCount; i += 1) {
    console.log(`Question: ${correctAnswer[i][0]}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (userAnswer === correctAnswer[i][1]) {
      console.log('Correct!');
    }
    if (userAnswer !== correctAnswer[i][1]) {
      return (`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i][1]}'.\nLet's try again, ${userName}`);
    }
  }
  return (`Congratulations, ${userName}!`);
}
export default getEngine;
