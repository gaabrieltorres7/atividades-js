desenhaQuadrado = (x, y, tamanho, cor) => {
  pincel.fillStyle = cor;
  pincel.fillRect(x, y, tamanho, tamanho);
  pincel.fill();
};

desenhaCirculo = (x, y, raio, cor) => {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * 3.14);
  pincel.fill();
};

desenhaPaletaDeCores = () => {
  desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, "red");
  desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, "green");
  desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, "blue");
};
let x;
let y;

trocaCor = () => {
  if (x >= 0 && x <= 50 && y <= 49) {
    corAtual = "red";
  } else if (x >= 51 && x < 100 && y <= 49) {
    corAtual = "green";
  } else if (x >= 100 && y <= 49) {
    corAtual = "blue";
  }
};
lidaComMovimentoDoMouse = (evento) => {
  x = evento.pageX - tela.offsetLeft;
  y = evento.pageY - tela.offsetTop;

  // define onde o pincel pode desenhar
  if (desenha && y > 60) {
    desenhaCirculo(x, y, 5, corAtual);
  }
};

habilitaDesenhar = () => {
  desenha = true;
};

desabilitaDesenhar = () => {
  desenha = false;
};

let tela = document.querySelector("canvas");
let pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

let desenha = false;
let corAtual = "blue";
let xVermelho = 0;
let xVerde = 50;
let xAzul = 100;
let yQuadrados = 0;
let tamanhoQuadrados = 50;

desenhaPaletaDeCores();

tela.addEventListener("mousemove", lidaComMovimentoDoMouse);

tela.addEventListener("mousedown", habilitaDesenhar);

tela.addEventListener("mouseup", desabilitaDesenhar);

tela.addEventListener("click", trocaCor);
