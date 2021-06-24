
/**CALCULADORA DE CAMBIO OPTIMO DE BILLETES Y MONEDAS*/


const arrMoney = [200,100,50,20,10,5,2,1,0.50,0.20,0.10];

function inputNumber(inputId){

    return Number(document.getElementById(inputId).value);
    
}

//ALGORITMO CAJA REGISTRADORA

var changeMoney = (arr,importe) =>{

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        let algoritm = Math.floor(importe / element);
        
        if(algoritm !== 0){
            return element
        }
        
    }

}

//ALGORITMO QUE RESTA

var importDevolution = () =>{

    let price = inputNumber("priceNum");
    let myMoney =  inputNumber("myMoney");

    let importDevolu = myMoney - price;
    let total = importDevolu;
    let cambio = 0 ;
    let x = [];

    do{
        
        let suma = changeMoney(arrMoney,total);
        total -= suma;
        cambio += suma;

        x.push(suma);

    }while(cambio < importDevolu){
        return x;

    }

}

//BILLETES Y MONEDAS

var givemeTotal = () =>{
    var resultTotal= importDevolution();
    let string = "";
    let total1 = 1;
    var lista =document.getElementById("total_bill");
    
        for(let a of resultTotal){

            if(a >= 5){
                string = `En la vulta número ${ total1++} te doy billete de ${a}€`;
            }else if (a < 5 || a > 0){
                string = `En la vulta número ${ total1++} te doy una moneda de ${a}€`;
            }else if (a < 0){
                string = `En la vulta número ${ total1++} te doy un centimo de ${a}€`;
            }
        
            var linew= document.createElement("li");    
            var contenido = document.createTextNode(string);
            lista.appendChild(linew);
            linew.appendChild(contenido) 
        }
}


document.getElementById("total").addEventListener("click",givemeTotal);