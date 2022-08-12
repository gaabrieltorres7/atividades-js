let nave = {
  nome: "RinhoX",
  tipo: "fodona",
  velocidadeMax: 700,
  velocidade: 0,
};

function acelera(speedRequired) {
  nave.velocidade += speedRequired;
  if (nave.velocidade > 700) {
    alert(
      "VELOCIDADE MÁXIMA ULTRAPASSADA " +
        nave.velocidade +
        " " +
        nave.velocidadeMax
    );
  }
}

function para() {
  alert(nave.nome + " " + nave.tipo + " " + nave.velocidade);
}

function menu() {
  do {
    var escolha = Number(prompt("1- Acelerar nave\n2- Parar nave\n"));
    if (escolha == 1) {
      let speedRequired = Number(prompt("Digite o quanto você quer acelerar:"));
      acelera(speedRequired);
      alert(nave.velocidade);
    } else if (escolha == 2) {
      para();
      break;
    } else {
      alert("ESCOLHA INVÁLIDA");
    }
  } while (true);
}
menu();
