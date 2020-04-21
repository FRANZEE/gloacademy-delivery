const cartButton = document.querySelector('#cart-button');
const modal = document.querySelector('.modal-bg');
const close = document.querySelector('.modal-close');

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal() {
    modal.classList.toggle('is-open');
}

new WOW().init();