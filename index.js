const nav = document.querySelector('.nav')
const btn = document.querySelector('.btn');
const hamburger = document.querySelector('.header__btn')


btn.addEventListener('click', toggleNav)
window.addEventListener('resize', reset)
window.addEventListener('scroll', reset)

function toggleNav() {
    if (!nav.classList.contains('open')) {
        hamburger.src = './images/icon-close.svg'
        nav.classList.toggle('open')
    }
    else {
        hamburger.src = './images/icon-hamburger.svg'
        nav.classList.toggle('open')
    }
}

function reset() {
    nav.classList.remove('open')
}