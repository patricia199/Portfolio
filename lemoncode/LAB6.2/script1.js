/**AGENDA*/

// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
    ];



// Datos
    var myTeam = [
    {
    name: "María",
    availability: new Array(8).fill(true)
    },
    {
    name: "Pedro",
    availability: new Array(8).fill(true)
    },
    {
    name: "Esther",
    availability: new Array(8).fill(true)
    },
    {
    name: "Marcos",
    availability: new Array(8).fill(true)
    },
    ];



//FUNCIONES    

var teamHours = (myTeam) =>{
    for(let grupo of myTeam){
        console.log("Disponibilidad de " + grupo.name);

        for( let i=0; i < WORK_HOURS.length; i++){

             console.log(WORK_HOURS[i] + " : " + trueFalse(grupo));
        }
    console.log("---------------------");
    } 
}   

var trueFalse = (person) =>{
    let aleatorio = Math.floor(Math.random() * 2) + 1;
    person.availability = aleatorio;
    if(person.availability === 2){
        return "Hueco encontrado en el horario";
    }else{
        return "Lo siento. No hay hueco disponible en el equipo."
    }  
} 

teamHours(myTeam);
