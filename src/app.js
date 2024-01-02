// Player object
const Player = (name, marker) => {
  return { name, marker };
};

//GameBoard object
const GameBoard = (() => {
  const gameArray = ["", "", "", "", "", "", "", "", ""];

  return { gameArray };
})();

const Game = (() => {
  // Our Players
  const initializePlayer = () => {
    const playerX = Player(prompt("What is your name Player X"), "x");
    const playerO = Player(prompt("What is your name Player O"), "o");

    const choice1 = prompt(`Choose between (0-8) ${playerX.name}`);
    GameBoard.gameArray[choice1] = playerX.marker;

    const choice2 = prompt(`Choose between (0-8) ${playerO.name}`);
    GameBoard.gameArray[choice2] = playerO.marker;

    if (GameBoard.gameArray[choice1] === GameBoard.gameArray[choice2]){
        return alert("please choose a different spot")
    }
    console.log(GameBoard.gameArray);

    return { playerX, playerO };
  };
  const startGame = () => {
    initializePlayer();
  };

  return { startGame };
})();
Game.startGame();
