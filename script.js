const container = document.querySelector(".TTTContainer");

function setupGrid() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("noSelect");
    div.setAttribute("id", i);
    div.addEventListener("click", changeBG);
    container.appendChild(div);
  }
}

function changeBG(e) {
  if (e.target.innerHTML != "O") {
    e.target.innerHTML = "O";
    e.target.style.backgroundColor = "rgb(80,70,200)";
  } else {
    e.target.innerHTML = "X";
    e.target.style.backgroundColor = "rgb(230,90,90)";
  }

  checkWinCondition();
}

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

function checkWinCondition() {
  let a0, a1, a2, a3, a4, a5, a6, a7, a8;
  a0 = document.getElementById("0").innerText;
  a1 = document.getElementById("1").innerText;
  a2 = document.getElementById("2").innerText;
  a3 = document.getElementById("3").innerText;
  a4 = document.getElementById("4").innerText;
  a5 = document.getElementById("5").innerText;
  a6 = document.getElementById("6").innerText;
  a7 = document.getElementById("7").innerText;
  a8 = document.getElementById("8").innerText;

  if (
    (a0 === "X" && a1 === "X" && a2 === "X") ||
    (a3 === "X" && a4 === "X" && a5 === "X") ||
    (a6 === "X" && a7 === "X" && a8 === "X") ||
    (a0 === "X" && a3 === "X" && a6 === "X") ||
    (a1 === "X" && a4 === "X" && a7 === "X") ||
    (a2 === "X" && a5 === "X" && a8 === "X") ||
    (a0 === "X" && a4 === "X" && a8 === "X") ||
    (a2 === "X" && a4 === "X" && a6 === "X")
  ) {
    console.log("win");
  }
}

setupGrid();
