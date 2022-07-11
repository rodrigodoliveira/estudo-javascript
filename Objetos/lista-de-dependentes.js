//Objetivo: Extrair de uma listagem de clientes apenas as informações de dependentes e 
//montar uma lista unica para analise de outros departamentos do banco

const clientes = [
    {
        nome: 'Rodrigo Nunes',
        cpf: '21424588820',
        dependentes: [
            {
                nome: 'Giulia Nunes',
                parantesco: 'filho',
                dataNasc: '27/06/2005'
            },
            {
                nome: 'Maria Luisa Nunes',
                parantesco: 'filho',
                dataNasc: '26/08/2008'
            }
        ],
    },
    {
        nome: 'Evelyn Alencar',
        cpf: '21424588820',
        dependentes: [
            {
                nome: 'Giulia Alencar',
                parantesco: 'filho',
                dataNasc: '27/06/2005'
            }
        ],
    }
];


const listaDependentes =[...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes);