$(document).ready(function(){
    var btn  = $('#btn');
    var modal = $('#modal');
    var close = $('#close');
    btn.on('click', function() {
        modal.addClass('modal_active');
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    })
});