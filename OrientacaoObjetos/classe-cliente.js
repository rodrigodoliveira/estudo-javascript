
class Cliente {

    constructor(nome, cpf, emai, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.emai = emai;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}


const rodrigo = new Cliente('rodrigo', '21424588820', 'rodrigo@email.com', 50);

console.log(rodrigo);

console.log("chamada do metodo depositar com valor = 30")
rodrigo.depositar(30);

console.log('Chamada do metodo exibir saldo');
rodrigo.exibirSaldo();