import { usuario } from "./bd.js";

const email = usuario.email;
const senha = usuario.senha;

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value.trim();
    const senhaInformada = document.getElementById("senha").value.trim();

    if (emailInformado === email) {
        if (senhaInformada === senha) {
            alert("Senha correta!");
            window.location.href = "home.html";
            return;
        }

        alert("Senha incorreta!");
        return;
    }

    alert("E-mail incorreto!");
}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    const formulario = document.querySelector("form");

    if (!botao || !formulario) {
        return;
    }

    botao.addEventListener("click", (e) => {
        e.preventDefault();
        verificarCredenciais();
    });

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        verificarCredenciais();
    });
});