const baseUrl = "https://localhost:44358";

export const getLeaguesByDate = (date) => {
  const leaguesByDateUrl = baseUrl + "/leagues/by-date" + `?date=${date}`;

  fetch(leaguesByDateUrl).then((res) => res.json());

  console.log(`leagues by date: ${leaguesByDateUrl}`);
};

export const getLeaguesByCountryId = (id) => {
  // if (!id) {
  //   return { response: [] };
  // }
  id = 1;
  const countryIdUrl = baseUrl + "/leagues/by-countryId" + `?countryId=${id}`;

  return fetch(countryIdUrl).then((res) => res.json());
};
