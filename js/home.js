import {dados_das_noticias} from "./bd.js";

let vetor_das_noticias = [];
const container_das_noticias = document.getElementById("noticias");
const opcao_noticias = document.getElementById("opcao_noticias");

opcao_noticias.addEventListener("click", () => {
    alternarApresentacaoDasNoticias();
});

function alternarApresentacaoDasNoticias() {
    if (vetor_das_noticias.length === 0) {
      carregarNoticias();
      apresentarNoticias();
    } else {
        container_das_noticias.innerHTML = "";
        vetor_das_noticias = [];
    }
}

const carregarNoticias = async () => {
    vetor_das_noticias = dados_das_noticias;
};

const apresentarNoticias = async () => {
    vetor_das_noticias.forEach((noticia) => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
            <img src="${noticia.imagem}" alt="${noticia.titulo}" class = "imagem-do-cartao">
            <section class = "corpo-do-cartao">
            <h1 class = "titulo-do-cartao">${ noticia.titulo}</h1>
            <p class = "classificacao">
            <span class = "categoria-da-noticia">${noticia.categoria}</span>
            <span class = "data-da-noticia">${noticia.data}</span>
            </p>
            <p class = "descricao-do-cartao">${noticia.descricao}</p>
            <p class = "autor-da-noticia">Autor: ${noticia.autor}</p>
            </section>
        <a class = "botao-do-cartao" href = "./detalhe.html?id=${noticia.id}">Leia mais</a>
        `;
        container_das_noticias.appendChild(cartao);
    });
};