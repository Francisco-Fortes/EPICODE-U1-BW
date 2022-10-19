// Timer------------------------------------------------------------

let difficulty = 60
let time = difficulty + 1
let timeInDonut = document.getElementById('seconds')

//setInterval(updateCountdown, 1000)
function updateCountdown() {
  // console.log(seconds);
  time--
  if (time > 0) {
    timeInDonut.innerText = time
  } else {
    timeInDonut.innerText = 'TimeOut!'
  }
}

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
