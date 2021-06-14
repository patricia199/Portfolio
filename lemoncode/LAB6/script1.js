// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
    description: "Goma de borrar",
    price: 0.25,
    tax: LOWER_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Lápiz H2",
    price: 0.4,
    tax: LOWER_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Cinta rotular",
    price: 9.3,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
    },
    {
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
    },
    {
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
    },
    {
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 1,
    },
    {
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
    },
    {
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
    },
    ];


//-------------BOTONES------------------------------------------



    const titleMy = document.getElementById("title");
    
  
    titleMy.innerHTML = 'Carrito de la Compra';
    titleMy.style.marginLeft = '30px';


    // const my_boton = document.createElement("button");
    // my_boton.textContent = "Calcula";
    // my_boton.style.background = '#2a9d8f'; 
    // my_boton.style.color = 'white';
    // my_boton.style.border = 'none';
    // my_boton.style.margin = '10px 0px 10px 30px';
    // my_boton.style.padding ='5px 90px 5px';
    // my_boton.addEventListener("click",tipo);
    // my_boton.addEventListener("click",givePriceIva);
    // my_boton.addEventListener("click",total);


    const subTotal = document.getElementById("subtotal");
    subTotal.style.marginLeft = '30px';

    const iva = document.getElementById("iva");
    iva.style.marginLeft = '30px';

    const totalPrice = document.getElementById("total");
    totalPrice.style.marginLeft = '30px';


 //-----------------PROGRAMAS------------------------------------ 
    
  function myList (products){
    const fragment = document.createDocumentFragment();
    const my_input = document.getElementById("myInput");

      var total = 1;
      for(producto of products){
          const itemList = document.createElement('ol');
          itemList.innerHTML = (total++ ) +"......"+ producto.description + " - " + producto.price + "€/ud. " + `<input type=\"text\" size=\"1\" value ="${producto.units}">`;
          fragment.appendChild(itemList);
          
      }
      my_input.appendChild(fragment);
      my_input.appendChild(myTotal()); 
  
    }
    
  myList(products);  
      
  // var createProducts = product =>{
  //   var input = document.createElement("input");
  //   input.setAttribute("type", "number");
  //   input.addEventListener("change", event => product.units = event.target.valueAsNumber);
  //   my_input.appendChild(input);

  // }


  function myTotal (){
    const my_boton = document.createElement("button");
    my_boton.textContent = "Calcula";
    my_boton.style.background = '#2a9d8f'; 
    my_boton.style.color = 'white';
    my_boton.style.border = 'none';
    my_boton.style.margin = '10px 0px 10px 30px';
    my_boton.style.padding ='5px 90px 5px';
    my_boton.addEventListener("click",tipo());
    my_boton.addEventListener("click",givePriceIva());
    my_boton.addEventListener("click",total());
    return my_boton;
  }
      
  function tipo (){
      var total = 0;
      for(tipe of products){
        total += (tipe.units * tipe.price);
        document.getElementById("subtotal").innerHTML = "Subtotal :      " + total + " €";
      }

  }


  function givePriceIva (){
    var total = 0;
    for(dameIva of products){
      total += (1+(dameIva.tax/100)) * dameIva.units;
      document.getElementById("iva").innerHTML = "I.V.A :      " + total + " €";
    }

}

  function total (){
    var total = 0;
    for(priceEnd of products){
      total += (priceEnd.units * priceEnd.price) * ((1+(priceEnd.tax/100)) * priceEnd.units);
      document.getElementById("total").innerHTML = "Total :      " + total + " €";
    }
             
  }


 
