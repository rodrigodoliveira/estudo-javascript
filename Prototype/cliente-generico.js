//PROTOTYPE
//Desafio: Gerar uma funcao que permita a criação de novos clientes a partir de um modelo.



function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.depositar = function(valor){
        this.saldo += valor
    }
}


const rodrigo = new Cliente('Rodrigo','21424588820', 'oliveira.rodrigonunes@gmail.com',50);

console.log(rodrigo)
