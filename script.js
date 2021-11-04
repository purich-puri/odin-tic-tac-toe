const container = document.querySelector(".TTTContainer");

function setupGrid() {
  for (let i = 0; i < 9; i++) {
    const div = document.createElement("div");
    div.classList.add("noSelect");
    div.addEventListener("click", changeBG);
    container.appendChild(div);
  }
}

function changeBG(e) {
  //   if (e.target.style.backgroundColor === "#000") {
  //     e.target.style.backgroundColor = "#fff";
  //   } else {
  //     e.target.style.backgroundColor = "#000";
  //   }
  if (e.target.innerHTML != "O") {
    e.target.innerHTML = "O";
  } else e.target.innerHTML = "X";
}

setupGrid();
