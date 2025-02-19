const swiper = new Swiper('.swiper', {
    loop: true,
    centeredSlides: true,  // Slide tengah jadi fokus
    slidesPerView: 3,  // Menampilkan 3 slide
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});