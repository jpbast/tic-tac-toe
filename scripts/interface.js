const SIZE = 3;
let square = []
let player = 1
let count = 1;

startGame();

function startGame() {
    for (let i = 0; i < SIZE; i++) {
        square.push([])
        for (let j = 0; j < SIZE; j++) {
            square[i].push(document.getElementById(count))
            square[i][j].addEventListener("click", game)
            square[i][j].control = -1
            count++
        }
    }
}

let restart = document.getElementById("restart")
console.log(restart)
restart.addEventListener("click", restartGame)

function game() {
   
    if (this.control == -1) {
        this.control = player
        console.log(this.control)
        if (player == 1) 
            addShield(this)
        else 
            addSword(this)
        player = whoPlaysNext(player)
        engine(this.control)     
    }
}

function addShield(square) {
    square.innerHTML = "<img src='./assets/escudo.png' alt='escudo' width='80px'>" 
}

function addSword(square) {
    square.innerHTML = "<img src='./assets/espada.png' alt='escudo' width='80px'>" 
}

function whoPlaysNext(player) {
    return (player == 1) ? 2 : 1
}