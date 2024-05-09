let showMenu = true;
const menuContent = document.querySelector('.header');
const menuToggle = menuContent.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    menuContent.classList.toggle('on', showMenu);

    showMenu = !showMenu;
});