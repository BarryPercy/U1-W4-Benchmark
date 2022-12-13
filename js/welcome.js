

function onloadActions(){
    let checking=document.getElementById('check');
    let proceedbutton=document.querySelector('#proceed-button button')
    checking.addEventListener("change", function(){
        if (checking.checked){
            proceedbutton.disabled=false;
        
        }
        else{
            proceedbutton.disabled=true;
            //alert('you need to check the box to proceed')
        }
    })

}

window.onload=onloadActions()