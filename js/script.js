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

// ============= SCROLL ANIMATION ================= //
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('anim')
        } else {
            entry.target.classList.remove('anim')
        }
    })
})

const section = document.querySelectorAll('section')
section.forEach((el) => observer.observe(el))