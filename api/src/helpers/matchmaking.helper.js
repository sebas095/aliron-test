// generate an array with pairs indicating the matchmakings
function getRandomMatch(playersNumber) {
  const matchmaking = [];
  const players = new Array(playersNumber).fill(0).map((_, index) => index);

  for (let i = 0; i < playersNumber / 2; i++) {
    // Choose random players
    const playerOne = getRandomPlayer(players);
    const playerTwo = getRandomPlayer(players);
    matchmaking.push([playerOne, playerTwo]);
  }

  return matchmaking;
}

function getRandomPlayer(players) {
  const indexPlayer = getRandomNumber(0, players.length - 1);
  const player = players[indexPlayer];
  players.splice(indexPlayer, 1);

  return player;
}

function getRandomNumber(start, end) {
  return Math.round(Math.random() * (end - start) + start);
}

module.exports = { getRandomMatch };
