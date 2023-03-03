// Global variables
const startButton = document.getElementById('start-button');
const quizSection = document.getElementById('quiz-section');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const choiceButtons = document.getElementsByClassName('choice');
const gameOverSection = document.getElementById('game-over-section');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const submitButton = document.getElementById('submit-score');
let currentQuestionIndex = 0;
let timeLeft = 60;
let timerInterval;
let score = 0;

//Quiz questions and answers

const quizQuestions = [
{
    question: 'What is the file extension for a JavaScript file?',
    choices: ['js', 'html','css', 'txt'],
    answer: 'js'
},
{

    question: 'What is the syntaxt for a "for" loop in JavaScript?',
    choices: ['for (i = 0; i < 10; i++)', 'for (i = 0; i < 10)', 'for (i < 10; i++)', 'for (i++ = 0; i < 10)'],
    answer: 'for (i = 0; i < 10; i++)'
},
{
    question: 'What method is used to add an element to the end of an array?',
    choices: ['push()', 'pop()', 'shift()', 'unshift()'],
    answer: 'push()'
},
{
    question: 'What keyword is used to declare a variable in JavaScript?',
    choices: ['const', 'let', 'var', 'declare'],
    answer: 'var'
}
]

//Function

function startQuiz() {
    // Hide start section and show quiz section
    document.getElementById('start-section').style.display = 'none';
    quizSection.style.display = 'grid';
  
    // Set timer and show first question
    setTime();
    showQuestion();
  }
  
  function showQuestion() {
    // Get current question object
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Display current question and choices
    questionElement.textContent = currentQuestion.question;
    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement('button');
      button.classList.add('choice');
      button.textContent = choice;
      choicesElement.appendChild(button);
    });

     // Add event listeners to choice buttons
  Array.from(choiceButtons).forEach(button => {
    button.addEventListener('click', handleAnswer);
  });
}

function handleAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.textContent;
  
    // Check if answer is correct and adjust score and time left
    if (selectedAnswer === quizQuestions[currentQuestionIndex].answer) {
      score += 10;
    } else {
      timeLeft -= 10;
    }
  
    // Increase question index and check if quiz is over
    currentQuestionIndex++;
    if (currentQuestionIndex === quizQuestions.length || timeLeft <= 0) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  function endQuiz() {
    // Stop timer and hide quiz section
    clearInterval(timerInterval);
    quizSection.style.display = 'none';
  
    // Show game over section and display final score
    gameOverSection.style.display = 'grid';
    finalScoreElement.textContent = score;
}

    function setTime() {
// Display initial time
    const timeElement = document.createElement('p');
    timeElement.textContent = 'Time: ' + timeLeft;
    quizSection.insertBefore(timeElement, questionElement);

// Set timer interval
    timerInterval = setInterval(() => {
    timeLeft--;
    timeElement.textContent = 'Time: ' + timeLeft;

    // End quiz if time runs out
if (timeLeft <= 0) {
    endQuiz();
  }

}, 1000);
}

function saveScore(event) {
event.preventDefault();

// Get initials and save score to local storage
const initials = initialsInput.value.toUpperCase();
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
highScores.push({ initials, score });
localStorage.setItem('highScores', JSON.stringify(highScores));

// Redirect to high scores page
window.location.href = 'second.html';
}


// Event listeners
startButton.addEventListener('click', startQuiz);
submitButton.addEventListener('click', saveScore);