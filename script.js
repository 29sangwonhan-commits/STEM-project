// Display the name of the file chosen
const fileInput = document.getElementById('fileUpload');
const fileNameDisplay = document.getElementById('fileName');

fileInput.addEventListener('change', function() {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = "Selected: " + fileInput.files[0].name;
    }
});

// Mock Upload Function
function uploadFile() {
    if (fileInput.files.length === 0) {
        alert("Please select a file first!");
    } else {
        alert("Upload successful (Simulated)!");
    }
}

// Mini Game Logic: Number Guesser
function playGame() {
    const guess = document.getElementById('guessInput').value;
    const resultText = document.getElementById('gameResult');
    const winningNumber = Math.floor(Math.random() * 10) + 1;

    if (!guess) {
        resultText.textContent = "Please enter a number.";
        return;
    }

    if (parseInt(guess) === winningNumber) {
        resultText.style.color = "green";
        resultText.textContent = `Correct! It was ${winningNumber}. You're a pro!`;
    } else {
        resultText.style.color = "#800020";
        resultText.textContent = `Nope! It was ${winningNumber}. Try again!`;
    }
}
