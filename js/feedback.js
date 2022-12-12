let stars = document.getElementsByClassName('star');
for(let i=0;i<stars.length;i++){
    stars[i].addEventListener('click', function(){
        addBlackFilter()
        for(let j=0;j<=i;j++){
            stars[j].classList.remove('star-black-filter')
        }
    })
}

function addBlackFilter(){
    for(let i=0;i<stars.length;i++){
        stars[i].classList.add('star-black-filter')
    }
}