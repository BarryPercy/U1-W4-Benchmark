/*document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
    </g>
  </svg>
  <span class="timer-value base-timer__label" span id="base-timer-label">
  </span>
</div>
`;*/

document.getElementById("timer").innerHTML = `
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
  <span id="base-timer-label" class="base-timer__label timer-value">
  </span>
</div>
`;
const TIME_LIMIT = 20;
document.querySelector('.timer-value').innerText = TIME_LIMIT;

let timePassed = 0;
let timeLeft = TIME_LIMIT;

let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    if(timeLeft===0){
      nextQuestion();
      return;
    }
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = timeLeft;
    
    setCircleDasharray();
  }, 1000);
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}
    
function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * 283
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}












function nextQuestion(){
    console.log("go next question here");
}
//document.getElementById("timer").innerHTML = `...`
startTimer();