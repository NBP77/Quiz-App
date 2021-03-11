const startButton = document.getElementById('start-btn');
const nxtButton = document.getElementById('next-btn');
const questionContainer = document.getElementById('question-container');

const questionElement = document.getElementById('question')
const answerBttnElement = document.getElementById('answer-buttons')

var randomQuestions, currQuestionIndex

startButton.addEventListener('click', gameStart);

function gameStart() {
    console.log('Started');
    randomQuestions = questions.sort(() => Math.random() - .5)
    currQuestionIndex = 0
    questionContainer.classList.remove('hide')
    getQuestion()
}

function getQuestion() {
    resetState()
    showQuestion(randomQuestions[currQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
          button.dataset.correct = answer.correct  
        }
        button.addEventListener('click', selectAnswer)
        answerBttnElement.appendChild(button)
        
    });
}

function resetState() {
    nxtButton.classList.add('hide')
    while (answerBttnElement.firstChild) {
        answerBttnElement.removeChild(answerBttnElement.firstChild)
    }
}

function selectAnswer(action) {
    const selectedButton = action.target 
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerBttnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (randomQuestions.length > currQuestionIndex + 1) {
        // move to next question
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    // Need to make it when a ansewr is clicked the next question comes up
}

const questions = [
    {
        question: 'Commonly used data types DO NOT include?',
        answers: [
            { text:'Strings', correct: false },
            { text:'Booleans', correct: false },
            { text:'Alerts', correct: true },
            { text:'Numbers', correct: false },
        ],

        question: 'The condition in an if / else statement is enclosed within ____.',
        answers: [
            { text:'Quotes', correct: false },
            { text:'Parentheses', correct: true },
            { text:'Curly brackets', correct: false },
            { text:'Square brackets', correct: false },
        ],
        
        question: 'Arrays in JavaScript can be used to store ____.',
        answers: [
            { text:'Numbers and strings', correct: false },
            { text:'Other arrays', correct: false },
            { text:'Booleans', correct: false },
            { text:'All of the above', correct: true },
        ],

        question: 'String values must be enclosed within ____ when being assigned to variables.',
        answers: [
            { text:'Commas', correct: false },
            { text:'Curly brackets', correct: false },
            { text:'Quotes', correct: true },
            { text:'Parentheses', correct: false },
        ],

        question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: [
            { text:'JavaScript', correct: false },
            { text:'Terminal / bash', correct: false },
            { text:'For loops', correct: false },
            { text:'Console.log', correct: true},
        ],


    }
]


