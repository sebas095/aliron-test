const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export async function login(username, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(`${API_ENDPOINT}/auth/signin`, requestOptions);
  const data = await response.json();

  if (data.token) {
    localStorage.setItem("user", JSON.stringify(data.user));
    localStorage.setItem("token", data.token);
  }

  return data;
}

export async function register(body) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };

  const response = await fetch(`${API_ENDPOINT}/auth/signup`, requestOptions);
  const data = await response.json();

  return data;
}

export function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
  localStorage.removeItem("token");
}

export async function getPlayers() {
  const token = localStorage.getItem("token");

  const requestOptions = {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  };

  const response = await fetch(`${API_ENDPOINT}/user`, requestOptions);
  const data = await response.json();

  return data;
}
