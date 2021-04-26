const baseUrl = "https://localhost:44358";

export const getAll = () => {
  const url = baseUrl + "/countries";

  return fetch(url)
    .then((res) => res.json())
    .catch();
};
