// Setup DOM elements.
const input = document.querySelector('input')
const circle = document.getElementById('circle1')

// All calculations are within 'run' function.
const run = () => {
  // Change this variable to colour

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
    return time
  }
  let angle = parseFloat(360) || 0

  setInterval(timer, 1000)

  let timeAllowed = 60

  function timer() {
    let timeRemaning = timeInDonut.innerText
    console.log(timeRemaning)
    console.log(timeAllowed)

    let x = 360 / timeAllowed
    let angle = (timeAllowed - timeRemaning) * x
    timeAllowed--
    console.log(angle)
  }

  angle = parseFloat(timer(60)) || 0

  // 2. Radius of SVG circle.
  const radius = 200
  const circumference = 2 * Math.PI * radius

  // 3. First, 1/4 of circumfence of 90 degrees. To start from top of the view,
  //    we must rotate it by 90 degrees. By default circle will start on the right.
  //    Stroke offset effectively rotates the circle.
  // 4. Second, calculate dash array. We need dash array containing only two parts -
  //    visible dash, and invisible dash.
  //    Visible dash should have length of the chosen angle. Full circle is 360 degrees,
  //    and this 360 degrees does also equal the entire circumference. We want just a part of
  //    this entire circle to be visible - (angle / 360 degrees) returns a percentage value
  //    (between 0.0 and 1.0) of how much circumference should be visible.
  //    Hence, we then multiply (angle / 360) times the entire circumference.
  const strokeOffset = (1 / 4) * circumference
  const strokeDasharray = (angle / 360) * circumference

  // 5. Set circle radius
  circle.setAttribute('r', 200)
  // 6. Create dash array of two elements (combined they must equal the entire circumference).
  //    First has the length of visible portion. Second, the remaining part.
  circle.setAttribute('stroke-dasharray', [
    strokeDasharray,
    circumference - strokeDasharray,
  ])
  // 7. (Optional) Rotate circle to start from the top.
  circle.setAttribute('stroke-dashoffset', strokeOffset)
}

// Run and update DOM
input.addEventListener('keyup', run)
run()
