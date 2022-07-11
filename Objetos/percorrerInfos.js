//Objetivo: Percorrer um objeto e extrair informacoes basicas do cliente em um formato mais legivel e de 
//forma automatizada para fornecer a outros departamentos do banco.

const cliente = {
    nome: 'Rodrigo Nunes',
    cpf: '21424588820',
    email: 'oliveira.rodrigonunes@gmail.com',
    fones:['11993384840', '11993384841'],
    dependentes: [
        {
            nome: 'Giulia Aliste Oliveira',
            parantesco: 'filho',
            dataNasc: '27/06/2005'
        },
        {
            nome: 'Maria Luisa Aliste Oliveira',
            parentesco: 'filho',
            dataNasc: '26/08/2008'
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    }
}

let relatorio = '';
for(let info in cliente){
    let tipo = typeof cliente[info];
    if(tipo === 'object' || tipo === 'function'){
        continue;
    }else{
        relatorio += `${info} ===> ${cliente[info]}
        `
    }
}

console.log(relatorio);