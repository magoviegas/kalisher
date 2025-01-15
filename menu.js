// Script para o menu hambúrguer
document.addEventListener("DOMContentLoaded", () => {
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Alterna a visibilidade do menu
    });

    // Fechar o menu ao clicar em um link (opcional)
    navLinks.querySelectorAll("li a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active"); // Fecha o menu
        });
    });
} else {
    console.error("Menu toggle ou nav-links não encontrado.");
}
});