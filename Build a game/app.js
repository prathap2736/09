/*const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
checkButton = document.querySelector(".button"),
remainchances = document.querySelector(".chances");


//set the focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);
chance = 10;
 // listen for the click event on the check button
 checkButton.addEventListener("click", () => {
    //Derement the chance ariable on every click
    chance--;
    // get the value from the input field
    let inputValue = input.value;
    // check if the input value is equal to the random number
    if (inputValue == randomNum){
        // update guessed number, disable input, check button text and color.
        [guess.textContent, checkButton.disabled] = ["congratulations", true];
        [checkButton.textContent, guess.style.color] = ["Replay", "#333"];
    }
 }); */

 const input = document.querySelector("input"),
    guess = document.querySelector(".class"),
    checkButton = document.querySelector(".input-field button"),
    remainChances = document.querySelector(".chances");

// Set focus on the input field
input.focus();

let randomNum = Math.floor(Math.random() * 100) + 1; // Generates a number between 1 and 100
let chance = 10;

console.log(randomNum); // For testing

// Listen for the click event on the check button
checkButton.addEventListener("click", () => {
    // Decrement the chance variable on every click
    chance--;
    remainChances.textContent = chance;

    // Get the value from the input field and parse it as a number
    let inputValue = parseInt(input.value);

    if (inputValue === randomNum) {
        // Update guessed number, disable input, check button text, and color.
        guess.textContent = "Congratulations! You guessed it right!";
        guess.style.color = "green";
        checkButton.textContent = "Replay";
        checkButton.disabled = true;
    } else if (chance === 0) {
        guess.textContent = "Game Over! You've used all chances.";
        guess.style.color = "red";
        checkButton.textContent = "Replay";
        checkButton.disabled = true;
    } else if (inputValue > randomNum) {
        guess.textContent = "Your guess is too high!";
        guess.style.color = "orange";
    } else {
        guess.textContent = "Your guess is too low!";
        guess.style.color = "orange";
    }

    // Reset game on "Replay" button click
    if (chance === 0 || inputValue === randomNum) {
        checkButton.addEventListener("click", () => location.reload());
    }
});
