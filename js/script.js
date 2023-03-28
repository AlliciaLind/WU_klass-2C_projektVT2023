const burgerMenuIcon = document.getElementById('hamburger-menu')
const closeMenuIcon = document.getElementById('close-menu')
const navBar = document.getElementById('nav-bar')
const scrollDownIcon = document.getElementById('arrow-down')

let pageHeight = window.innerHeight

function openMenu() {
    navBar.classList.add('nav-visible')
    document.body.style.overflow = "hidden"
}

function closeMenu() {
    navBar.classList.remove('nav-visible')
    document.body.style.overflow = "visible"
}

function scrollDown() {
    window.scrollBy({
        top: pageHeight,
        behavior : "smooth"
    });
}

burgerMenuIcon.addEventListener('click', openMenu)
closeMenuIcon.addEventListener('click', closeMenu)
scrollDownIcon.addEventListener('click', scrollDown)