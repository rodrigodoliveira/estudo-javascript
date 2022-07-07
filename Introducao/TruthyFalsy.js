//Boolean

const usuarioLogado = true;
const contaPaga = false;


//Truthy ou Falsy;
//São as coisas que não são verdadeiramente true ou false mas equivalem.
//Ex: 0 ou 1 = false/true

console.log(0 == false);
console.log("" == false);
console.log(1 == true);


//null - ausencia de valor
//udefined - não definido 
//null == undefined = true;
//null === undefined = false;

let minhaVar;
let varNull = null;

console.log(minhaVar);
console.log(varNull);
console.log(minhaVar == varNull);
console.log(minhaVar === varNull);

let numero = 3;
let texto = "Alura";

console.log(typeof numero);
console.log(typeof texto);
