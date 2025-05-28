
function adicionarCarrinho(botao) {
  const item = botao.parentElement;
  const nome = item.querySelector("p").textContent;
  const preco = parseFloat(item.querySelector("span").textContent.replace("R$ ", ""));
  
  const lista = document.getElementById("itens-carrinho");
  const li = document.createElement("li");
  li.textContent = nome + " - R$ " + preco.toFixed(2);
  lista.appendChild(li);

  const totalAtual = parseFloat(document.getElementById("total").textContent);
  document.getElementById("total").textContent = (totalAtual + preco).toFixed(2);
}

document.getElementById("filtro-plataforma").addEventListener("change", filtrarProdutos);
document.getElementById("filtro-preco").addEventListener("change", filtrarProdutos);

function filtrarProdutos() {
  const plataforma = document.getElementById("filtro-plataforma").value;
  const preco = document.getElementById("filtro-preco").value;

  document.querySelectorAll(".item").forEach(item => {
    const p = item.getAttribute("data-plataforma");
    const pr = parseFloat(item.getAttribute("data-preco"));
    let mostrar = true;

    if (plataforma !== "todos" && p !== plataforma) mostrar = false;
    if (preco === "baixo" && pr > 100) mostrar = false;
    if (preco === "medio" && (pr <= 100 || pr > 200)) mostrar = false;
    if (preco === "alto" && pr <= 200) mostrar = false;

    item.style.display = mostrar ? "block" : "none";
  });
}
