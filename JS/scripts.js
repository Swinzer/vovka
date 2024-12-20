document.addEventListener("DOMContentLoaded", function() {
    // Якщо у вас були скрипти для кнопок або анімацій, вставляйте їх тут
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', function() {
            // Ваша логіка для відкриття/закриття відповіді
            const content = item.querySelector('.faq-content');
            content.classList.toggle('active');
        });
    });

    // Можна додавати інші JavaScript функції тут
});
document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});
window.addEventListener("scroll", function() {
    const menu = document.querySelector(".fixed-menu");
    if (window.scrollY > 100) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});
