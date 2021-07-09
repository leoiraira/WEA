const open = document.getElementById("popup");
const modal = document.getElementById("modal");
const close = document.getElementById("close");

open.addEventListener('click', () => {
    modal.classList.add('show');
});

close.addEventListener('click', () => {
    modal.classList.remove('show');
});

const open_footer = document.getElementById("popup-footer");
const modal_footer = document.getElementById("modal-footer");
const close_footer = document.getElementById("close-footer");

open_footer.addEventListener('click', () => {
    modal_footer.classList.add('show');
});

close_footer.addEventListener('click', () => {
    modal_footer.classList.remove('show');
});