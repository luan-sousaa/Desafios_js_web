//input de dados do usuário
var termos = prompt("Digite um número :");
var soma = 0;
var num = 0;
var resultado = "";
//loop para calcular a soma dos termos
for (let i = 0; i < termos; i++){
    //gerar o Numero da sequência
    num = num * 10 + 1;
    soma += num;
    resultado +=  num;
//verifica se é ultimo termo para não colocar o + no final
    if (i < termos -1){
        resultado = resultado + "+";
    }

}
//imprime o resultado no console
console.log(resultado);
console.log("Soma = " + soma);
