let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let newGameBtn = document.getElementById("new-game-btn");

let startingHomeScore = 0;
let startingGuestScore = 0;

function addScore(side, num) {
  if (side == "home") {
    startingHomeScore += num;
    homeScore.textContent = startingHomeScore;
  } else if (side == "guest") {
    startingGuestScore += num;
    guestScore.textContent = startingGuestScore;
  }
}

function resetGame() {
  startingHomeScore = 0;
  startingGuestScore = 0;
  homeScore.textContent = startingHomeScore;
  guestScore.textContent = startingGuestScore;
}

