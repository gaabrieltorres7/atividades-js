function adicionar() {
  let numero = document.querySelector("input[name='numero']").value;
  let area = document.querySelector("input[name='area']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let cidade = document.querySelector("input[name='cidade']").value;

  let newLi = document.createElement("li");
  newLi.innerText = `${numero} ${area} ${bairro} ${cidade}`;

  let remove = document.createElement("button");
  remove.type = "button";
  remove.innerText = "Remover";
  remove.setAttribute("onclick", "remover(this)");

  newLi.appendChild(remove);

  document.getElementById("list").appendChild(newLi);
}

function remover(button) {
  let li = button.parentNode;
  document.getElementById("list").removeChild(li);
}
