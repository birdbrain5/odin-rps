const choices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerOutput() {
    return choices[(Math.floor(Math.random()*choices.length))]
}

function getPlayerInput(){
    let x = prompt("What do you choose?")
    return x.toUpperCase()
}

function playRound(){
    let x = getComputerOutput()
    let y = getPlayerInput()
    let z = 0

    if (x == y){
        console.log("tie! play again.")
        playRound()
    }
    else if (x == "ROCK") {
        if (y=="PAPER"){console.log("u win"); z = 1}
        if (y=="SCISSORS"){console.log("u lose"); z = 0}
    }
    else if (x == "PAPER") {
        if (y=="ROCK"){console.log("u win"); z = 1}
        if (y=="SCISSORS"){console.log("u lose"); z = 0}
    }
    else if (x == "SCISSORS") {
        if (y=="PAPER"){console.log("u win"); z = 1}
        if (y=="ROCK"){console.log("u lose"); z = 0}
    }

    return z
}

function game(){
    let r1 = playRound()
    let r2 = playRound()
    let r3 = playRound()
    let r4 = playRound()
    let r5 = playRound()
    console.log("You won " + (r1+r2+r3+r4+r5) + " out of 5 rounds") //this is broken oops
}

game()