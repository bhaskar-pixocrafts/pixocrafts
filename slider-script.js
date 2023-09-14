
var valueswiper = new Swiper('.value-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 100,
    // loop: true,    
    // centeredSlides: true,
    speed: 1000,

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },

    breakpoints: {
        1600: {
            spaceBetween: 80,
        },

        1200: {
            spaceBetween: 60,
        },

        991: {
            spaceBetween: 50,
        },

        575: {
            spaceBetween: 30,
        },
    },


});


var statswiper = new Swiper('.stats-swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    // loop: true,    
    // centeredSlides: true,
    speed: 1000,

    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },

    breakpoints: {
        1600: {
            spaceBetween: 40,
        },

        1200: {
            spaceBetween: 30,
        },

        991: {
            spaceBetween: 30,
            slidesPerView: 2,
        },

        575: {
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },

});