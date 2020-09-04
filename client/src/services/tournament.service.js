const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function getTournaments() {
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(`${API_ENDPOINT}/tournament`, requestOptions);
  const data = await response.json();

  return data;
}

export async function getTournamentsWinners() {
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(
    `${API_ENDPOINT}/tournament/winner`,
    requestOptions
  );
  const data = await response.json();

  return data;
}

export async function createTournament(body) {
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${API_ENDPOINT}/tournament`, requestOptions);
  const data = await response.json();

  return data;
}

export async function getStage(tournamentId, stageNumber) {
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(
    `${API_ENDPOINT}/tournament/${tournamentId}/${stageNumber}`,
    requestOptions
  );
  const data = await response.json();

  return { stage: data.stage, stageName: data.stageName };
}
