const play = document.querySelector("#play");

const btn = document.querySelectorAll(".gameBtn");

let currentPlayer = 1;

play.addEventListener("onClick", startGame);

function startGame(){
    btn.forEach((element,index) => {
        element.addEventListener("onclick",()=>{
            if (currentPlayer == 1) {
                this.innerHTML = "X";
                currentPlayer = 2;
            }
            else {
                this.innerHTML = "O";
                currentPlayer = 1;
            }
        })
    });
}

    

