//RESERVA DE HOTEL

function inputNumber(inputId){

    return Number(document.getElementById(inputId).value);
    
}





function valorCache (){

    var cacheRoom = document.getElementById("room_cacheTip").value;
        if(cacheRoom == 0){
            cacheRoom = 100;
            return cacheRoom;
        }else if (cacheRoom == 1){
            cacheRoom = 120;
            return cacheRoom;
        }else if (cacheRoom == 2){
            cacheRoom = 150;
            return cacheRoom;
        };
}

function valorSpa(){
    var roomPLusSpa = valorCache();
    var spaYes = inputNumber ("yes_spa").checked;
    var spaNo = inputNumber ("no_spa").checked;

        if(spaYes == spaYes){
            roomPLusSpa += 20;
            return roomPLusSpa
        }else if (spaNo == spaNo){
            return roomPLusSpa
        }
}

function valorRoom (){

    var roomTip = valorSpa();
    var tipo = inputNumber("room_Tip"); 

        if(tipo == 3){
            roomTip = (roomTip * 75)/100;
            return roomTip;
        }else if (tipo == 4){
            roomTip= roomTip + 0;
            return roomTip;
        }else if (tipo == 5){
            roomTip = roomTip * 1.25;
            return roomTip;
        };
}

function valorNight (){
    
    var valoraRoom = valorRoom();
    var night = inputNumber("num_night");

    var resultNight =  night * valoraRoom;
    return resultNight;
}


function valorParking (){
    
    var valoraNight = valorNight();
    var parking = inputNumber("num_parking");

    var resultParking =  (parking * 10) + valoraNight;
    return resultParking;
}


function valorBill(){
    var resultHotel= valorParking();
    document.getElementById("total_bill").innerText = "Total a pagar :  " + resultHotel + " €";
}

document.getElementById("full_bill").addEventListener("click",valorBill);
