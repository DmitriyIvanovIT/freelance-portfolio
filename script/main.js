new WOW().init();

const mySwiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.project-pagination',
        bulletClass: 'projects-bullet',
        bulletActiveClass: 'projects-bullet-active',
        clickable: true
    },
    autoplay: {
        delay: 5000,
    }
});