let score = 0;
let cross = true;

let audio = new Audio('background.mp3');
let audiogo = new Audio('gameOver.mp3');
let jump = new Audio('jump.mp3');
var btnZ = document.getElementById("reset");


document.onkeydown = function(e) {
    audio.play()
    console.log("btnZ called")
    if (e.key === " ") {
        console.log("btnZ called ====")
        let dino = document.querySelector('.player');
        dino.classList.add('animateDino');
        // let obstical = document.querySelector('.obstical');
        // obstical.classList.add('obsticalAni');
        jump.play()
        setTimeout(() => {
            dino.classList.remove('animateDino')
            
        }, 700);

        // setTimeout(() => {
        //     obstical.classList.remove('obsticalAni')
        // }, 800);
       
    }
    
}


setInterval(() => {
    let dino = document.querySelector('.player');
    let gameOver = document.querySelector('.gameover');
    let obstacle = document.querySelector('.obstical');
    let scoreCont = document.querySelector('.scorecontainer');

    let dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    let dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

//  console.log(dx,dy)
let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
let  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

let offsetX = Math.abs(dx - ox);
let offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obsticalAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 3000);
    }
    else if (offsetX < 145 &&  cross) {
        score += 1;
        // updateScore(score);
        scoreCont.innerHTML = "Your Score: " + score
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    
    
  
}