var nome = prompt("Digite seu nome:");
var insiraNumero = prompt("Agora, insira um número:");
var insiraOutroNumero = prompt("Agora, insira outro número:");
var soma = parseInt(insiraNumero) + parseInt(insiraOutroNumero);

if (nome == "") {
  alert("Você precisa informar seu nome!");
} else {
  resultado = nome + ", a soma dos números informados é: " + soma;
  alert(resultado);
  console.log(resultado);
}
