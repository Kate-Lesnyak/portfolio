const swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    slidesPerView: 1,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
    loop: true,
    speed: 800,
    breakpoints: {
        1440: {
            slidesPerView: 2,
        },
    },
});