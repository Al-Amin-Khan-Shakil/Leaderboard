import './style.css';
import addScore from './modules/addScore.js';
import getScore from './modules/getScore.js';
import Data from './modules/data.js';

const formData = document.getElementById('score-form');
const refreshBTN = document.getElementById('refresh');
const scoreList = document.getElementById('score-list');

formData.addEventListener('submit', async (e) => {
  e.preventDefault();

  const userInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  const user = userInput.value;
  const score = scoreInput.value;
  const newData = new Data(user, score);

  await addScore(newData);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});

refreshBTN.addEventListener('click', () => {
  scoreList.innerHTML = '';
  getScore();
});

window.addEventListener('load', () => {
  scoreList.innerHTML = '';
  getScore();
});