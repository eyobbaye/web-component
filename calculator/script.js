const displa = document.getElementById('display');
// const hideButton = document.getElementById('hide-button');
const trignometricKey = document.getElementById('trignometric-key-second');
let display= 0;
// hideButton.addEventListener('click', function() {
    
//   trignometricKey.classList.toggle('hidden');  // Toggles "hidden" class on click
// 
function hideShow() {
    if (display == 0) {
        trignometricKey.style.display = 'none'
        display = 1
    }else{
        trignometricKey.style.display = 'grid'
        display = 0
    }

}

function appendToDisplay(value) {
    displa.value +=value
}

function calculate(value) {
    displa.value = eval(displa.value)
    
}

function clearDisplay() {
    displa.value = "";
}
function sin(){
    document.caculator.result.value= Math.sin(document.result.value)
}
