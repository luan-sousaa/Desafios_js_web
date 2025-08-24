usuario = prompt("digite um número entre 1 e 20: ");
numeroSecreto = Math.floor(Math.random() * 21) + 1;
while (usuario != numeroSecreto){
    if (usuario < numeroSecreto){
        console.log("O número é maior");
        document.write("O número é maior");
    } else {
        console.log("O número é menor");
        document.write("O número é menor");
    }
    usuario = prompt("digite um número entre 1 e 20: ");

}
console.log("Parabéns, você acertou! \no número era : "+ numeroSecreto);
document.write("Parabéns, você acertou! \no número era : "+ numeroSecreto);