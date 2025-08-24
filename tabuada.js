var multiplicacao = 0;
var resultado = "";
//pega o numero do usuario
var usuario = prompt("Digite um número para a tabuada: ");

//loop que ira percorrer de 1 a 10
for (let i = 1; i <= 10; i++) {
    //faz a multiplicação
    multiplicacao = usuario * i;
    //concatena o resultado em uma string
    resultado += usuario + " x " + i + " = " + multiplicacao + "\n";
}
//imprime o resultado 
console.log(resultado);