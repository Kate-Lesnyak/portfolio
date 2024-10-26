const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // slidesPerGroup: 2,
    spaceBetween: 20,
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
        760: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1440: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    },
});