/**OPTIONALS */


/**------------------CASO 1 / IMÁGENES---------------------*/
// const pattern = /^<img\s?src?(((.)+\.?(png|jpg)).)?\s?\/>/gmi;

const img = `
html>
 <body>
 <img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
 <h1>ejemplo</h1>
 <img src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"/>
 </body>
</html>
`;
console.log(img);
const pattern = /<img\s?src?(((.)+\.?(png|jpg)).)?\s?\/>/gmi;

console.log(pattern.test(img));

/**------------------CASO 1 / TARJETA DE CRÉDITO---------------------

const values = ['5299 64000 000 000','5299-64000-000-000','529964000000000'];
const pattern = /^([5]{1}[0-5]{1}\d{13})|(([5]{1}[0-5]{1})\d{2}?(-|\s)\d{5}?(-|\s)\d{3}?(-|\s)\d{3})$/;

values.forEach(value => {
console.log('Regex matchs with ' + value + '? ->', pattern.test(value));
});*/



/**------------------CASO 2 / TARJETA DE CRÉDITO---------------------

const values = ['5299 64000 000 000','5299-64000-000-000','529964000000000'];
const pattern = /^([5]{1}[0-5]{1}\d{2})?(\s|-)?(\d{5})?(\s|-)?(\d{3})?(\s|-)?(\d{3})$/;

values.forEach(value => {
console.log('Regex matchs with ' + value + '? ->', pattern.exec(value));
});*/