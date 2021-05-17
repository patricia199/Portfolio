/**MAQUINA TRAGAPERRAS*/


class SlothMachine {
    constructor (ruleta1, ruleta2, ruleta3){
      this._rul1 = ruleta1;
      this._rul2 = ruleta2;
      this._rul3 = ruleta3;
      this.total= 0;   
    }

    play(){
      this.total ++;
      if(this._rul1 == String(true) && this._rul2 == String(true) && this._rul3 == String(true)){
        console.log ("Congratulations!!!. You won " + this.total + " coins!!");
      }else{
        console.log("Good luck next time!!");
      }
    }
}

var alert1 = prompt("MAQUINA TRAGAPERRAS").toLowerCase();
var alert2 = prompt("MAQUINA TRAGAPERRAS").toLowerCase();
var alert3 = prompt("MAQUINA TRAGAPERRAS").toLowerCase();

const machine1 = new SlothMachine(alert1,alert2,alert3);
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"