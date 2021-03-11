const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');

const randomQuestions, currQuestionIndex

startButton.addEventListener('click', gameStart)

function gameStart() {
    console.log('Started');
    randomQuestions = questions.sort(() => Math.random() - .5)
    currQuestionIndex = 0
    getQuestion()
}

function getQuestion() {
    showQuestion(randomQuestions[currQuestionIndex])
}



function selectAnswer() {

}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {Text:'Strings', correct: false},
            {Text:'booleans', correct: false},
            {Text:'Alerts', correct: true},
            {Text:'numbers', correct: false},
        ]

        question: 'Commonly used data types DO NOT include:',
        answers: [
            {Text:'Strings', correct: false},
            {Text:'booleans', correct: false},
            {Text:'Alerts', correct: true},
            {Text:'numbers', correct: false},
        ]
        
    }
]


// Question 1:
// Commonly used data types DO NOT include:
// strings
// booleans
// alerts
// numbers
// Answer is alerts

// Question 2:
// The condition in an if / else statement is enclosed within ____.
// quotes
// curly brackets
// parentheses
// square brackets
// Answer is parentheses

// Question 3:
// Arrays in JavaScript can be used to store ____.
// numbers and strings
// other arrays
// booleans
// all of the above
// Answer is all of the above

// Question 4:
// String values must be enclosed within ____ when being assigned to variables.
// commas
// curly brackets
// quotes
// parentheses
// Answer is quotes

// Question 5:
//   A very useful tool used during development and debugging for printing content to the debugger is:
// JavaScript
// terminal / bash
// for loops
// console.log
// Answer is console.log