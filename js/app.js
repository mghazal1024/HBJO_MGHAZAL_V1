// OPEN MENU
const navButton = document.querySelector('.header__subNav-button');
const mobileNav = document.querySelector('.header__subNav-list');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('opened');
    mobileNav.classList.toggle('opened');
})


// NOS MARQUES

let elem = document.querySelector('.main-carousel');

let flkty = new Flickity( '.main-carousel', {
  cellAlign: 'left',
  contain: true,
  groupCells: false,
  wrapAround: true,
  autoPlay: 2000
});


