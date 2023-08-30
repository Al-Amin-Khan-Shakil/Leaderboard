const addScore = async (newData) => {
  const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9Zauo9h1pY6f15rihTkl/scores/';
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
  } catch (error) {
    return error;
  }
};

export default addScore;