// OPEN MENU
const navButton = document.querySelector('.header__subNav-button');
const mobileNav = document.querySelector('.header__subNav-list');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('opened');
    mobileNav.classList.toggle('opened');
})