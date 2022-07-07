
const nomes = ['João', 'Juliana', 
'Ana', 'Caio', 'Lara', 'Marjorie',
'Guilherme', 'Alice', 'Fabiana',
'Andre', 'Carlos', 'Paulo', 'Bia',
'Vivian', 'Isabela', 'Vinicius',
'Renan', 'Renata', 'Daisy', 'Camilo', 'Rodrigo'];

const turma1 = nomes.slice(0, (nomes.length / 2))
const turma2 = nomes.slice(nomes.length / 2);

console.log(`Total Alunos: ${nomes.length}`)
console.log(`Turma 1: ${turma1}, Qtde: ${turma1.length}`);
console.log(`Turma 2: ${turma2}, Qtde: ${turma2.length}`);