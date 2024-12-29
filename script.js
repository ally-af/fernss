/* script.js */

const colorName = document.getElementById("color-name");
const buttons = document.querySelectorAll(".color-btn");
const message = document.getElementById("message");

// Colors for the game
const colors = ["red", "blue", "green"];

// Randomize color and text
function setNewColor() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomText = colors[Math.floor(Math.random() * colors.length)];
    colorName.textContent = randomText.toUpperCase();
    colorName.style.color = randomColor;
    message.textContent = "";
}

// Check the answer
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent.toLowerCase() === colorName.style.color) {
            message.textContent = "Correct!";
            message.style.color = "green";
        } else {
            message.textContent = "Try Again!";
            message.style.color = "red";
        }
        setTimeout(setNewColor, 1000); // Change color after 1 second
    });
});

// Initialize game
setNewColor();
