var nome = prompt("Digite o nome da nave:");
var velocidade = 0;
menu();

function menu() {
  do {
    var opcao = prompt(
      "1- Acelerar 5m/s\n2- Frear 5m/s\n3- Imprimir dados de bordo\n4- SAIR"
    );
    switch (opcao) {
      case "1":
        acelerar();
        break;
      case "2":
        frear();
        break;
      case "3":
        imprimir();
        break;
      case "4":
        alert("PROGRAMA FINALIZADO");
        break;
      default:
        if (opcao == null || opcao == "") {
          alert("CAMPO VAZIO");
        } else {
          alert("Você digitou um número inválido.");
        }
    }
  } while (opcao != 4);
}

function acelerar() {
  velocidade += 5;
}

function frear() {
  velocidade -= 5;
  if (velocidade < 0) {
    velocidade = 0;
  }
}

function imprimir() {
  alert(`Nome da nave: ${nome}\nVelocidade: ${velocidade}m/s`);
}
