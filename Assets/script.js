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
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
      },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["Quotes", "Parentheses", "Curly brackets", "Square Brackets"],
        answer: "Parentheses"
      }, 
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: ["Numbers and strings", "Other arrays", "Booleans", "All of the above"],
        answer: "All of the above"
      }, 
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
        answer: "Quotes"
      }, 
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is?",
        answers: ["JavaScript", "Terminal / bash", "QFor loops", "Console.log"],
        answer: "Console.log"
      }, 
    ]
        

// I need it to when a answer is chosen thne the next question come us  
var currentQuestionIndex = 0
var choicesEl = document.getElementById("choices");

function getQuestion() {
    // get current question object from array
    var currentQuestion = questions[currentQuestionIndex];
    // update title with current question
    var titleEl = document.getElementById("question");
    titleEl.textContent = currentQuestion.question;
    console.log(titleEl,"Title");

    // clear out any old question choices
    choicesEl.innerHTML = "";
    // loop over choices
    currentQuestion.answers.forEach(function(choice, i) {
      // create new button for each choice
      var choiceNode = document.createElement("button");
      choiceNode.setAttribute("class", "btn");
      choiceNode.setAttribute("value", choice);
      choiceNode.textContent = i + 1 + ". " + choice;
      // attach click event listener to each choice
      choiceNode.onclick = "questionClick";
      // display on the page
      choicesEl.appendChild(choiceNode);
    });
  }
getQuestion();

  
// I need the timer to start when the start button is pushed and then link it to when
// you click the wrong answer the timer goes down by 3.. Also the timer stops at 0

(function() {
  var sec = 30;
  function startTimer(){
      console.log('timer suppose to go')
      var timer = setInterval(function(){
          sec--;
          document.getElementById('timerDisplay').innerHTML='00:'+sec;
          if (sec < 0) {
              clearInterval(timer);
              alert("Time is up!")
          }
      }, 1000);
  }
  document.getElementById('incorrect').addEventListener('click', function() {
      sec -= 5;
      document.getElementById('timerDisplay').innerHTML='00:'+sec;
  });
  startTimer();
})();
