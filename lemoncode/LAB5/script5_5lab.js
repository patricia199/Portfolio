//LABORATORIO 5 - ejercicio: CARRITO DE LA COMPRA

const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];

   
   /**MOSTRAR CARRITO DE LA COMPRA

   for(carroCompra of carrito){
       imprimeCarrito(carroCompra);
   }

   function imprimeCarrito(carroCompra){
       console.log("---- Producto ", carroCompra.id , " ----");
       console.log("Name : ", carroCompra.name);
       console.log("Price : ", carroCompra.price);
       console.log("Count : ", carroCompra.count);
       console.log("Premium : ", carroCompra.premium);
      
   }*/



   /**LISTAR TODOS LOS PRODUCTOS

   for(carroProduct of carrito){
       imprimeProduct(carroProduct);
   }

   function imprimeProduct (carroProduct){
       console.log("NAME PRODUCT : " + carroProduct.name);
   }*/



   /**ELIMINA PRODUCTO ID 54657

   for(carro in carrito){

        if(carro == 2)continue;
        muestraOtros(carro);
        
   };

   function muestraOtros(){
    console.log("---- Producto ", carrito[carro].id , " ----");
    console.log("Name : ", carrito[carro].name);
    console.log("Price : ", carrito[carro].price);
    console.log("Count : ", carrito[carro].count);
    console.log("Premium : ", carrito[carro].premium);

};*/



/**CALCULA TOTAL DE LA COMPRA 


var factura = 0;

for(total of carrito){
    factura += total.price * total.count;
}

console.log("El total de la factura asciende a: ",factura," €");
*/


/**FILTRAR POR PRODUCTOS PRIME

for(prime of carrito){

    if(prime.premium === true){
        productsPrime(prime);
    }
}

function productsPrime(prime){
    console.log("---- Producto ", prime.id , " ----");
    console.log("Name : ", prime.name);
    console.log("Price : ", prime.price);
    console.log("Count : ", prime.count);
    console.log("Premium : ", prime.premium);
}*/