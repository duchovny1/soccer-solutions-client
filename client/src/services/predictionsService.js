const baseUrl = "https://localhost:44358";

export const getAllPredictions = () => {
  const leaguesByDateUrl = baseUrl + "/predictions";

  return fetch(leaguesByDateUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const createPrediction = (data) => {
  const createPredictionUrl = baseUrl + "/predictions/create";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(createPredictionUrl, requestOptions)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
