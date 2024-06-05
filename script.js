
// Awal navbar
let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// Akhir Navbar


// Product Descrition Click
document.querySelectorAll('.gambar').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.gambarbig').src = src
    });
});
// Product Descrition Click


// Awal Swipper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// Akhir Swipper



