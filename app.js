const play = document.querySelector("#play");

const btn = document.querySelectorAll(".sc");

let currentPlayer = 1;

let count = 0;

play.addEventListener("click", startGame);

function startGame() {
    btn.forEach((element, index) => {
        element.addEventListener("click", () => {
            if (currentPlayer == 1) {
                btn[index].innerHTML = "X";
                currentPlayer = 2;
                count+=1;
            }
            else {
                btn[index].innerHTML = "O";
                currentPlayer = 1;
                count+=1;
            }
        })
    });
}



