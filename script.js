const playerTxt = document.getElementById("playerWin");
const computerTxt = document.getElementById("computerWin");
const resultTxt = document.getElementById("resultGame");

const choiceBtns = document.querySelectorAll(".choiceBtn");

const placarTxt = document.querySelector(".placar");

let player;
let computer;
let result;
let countPlayer = 0;
let countComputer = 0;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent;
    computerTurn();
    playerTxt.textContent = `Jogador: ${player}`;
    computerTxt.textContent = `Computador: ${computer}`;
    resultTxt.textContent = checkWinner();
    placarTxt.textContent = `Voce: ${countPlayer} | Computador: ${countComputer}`;
    checkEnd();
}))

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = 'PEDRA';
            break;
        case 2:
            computer = 'PAPEL';
            break;
        case 3:
            computer = 'TESOURA';
            break;
    }
}

function checkWinner() {
    if(player == computer) {
        return 'Empate';
    }else if(computer == 'PEDRA') {
        if(player === 'PAPEL') {
            countPlayer++;
            return "Você venceu!";
        }else {
            countComputer++;
            return "Você perdeu";
        }
    }else if(computer == 'PAPEL') {
        if(player === 'TESOURA') {
            countPlayer++;
            return "Você venceu!";
        }else {
            countComputer++;
            return "Você perdeu!";
        }
    }else if(computer == 'TESOURA') {
        if(player === 'PEDRA') {
            countPlayer++;
            return "Você venceu!";
        }else {
            countComputer++;
            return "Você perdeu!";
        }
    }
}

function checkEnd() {
    if(countPlayer >= 10) {
        placarTxt.textContent = "Você fez 10 pontos e ganhou. Parabéns!";
        countPlayer = 0;
        countComputer = 0;
    }else if(countComputer >= 10) {
        placarTxt.textContent = "O computador fez 10 pontos e ganhou. :(";
        countPlayer = 0;
        countComputer = 0;
    }
}