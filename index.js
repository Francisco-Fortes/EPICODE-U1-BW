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
