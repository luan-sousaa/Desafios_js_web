// Opções possíveis
let opcoes = ["pedra", "papel", "tesoura"];

// Usuário escolhe
let usuario = prompt("Digite sua escolha: pedra, papel ou tesoura").toLowerCase();

// Computador escolhe aleatoriamente
let indiceComputador = Math.floor(Math.random() * 3);
let computador = opcoes[indiceComputador];

console.log("Você escolheu: " + usuario);
console.log("Computador escolheu: " + computador);

// Determinar vencedor
if (usuario === computador) {
    console.log("Empate!");
} else if (
    (usuario === "pedra" && computador === "tesoura") ||
    (usuario === "papel" && computador === "pedra") ||
    (usuario === "tesoura" && computador === "papel")
) {
    console.log(" Você venceu!");
} else if (
    usuario === "pedra" || usuario === "papel" || usuario === "tesoura"
) {
    console.log(" O computador venceu!");
} else {
    console.log("Opção inválida! Escolha entre pedra, papel ou tesoura.");
}
