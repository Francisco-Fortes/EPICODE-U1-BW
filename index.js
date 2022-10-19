let selectedQuestions = [];

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
];

const randomNumberGenerator = function () {
  let numberOfQuestions = questions.length;
  let randomNumber = Math.floor(Math.random() * numberOfQuestions);
  return randomNumber;
};

const generateQuestions = function () {
  let count = 0;
  let randomNumbers = [];

  while (count < 2) {
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

// --------------------------------------------------

let questionNumber = 0;
let score = 0;
let correctAnswerScore =
  ((selectedQuestions.length - score) / selectedQuestions.length) * 100;
let wrongScore = selectedQuestions.length - score;
let wrongAnswersScore = (wrongScore / selectedQuestions.length) * 100;

// --------------------------------------------------

const buttonsContainer = document.getElementById("buttons-container");
const nodeNextButton = document.getElementById("next-button-container");
const questionCounter = document.getElementById("question-counter");
const questionText = document.getElementById("question");

const displayQuestion = function () {
  let listOfQuestions = selectedQuestions[questionNumber];
  questionText.innerText = listOfQuestions.question;

  const arrayMergedAnswers = [];
  let incorrect_answers = selectedQuestions[questionNumber].incorrect_answers;
  let correct_answer = selectedQuestions[questionNumber].correct_answer;
  for (i = 0; i < incorrect_answers.length; i++) {
    arrayMergedAnswers.push(incorrect_answers[i]);
  }
  arrayMergedAnswers.push(correct_answer);

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

const nextButton = document.getElementById("next-button");

const changeAnswersClass = function (event) {
  const allButtons = document.getElementsByClassName("button-class");
  for (i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove("button-class-selected");
  }
  event.target.classList.add("button-class-selected");
  nextButton.style.display = "block";

  const buttonsContainer = document.getElementById("buttons-container");
  const nodeNextButton = document.getElementById("next-button-container");
  const questionCounter = document.getElementById("question-counter");
  const quizzQuestions = [];
  const generateQuestion = function () {
    let listOfQuestions = questions[2];
    displayQuestion.innerText = listOfQuestions.question;
  };
};

const arrayMergedAnswers = [];
let incorrect_answers = questions[1].incorrect_answers;
let correct_answer = questions[1].correct_answer;
for (i = 0; i < incorrect_answers.length; i++) {
  arrayMergedAnswers.push(incorrect_answers[i]);
}
arrayMergedAnswers.push(correct_answer);

console.log(arrayMergedAnswers[i]);
const generateAnswers = function () {
  for (i = 0; i < arrayMergedAnswers.length; i++) {
    const allButtons = document.createElement("button");
    buttonsContainer.appendChild(allButtons);
    allButtons.innerText = arrayMergedAnswers[i];
    allButtons.classList.add("button-class");
    allButtons.setAttribute("onclick", "clickAnswers(event)");
  }
};

const generateNextButton = function () {
  const nextButton = document.createElement("button");
  nodeNextButton.appendChild(nextButton);
  nextButton.innerText = "Next";
  nextButton.classList.add("next-button-class");
  nextButton.setAttribute("onclick", "clickNext(event)");
};

// Timer------------------------------------------------------------

let difficulty = 60;
let time = difficulty + 1;
let timeInDonut = document.getElementById("seconds");

setInterval(updateCountdown, 1000);
function updateCountdown() {
  // console.log(seconds);
  time--;
  if (time > 0) {
    timeInDonut.innerText = time;
  } else {
    timeInDonut.innerText = "TimeOut!";
  }
}
console.log(time);

// This function will check if the checkbox on the welcome page has been selected and if not, it will show an error

const isCheckboxTicked = function () {
  if (document.getElementById("consent-checkbox").checked) {
    alert("Your ready to take the exam!");
  } else {
    alert(
      "You must agree to answer the questions by yourself before proceeding"
    );
  }
};

let clickedButton = "";
const submittedAnswer = function (event) {
  clickedButton = event.target.innerText;
  return clickedButton;
};

const clearDOM = function () {
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

    questionNumber++;
    clearDOM();
    displayQuestion();
  } else {
    if (given_answer === correct_answer) {
      score++;
    }
    resultsPage();
  }
};
window.onload = function () {
  generateQuestions();
  displayQuestion();
  return selectedQuestions;
};

//This function will select all the stars
const highlightStars = function (event) {
  starsContainer = document.getElementById("stars-container");
  let stars = starsContainer.getElementsByTagName("img");
  let clickedStar = event.target.alt;

  console.log(stars[clickedStar - 1].alt);
  for (let i = 0; i < clickedStar; i++) {
    stars[i].parentNode.classList.add("selected-stars");
  }
};

let congratulations = "";
let subText = "";
let certificate = "";
console.log(score);
console.log(congratulations);
console.log((score / selectedQuestions.length) * 100);
const resultsPage = function () {
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
  document.getElementById("main-container").innerHTML =
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
              stroke="#00FFFF"
              fill="none"
            />
            <circle
              cx="200"
              cy="200"
              class="donut"
              r="150"
              stroke-width="60"
              stroke="#C2128D"
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
      `;
};
