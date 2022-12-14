

const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      options: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
        "Central Processing Unit"
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      options: ["Static", "Private", "Public","Final"],
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
      options: [".png", ".jpeg", ".gif",".svg"],
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
        "Computer Style Sheet",
        "Cascading Style Sheet"
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
        "Jelly Bean",
        "Marshmallow",
        "Nougat"
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
      options: ["Python", "C", "Jakarta","Java"],
    },
  ];


  let totalScore=0;
  let currentIndex=-1;
  let optionIndex=-1;    




function changeBackgroundOfSelectedAnswer(){
    answerone = document.querySelectorAll(".answer-btn")[0];
    answertwo = document.querySelectorAll(".answer-btn")[1];
    answerthree = document.querySelectorAll(".answer-btn")[2];
    answerfour = document.querySelectorAll(".answer-btn")[3];
    answerone.addEventListener("click", function() {
      this.style.backgroundColor = "#900080";
      answertwo.style.backgroundColor = "darkslateblue";
      if(answerthree!==undefined){
        answerthree.style.backgroundColor = "darkslateblue";
        answerfour.style.backgroundColor = "darkslateblue";
      }
      selectedAnswer=this.innerText;
    });
    answertwo.addEventListener("click", function() {
      this.style.backgroundColor = "#900080";
      answerone.style.backgroundColor = "darkslateblue";
      if(answerthree!==undefined){
        answerthree.style.backgroundColor = "darkslateblue";
        answerfour.style.backgroundColor = "darkslateblue";
      }
      selectedAnswer=this.innerText;
    });
    if(answerthree!==undefined){
      answerthree.addEventListener("click", function() {
        this.style.backgroundColor = "#900080";
        answertwo.style.backgroundColor = "darkslateblue";
        answerone.style.backgroundColor = "darkslateblue";
        answerfour.style.backgroundColor = "darkslateblue";
        selectedAnswer=this.innerText;
      });
      answerfour.addEventListener("click", function() {
        this.style.backgroundColor = "#900080";
        answertwo.style.backgroundColor = "darkslateblue";
        answerthree.style.backgroundColor = "darkslateblue";
        answerone.style.backgroundColor = "darkslateblue";
        selectedAnswer=this.innerText;
      });
    }
  }

function displayQuestionsAndAnswers(){
    
    let question = document.getElementById("question");
        currentIndex++;
            let currentQuestion = questions[currentIndex];
            question.innerHTML=currentQuestion.question;
            
            let answer=document.getElementById('answer-btns');
            optionIndex++;
            
           
            let currentOptions=currentQuestion.options
            answer.innerHTML=""
            for(i=0;i<currentQuestion.options.length;i++){
                let option=document.createElement('button')
                option.classList.add('answer-btn')
                option.innerText=currentQuestion.options[i]
                answer.appendChild(option)
                

               
            }
            let options=document.getElementsByClassName('answer-btn')
            for(i=0;i<options.length;i++){
                
                options[i].addEventListener("click", changeBackgroundOfSelectedAnswer)
            }

            

            
        }












    /*function displayQuestionNumber(){
        let footer=document.getElementById('footer')
        currentIndex++;
        footer.innerHTML+=currentIndex;

    }*/




/*function scoreIncrement(){
    currentIndex++;
    let options=document.getElementById('answer-btns').childNodes
    let currentQuestion = questions[currentIndex]
    let correctAnswer=currentQuestion.correct_answer;
    for(i=0;i<options.length;i++){
        let option=options[i]
        if(option===correctAnswer){
            totalScore++
        }
    }
    console.log(totalScore)
    option.addEventListener("click",function(){
                    currentIndex++;
                    let options=document.getElementById('answer-btns').childNodes
                    let currentQuestion = questions[currentIndex]
                    let correctAnswer=currentQuestion.correct_answer;
                    for(i=0;i<options.length;i++){
                        let option=options[i]
                        if(option===correctAnswer){
                            totalScore++
                        }
                    }
                    console.log(totalScore)
                })
            }
}*/


/*function changebgOfSelectedOption(event){
    let allButtons=event.target.parentNode.children
    for(let i=0;i<allButtons.length;i++)
    if(allButtons[i].classList.contains("button-clicked")){
        allButtons[i].classList.remove("button-clicked")
    }
}*/


function startGame(){
    displayQuestionsAndAnswers()
    //displayQuestionNumber()
    
    }

  window.onload = startGame;


