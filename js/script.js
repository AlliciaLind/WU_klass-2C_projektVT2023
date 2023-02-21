const burgerMenuIcon = document.getElementById('hamburger-menu')
const closeMenuIcon = document.getElementById('close-menu')
const navBar = document.getElementById('nav-bar')

function openMenu() {
    navBar.classList.add('nav-visible')
    document.body.style.overflow = "hidden"
}

function closeMenu() {
    navBar.classList.remove('nav-visible')
    document.body.style.overflow = "visible"
    
}

burgerMenuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)