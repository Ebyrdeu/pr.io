// Modal
var btn = document.querySelector('#btn');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


btn.addEventListener('click', function() {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function() {
    modal.classList.remove('modal_active');
});
