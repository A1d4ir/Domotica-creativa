    
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.cards-banner-two', {delay: 500});
ScrollReveal().reveal('.card-productos', {delay: 500});