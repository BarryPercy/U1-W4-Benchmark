<<<<<<< Updated upstream
=======
// if above 60%, 
// 1.blue line has to move to 60%
// 2.percentage,question result at the side have to change, the other side has to change opacity
// 3.middle text has to change

let questions = 10
let correctTotal= 0
let wrongTotal = 0

function result(x){
    let passedTest = document.querySelector(".passedText")
    let failedTest = document.querySelector(".failedText")

    Total= (x/questions) * 100
    console.log(correctTotal);

    if( Total >= 60){
        passedTest.classList.add("changeForCorrect");
    }
    else {
        failedTest.classList.add("changeForCorrect");
    };
    return Total
  
};


document.getElementById().innerHTML= result()
console.log(result(6),'%');

function changeBarValue(){
    let lengthOfTheBar = document.querySelector(".pie2")
    target.style = `--p:${value};--b:6vh;--c:#900080`
    let 
    
    
    console.log(lengthOfTheBar);


}
>>>>>>> Stashed changes
