const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Подписка
const subscribeForm = document.querySelector(".subscribe-form");
if (subscribeForm) {
    subscribeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Вы успешно подписались! 💌");
    });
}

// Плавное появление секций
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

// Переключение языка (заглушка)
function switchLang() {
    alert("Будет доступна мультиязычность в будущем 🌐");
} 
