const notas = [10, 6.5, 8, 7.5];

let somaNodas = 0;
notas.forEach(nota => {
    somaNodas += nota;
});

let media = somaNodas / notas.length;

console.log(`a média é: ${media}`);