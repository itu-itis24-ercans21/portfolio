# BBF 101E: Introduction to Information Systems – 2024-2025 Fall

## Term Project: Personalized Word Prediction Game

**Due Date**: 19.01.2025 23.59

---

## Project Overview

Develop a two-page personal website hosted with GitHub Pages, featuring an 'About Me' section and a custom word prediction game (similar to Hangman) using the HTML, CSS, and JavaScript codes you learned in class.

---

## 🏠 Homepage (About Me): (30 points)

Your GitHub Pages website should feature a homepage where users will see the details about you and a navigating button for the Word Prediction Game. Your About Me section should contain at least the following items:

- **Personal Introduction**: Feature your name, a photograph, and a brief bio.
- **Academic Interests**: Briefly describe your academic interests or study areas.
- **Page Design**: Use CSS to style the page.
- **Navigation Link**: Include a button that navigates to the Word Prediction Game page.

> You can even use your About Me page for any purpose in the future. Therefore, ensure you allocate enough time to design your page in detail.

---

## 👾 Game Page (Word Prediction Game) (70 points)

As the visitors click on the Word Prediction Game button on your homepage, they should be navigated to a new page where your game is hosted. The game details and the aspects you should implement carefully are given in the following items:

### Game Objective

Create a memory game where players click on cards in the sequence of the letters of a five-letter word. The last digit of your student number determines the word you must use in your memory game. If your student number's last digit is:

- `0`: **ADIEU**
- `1`: **SYNTH**
- `2`: **STOCK**
- `3`: **NYMPH**
- `4`: **BLAST**
- `5`: **UNITY**
- `6`: **PRISM**
- `7`: **CHEST**
- `8`: **CLOUD**
- `9`: **BLINK**

### Initial Setup

- Design **vector images** for each letter of your assigned word. You may use **Inkscape** or similar tools for vectorial drawings.
- Initially, hide the word you have implemented from the player so they can start guessing it.
- Include:
  - **Input Tag** for users to enter a word or letter prediction.
  - **Button** to submit the predictions.
  - **Score and Lives details** to inform users about their progress.

### Scoring and Game Termination

- Start with **0 points**.
- Gain **20 points** for each correct letter.
- Lose a life for incorrect letter guesses:
  - Use **heart icons** (SVGs) to represent lives (3 total lives).
- Wrong **full-word predictions** result in an immediate game loss.
- Correct full-word predictions or finding all letters ends the game with a win message.

---

## Game Interface

Your game interface should include:

1. Score display.
2. Lives display.
3. Input field for predictions.
4. Submit button.
5. Reset button (to restart the game with lives reset to 3 and score reset to 0).

---

## Restarting the Game

- Once the game ends, users must press the "Reset the Game" button to start a new game.

---

## NOTES

- Use **HTML, CSS, and JavaScript** for website development.
- Regularly push changes to GitHub and host the project using **GitHub Pages**.
- Submit progress with explanatory commit messages.

---

## SUBMISSION

Submit a **single PDF file** to Ninova before the deadline containing:

1. Full Name
2. Student ID
3. GitHub repository link
4. Homepage link
