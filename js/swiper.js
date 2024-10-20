const swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
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
        1440: {

        },
    },
});