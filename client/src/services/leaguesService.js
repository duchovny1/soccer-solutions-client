const baseUrl = "https://localhost:44358";

export const getLeaguesByDate = (date) => {
  const leaguesByDateUrl = baseUrl + "/leagues/by-date" + `?date=${date}`;

  fetch(leaguesByDateUrl)
    .then((res) => res.json())
    .catch((error) => console.log(error));

  console.log(`leagues by date: ${leaguesByDateUrl}`);
};
