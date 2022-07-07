
const alunos = ['joão', 'juliana', 'caio', 'ana'];
const medias = [10,7,9,6];

let listAlunosNotas = [alunos, medias];

const exibeNomeNota = (nome)=>{
    if (listAlunosNotas[0].includes(nome)){
        let index = listAlunosNotas[0].indexOf(nome);
        return listAlunosNotas[0][index] + `sua nota é ${listAlunosNotas[1][index]}`
    }else{
        return "Aluno não cadastrado";
    }
}

console.log(exibeNomeNota('ana'));