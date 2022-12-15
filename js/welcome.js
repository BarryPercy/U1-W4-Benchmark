

function onloadActions(){
    let checking=document.getElementById('check');
    let proceedbutton=document.querySelector('.proceed-button button');
    checking.addEventListener("change", function(){
        if (checking.checked){
            proceedbutton.classList.remove('low-opacity');
        }
        else{
            proceedbutton.classList.add('low-opacity');
        }
    })
    proceedbutton.addEventListener('click',function(){
        if(proceedbutton.classList.contains("low-opacity")){
        }else{
            window.location.href = "benchmark.html";
        }
    })

}

window.onload=onloadActions()