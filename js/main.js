let $burger = document.querySelector('.js-burger');
let $menu = document.querySelector('.js-menu');

$burger.addEventListener('click', function() {
    $burger.classList.toggle('active');
    $menu.classList.toggle('main-nav__mobile');
    document.querySelector('body').classList.toggle('no-scroll');
    return false;
});