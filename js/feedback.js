let stars = document.getElementsByClassName('star');
let starRating = false;
let feedbackGiven = false;
let starContainer = document.querySelector('.stars');
window.onload = createStars();
function createStars(){
    for(let i=0;i<10;i++){
        starElement = document.createElement('img');
        starElement.src = 'assets/star.svg';
        starElement.classList.add('star');
        starElement.classList.add('star-black-filter');
        starContainer.appendChild(starElement);
        let stars = document.getElementsByClassName('star');
    }
    for(let i=0;i<stars.length;i++){
        stars[i].addEventListener('click', function(){
            starRating=true;
            starRatingAndFeedback();
            addBlackFilter()
            for(let j=0;j<=i;j++){
                stars[j].classList.remove('star-black-filter');
            }
        })
    }
    for(let i=0;i<stars.length;i++){
        stars[i].addEventListener('mouseover', function(){
            for(let j=0;j<=i;j++){
                stars[j].classList.add('star-hover');
            }
        })
    }
    for(let i=0;i<stars.length;i++){
        stars[i].addEventListener('mouseleave', function(){
            for(let j=0;j<=i;j++){
                stars[j].classList.remove('star-hover');
            }
        })
    }
}

function addBlackFilter(){
    for(let i=0;i<stars.length;i++){
        stars[i].classList.add('star-black-filter')
    }
}
let openFeedback = document.querySelector('.open-feedback-paragraph')
let hr = document.querySelector('hr');
let proceed = document.querySelector(".proceed-button");
let proceedDiv = document.querySelector(".proceed-div");
let proceedDiv2 = document.querySelector('.proceed-div2');
let content = document.querySelector(".content");
let content2 = document.querySelector(".content2");
proceed.addEventListener('click',function(){
    if(proceed.classList.contains("low-opacity")){
    }else{
        content.classList.add('move-from-mid-to-left');
        proceedDiv.classList.add('move-from-mid-to-left');
        hr.classList.add('hidden')
        starRating = false;
        starRatingAndFeedback();
        createTeacherRating();
        content.classList.add('appear-higher');
        content2.classList.add('move-to-left-right');
        setTimeout(function() {
            content.innerHTML="";
            proceedDiv.innerHTML="";
          }, 1000);
        proceedDiv2.classList.add('move-to-left-right');
        content2.classList.remove('move-from-mid-to-left');
        proceedDiv2.classList.remove('move-from-mid-to-left');  
    }
})
let feedbackText = document.querySelector('.text-field');
feedbackText.addEventListener('input', function(){
    if(feedbackText.value===''){
        feedbackGiven=false;
    }else{
        feedbackGiven=true;
    }
    starRatingAndFeedback();
    feedbackText.classList.add('other-pink-text')
})

function createTeacherRating(){
    let teacherTitle = document.createElement('h1');
    teacherTitle.classList.add('h1-titles');
    teacherTitle.innerText=('About your Teacher');
    content2.appendChild(teacherTitle);
    let oneToTen = document.createElement('p');
    oneToTen.classList.add('rating-text');
    oneToTen.innerText=('From 1 to 10 how do you rate him/her?'); 
    content2.appendChild(oneToTen);
    starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    content2.appendChild(starContainer);
    proceed = document.createElement('button');
    proceed.classList.add('proceed-button');
    proceed.classList.add('blue');
    proceed.classList.add('low-opacity');
    proceed.innerText='PROCEED';
    proceedDiv2.appendChild(proceed);
    proceed.addEventListener('click',function(){
        if(proceed.classList.contains("low-opacity")){
        }else{
            window.location.href = "welcome.html";
        }
    })
    createStars();
}
function starRatingAndFeedback(){
    if(starRating && feedbackGiven){
        proceed.classList.remove('low-opacity');
    }else{
        proceed.classList.add('low-opacity');
    }
}