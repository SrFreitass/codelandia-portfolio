const menuMobile = document.getElementById('menu-mobile')
const menuMobileclose = document.getElementById('menu-mobile-close')
menuMobile.addEventListener('click', menuActive) 
menuMobileclose.addEventListener('click', menuActive)

function menuActive() {
    const header = document.getElementById('header')
    header.classList.toggle('active')
}