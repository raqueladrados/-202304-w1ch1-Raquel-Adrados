let count = 0
let max = 20

const buttonIncrement = document.getElementById ("increment")
const buttonDecrement = document.getElementById ("decrement")
const buttonRestart = document.getElementById("restart")
const counter = document.getElementById ("counter")
alert(buttonDecrement, buttonIncrement, buttonRestart, counter)

buttonIncrement.addEventListener ("click", () => {
    if(count < max){
        count++
        counter.innerText = count
    }
});
buttonDecrement.addEventListener ("click", () => {
    if(count > 0){
        count--
        counter.innerText = count
    }
});
buttonRestart.addEventListener ("click", () => {
    count = 0
    counter.innerText = count
});