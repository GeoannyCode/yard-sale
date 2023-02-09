const menuEmail = document.querySelector('.open-close-menu');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burgerMenu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toogleMenus);
burgerMenu.addEventListener('click',toogleMenus);

function toogleMenus(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
}