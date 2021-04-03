/**LABORATORIO 3 - Compra en Supermercado*/

const product = {
    count:"5",
    price: 12.55,
    type:"",
};

product.type = "libro";
let b;
switch (product.type){
    case "ropa": 
        b = (product.count * product.price) * 1.21;
        console.log ("El precio de la ropa más el IVA hacen un total de: " + b + " €");break;
    
    case "libro": 
        b = (product.count * product.price) * 1.04;
        console.log ("El precio de lo libros más el IVA hacen un total de: " + b + " €");break;

    case "alimentos": 
        b = (product.count * product.price) * 1.1;
        console.log ("El precio de la ropa más el IVA hacen un total de: " + b + " €");break;  
    
    default:
        console.log("Lo sentimos no está en Stock");    
};



/**CALCULA SUELDO NÓMINA  ----- se deduce un 3% por cada Hijo

const empleado = {
    bruto: 35500,
    hijos: 4,
    pagas: 14,
};


let b;
let c;

if (empleado.bruto < 12000){
    console.log("Felicidades estas exento de retenciones");
}else if (empleado.bruto < 24000){
    b = (empleado.bruto * 92)/100;
}else if (empleado.bruto < 34000){
    b = (empleado.bruto * 84)/100;
}else if (empleado.bruto > 34000){
    b = (empleado.bruto * 70)/100;  
};


if( empleado.bruto < 12000 && empleado.hijos > 0){
   c = b - ((empleado.hijos * 97)/100);
}else if( empleado.bruto < 24000 && empleado.hijos > 0){
    c = b - ((empleado.hijos * 97)/100);
}else if( empleado.bruto < 34000 && empleado.hijos > 0){
    c = b - ((empleado.hijos * 97)/100);
}else if( empleado.bruto > 34000 && empleado.hijos > 0){
    c = b - ((empleado.hijos * 97)/100);};
 
console.log("Tu Nomina con IRPF es de: " + b + " €");
console.log("Pero con tus hijos se queda en un total de: " + c + " €");*/




/**SACAR NETO MENSUAL


const empleado = {
    bruto: 14500,
    hijos: 2, 
    pagas: 14,
};


let b;
if (empleado.bruto < 24000){
    b = ((empleado.bruto * 92)/100 )/ empleado.pagas;

}else if (empleado.bruto < 34000){
    b = ((empleado.bruto * 84)/100 )/ empleado.pagas;

}else if (empleado.bruto > 34000){
    b = ((empleado.bruto * 70)/100 )/ empleado.pagas;};

console.log("Tu suledo mensual es de: "+b+" €");*/
