let currentPlayer = 'X';
let gameStatus = "Game is Running";

const boxes = document.getElementsByClassName("box");
for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener("click", function (){
        if(boxes[i].innerHTML.trim() == "" && gameStatus == "Game is Running"){
            boxes[i].innerHTML = currentPlayer;
            currentPlayer = currentPlayer == "X" ? "O": "X";
            document.getElementsByClassName("board").innerHTML = currentPlayer.toLocaleUpperCase();
        }


        if (
            boxes[0].innerHTML == boxes[1].innerHTML &&
            boxes[1].innerHTML == boxes[2].innerHTML &&
            boxes[0].innerHTML.trim() != ""
        ) {
            state(0, 1, 2);
        } else if (
            boxes[3].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[5].innerHTML &&
            boxes[3].innerHTML.trim() != ""
        ) {
            state(3, 4, 5);
        } else if (
            boxes[6].innerHTML == boxes[7].innerHTML &&
            boxes[7].innerHTML == boxes[8].innerHTML &&
            boxes[6].innerHTML.trim() != ""
            ) {
            state(6, 7, 8);
        } else if (
            boxes[0].innerHTML == boxes[3].innerHTML &&
            boxes[3].innerHTML == boxes[6].innerHTML &&
            boxes[0].innerHTML.trim() != ""
            ) {
             state(0, 3, 6);
        } else if (
            boxes[1].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[7].innerHTML &&
            boxes[1].innerHTML.trim() != ""
        ) {
            state(1, 4, 7);
        } else if (
            boxes[2].innerHTML == boxes[5].innerHTML &&
            boxes[5].innerHTML == boxes[8].innerHTML &&
            boxes[2].innerHTML.trim() != ""
        ) {
            state(2, 5, 8);
        } else if (
            boxes[0].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[8].innerHTML &&
            boxes[0].innerHTML.trim() != ""
         ) {
            state(0, 4, 8);
        } else if (
            boxes[2].innerHTML == boxes[4].innerHTML &&
            boxes[4].innerHTML == boxes[6].innerHTML &&
            boxes[2].innerHTML.trim() != ""
        ) {
            state(2, 4, 6);
        }
    });
}   

document.getElementById("reset").addEventListener("click", function() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = "";
      boxes[i].style.backgroundColor = "#dee9ec";
      boxes[i].style.color = "black";
    }
    currentPlayer = "x";
    document.getElementById("message").style.display = "none";
    document.getElementById("board").innerHTML = "X";
    gameStatus = "Game is Running";
  });

 
  function state(x, y, z) {
    boxes[x].style.background = "#0d8b70";
    boxes[x].style.color = "white";
    boxes[y].style.background = "#0d8b70";
    boxes[y].style.color = "white";
    boxes[z].style.background = "#0d8b70";
    boxes[z].style.color = "white";
    document.getElementById("Winner").innerHTML =
      currentPlayer == "x" ? "O" : "X";
    document.getElementById("message").style.display = "block";
    gameStatus = "Game Over";
  }
