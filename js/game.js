let word = "BLAST";
let guessedLetters = new Set();
let lives = 3;
let score = 0;
let gameOver = false;

const elements = {
  wordDisplay: document.getElementById("wordDisplay"),
  guessInput: document.getElementById("guessInput"),
  submitButton: document.getElementById("submitGuess"),
  resetButton: document.getElementById("resetGame"),
  scoreDisplay: document.getElementById("score"),
  hearts: document.querySelectorAll(".heart"),
};
