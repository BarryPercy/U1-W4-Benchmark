let questions = 10
let correctTotal= 0
let wrongTotal = 0
function correctAs(x){
    correctTotal= (x/questions) * 100
    return correctTotal

}

function wrongAs(y){
    wrongTotal= (y/questions) * 100
    return wrongTotal
}
document.getElementById().innerHTML= correctAs()
console.log(correctAs(6),'%');