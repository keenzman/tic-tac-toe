// 3x3 grid
// UI -> what the user will use
// HTML, CSS grid
// getting grid on square

// Connect 3 to win -> three of a set -> horizontal, vertical, diagonal
// 2 players -> 0s and Xs

// 0s and Xs -> connect three to win
// players turn -> click on square to make it either X/0

// -- Begin --

// GET GRID SQUARES IN JS
//  -> LINK JS IN HTML
//  -> GET THE SQUARES IN JS // RESEARCH -> how we have done this before?
//  -> LOG TO CONSOLE
// --
const grid = document.querySelector(".grid");
const gridCells = document.querySelectorAll(".grid__cell");

// Do a horizontal check of first row -> XXX or OOO to win
// Remember that we get a NodeList of all 9 cells
const firstRow = [gridCells[0], gridCells[1], gridCells[2]];

const checkWinCondition = (squareArr) => {
  const innerHTMLArr = squareArr.map((square) => {
    return square.innerHTML;
  });
  // console.log(innerHTMLArr); // ["X", "O", "X"]
  const toCheck = innerHTMLArr.join("");
  if (toCheck === "XXX" || toCheck === "OOO") {
    return true;
  } else {
    return false;
  }
};

// --
// A way of storing player go or not
// var to track -> change it -> let
// - isPlayerOneTurn -> true
// - isPlayerTwoTurn -> false
let isPlayerOneTurn = true;
let isPlayerTwoTurn = false;
gridCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Seeing it as an obj, rather than an HTML elem.
    // console.log({ cell });
    // cell.innerHTML = "X";

    // Guard condition, checks if slot is empty. i.e. no textContent
    if (cell.innerHTML !== "") {
      alert("Already taken! Choose an Empty Slot");
      return;
    }
    // player's turn
    // update event -> if Pl1, do X, else do 0
    // update player tracker to switch turn
    // - If Pl1 turn -> Pl1 = false & Pl2 = true
    // - If Pl2 turn -> Pl1 = true & Pl2 = false
    if (isPlayerOneTurn && !isPlayerTwoTurn) {
      cell.innerHTML = "X";
      isPlayerOneTurn = false;
      isPlayerTwoTurn = true;
    } else {
      cell.innerHTML = "O";
      isPlayerTwoTurn = false;
      isPlayerOneTurn = true;
    }

    console.log(checkWinCondition(firstRow));
  });
});
