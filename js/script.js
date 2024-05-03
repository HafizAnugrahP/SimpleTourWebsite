// ============== NAV MENU ACTIVE ================ //
const navMenu = document.querySelector('.nav__menu'),
    header = document.querySelector('header');

navMenu.onclick = function () {
    header.classList.toggle('active')
}

// ============== HEADER DOWN ================ //
window.addEventListener("scroll", function () {
    header.classList.toggle("down", window.scrollY > 60)
})