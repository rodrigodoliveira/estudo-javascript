//Objetivo: Percorrer um objeto, verificar se existe a chama 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro.

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



function oferecerSeguro(cli){
    const propsClientes = Object.keys(cli);

    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${cli.nome}`);
    }
}

oferecerSeguro(cliente);

console.log(Object.values(cliente));