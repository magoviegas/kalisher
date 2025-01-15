document.addEventListener("DOMContentLoaded", () => {
    // Script para o slider
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide-container");
    const dots = document.querySelectorAll(".nav-dot");

    function showSlide(index) {
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        document.querySelector(".slides-front").style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            dot.style.backgroundColor = index === currentSlide ? "#1D9D63" : "#888";
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
        });
    });

    showSlide(currentSlide);
    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000); // Muda de slide a cada 5 segundos

    // Script para o menu hambúrguer
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
