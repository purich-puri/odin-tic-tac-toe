const container = document.querySelector(".TTTContainer");

function setupGrid() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("noSelect");
    div.setAttribute("id", i);
    div.addEventListener("click", chooseBlock);
    container.appendChild(div);
  }
}
setupGrid();

function chooseBlock(e) {
  if (e.target.innerText === "") {
    e.target.innerText = "X";
    e.target.style.backgroundColor = "rgb(80,70,200)";
  } else {
    return;
  }

  checkWinCondition(e);
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

var splicedDivArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
function checkWinCondition(e) {
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
  } else {
    //TODO: FIX AI
    splicedDivArr.splice(e.target.id, 1);
    let randNum =
      splicedDivArr[Math.floor(Math.random() * splicedDivArr.length)];
    console.log("Num:" + randNum + ", Splice: " + splicedDivArr);
    let aInfinit = document.getElementById(randNum.toString());
    aInfinit.innerText = "O";
    splicedDivArr.splice(randNum, 1);
  }
}

const createPlayer = (pName) => {
  const sayHello = () => console.log("hello: " + pName);
  return { pName, sayHello };
};

// var player = createPlayer(prompt("Please enter your name", "Name"));

console.log(player.pName);
player.sayHello();
