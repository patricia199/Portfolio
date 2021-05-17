//ARRAY OPERATORS 1


const arr = ["Australia", 37 , true];
const arr2 = ["Animals", "Cangaroos", "Kouala", 1879];
const arr3 =[58,["Paris", false , 56]];
const arr4 =["Babaria", false , "Yellow"];

/**HEAD 

const head = ([country]) => country; 
console.log(head(arr));*/


/**TAIL 

const tail = ( [, ...allArray]) => allArray;
console.log(tail(arr));*/



/**INIT

const init = (lessEnd) => {lessEnd.pop(); return lessEnd}; 
console.log(init(arr));*/



/**LAST

const last = ([,, ...elementEnd]) => elementEnd;
console.log(last(arr));*/



/**CONCAT 2

const concat = (a, b) => a.concat(b); 
console.log(concat(arr,arr2));

/**Optional
const concat = (a, b, c, d) => a.concat(b,c,d); 
console.log(concat(arr,arr2,arr3,arr4));*/