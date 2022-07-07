// == -> comparações implicitas

const numero = 5;
const texto = "5";

console.log(numero == texto);
console.log(numero === texto);
console.log("const numero = " + typeof numero);
console.log("const texto = " + typeof texto);

// == só compara o valor
// === compara valor e o tipo
// boas praticas é usar ===  e fazer a conversão explicita com Number() String()/ .toString();