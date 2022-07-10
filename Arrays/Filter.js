//filtrar alunos com media maior que 6, imprimir o nome a nota e o texto aprovado.

var alunos = ['Rodrigo', 'Giulia', 'Maria Luisa', 'Evelyn'];
var notas = [6, 8, 7.5, 7];

var aprovados = alunos.filter((_, index) => notas[index] > 6);

console.log(aprovados);