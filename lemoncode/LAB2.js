var hotel= {
    name: "",
    description: "",
};

hotel.name = prompt("¿Qué Hotel te gusta más Mencey o Bravos Hotels?");
losHoteles= hotel.name;
document.getElementById('nombreHotel').innerHTML = losHoteles;
document.getElementById('descriptionHotel').innerHTML = "Maravilloso hotel a las afueras de la ciudad";


var ponPuntuacion = prompt("Puntua del 1 al 5"); 
document.getElementById('puntua').innerHTML = "Puntuación: " +ponPuntuacion +" " +"Estrellas";

//confirma checkbox
var confirma = confirm("¿Quieres que tu petición se anónima?");
document.getElementById('select').checked = confirma;