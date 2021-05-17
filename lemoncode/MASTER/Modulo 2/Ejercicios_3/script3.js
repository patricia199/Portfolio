/**Clone*/

function clone(source){

  this.anios = 35;
  this.origen = "Aragón";
  this.name = source;
  
}

    clone.prototype.saludo = function(){
      return ("Hola soy " + this.name + " tengo "+ 
                  this.anios + " y soy de "+ this.origen);
    }

var person = new clone("Juanita");
console.log(person.saludo());*/


/**Merge 

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

function merge(source, target) {
  let makeMerge = Object.assign(target,source);
  return makeMerge;
}

console.log(merge(a,b));
