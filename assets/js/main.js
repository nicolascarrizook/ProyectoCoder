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
const body = document.querySelector("body");
const navbar = document.querySelector(".navBar");
const menu = document.querySelector(".menu__list");
const menuBtn = document.querySelector(".menu__boton");
const cancelBtn = document.querySelector(".cancel__boton");
menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
    body.classList.add("disabledScroll");
}
cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
    body.classList.remove("disabledScroll");
}
