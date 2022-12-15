// if above 60%, 
// 1.blue line has to move to 60%
// 2.percentage,question result at the side have to change, the other side has to change opacity
// 3.middle text has to change

// giving result statement in the middle


correctAns=sessionStorage.getItem("correctAns")
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
    changeBarValue(Total)
    changeTheOpacity (Total)
    changePercentage(Total)
    return Total
    return totalQuestion
};

// moving the bar length/color
function changeBarValue(Total){
    let lengthOfTheBar = document.querySelector(".pie2")
    let lengthOfRemaining = document.querySelector(".pie1")
    let remain= 100 - Total
    lengthOfTheBar.style = `--p:${Total};--b:6vh;--c:#00FFFF`
    lengthOfRemaining.style = `--p:${remain};--b:6vh;--c:#900080`
}


// change text/result opacity
function changeTheOpacity(Total){
    let correctOpacity = document.querySelector(".correct")
    let wrongOpacity = document.querySelector(".wrong")
    if( Total >= 60){
        wrongOpacity.classList.add("opacityChange");
    }else{
        correctOpacity.classList.add("opacityChange");
    }
}

//change the percentage of the results at the side
function changePercentage(Total){
    let correctPercentage = document.getElementById("correct-percentage")
    let wrongPercentage = document.getElementById("wrong-percentage")
    let remainPercentage = (100 - Total);
    correctPercentage.innerText += Total + "%";
    wrongPercentage.innerText += remainPercentage + "%";
}

// change the question statement at the sides
function changeQuestions(y){
    let totalCorrectQuestions = document.getElementById("correct-questions")
    let totalWrongQuestions = document.getElementById("wrong-questions")

    totalQuestion = questions - y
    let remainQuestions = (10 - totalQuestion);

    totalCorrectQuestions.innerText += totalQuestion + "/10 questions";
    totalWrongQuestions.innerText += remainQuestions + "/10 questions";

}

window.onload = function(){
    runTheFunctions()
} 

<<<<<<< HEAD
addLoadEvent(changePercentage); 
addLoadEvent(changeQuestions); 
addLoadEvent(changeBarValue); 
addLoadEvent(changeTheOpacity); 
addLoadEvent(result(7));
addLoadEvent(function(
) { 
}); 

windows.onload = result(7);
=======
function runTheFunctions(){
    changeQuestions(correctAns) 
    result(correctAns)
}


// function addLoadEvent(func) { 
// 	var oldonload = window.onload; 
// 	if (typeof window.onload != 'function') { 
// 		window.onload = func; 
// 	} else { 
// 		window.onload = function() { 
// 			if (oldonload) { 
// 				oldonload(); 
// 			} 
// 			func(); 
// 		} 
// 	} 
// } 

// addLoadEvent(changePercentage);  
// addLoadEvent(changeQuestions); 
// addLoadEvent(function() { 
//       result(7);
// }); 
>>>>>>> d48f164958a0165079f35879470b5ac7dca45882
