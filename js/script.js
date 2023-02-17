const burgerMenu = document.getElementById('hamburger-menu')
const navBar = document.getElementById('nav-bar')
const closeMenu = document.getElementById('close-menu')

function openMenu() {
    navBar.classList.add('nav-visible')
}

function closeMenu() {
    navBar.classList.remove('nav-visible')
}


burgerMenu.addEventListener('click', openMenu)
closeMenu.addEventListener('click', closeMenu)