let smallBoxes = document.getElementsByClassName('box');
let smallBoxesToArray = Array.from(smallBoxes);
let stopO;
let currentPlayer = 'X';

let WinningCombo = [
    [0,1,2],                                       
    [3,4,5],
    [6,7,8],
    [0,3,6],                                                                            
    [1,4,7],
    [2,5,8],
    [0,4,8],                                        
    [2,4,6]
];

function checkWin(){
    for (let WC of WinningCombo){
        let sequence = [smallBoxesToArray[WC[0]], smallBoxesToArray[WC[1]],
        smallBoxesToArray[WC[2]]];
        for (let i =0; i<sequence.length; i++){
            if(sequence[i].innerText !==""){
                if((sequence[0].innerText === sequence[1].innerText) && sequence[0].innerText === sequence[2].innerText) {
                   sequence[i].style.backgroundColor = 'pink';
                   clearTimeout(stopO);
                   
                }
                
            }
        } 
    }
   
}

for (let smallBox of smallBoxesToArray){
    smallBox.addEventListener('click', writeX);
    function writeX(){
        smallBox.innerText = "X";
        stopO = setTimeout(writeO, 200); //Computer Move
        checkWin();
    }
}


function writeO(){  //Computer
    emptyBoxes = smallBoxesToArray.filter(empty => empty.innerText == "");
    picker = Math.floor(Math.random() * emptyBoxes.length) - 1;
    emptyBoxes[picker].innerText = "O";
    checkWin();
}


document.getElementById("reset").addEventListener("click", function() {
    for (let i = 0; i < smallBoxesToArray.length; i++) {
      smallBoxesToArray[i].innerHTML = "";
      smallBoxesToArray[i].style.backgroundColor = "#dee9ec";
      smallBoxesToArray[i].style.color = "black";
    }
   
    document.getElementById("message").style.display = "none";
    document.getElementById("board").innerHTML = "X";
    
  });

 
  function showWinner(x, y, z) {
    smallBoxesToArray[x].style.background = "#0d8b70";
    smallBoxesToArray[x].style.color = "white";
    smallBoxesToArray[y].style.background = "#0d8b70";
    smallBoxesToArray[y].style.color = "white";
    smallBoxesToArray[z].style.background = "#0d8b70";
    smallBoxesToArray[z].style.color = "white";
    document.getElementById("Winner").innerHTML =
      currentPlayer == "x" ? "O" : "X";
    document.getElementById("message").style.display = "block";
    
  }
