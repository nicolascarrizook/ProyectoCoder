$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
})

/*Tooltip*/

$(function() {
    $('.recurso__image').tooltip();
})

/*Menu*/

const menuBtn = document.querySelector('.boton__nav');
const menuList = document.querySelector('.navigation__nav');
/* Menu toggle */

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuList.classList.toggle("open");
});