import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball= new Ball(document.getElementById("ball"));
const playerPaddle= new Paddle(document.getElementById("paddle-player"));
const computerPaddle= new Paddle(document.getElementById("paddle-computer"));
const playerScore= document.getElementById('player-score');
const computerScore= document.getElementById('computer-score');

let lasttime;
function update(time){
    if(lasttime!=null){
        const delta=1;
        ball.update(delta,[computerPaddle.rect(),playerPaddle.rect()]);
        if(isLose()){
            const rect=ball.rect();
            if(rect.right >= window.innerWidth){                
                alert("player 1 scored");
                playerScore.textContent=parseInt(playerScore.textContent)+1;
            } else{ alert("player 2 scored"); computerScore.textContent=parseInt(computerScore.textContent)+1;}
            if(playerScore.textContent==10) { alert("Player 1 Won"); scorereset();}
            else if(computerScore.textContent==10){ alert("player 2 Won"); scorereset();}
            else    ball.reset();
        }
    }
    lasttime=time;
    window.requestAnimationFrame(update);
}
function scorereset(){
    playerScore.textContent=0;
    computerScore.textContent=0;
}
window.requestAnimationFrame(update);
function isLose(){
    const rect=ball.rect();
    return rect.right >= window.innerWidth || rect.left<=0;
}


document.addEventListener("mousemove", e=>{
   playerPaddle.y = e.y/window.innerHeight * 100;
    computerPaddle.y = e.y/window.innerHeight * 100;
})
