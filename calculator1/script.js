// Write JavaScript code here
// let displayValue = "";
const displayElement = document.getElementById('display');


function appendToDisplay(value) {
    // displayValue += value;
document.getElementById('display').value += value;
}
function clearDisplay(value){
    displayElement.value = '';
}
function deleteLast(value){
let display = document.getElementById('display').value;
displayElement.value = display.substring(0, display.length - 1);
}

function calculateResult(value){
    displayElement.value = eval (displayElement.value)
}

function calulateModule(value){
displayElement.value +=  ' % '
}
