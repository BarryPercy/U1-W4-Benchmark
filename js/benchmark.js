const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      options: [
        "Central Process Unit",
        "Central Processing Unit",
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
      options: ["Static", "Private", "Final","Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      options: [".png", ".svg",".jpeg", ".gif",],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      options: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Cascading Style Sheet",
        "Computer Style Sheet",
        
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      options: [
        "Ice Cream Sandwich",
        "Nougat",
        "Jelly Bean",
        "Marshmallow",
        
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      options: ["120", "160", "100","140"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      options: ["True","False"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      options: ["Python","Java", "C", "Jakarta",],
    },
  ];


let totalScore=0;
let currentIndex=-1;
let optionIndex=-1;    
let questionCount=1;
let selectedAnswer;





function displayQuestionsAndAnswers(){
    let questionNum = document.getElementById("footer")
    questionNum.innerText = "QUESTION " + questionCount;
    questionCount ++;
    
    let question = document.getElementById("question");
    currentIndex++;
    let currentQuestion = questions[currentIndex];
    let correct_answer=currentQuestion.correct_answer;
    question.innerHTML=currentQuestion.question;
    question.classList.add('title-font')
    let answer=document.getElementById('answer-btns');
    optionIndex++;
    let currentOptions=currentQuestion.options
    answer.innerHTML=""
    for(i=0;i<currentQuestion.options.length;i++){
        let option=document.createElement('button')
        option.classList.add('answer-btn')
        option.classList.add('other-font')
        option.innerText=currentQuestion.options[i]
        answer.appendChild(option)
    }
    changeBackgroundOfSelectedAnswer()
    let options=document.getElementsByClassName('answer-btn')
}

function changeBackgroundOfSelectedAnswer(){
    answerone = document.querySelectorAll(".answer-btn")[0];
    answertwo = document.querySelectorAll(".answer-btn")[1];
    answerthree = document.querySelectorAll(".answer-btn")[2];
    answerfour = document.querySelectorAll(".answer-btn")[3];
    answerone.addEventListener("click", function() {
        this.style.backgroundColor = "#900080";
        this.classList.add('selectedAnswer')
        answertwo.style.backgroundColor = "darkslateblue";
        if(answerthree!==undefined){
            answerthree.style.backgroundColor = "darkslateblue";
            answerfour.style.backgroundColor = "darkslateblue";
        }
        selectedAnswer=this.innerText;
        //return selectedAnswer
    });
    answertwo.addEventListener("click", function() {
        this.style.backgroundColor = "#900080";
        answerone.style.backgroundColor = "darkslateblue";
        if(answerthree!==undefined){
            answerthree.style.backgroundColor = "darkslateblue";
            answerfour.style.backgroundColor = "darkslateblue";
        }
        selectedAnswer=this.innerText;
        //return selectedAnswer
        });
        if(answerthree!==undefined){
            answerthree.addEventListener("click", function() {
                this.style.backgroundColor = "#900080";
                answertwo.style.backgroundColor = "darkslateblue";
                answerone.style.backgroundColor = "darkslateblue";
                answerfour.style.backgroundColor = "darkslateblue";
                selectedAnswer=this.innerText;
                //return selectedAnswer;
            });
            answerfour.addEventListener("click", function() {
                this.style.backgroundColor = "#900080";
                answertwo.style.backgroundColor = "darkslateblue";
                answerthree.style.backgroundColor = "darkslateblue";
                answerone.style.backgroundColor = "darkslateblue";
                selectedAnswer=this.innerText;
                //return selectedAnswer
            });  
      }
    
}
               
            
            
          let giveOptions=document.getElementById('answer-btns').children
            let correctAnswer=currentQuestion.correct_answer
            console.log(correctAnswer)
            for(i=0;i<giveOptions.length;i++){
                let givenOption=giveOptions[i]
                if(givenOption.classList.contains('selectedAnswer')){
                    console.log(givenOption)

                    if ((givenOption.innerText)===correctAnswer){
                        
                        totalScore++
                    }
                
                    
 }
}
console.log(totalScore)

function startGame(){
    displayQuestionsAndAnswers()
    //scoreIncrement()  
}

  window.onload = startGame;

  //Tuner stuff below here

  //timer stuff below here

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

