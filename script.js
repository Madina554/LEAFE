document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Спасибо! Мы скоро свяжемся с вами 🌿");
});

// Плавное появление при скролле
const sections = document.querySelectorAll('.section');

function showOnScroll() {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
