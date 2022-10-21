//Global variables
let questionNumber = 0;
let score = 0;
let correctAnswerScore =
  ((selectedQuestions.length - score) / selectedQuestions.length) * 100;
let wrongScore = selectedQuestions.length - score;
let wrongAnswersScore = (wrongScore / selectedQuestions.length) * 100;
const buttonsContainer = document.getElementById("buttons-container");
const nodeNextButton = document.getElementById("next-button-container");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question");
let difficulty;
const nextButton = document.getElementById("next-button");
let time = difficulty + 1;
let timeInDonut = document.getElementById("seconds");
let clickedButton = "";
let congratulations = "";
let subText = "";
let certificate = "";

//Generate Random Number
const randomNumberGenerator = function () {
  let numberOfQuestions = questions.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuestions);
  return randomNumber;
};
//Picks 14 questions without duplicates and returns an array
const generateQuestions = function () {
  let count = 0;
  let randomNumbers = [];

  while (count < 14) {
    let number = randomNumberGenerator();
    if (!randomNumbers.includes(number)) {
      randomNumbers.push(number);
      count++;
    }
  }
  for (let i = 0; i < randomNumbers.length; i++) {
    selectedQuestions.push(questions[randomNumbers[i]]);
  }
  return selectedQuestions;
};

const generateAnswers = function () {
  let arrayMergedAnswers = [];
  let incorrect_answers = selectedQuestions[questionNumber].incorrect_answers;
  let correct_answer = selectedQuestions[questionNumber].correct_answer;

  for (i = 0; i < incorrect_answers.length; i++) {
    arrayMergedAnswers.push(incorrect_answers[i]);
  }

  arrayMergedAnswers.push(correct_answer);
  arrayMergedAnswers = arrayMergedAnswers.sort((a, b) => 0.5 - Math.random());
  for (i = 0; i < arrayMergedAnswers.length; i++) {
    const allButtons = document.createElement("button");
    buttonsContainer.appendChild(allButtons);
    allButtons.innerText = arrayMergedAnswers[i];
    allButtons.classList.add("button-class");
    allButtons.setAttribute(
      "onclick",
      "changeAnswersClass(event); submittedAnswer(event)"
    );
  }
};

const displayQuestion = function () {
  let x = document.getElementById("x");
  x.innerHTML =
    "QUESTION " +
    (questionNumber + 1) +
    ` / <span>` +
    selectedQuestions.length +
    `</span>`;
  let listOfQuestions = selectedQuestions[questionNumber];
  questionText.innerText = listOfQuestions.question;
  if (selectedQuestions[questionNumber].difficulty === "hard") {
    difficulty = 85;
  } else if (selectedQuestions[questionNumber].difficulty === "medium") {
    difficulty = 60;
  } else if (selectedQuestions[questionNumber].difficulty === "easy") {
    difficulty = 30;
  }
  generateAnswers();
  timer();
};

const changeAnswersClass = function (event) {
  const allButtons = document.getElementsByClassName("button-class");
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("button-class-selected");
  }
  event.target.classList.add("button-class-selected");
  nextButton.style.display = "block";
};

const generateNextButton = function () {
  const nextButton = document.createElement("button");
  nodeNextButton.appendChild(nextButton);
  nextButton.innerText = "Next";
  nextButton.classList.add("next-button-class");
  nextButton.classList.toggle("hidden");
  nextButton.setAttribute("onclick", "clickNext(event)");
};

//Proceed Button on/off
function activateButton(event) {
  let button = document.getElementById("proceed-button");
  if (event.currentTarget.checked) {
    button.style.backgroundColor = "#00ffff";
    button.style.boxShadow = "#00ffff 0px 0px 30px";
    button.style.cursor = "pointer";
    button.disabled = false;
  } else if (!event.currentTarget.checked) {
    button.style.backgroundColor = "#a0a4a4";
    button.style.boxShadow = "none";
    button.disabled = true;
    button.style.cursor = "default";
  }
}

