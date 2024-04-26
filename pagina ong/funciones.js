const display= document.querySelector("#display");
const buttons= document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () =>{
        if(btn.id === "="){
            display.value = eval(display.value);
        } else if (btn.id === "ac"){
            display.value = "";
        } else if (btn.id == "de"){
            display.value = display.value.slice(0, -1);
        } else {
            display.value += btn.id
        }
    })
})

var user = document.getElementById('user')
var password = document.getElementById('password')
var error = document.getElementById('error')


function enviarUser(){
    console.log('enviando formulario')

    var mensajesError = []

    if(user.value === null || user.value ===''){
        mensajesError.push('ingresa tu nombre')
    }

}
