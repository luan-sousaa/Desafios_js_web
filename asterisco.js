//input de dados do usuário
var numero = prompt("Digite um número de pirâmide: ");
//loop para imprimir asteriscos
for (let i = 0; i < numero ; i++){
    //repete os asteriscos de acordo com o número do loop
    //ira repetir em quanto o numero do usuario for maior que o loop
    console.log("*".repeat(i+1 ));
}