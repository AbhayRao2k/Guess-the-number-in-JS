const userInput = document.querySelector(".user-input");
const form = document.querySelector("form");
const result = document.querySelector(".result");
const allGuesses = document.querySelector(".all-guesses");
const submitBtn = document.querySelector(".submit-btn");
const startGameBtn = document.querySelector(".start-game");

// To avoid the vulnerability of accessing the randomNumber through global scope, we wrapped it inside a function
// And that is called as IIFE --> Immediately Invoked Function Expression

/*
function antiCheat() {
  const allGuessesArray = [];
  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInputValue = parseInt(userInput.value); // We used parseInt because "userInput.value" only returns a string, but we have to convert string to integer
    if (userInputValue < randomNumber) {
      result.innerText = "Too low!";
    } else if (userInputValue > randomNumber) {
      result.innerText = "Too high!";
    } else {
      result.innerText = "Congrats, your guess is correct!";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    console.log("submitted");
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = "Your guesses: " + allGuessesArray.join(", ");
    form.reset();
  });

  startGameBtn.addEventListener("click", () => {
    result.innerText = "";
    allGuesses.innerText = "";
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
}

antiCheat();
*/

// Another way of writing IIFE function by function() keyword or using ES6+ syntax as below
;(() => {
  const allGuessesArray = [];
  let randomNumber = Math.round(Math.random() * 100);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInputValue = parseInt(userInput.value); // We used parseInt because "userInput.value" only returns a string, but we have to convert string to integer
    if (userInputValue < randomNumber) {
      result.innerText = "Too low!";
    } else if (userInputValue > randomNumber) {
      result.innerText = "Too high!";
    } else {
      result.innerText = "Congrats, your guess is correct!";
      startGameBtn.disabled = false;
      submitBtn.disabled = true;
    }
    console.log("submitted");
    allGuessesArray.push(userInputValue);
    allGuesses.innerText = "Your guesses: " + allGuessesArray.join(", ");
    form.reset();
  });

  startGameBtn.addEventListener("click", () => {
    result.innerText = "";
    allGuesses.innerText = "";
    startGameBtn.disabled = true;
    submitBtn.disabled = false;
    randomNumber = Math.round(Math.random() * 100);
  });
})();
