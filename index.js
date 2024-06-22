//calculator program

var display = document.getElementById('display');

function getvalue(input){
    display.value += input;
}
function clearscreen(){
    display.value = "";
}
function calculate(){
try{
    display.value = eval(display.value);
}catch(error){
    display.value = "error"
}
}