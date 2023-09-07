#! /usr/bin/env node
import inquirer from "inquirer";

const minNumber: number = 1;
const maxNumber: number = 50;
const secretNumber: number = Math.floor(Math.random() * 50 + 1);


const maxAttempts: number = 3;

async function startGame() {
  console.log(" ====== Welcome to Guess the Number Game! ====== ");
  console.log(
    `You have ${maxAttempts} attempts to guess the number between ${minNumber} and ${maxNumber}.`
  );

  for (let attempts = 1; attempts <= maxAttempts; attempts++) {
    const { guess } = await inquirer.prompt([
      {
        type: "input",
        name: "guess",
        message: `Attempt ${attempts}: Guess the number:`,
      },
    ]);

    const parsedGuess = parseInt(guess, 10);
   

    if (isNaN(parsedGuess) || parsedGuess < minNumber ||  parsedGuess > maxNumber) {

      console.log(
        "Invalid input. Please enter a valid number between 1 and 50."
      );
    
    } else if (parsedGuess === secretNumber) {
      console.log(` ===== Congratulations! You guessed the Correct Number '${secretNumber}' in ${attempts} attempts.! ===== `);
      return;
    } else if (parsedGuess < secretNumber) {
      console.log("Try a higher number.");
    } else {
      console.log("Try a lower number.");
    }
  }

  console.log(`Game Over! The number was ${secretNumber}.`);
}

startGame();
