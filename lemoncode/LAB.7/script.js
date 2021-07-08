/**REGULAR EXPRESSIONS */

/**------------------CASO 1--------------------- 

const values = ['ES6600190020961234567890'];
const pattern = /^\w{2}\d{22}$/;

values.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern.test(value));
})*/


/**------------------CASO 2--------------------- 

const values = ['ES6600190020961234567890',"ES66 0019 0020 9612 3456 7890"];
const pattern = /^(\w{2}\d{22})|(\w{2}\d{2}\s((\d{4}\s){4})\d{4})$/;

values.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern.test(value));
})*/



/**------------------CASO 3---------------------

const values = ['ES6600190020961234567890'];
const pattern = /^(\w{2}\d{10})(\d{2})(\d{10})$/;

values.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern.exec(value));
})*/




/**------------------VALIDAR MATRÍCULA DE COCHE---------------------

const values = ['2021 GMD','2345-GMD','4532BDB','0320-AAA'];
const pattern = /^(\d{4})(-|\s)?([A-Z]{3})$/;

values.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern.test(value));
});

values.forEach(value => {
    console.log('Regex matchs with ' + value + '? ->', pattern.exec(value));
});*/


