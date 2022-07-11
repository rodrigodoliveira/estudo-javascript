//desafio: Aproveitar o Cliente que ja existe e criar a partir dele um novo tipo de cliente para contas poupança.

function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    };
    this.sacar = function(valor){
        if(valor <= saldo){
            this.sacar -= valor;
        }else{
            throw new Error("Saldo insuficiente");
        }
    }
}


function ClientePoupaca(nome, cpf, email, saldo, saldoPup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPup = saldoPup;
    this.depositarPoup = function(valor){
        this.saldoPup += valor;
    }
}

const rodrigo = new ClientePoupaca('Rodrigo', '21424588820', 'rodrigo@rodrigo.com', 50, 100);
console.log(rodrigo);

// ClientePoupaca.prototype.depositarPoup = function(valor){
//     this.saldoPup += valor;
// }

rodrigo.depositarPoup(30);
console.log(rodrigo);