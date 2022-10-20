let selectedQuestions = []

const questions = [
  {
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
    difficulty: 'medium',
    question:
      'In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?',
    correct_answer: 'Final',
    incorrect_answers: ['Static', 'Private', 'Public'],
  },
  {
    difficulty: 'easy',
    question: 'The logo for Snapchat is a Bell.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'Pointers were not used in the original C programming language; they were added later on in C++.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'What is the most preferred image format used for logos in the Wikimedia database?',
    correct_answer: '.svg',
    incorrect_answers: ['.png', '.jpeg', '.gif'],
  },
  {
    difficulty: 'easy',
    question: 'In web design, what does CSS stand for?',
    correct_answer: 'Cascading Style Sheet',
    incorrect_answers: [
      'Counter Strike: Source',
      'Corrective Style Sheet',
      'Computer Style Sheet',
    ],
  },
  {
    difficulty: 'easy',
    question:
      'What is the code name for the mobile operating system Android 7.0?',
    correct_answer: 'Nougat',
    incorrect_answers: ['Ice Cream Sandwich', 'Jelly Bean', 'Marshmallow'],
  },
  {
    difficulty: 'easy',
    question: 'On Twitter, what is the character limit for a Tweet?',
    correct_answer: '140',
    incorrect_answers: ['120', '160', '100'],
  },
  {
    difficulty: 'easy',
    question: 'Linux was first created as an alternative to Windows XP.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    difficulty: 'easy',
    question:
      'Which programming language shares its name with an island in Indonesia?',
    correct_answer: 'Java',
    incorrect_answers: ['Python', 'C', 'Jakarta'],
  },
  {
    difficulty: 'hard',
    question: 'Whats the capital of England?',
    correct_answer: 'London',
    incorrect_answers: ['Birmingham', 'Coventry', 'Manchester'],
  },
  {
    difficulty: 'hard',
    question: 'Whats the capital of Spain',
    correct_answer: 'Madrid',
    incorrect_answers: ['Barcelona', 'Alicante', 'Malaga'],
  },
  {
    difficulty: 'hard',
    question: 'In which Italian city can you find the Colosseum?',
    correct_answer: 'Rome',
    incorrect_answers: ['Venice', 'Naples', 'Milan'],
  },
  {
    difficulty: 'hard',
    question: 'In the TV show New Girl, which actress plays Jessica Day?',
    correct_answer: 'Zooey Deschanel',
    incorrect_answers: ['Kaley Cuoco', 'Jennifer Aniston', 'Alyson Hannigan'],
  },
  {
    difficulty: 'hard',
    question: 'What is the largest canyon in the world?',
    correct_answer: 'Grand Canyon, USA',
    incorrect_answers: [
      'Verdon Gorge, France',
      'King’s Canyon, Australia',
      'Fjaðrárgljúfur Canyon, Iceland',
    ],
  },
  {
    difficulty: 'hard',
    question: 'How long is the border between the United States and Canada?',
    correct_answer: '5,525 miles',
    incorrect_answers: ['6,525 miles', '4,525 miles', '3,525 miles'],
  },
  {
    difficulty: 'medium',
    question: 'What is the largest active volcano in the world?',
    correct_answer: 'Mouna Loa',
    incorrect_answers: ['Mount Vesuvius', 'Mount Etna', 'Mount Batur'],
  },
  {
    difficulty: 'medium',
    question: 'When did Lenin die',
    correct_answer: '21 January 1924',
    incorrect_answers: [
      '21 January 1934',
      '21 January 1944',
      '21 January 1954',
    ],
  },
  {
    difficulty: 'medium',
    question: 'In which US state did the ​​Scopes Monkey Trial happen?',
    correct_answer: 'Tennessee',
    incorrect_answers: ['Indiana', 'South Dakota', 'Maryland'],
  },
  {
    difficulty: 'medium',
    question:
      'When was the book “To Kill a Mockingbird” by Harper Lee published?',
    correct_answer: '1960',
    incorrect_answers: ['1950', '1970', '1980'],
  },
  {
    difficulty: 'medium',
    question: 'In which museum can you find Leonardo Da Vinci’s Mona Lisa?',
    correct_answer: 'Le Louvre',
    incorrect_answers: [
      'Uffizi Museum',
      'British Museum',
      'Metropolitan Museum of Art',
    ],
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

  while (count < 10) {
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

// --------------------------------------------------

let questionNumber = 0
let score = 0
let correctAnswerScore =
  ((selectedQuestions.length - score) / selectedQuestions.length) * 100
let wrongScore = selectedQuestions.length - score
let wrongAnswersScore = (wrongScore / selectedQuestions.length) * 100

// --------------------------------------------------

const buttonsContainer = document.getElementById('buttons-container')
const nodeNextButton = document.getElementById('next-button-container')
const questionCounter = document.getElementById('question-counter')
const questionText = document.getElementById('question')

const displayQuestion = function () {
  let x = document.getElementById('x')
  x.innerHTML = 'QUESTION ' + (questionNumber + 1) + ` / <span>10</span>`
  let listOfQuestions = selectedQuestions[questionNumber]
  questionText.innerText = listOfQuestions.question

  let arrayMergedAnswers = []
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

const generateNextButton = function () {
  const nextButton = document.createElement('button')
  nodeNextButton.appendChild(nextButton)
  nextButton.innerText = 'Next'
  nextButton.classList.add('next-button-class')
  nextButton.classList.toggle('hidden')
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
    window.location.href = 'benchmark.html'
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
  let correct_answer = selectedQuestions[questionNumber].correct_answer
  let given_answer = clickedButton

  if (questionNumber !== selectedQuestions.length - 1) {
    if (given_answer === correct_answer) {
      score++
    }
    clickedButton = ''
    questionNumber++
    clearDOM()
    displayQuestion()
  } else {
    if (given_answer === correct_answer) {
      score++
    }
    resultsPage()
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

let congratulations = ''
let subText = ''
let certificate = ''
console.log(score)
console.log(congratulations)
console.log((score / selectedQuestions.length) * 100)
const resultsPage = function () {
  if ((score / selectedQuestions.length) * 100 >= 60) {
    congratulations = 'Congratulations!'
    subText = 'You passed the exam'
    certificate = `<span class="certificate">
    We'll send your certificate
    <br />
    in a few minutes.
    <br />
    Check your email (including
    <br />
    promotions / spam folder)
  </span>`
  } else {
    congratulations = 'FAIL!'
    subText = 'Study more!'
  }
  document.documentElement.style.setProperty(
    '--a2',
    (score / selectedQuestions.length) * 50,
  )
  document.getElementById('main-container').innerHTML =
    `
  <div class="left-container">
        <div class="content">
          Correct
          <b class="percent">` +
    (score / selectedQuestions.length) * 100 +
    `%</b>
          <br />
          <span class="subtext">` +
    score +
    `/` +
    selectedQuestions.length +
    ` Questions</span>
        </div>
      </div>

      <div class="middle-container">
        <h1>Results</h1>
        <p class="subheading">The summary of your answers:</p>
        <div class="container">
          <p class="donut-text">` +
    congratulations +
    `
            <br />
            <span class="blue-donut">` +
    subText +
    `</span>
            <br />
            <br />
            ` +
    certificate +
    `
           
          </p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="200"
              cy="200"
              class="donut"
              r="150"
              stroke-width="60"
              stroke="#C2128D"
              fill="none"
            />
            <circle id="result-circle"
              cx="200"
              cy="200"
              class="donut"
              r="150"
              stroke-width="60"
              stroke="#00FFFF"
              fill="none"
            />
          </svg>
        </div>
        <div class="rate-us"><p>Rate us</p></div>
      </div>

      <div class="right-container">
        <div class="content">
          Wrong
          <b class="percent" id="perc">` +
    ((selectedQuestions.length - score) / selectedQuestions.length) * 100 +
    `%</b>
          <br />
          <span class="subtext">` +
    (selectedQuestions.length - score) +
    `/` +
    selectedQuestions.length +
    ` Questions</span>
        </div>
      </div>
      `
}

// -------------------------New Timer----------------------------------------------------------
const FULL_DASH_ARRAY = 283
const WARNING_THRESHOLD = 10
const ALERT_THRESHOLD = 5

const COLOR_CODES = {
  info: {
    color: 'green',
  },
  warning: {
    color: 'orange',
    threshold: WARNING_THRESHOLD,
  },
  alert: {
    color: 'red',
    threshold: ALERT_THRESHOLD,
  },
}

const TIME_LIMIT = 10
let timePassed = 0
let timeLeft = TIME_LIMIT
let timerInterval = null
let remainingPathColor = COLOR_CODES.info.color

document.getElementById('app').innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft,
  )}</span>
</div>
`

startTimer()

function onTimesUp() {
  clearInterval(timerInterval)
  nextQuestion()
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1
    timeLeft = TIME_LIMIT - timePassed
    document.getElementById('base-timer-label').innerHTML = formatTime(timeLeft)
    setCircleDasharray()
    setRemainingPathColor(timeLeft)

    if (timeLeft === 0) {
      onTimesUp()
    }
  }, 1000)
}

function formatTime(time) {
  let seconds = time

  if (seconds < 10) {
    seconds = `0${seconds}`
  }

  return seconds
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES
  if (timeLeft <= alert.threshold) {
    document
      .getElementById('base-timer-path-remaining')
      .classList.remove(warning.color)
    document
      .getElementById('base-timer-path-remaining')
      .classList.add(alert.color)
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById('base-timer-path-remaining')
      .classList.remove(info.color)
    document
      .getElementById('base-timer-path-remaining')
      .classList.add(warning.color)
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction)
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`
  document
    .getElementById('base-timer-path-remaining')
    .setAttribute('stroke-dasharray', circleDasharray)
}
