let player = document.getElementsByClassName("player")[0]
let bot = document.getElementsByClassName("bot")[0]
let cube = document.getElementsByClassName("dice")[0]
let xod = document.getElementById("xod") 
let win = document.getElementById("headerText")
let step = 0;
let botStep = 0;
let diceStep = 0;

let playerMoves = true;


function move() {

    if (playerMoves) {
        if (step < 10) {
            player.style.left = step + "0%"
        }
        else {
            player.style.bottom = step.toString()[0] + "0%"
            // player
            if (Math.floor(step / 10) % 2 == 0) {
                // console.log(step)
                player.style.left = step % 10 + "0%"
            }
            else {
                player.style.left = 9 - step % 10 + "0%"
            }
    
        }
    
    }
    else{
        if (botStep < 10) {
            bot.style.left = botStep + "0%"
        }
        else {
            bot.style.bottom = botStep.toString()[0] + "0%"
            // player
            if (Math.floor(botStep / 10) % 2 == 0) {
                // console.log(step)
                bot.style.left = botStep % 10 + "0%"
            }
            else {
                bot.style.left = 9 - botStep % 10 + "0%"
            }
    
        }

    }
}

function randomcube() {
    cube.style.pointerEvents = "none"
    cube.style.transition = "2s"
    cube.style.transform = "rotate(1080deg)"
    let diceInterval = setInterval(() => {
        diceStep = Math.floor(Math.random() * 6 + 1);
        cube.src = ("img/dice" + diceStep + ".png")
    }, 100)
    setTimeout(() => {
        cube.style.transition = "0s"
        cube.style.transform = "rotate(0deg)"

        clearInterval(diceInterval)
        if(playerMoves){

            let currentSteps = 0;
            let currentInterval = setInterval(() => {
                if (currentSteps == diceStep) {
                    clearInterval(currentInterval)
                    cube.style.pointerEvents = "auto"
                    if (step == 5) {
                        step = 26
                    }
    
                    else if (step == 8) {
                        step = 49
                    }
                    else if (step == 19) {
                        step = 38
                    }
                    else if (step == 24) {
                        step = 56
                    }
                    else if (step == 52) {
                        step = 71
                    }
                    else if (step == 53) {
                    }
                    else if (step == 60) {
                        step = 81
                    }
                    else if (step == 42) {
                        step = 15
                    }
                    else if (step == 54) {
                        step = 33
                    }
                    else if (step == 77) {
                        step = 41
                    }
                    else if (step == 69) {
                        step = 47
                    }
                    else if (step == 94) {
                        step = 72
                    }
                    else if (step == 95) {
                        step = 81
                    }
    
                    move()
                    playerMoves = false;
                    xod.innerHTML = 'Bot';
                }
                else {
                    step++;
                    if (step >= 99) {
                        step=99
                        cube.style.pointerEvents="none"
                    }
                    move()
                }
                currentSteps++;
            }, 500);

        }
        else{
            let currentSteps = 0;
            let currentInterval = setInterval(() => {
                if (currentSteps == diceStep) {
                    clearInterval(currentInterval)
                    cube.style.pointerEvents = "auto"
                    if (botStep == 5) {
                        botStep = 26
                    }
    
                    else if (botStep == 8) {
                        botStep = 49
                    }
                    else if (botStep == 19) {
                        botStep = 38
                    }
                    else if (botStep == 24) {
                        botStep = 56
                    }
                    else if (botStep == 52) {
                        botStep = 71
                    }
                    else if (botStep == 53) {
                    }
                    else if (botStep == 60) {
                        botStep = 81
                    }
                    else if (botStep == 42) {
                        botStep = 15
                    }
                    else if (botStep == 54) {
                        botStep = 33
                    }
                    else if (botStep == 77) {
                        botStep = 41
                    }
                    else if (botStep == 69) {
                        botStep = 47
                    }
                    else if (botStep == 94) {
                        botStep = 72
                    }
                    else if (botStep == 95) {
                        botStep = 81
                    }
    
                    move()
                    botMoves = false;
                    playerMoves = true;
                    xod.innerHTML = 'Human';

    
                }
                else {
                    botStep++;
                    if (botStep >= 99) {
                        botStep=99
                        cube.style.pointerEvents="none"
                    }
                    move()
                }
                currentSteps++;
            }, 500);
        }

    }, 2000);


}


