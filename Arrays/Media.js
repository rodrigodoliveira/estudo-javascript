//1 calcular a média final do aluno entre as seguintes notas 10, 6.5, 8 e 7.5
let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media = ((nota1+nota2+nota3+nota4) / 4);
console.log(`A média é: ${media}`);

//refatorando com arrays
const notas = [10, 6.5, 8, 7.5];
media = ((notas[0] + notas[1] + notas[2] + notas[3]) / notas.length)
console.log(`A média retatorada é: ${media}`);
