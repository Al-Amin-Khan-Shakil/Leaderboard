import Data from "./data.js";

const userInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const user = userInput.value.trim();
const score = scoreInput.value.trim();

export default addScore = async () => {
  const newData = new Data(user, score);
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/cpZfcWpPK0xkqbUHfKjE/score/';
  const requestBody = JSON.stringify(newData);

  try {
    const response = await fetch(scoreURL, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json',
      },
      body: requestBody,
    });

    const data = await response.json();
    return data.result;
  } catch(error) {
    return error;
  }
}