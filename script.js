// Function to simulate the rock-paper-scissors game
async function rps(userInput) {
  const options = ["rock", "paper", "scissor"];
  const chosenBySystem = Math.floor(Math.random() * 3);
  const selection = options[chosenBySystem];

  const outcomes = {
    rock: { rock: "tie", paper: "lost", scissor: "won" },
    paper: { rock: "won", paper: "tie", scissor: "lost" },
    scissor: { rock: "lost", paper: "won", scissor: "tie" },
  };

  const message = outcomes[userInput][selection];

  return { selection, message };
}

// Function to handle button clicks
async function handleClick(element) {
  const result = await rps(element.value);

  // Choose emoji based on result
  let emoji = "";
  switch (result.message) {
    case "won":
      emoji = "🔥";
      break;
    case "lost":
      emoji = "💀";
      break;
    case "tie":
      emoji = "👻";
      break;
  }

  // Update the UI with the game results
  document.getElementById(
    "sign-system"
  ).innerHTML = `<h1>${result.selection.toUpperCase()}</h1>`;

  document.getElementById("message").innerText =
    result.message === "tie"
      ? `It's a tie!\n${emoji}`
      : `You ${result.message}!\n${emoji}`;

  document.getElementById(
    "sign-user"
  ).innerHTML = `<h1>${element.value.toUpperCase()}</h1>`;
}

// Attach event listeners to buttons after the DOM has loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("rock").addEventListener("click", function () {
    handleClick(this);
  });

  document.getElementById("paper").addEventListener("click", function () {
    handleClick(this);
  });

  document.getElementById("scissor").addEventListener("click", function () {
    handleClick(this);
  });
});
