/**LABORATORIO 4 - Calculadora sencilla*/

function sumNumber(){

    var numberA = document.getElementById("my_number1").value;
    var numberB = document.getElementById("my_number2").value;
    let fullNumber = Number (numberA) +  Number (numberB); // para que no se hagan strings y también sirve -parseInt- 

   
    if(fullNumber > 0 ){

        document.getElementById("full_number").innerText = fullNumber;
    
    }else{
        var error = "Por favor ingresa números en los dos sitios";
        document.getElementById("full_number").innerText = error;
    };
}

function restNumber(){
    var numberA = document.getElementById("my_number1").value;
    var numberB = document.getElementById("my_number2").value;
    let fullNumber = numberA - numberB;

   
    if(fullNumber > 0 ){

        document.getElementById("full_number").innerText = fullNumber;
    
    }else{
        var error = "Por favor ingresa números en los dos sitios";
        document.getElementById("full_number").innerText = error;
    };
}

function divideNumbers(){
    var numberA = document.getElementById("my_number1").value;
    var numberB = document.getElementById("my_number2").value;
    let fullNumber = numberA / numberB;

    
    if(fullNumber > 0 ){

        document.getElementById("full_number").innerText = fullNumber;
    
    }else{
        var error = "Por favor ingresa números en los dos sitios";
        document.getElementById("full_number").innerText = error;
    };
}

function multNumbers(){


    var numberA = document.getElementById("my_number1").value;
    var numberB = document.getElementById("my_number2").value;
    let fullNumber = numberA * numberB;
    
    if(fullNumber > 0 ){

        document.getElementById("full_number").innerText = fullNumber;
    
    }else{
        var error = "Por favor ingresa números en los dos sitios";
        document.getElementById("full_number").innerText = error;
    };
    
}

document.getElementById("my_sum").addEventListener("click",sumNumber);
document.getElementById("my_rest").addEventListener("click",restNumber);
document.getElementById("my_divide").addEventListener("click",divideNumbers);
document.getElementById("my_multiply").addEventListener("click",multNumbers);