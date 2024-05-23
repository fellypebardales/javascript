let peso = parseInt(prompt("Digite seu peso (em kg):"));
let altura = parseInt(prompt("Digite sua altura (em cm):"));
let resultado;

function dividirPesoPorAltura() {
  resultado = peso / (altura / 100) ** 2;
  console.log(resultado);
}
dividirPesoPorAltura();

function condicaoImc() {
  if (resultado >= 18.5 && resultado <= 24.9) {
    alert(
      "Seu IMC é " +
        resultado.toFixed(2) +
        ", então, você está com o peso normal!"
    );
  } else if (resultado < 18.5) {
    alert(
      "Seu IMC é " + resultado.toFixed(2) + ", então, você está abaixo do peso!"
    );
  } else {
    alert(
      "Seu IMC é " + resultado.toFixed(2) + ", então, você está acima do peso!"
    );
  }
}
condicaoImc();
