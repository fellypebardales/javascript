var nome = prompt("Digite seu nome:");
var insiraNumero = prompt("Agora, insira um número:");
var insiraOutroNumero = prompt("Agora, insira outro número:");
var soma = parseInt(insiraNumero) + parseInt(insiraOutroNumero);

if (nome == "" || insiraNumero == "" || insiraOutroNumero == "") {
  alert("Você deixou um campo em branco!");
} else {
  resultado = nome + ", a soma dos números informados é: " + soma;
  alert(resultado);
  console.log(resultado);
}
