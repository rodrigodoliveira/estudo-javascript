class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }

    exibeSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    exibeSaldoPoupanca(){
        console.log(this.saldoPoupanca);
    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor;
    }
}


const rodrigo = new ClientePoupanca('rodrigo', 'rodrigo@email.com','21424588820', 50, 100);
rodrigo.exibeSaldo();
rodrigo.exibeSaldoPoupanca();

rodrigo.depositar(50);
rodrigo.depositarPoupanca(50);

rodrigo.exibeSaldo();
rodrigo.exibeSaldoPoupanca();