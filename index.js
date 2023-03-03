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

// I need to create a function to starte the quizz
// I need to set the timer and decreased by 10 second by every wrong answer
// I need to check if the answer is correct or not 
