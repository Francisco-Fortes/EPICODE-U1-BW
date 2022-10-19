let selectedQuestions = []

const questions = [
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What does CPU stand for?',
    correct_answer: 'Central Processing Unit',
    incorrect_answers: [
      'Central Process Unit',
      'Computer Personal Unit',
      'Central Processor Unit',
    ],
  },
  {
    category: 'Science: Computers',
    type: 'multiple',
    difficulty: 'easy',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    category: 'Science: Computers',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
]

const randomNumberGenerator = function () {
  let numberOfQuestions = questions.length
  let randomNumber = Math.floor(Math.random() * numberOfQuestions)
  return randomNumber
}

const generateQuestions = function () {
  let count = 0
  let randomNumbers = []

  while (count < 2) {
    let number = randomNumberGenerator()
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number)
      count++
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    selectedQuestions.push(questions[randomNumbers[i]])
  }
  return selectedQuestions
}

let questionNumber = 0
let score = 0
const buttonsContainer = document.getElementById('buttons-container')
const nodeNextButton = document.getElementById('next-button-container')
const questionCounter = document.getElementById('question-counter')
const questionText = document.getElementById('question')

const displayQuestion = function () {
  let listOfQuestions = selectedQuestions[questionNumber]
  questionText.innerText = listOfQuestions.question

  const arrayMergedAnswers = []
  let incorrect_answers = selectedQuestions[questionNumber].incorrect_answers
  let correct_answer = selectedQuestions[questionNumber].correct_answer
  for (i = 0; i < incorrect_answers.length; i++) {
    arrayMergedAnswers.push(incorrect_answers[i])
  }
  arrayMergedAnswers.push(correct_answer)

  for (i = 0; i < arrayMergedAnswers.length; i++) {
    const allButtons = document.createElement('button')
    buttonsContainer.appendChild(allButtons)
    allButtons.innerText = arrayMergedAnswers[i]
    allButtons.classList.add('button-class')
    allButtons.setAttribute(
      'onclick',
      'changeAnswersClass(event); submittedAnswer(event)',
    )
  }
}

const nextButton = document.getElementById('next-button')

const changeAnswersClass = function (event) {
  const allButtons = document.getElementsByClassName('button-class')
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove('button-class-selected')
  }
  event.target.classList.add('button-class-selected')
  nextButton.style.display = 'block'

  let score = 0
  const buttonsContainer = document.getElementById('buttons-container')
  const nodeNextButton = document.getElementById('next-button-container')
  const questionCounter = document.getElementById('question-counter')
  const quizzQuestions = []
  const generateQuestion = function () {
    let listOfQuestions = questions[2]
    displayQuestion.innerText = listOfQuestions.question
  }
}

const arrayMergedAnswers = []
let incorrect_answers = questions[1].incorrect_answers
let correct_answer = questions[1].correct_answer
for (i = 0; i < incorrect_answers.length; i++) {
  arrayMergedAnswers.push(incorrect_answers[i])
}
arrayMergedAnswers.push(correct_answer)

console.log(arrayMergedAnswers[i])
const generateAnswers = function () {
  for (i = 0; i < arrayMergedAnswers.length; i++) {
    const allButtons = document.createElement('button')
    buttonsContainer.appendChild(allButtons)
    allButtons.innerText = arrayMergedAnswers[i]
    allButtons.classList.add('button-class')
    allButtons.setAttribute('onclick', 'clickAnswers(event)')
  }
}

const clickAnswers = function (event) {
  if (event.target.innerText === correct_answer) {
    score++
  } else {
    console.log('incorrect')
  }
}

const generateNextButton = function () {
  const nextButton = document.createElement('button')
  nodeNextButton.appendChild(nextButton)
  nextButton.innerText = 'Next'
  nextButton.classList.add('next-button-class')
  nextButton.setAttribute('onclick', 'clickNext(event)')
}

// Timer------------------------------------------------------------

let difficulty = 60
let time = difficulty + 1
let timeInDonut = document.getElementById('seconds')

setInterval(updateCountdown, 1000)
function updateCountdown() {
  // console.log(seconds);
  time--
  if (time > 0) {
    timeInDonut.innerText = time
  } else {
    timeInDonut.innerText = 'TimeOut!'
  }
}
console.log(time)

// This function will check if the checkbox on the welcome page has been selected and if not, it will show an error

const isCheckboxTicked = function () {
  if (document.getElementById('consent-checkbox').checked) {
    alert('Your ready to take the exam!')
  } else {
    alert(
      'You must agree to answer the questions by yourself before proceeding',
    )
  }
}

let clickedButton = ''
const submittedAnswer = function (event) {
  clickedButton = event.target.innerText
  return clickedButton
}

const clearDOM = function () {
  questionText.innerHTML = ''
  buttonsContainer.innerHTML = ''
}

const nextQuestion = function () {
  if (questionNumber < selectedQuestions.length - 1) {
    let correct_answer = selectedQuestions[questionNumber].correct_answer
    let given_answer = clickedButton

    if (given_answer === correct_answer) {
      score++
    }

    questionNumber++
    clearDOM()
    displayQuestion()
  } else {
    window.location.href = 'results.html'
  }
}

window.onload = function () {
  generateQuestions()
  displayQuestion()
  return selectedQuestions
}

//This function will select all the stars
const highlightStars = function (event) {
  starsContainer = document.getElementById('stars-container')
  let stars = starsContainer.getElementsByTagName('img')
  let clickedStar = event.target.alt

  console.log(stars[clickedStar - 1].alt)
  for (let i = 0; i < clickedStar; i++) {
    stars[i].parentNode.classList.add('selected-stars')
  }
}
