// Project - Guess Game

// Create a simple guess game where the user has to guess a number between 1 and 10. The user should have three attempts to guess the correct number. After each guess, provide feedback on whether the guess is too low, too high, or correct. If the user guesses the correct number within three attempts, display a congratulatory message. If they fail to guess the number after three attempts, reveal the correct number.
function guessGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 3;

  while (attempts > 0) {
    const userGuess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (userGuess === randomNumber) {
      console.log("Congratulations! You guessed the correct number!");
      return;
    } else if (userGuess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log("Too high! Try again.");
    }
    attempts--;
  }

  console.log(
    `Sorry, you've used all your attempts. The correct number was ${randomNumber}.`,
  );
}
guessGame();