const isCheckboxTicked = function () {
  if (document.getElementById("consent-checkbox").checked) {
    window.location.href = "benchmark.html";
  } else {
    alert(
      "You must agree to answer the questions by yourself before proceeding"
    );
  }
};

//Answer selected when Next button clicked, returns the selected answer
const submittedAnswer = function (event) {
  clickedButton = event.target.innerText;
  return clickedButton;
};

const clearDOM = function () {
  clearInterval(timerInterval);
  questionText.innerHTML = "";
  buttonsContainer.innerHTML = "";
};

const nextQuestion = function () {
  let correct_answer = selectedQuestions[questionNumber].correct_answer;
  let given_answer = clickedButton;

  if (questionNumber !== selectedQuestions.length - 1) {
    if (given_answer === correct_answer) {
      score++;
    }
    clickedButton = "";
    questionNumber++;
    hideNextButton();
    clearDOM();
    displayQuestion();
  } else {
    if (given_answer === correct_answer) {
      score++;
    }
    hideNextButton();
    clearInterval(timerInterval);
    resultsPage();
  }
};

window.onload = function () {
  generateQuestions();
  displayQuestion();
};

function hideNextButton() {
  button = document.getElementById("next-button");
  console.log(button);
  button.style.display = "none";
}

const highlightStars = function (event) {
  starsContainer = document.getElementById("stars-container");
  let stars = starsContainer.getElementsByTagName("img");
  let clickedStar = event.target.alt;

  for (let i = 0; i < 10; i++) {
    stars[i].parentNode.classList.remove("selected-stars");
  }

  for (let i = 0; i < clickedStar; i++) {
    stars[i].parentNode.classList.add("selected-stars");
  }
};

//Clears the DOM and creates Results page
const resultsPage = function () {
  clearDOM();
  if ((score / selectedQuestions.length) * 100 >= 60) {
    congratulations = "Congratulations!";
    subText = "You passed the exam";
    certificate = `<span class="certificate">
    We'll send your certificate
    <br />
    in a few minutes.
    <br />
    Check your email (including
    <br />
    promotions / spam folder)
  </span>`;
  } else {
    congratulations = "FAIL!";
    subText = "Study more!";
  }
  document.documentElement.style.setProperty(
    "--a2",
    (score / selectedQuestions.length) * 50
  );
  document.getElementById("main-container").innerHTML =
    `
  <div class="left-container">
        <div class="content">
          Correct
          <b class="percent">` +
    ((score / selectedQuestions.length) * 100).toFixed(2) +
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
        <h1 class="results-header">Results</h1>
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
        <div class="rate-us" onclick="giveFeedback()"><p>Rate us</p></div>
      </div>

      <div class="right-container">
        <div class="content">
          Wrong
          <b class="percent" id="perc">` +
    (
      ((selectedQuestions.length - score) / selectedQuestions.length) *
      100
    ).toFixed(2) +
    `%</b>
          <br />
          <span class="subtext">` +
    (selectedQuestions.length - score) +
    `/` +
    selectedQuestions.length +
    ` Questions</span>
        </div>
      </div>
      `;
};

//Timer function
const timer = function () {
  const FULL_DASH_ARRAY = 283;
  let TIME_LIMIT = difficulty;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;
  document.getElementById("app").innerHTML = `

<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span class="seconds">Seconds</span>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
  <span class="remaining">Remaining</span>
</div>
`;

  startTimer();

  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML =
        formatTime(timeLeft);
      setCircleDasharray();
      if (timeLeft === 0) {
        onTimesUp();
      }
    }, 1000);
  }
  function onTimesUp() {
    clearInterval(timerInterval);
    nextQuestion();
  }
  function formatTime(time) {
    let seconds = time;

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    return seconds;
  }

  function calculateTimeFraction() {
    const rawTimeFraction = timeLeft / TIME_LIMIT;
    return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
  }

  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
    document
      .getElementById("base-timer-path-remaining")
      .setAttribute("stroke-dasharray", circleDasharray);
  }
};

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

const giveFeedback = function () {
  window.location.href = "feedback.html";
};

const welcomePage = function () {
  window.location.href = "welcome-page.html";
};
