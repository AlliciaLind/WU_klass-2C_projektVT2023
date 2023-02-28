const burgerMenuIcon = document.getElementById('hamburger-menu')
const closeMenuIcon = document.getElementById('close-menu')
const navBar = document.getElementById('nav-bar')
const scrollDownIcon = document.getElementById('arrow-down')

function openMenu() {
    navBar.classList.add('nav-visible')
    document.body.style.overflow = "hidden"
}

function closeMenu() {
    navBar.classList.remove('nav-visible')
    document.body.style.overflow = "visible"
}

function scrollDown() {

}

burgerMenuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)