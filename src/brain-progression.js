/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import readlineSync from 'readline-sync';

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

function brainProgression() {
  let lett;

  function generateProgression(startProgres = getRandomNumber(), progresStep = getRandomNumber(), progresLength = 10) {
    const progression = [];
    for (let i = 0; i < progresLength; i += 1) { // формируется массив прогрессии
      progression.push(startProgres + progresStep * i);
    }
    const number = getRandomNumber();
    lett = progression[(number)]; // показывает проебанное число
    progression[(number)] = '..';
    return progression.join(' ');
  }
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    console.log(`Question: ${generateProgression()}`);
    const userAnswer = readlineSync.question('You answer: ');
    if (Number(userAnswer) === lett) {
      console.log('Correct!');
    } else {
      return (`${userAnswer} is wrong answer ;(. Correct answer was ${lett}.\nLet's try again, ${userName}`);
    }
  }
  return (`Congratulation, ${userName}!`);
}

export default brainProgression;
