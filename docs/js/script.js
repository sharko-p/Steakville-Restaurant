
new Swiper('.image-slider', {
    // стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // навигация
    // буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        dinamicbullets: true,
    },
    autoHeight: true,
    loop: true,
    //    автопрокрутка
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
        speed: 1000,




   
});



let swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        // буллеты
        clickable: true,
        dinamicbullets: true,
    },
    autoHeight: true,
    loop: true,
});

(function () {
    const burger = document.querySelector('.burger-menu');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
    });
}())


function barFunction() {
    var x = document.getElementById("navLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
  }