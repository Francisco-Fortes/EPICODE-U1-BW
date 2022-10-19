
/**
 * Updates the donut chart's percent number and the CSS positioning of the progress bar.
 * Also allows you to set if it is a donut or pie chart
 * @param  {string}  el      The selector for the donut to update. '#thing'
 * @param  {number}  percent Passing in 22.3 will make the chart show 22%
 * @param  {boolean} donut   True shows donut, false shows pie
 */

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

let score = 0;
const buttonsContainer = document.getElementById("buttons-container");
const nodeNextButton = document.getElementById("next-button-container");
const questionCounter = document.getElementById("question-counter");
const quizzQuestions = [];
const generateQuestion = function () {
  let listOfQuestions = questions[2];
  displayQuestion.innerText = listOfQuestions.question;
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

const clickAnswers = function (event) {
  if (event.target.innerText === correct_answer) {
    score++;
  } else {
    console.log("incorrect");
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
  if (document.getElementById('consent-checkbox').checked) {
    alert('Your ready to take the exam!')
  } else {
    alert(
      'You must agree to answer the questions by yourself before proceeding',
    )
  }
}