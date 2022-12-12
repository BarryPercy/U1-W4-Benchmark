let stars = document.getElementsByClassName('star');
for(let i=0;i<stars.length;i++){
    stars[i].addEventListener('mouseover', function(){
        stars[i].classList.toggle('star-black-filter')
    })
}