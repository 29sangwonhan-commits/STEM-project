// 1. File Upload Logic
const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');

fileInput.addEventListener('change', function() {
    if (this.files.length > 0) {
        fileNameDisplay.textContent = `Selected: ${this.files[0].name}`;
        fileNameDisplay.style.color = "#800020"; // Burgundy
    } else {
        fileNameDisplay.textContent = "No file chosen";
    }
});

// 2. Mini Game Logic (Simple Clicker)
let score = 0;
const scoreDisplay = document.getElementById('score');

function playGame() {
    score++;
    scoreDisplay.textContent = score;
    
    // Add a little visual feedback
    scoreDisplay.style.transform = "scale(1.2)";
    setTimeout(() => {
        scoreDisplay.style.transform = "scale(1)";
    }, 100);
}

// 3. Smooth Scrolling Logic (Optional enhancement)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
