const baseUrl = "https://localhost:44358";

export const getFixtures = () => {
  const url = baseUrl + "/leagues/getFixtures";

  return fetch(url)
    .then((res) => res.json())
    .catch();
};
