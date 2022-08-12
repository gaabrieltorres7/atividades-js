function cadastrar() {
  let tipo = document.querySelector('select[name="tipo"] option:checked').value;
  let area = document.querySelector('input[name="area"').value;
  let alugado = document.querySelector('input[name="sn"]:checked').value;

  let li = document.createElement("li");
  li.innerText = `Tipo do imóvel: ${tipo}\nÁrea: ${area}\nEstá alugado? ${alugado}`;

  let remove = document.createElement("button");
  remove.type = "button";
  remove.innerText = "REMOVER";
  remove.setAttribute("onclick", "remover(this)");

  li.appendChild(remove);

  document.getElementById("cadastrados").appendChild(li);
}

function remover(button) {
  let li = button.parentNode;
  document.getElementById("cadastrados").removeChild(li);
}
