import getEngine from './index.js';
import generateRandomNum from './generaterandomnum.js';

const getProgression = (start = generateRandomNum(), step = generateRandomNum(), length = 7) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const rules = 'What number is missing in the progression?';

const brainProgression = (roundCount) => {
  const questionAndCorrectAnswer = [];

  for (let i = 0; i < roundCount; i += 1) {
    const progression = getProgression();
    const randomIndex = generateRandomNum();
    const correctAnswer = progression[randomIndex];
    progression[randomIndex] = '..';
    const question = progression.join(' ');
    questionAndCorrectAnswer.push([question, String(correctAnswer)]);
  }
  return questionAndCorrectAnswer;
};

console.log(getEngine(rules, brainProgression(3)));
