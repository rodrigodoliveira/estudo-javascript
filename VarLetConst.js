//var -- Flexivel pode usar de depois declarar pois o processador js antes de executar o codigo analisa os tipos var
//e as variaveis não declaradas

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;

// console.log(area);
// var area;
// console.log(area);

//let - apartir de 2015.

let forma = "triângulo";
let altura = 5;
let comprimento = 7;
let area;

if(forma === "retângulo"){
    area = altura * comprimento;
}else{
    area = (altura * comprimento) / 2;
}

//let area; -- se declarar como let depois de utilizar da erro.
console.log(area);