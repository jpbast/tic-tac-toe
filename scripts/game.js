function engine(control) {
    if (checkVerticalAndHorizontal(control) || checkDiag(control)) {
        setTimeout(() => {
            alert(`Jogador ${control} venceu a partida!`)
        }, 10)
        endGame()
    }       
}

function endGame() {
    for (let i = 0; i < SIZE; i++)
        for (let j = 0; j < SIZE; j++)
            square[i][j].control = 0
}

function restartGame() {
    for (let i = 0; i < SIZE; i++) {
        square[i].forEach(sqr => {
            sqr.innerHTML = ''
            sqr.control = -1
        })
    }  
    console.log(square)
    square = []
    player = 1
    count = 1;
    startGame();
}

function checkVerticalAndHorizontal(control) {

    let countVert
    let countHor
    for (let i = 0; i < SIZE; i++) {
        countVert = 0
        countHor = 0
        for (let j = 0; j < SIZE; j++) {
            if (square[j][i].control == control)
                countVert++
            if (square[i][j].control == control)
                countHor++
        }
        if (countVert == SIZE || countHor == SIZE)
            return true
    }
    return false
}

function checkDiag(control) {
    let countMain = 0
    let countSec = 0
    let j = SIZE - 1
    for (let i = 0; i < SIZE; i++) {
        if (square[i][i].control == control)
            countMain++
        if (square[i][j].control == control)
            countSec++
        j--;
    }

    return (countMain == SIZE || countSec == SIZE) ? true : false
}