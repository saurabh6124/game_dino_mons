cross = true
score = 0;
audigo=new Audio('GameOver.mp3');
audim= new Audio('FullGame.mp3');
setInterval(() => {
    audim.play(); 
}, 1000);
document.onkeydown = function (e) {
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 100 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox - 100 + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    villan = document.querySelector('.villan');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    vx = parseInt(window.getComputedStyle(villan, null).getPropertyValue('left'));
    vy = parseInt(window.getComputedStyle(villan, null).getPropertyValue('top'));

    offX = Math.abs(dx - vx);
    offY = Math.abs(dy - vy);

    if (offX < 100 && offY < 150) {
        gameOver.style.visibility = 'visible';
        villan.classList.remove('villani');
        audigo.play();
        audim.pause();
        setTimeout(() => {
            audigo.pause();
        }, 1000);
    }

    else if (offX < 145 && cross) {
        score = score + 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(villan, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            villan.style.animationDuration = newDur + 's';
        }, 500);

    }
}, 100);

function updateScore(score) {
    ScoreCounter.innerHTML = "Your Score is: " + score;
}