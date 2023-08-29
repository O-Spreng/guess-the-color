<h4 align="center"><a href="https://guess-the-color-eosin.vercel.app/">Live Preview</a></h4>

<p align="center">GUESS THE COLOR is a game were the objective consists in identify as many colors as possible within a 30-second timeframe.</p>


<p align="center">
  <a href="https://github.com/O-Spreng">
    Made by Otto Spreng
  </a>
</p>

<p align="center">

</p>

---

## Table of Contents

<ul>
  <li><a href="#-getting-started">Getting Started</a></li>
  <li><a href="#-challenges">Chalenges</a></li>
</ul>

---

## 🚀 Getting Started

### Prerequisites

- To run any ReactJS application you need to configure the environment on your machine.

- Setting the environment is a simple process, install NodeJS on your machine and that's all.
  - [NodeJS Installation](https://nodejs.org/en)

### Clone

- Clone this repo to your local machine using:
  ```
  https://github.com/O-Spreng/softexpert-front-test.git
  ```

### Setup

- Install project dependencies
  ```javascript
    yarn install
    // or
    npm install
    ```

### Available commands

<p>In this project, you can run the following scripts:</p>

| Script        | Description                                                                 |
|---------------| --------------------------------------------------------------------------- |
| npm dev       | Runs the app in the development mode.                                       |
| npm build     | Builds the app for production to the `.next` folder.                        |
| npm start     | Run production build locally.                                               |
| npm lint      | Runs the Eslint and show code problems                                      |

---

## Code Challenge
This game is a project created for a technical test for a Frontend Developer opportunity,
the challenge was to create the entire application from scratch with the functionalities proposed by the company's developers!

## ⚔ Challenges

The code challenge instructions can be found in CHALLENGE.MD

**Game Implementation:**
- [x] Start the game only when the player decides (START).
- [x] Generate a random color and three answer options in hexadecimal.
- [x] Define the logic for correctness and scoring based on player responses.
- [x] Control response time (10s).
- [x] Record points (gain/loss) according to player responses.

**Data Persistence:**
- [x] Maintain HIGH SCORE after page refresh.
- [x] Handle interruptions by ignoring ongoing games when reloading the page.
- [x] Persist the stack of colors from the last completed match.
- [x] Allow restarting the match at any time (RESTART).
- [x] Provide the option to clear all data saved by the game (RESET ALL DATA).

**User Experience (UX):**
- [x] Create pleasant text contrast against colored backgrounds.
- [x] Implement the side panel as a stack of recent colors.
- [x] Enable infinite vertical scrolling in the side panel only.
- [x] Add simple animations to enhance the visual experience.

**Technology and Framework:**
- [x] Use ReactJS for frontend development.

### Extras - Hardcore Features

**Difficulty Levels:**
- [x] Allow variation of 3 to 5 answer options based on the chosen difficulty (Easy|Medium|Hard) by the player.

**Username and High Score:**
- [x] Add the option for the player to input their username.
- [x] Save the player's high score for future matches.

**Time Decrement/Increment:**
- [x] Decrement remaining time for the match to end when the player loses points.
- [x] Increment remaining time for the match to end when the player gains points.

---

### Built with

- [ReactJS](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Typescript](https://www.typescriptlang.org/) - TypeScript is an open-source language which builds on JavaScript, one of the world’s most used tools, by adding static type definitions.
- [Next.js](https://nextjs.org/) - Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
- [ESLint](https://eslint.org/) - ESLint statically analyzes your code to quickly find problems. It is built into most text editors and you can run ESLint as part of your continuous integration pipeline.

---

Made with 💛 Enjoy it!
