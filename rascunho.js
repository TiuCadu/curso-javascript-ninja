// var counter = 0;
// while (counter <= 10) {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
//   counter++;
// }

// var num = 0;
// while (num <= 20) {
//   num % 2 === 0 ? console.log(num) : "";
//   num++;
// }

// var array = [
//   "Palmeiras",
//   "Ponte Preta",
//   "Santos",
//   "Guarani",
//   "São Paulo",
//   ["Cadu", "Dani"],
// ];
// var counter = 0;
// while (counter < array.length) {
// (function () {
//   console.log(1 + 2);
// })();

//   console.log(array[counter++]);
// }

// array.forEach(function (item, index) {
//   item === "Santos" ? console.log("Deu certo") : "";
//   console.log(item);

// });

// for (var counter = 0; counter < array.length; counter++){
//   console.log(array[counter]);
// }

// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// var add2 = adder(2);
// console.log(add2(3));
// console.log(adder(5)(2));

// console.log(typeof 10);
// var num = 10;

// var counter = 10;
// do {
//   console.log(counter++);
// } while (counter < 10);
var teams = ["Palmeiras", "Ponte Preta", "Santos", "Guarani", "São Paulo"];
var obj = { name: "Carlos", lastName: "Oliveira" };
// for (var prop in teams) {
//   console.log(teams[prop]);
// }

// var obj = {
//   nome: "Carlos",
//   sobreNome: "Oliveira",
//   func: function teste() {},
// };

// for (var prop in obj) {
//   if (typeof obj[prop] === "function") {
//     console.log(obj[prop]);
//   }
// }

// console.log(obj.nome);
// if ("nome" in obj) {
//   console.log("deu certo");
// }else{console.log('nao deu certo');
// }
// var obj2 = Object.create(obj);
// console.log(obj2.lastName);
// obj2.lastName = "Fofura";
// console.log(obj2.lastName);

// console.log(obj.hasOwnProperty('name'));
// console.log(obj2.hasOwnProperty('name'));

// console.log(Object.keys(obj).length);//transforma objeto em array
// console.log(JSON.stringify(obj));//parse
// console.log(teams.join(" "));
// console.log(teams.reverse());
// console.log(teams.sort());// ordem alfabetica

// console.log(teams.slice(-2));
// console.log(teams.slice(1,2));

// teams.forEach((item, index, array) => {console.log(item, index, array)});
// var arr = [1, 2, 3, 4, 5];
// var reduce = arr.reduce((acumulado, atual, index, array) => {
//   return acumulado + atual;
// }, 0);
// console.log(reduce);
// python -m SimpleHTTPServer 9001

var texto = `O Corvo é um poema narrativo do escritor norte-americano Edgar Allan Poe. Publicado pela primeira vez em janeiro de 1845, é conhecido 
principalmente por sua musicalidade, linguagem estilizada e atmosfera sobrenatural. O poema trata da visita misteriosa de um corvo falante a um homem, 
frequentemente identificado como estudante, que lamenta a perda de sua amada, Lenore, e progressivamente enlouquece. Sentado em um busto da Palas Atena, 
o corvo parece perturbar ainda mais o protagonista com sua constante repetição da expressão "nunca mais". O poema faz referência a elementos folclóricos, 
mitológicos, religiosos e clássicos.
Poe afirmou, em seu ensaio A Filosofia da Composição, de 1846, ter escrito o poema de maneira lógica e metódica, com a intenção de criar uma obra que 
agradaria tanto à crítica quanto ao gosto popular. O autor se inspirou, em parte, em um corvo falante do romance Barnaby Rudge: A Tale of the Riots of Eighty, 
de Charles Dickens. De maneira semelhante, Poe baseou-se no ritmo complexo e métrica do poema Lady Geraldine's Courtship, de Elizabeth Barrett, além de fazer 
uso da rima interna e da aliteração.`;
var teste = texto.match(/a/g);


const itemReplacer = (array, oldItem, newItem) =>
  array.map(item => item === oldItem ? newItem : item);
console.log(itemReplacer(teste,"a","e"));

  
// REGEX \w pega texto
// REGEX \d pega numero