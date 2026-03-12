// Custom Cursor Movement
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// File Upload Logic
const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const fileList = document.getElementById('file-list');

dropZone.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    const name = e.target.files[0].name;
    fileList.innerHTML = `<p style="margin-top:1rem">SUCCESSFULLY LOADED: ${name}</p>`;
});

// Mini Game: The Reaction
let score = 0;
let timeLeft = 5;
let active = false;
let interval;

const gameBtn = document.getElementById('game-btn');
const scoreDisp = document.getElementById('score');
const timerDisp = document.getElementById('timer');

gameBtn.addEventListener('click', () => {
    if(!active) {
        start();
    } else {
        score++;
        scoreDisp.innerText = score < 10 ? '0' + score : score;
    }
});

function start() {
    active = true;
    score = 0;
    timeLeft = 5;
    gameBtn.innerText = "TAP!";
    
    interval = setInterval(() => {
        timeLeft--;
        timerDisp.innerText = '0' + timeLeft;
        if(timeLeft === 0) {
            clearInterval(interval);
            active = false;
            gameBtn.innerText = "INITIATE";
            alert("SANGWON, FINAL SCORE: " + score);
        }
    }, 1000);
}
