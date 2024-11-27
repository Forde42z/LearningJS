// Quiz data
const quizData = [
    {
        image: "Shrek_Profile.webp",
        correctAnswer: "Shrek",
        options: ["Toy Story", "Finding Nemo", "The Lion King", "Shrek"]
    },
    {
        image: "toyStory.jpeg",
        correctAnswer: "Toy Story",
        options: ["The Lion King", "Finding Nemo", "Shrek", "Toy Story"]
    },
    {
        image: "Nemo.jfif",
        correctAnswer: "Finding Nemo",
        options: ["Toy Story", "Finding Nemo", "WALL-E", "Shrek"]
    },
    {
        image: "Lion.webp",
        correctAnswer: "The Lion King",
        options: ["The Lion King", "The Jungle Book", "Shrek", "WALL-E"]
    },
    {
        image: "Wall e.jfif",
        correctAnswer: "WALL-E",
        options: ["The Lion King", "Finding Nemo", "WALL-E", "Toy Story"]
    },
    {
        image: "Froze.webp",
        correctAnswer: "Frozen",
        options: ["Frozen", "Moana", "Coco", "Tangled"]
    },
    {
        image: "Profile_-_Moana.webp",
        correctAnswer: "Moana",
        options: ["Frozen", "Moana", "Encanto", "Raya and the Last Dragon"]
    },
    {
        image: "coco.jfif",
        correctAnswer: "Coco",
        options: ["Coco", "The Book of Life", "Ratatouille", "Soul"]
    },
    {
        image: "Ratatouille.jfif",
        correctAnswer: "Ratatouille",
        options: ["Coco", "Ratatouille", "Up", "Inside Out"]
    },
    {
        image: "Monsters, Inc..jpeg",
        correctAnswer: "Monsters, Inc.",
        options: ["Ratatouille", "Up", "Toy Story 3", "Monsters, Inc."]
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

// DOM elements
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const quizImage = document.getElementById("quiz-image");
const optionsContainer = document.getElementById("options-container");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const endImage = document.getElementById("end-image"); // Image element for end game
const restartButton = document.getElementById("restart-btn"); // Restart button
const backgroundMusic = document.getElementById("background-music"); // Background music element

// Start the game
document.getElementById("play-btn").addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame); // Add event listener for restarting the game

function startGame() {
    // Play the background music when the game starts
    backgroundMusic.play(); 

    // Reset game state
    currentQuestion = 0;
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time: ${timeLeft}`;

    // Hide the start page and show the game page
    startPage.style.display = "none";
    gamePage.style.display = "block";

    loadQuestion(); // Load the first question
    startTimer(); // Start the countdown timer
}

// Timer logic
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

// Load a question
function loadQuestion() {
    const question = quizData[currentQuestion];
    quizImage.src = question.image;

    optionsContainer.innerHTML = ""; // Clear previous options
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => checkAnswer(option, question.correctAnswer));
        optionsContainer.appendChild(button);
    });
}

// Check the selected answer
function checkAnswer(selected, correct) {
    if (selected === correct) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }

    // Load next question or end game
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

// End the game
function endGame() {
    clearInterval(timer);
    optionsContainer.innerHTML = `<p>Your score is ${score}.</p>`;
    quizImage.src = "Highscore.png"; // Clear image

    // Pause the background music when the game ends
    backgroundMusic.pause(); 

    // Show restart button
    restartButton.style.display = "block";
}

// Restart the game
function restartGame() {
    // Hide restart button
    restartButton.style.display = "none";
    
    // Reset the game and start over
    startGame();
}
