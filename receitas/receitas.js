receitas = [
  {
    titulo: "Bolo de cenoura",
    imagem: "assets/cenoura.jpeg",
    preparo:
      "Em um liquidificador, adicione a cenoura, os ovos e o óleo, depois misture.",
    ingredientes: [
      "Farinha",
      "açucar",
      "cenoura",
      "ovo",
      "manteiga",
      "fermento",
      "sal",
    ],
  },
  {
    titulo: "Bolo de chocolate",
    imagem: "assets/chocolate.jpg",
    preparo:
      "Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.",
    ingredientes: [
      "Farinha",
      "açucar",
      "chocolate em pó",
      "ovo",
      "manteiga",
      "fermento",
      "sal",
    ],
  },
  {
    titulo: "Bolo de morango",
    imagem: "assets/morango.jpg",
    preparo:
      "Bata 4 gemas com 1 xícara de chá de água até espumar. Em seguida, adicione 2 xícaras de chá de açúcar e bata até formar um creme.",
    ingredientes: [
      "Farinha",
      "açucar",
      "morango",
      "ovo",
      "manteiga",
      "fermento",
      "sal",
    ],
  },
  {
    titulo: "Bolo de morango",
    imagem: "assets/morango.jpg",
    preparo:
      "Bata 4 gemas com 1 xícara de chá de água até espumar. Em seguida, adicione 2 xícaras de chá de açúcar e bata até formar um creme.",
    ingredientes: [
      "Farinha",
      "açucar",
      "morango",
      "ovo",
      "manteiga",
      "fermento",
      "sal",
    ],
  },
];

function getListaIngredientes(receita) {
  const liingredientes = receita.ingredientes
    .map((ingrediente) => `<li>${ingrediente}</li>`)
    .join("");
  return `<ul>${liingredientes}</ul>`;
}

function getCard(receita) {
  return `
    <div class="card receitas" style="width: 250px; margin: 10px; padding: 10px">
      <img src="${receita.imagem}" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-title">${receita.titulo}</p>
        ${getListaIngredientes(receita)}
        <hr />
        <p class="card-text">${receita.preparo}</p>
      </div>
    </div>
  `;
}


function preencheCatalog() {
    const pnlCatalogo = document.getElementById("pnlCatalogo")
    const catalogo = receitas.map(receita => getCard(receita)).join('')
    pnlCatalogo.innerHTML = catalogo
}
