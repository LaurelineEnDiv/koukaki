document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        slidesPerView: 3, 
        spaceBetween: 30,
        effect: "coverflow",
        grabCursor: true  
    });
});
