const GameBoard = () => {
  // A empty Array to Track Our Players Moves
  const gameBoardArray = ["", "", "", "", "", "", "", "", ""];

  return { gameBoardArray };
};

const Game = (() => {
  //   Looping through the cells
  const currentUserStatus = document.querySelector("p");
  const cellContainer = document.querySelector(".cell-container");
  const cells = document.querySelectorAll(".cell");
  const arrayCells = Array.from(cells);

  const trackGame = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [0, 3, 6],
    [2, 4, 6],
    [0, 4, 8],
  ];

  //   This toggles between Our Players
  let currentUser = "X";
  let indexesX = [];
  let indexesO = [];

  //   This is Our Reset Button
  const body = document.querySelector("body");
  const restartBtn = () => {
    const rbtn = document.createElement("button");
    rbtn.classList.add("remove-button");
    rbtn.textContent = `Player ${currentUser} Won, Press to Play Again`;
    body.appendChild(rbtn);
    rbtn.addEventListener("click", () => {
      location.reload();
    });
  };

  // This Checks for our Draw
  const checkedCells = () => {
    return arrayCells.every((cell) => cell.innerHTML !== "");
  };
  const gameLogic = arrayCells.map((cell, index) => {
    cell.addEventListener(
      "click",
      () => {
        console.log(currentUser);
        if (currentUser === "X") {
          cell.innerHTML = currentUser;
          indexesX.push(index);
          const isWin = trackGame.some((win) =>
            win.every((position) => indexesX.includes(position))
          );

          if (isWin) {
            console.log(`${currentUser} wins`);
            body.removeChild(cellContainer);
            body.removeChild(currentUserStatus);
            restartBtn();
          } else if (checkedCells()) {
            alert("draw");
            document.addEventListener("click", ()=> {
                location.reload()
            })
          }
          currentUser = "O";
          currentUserStatus.innerText = `Current Player : ${currentUser}`;
        } else if (currentUser === "O") {
          cell.innerHTML = currentUser;
          indexesO.push(index);
          const isWin = trackGame.some((win) =>
            win.every((position) => indexesO.includes(position))
          );
          if (isWin) {
            console.log(`${currentUser} wins`);
            body.removeChild(cellContainer);
            body.removeChild(currentUserStatus);
            restartBtn();
          } else if (checkedCells()) {
            alert("draw");
            document.addEventListener("click", ()=> {
                location.reload()
            })
          }
          currentUser = "X";
          currentUserStatus.innerText = `Current Player : ${currentUser}`;
        }
      },
      { once: true }
    );
  });
  return console.log({ gameLogic });
})();
