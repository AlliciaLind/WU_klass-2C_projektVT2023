const burgerMenu = document.getElementById('hamburger-menu')
const navBar = document.getElementById('nav-bar')
const closeMenu = document.getElementById('close-menu')

function openMenu() {
    navBar.classList.toggle('nav-visible')
}

function closeMenu() {
    navBar.classList.toggle('nav-visible')
}


burgerMenu.addEventListener('click', openMenu)