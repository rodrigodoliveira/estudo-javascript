
//declaração de função
function minhaFuncao(){}

//expressão de função
// const soma = function(num1, num2){ return num1 + num2}

//diferença principal

console.log(apresentar()) //com função de declaração funciona chamar a função antes de declarar

function apresentar(){
    return "Olá";
}

console.log(soma(1,1)); //expressão de função não pode ser chamado antes de declarar

const soma = function(num1, num2){
    return num1 + num2
}