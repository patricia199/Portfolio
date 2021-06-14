/**GENERADOR ALEATORIO

var randomPick = (n, min , max) =>{
   
    let arr = [];
    let i = 0;
    do{
        i++;
        const range = max - min + 1;
        let newNum = Math.floor(Math.random() * range); 
        if(newNum !== n){
            arr.push(newNum);   
        }
             
    }while(i < n);
           console.log(arr);

}


randomPick(6, 1, 49);
randomPick(15, 1, 15);
randomPick(1, 1, 6);


*/


/**ENCRIPTADOR */


var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";



var searchIndex = (alphabet, world) =>{
    for(let a=0; a < alphabet.length; a++){
            if(alphabet[a] === world){return a ;} 
   }
   return -1;
}


var transformLetter = (letter) =>{
    var findIndex = searchIndex(plainAlphabet,letter);
    var encript = encryptedAlphabet[findIndex];
    if(findIndex != -1){
     return encript;
    }else{
        return letter;
    } 
}


function encript(){
   
   var encripta = document.getElementById("desencripArea").value; 
   let textarea = encripta.toLowerCase(); 
   let stringEmpty = ""; 
   for(let i of textarea){

        stringEmpty = stringEmpty + transformLetter(i);
       
   } 
   document.getElementById("encripArea").value =  stringEmpty;
 

}





/**DESEMCRIPTADOR */



var searchEncript = (alphabet, world) =>{
    for(let a=0; a < alphabet.length; a++){
            if(alphabet[a] === world){return a ;} 
   }
   return -1;
}


var transformEncript = (letter) =>{
    var findIndex = searchEncript(encryptedAlphabet,letter);
    var desencript = plainAlphabet[findIndex];
    if(findIndex != -1){
     return desencript;
    }else{
        return letter;
    } 
}


function desencript(){
    var desencripta = document.getElementById("encripArea").value; 
   let textarea = desencripta.toLowerCase(); 
   let stringEmpty = ""; 
   for(let i of textarea){

        stringEmpty = stringEmpty + transformEncript(i);
       
   } 

   document.getElementById("desencripArea").value =  stringEmpty;

}
