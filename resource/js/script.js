(function($){
    $.fn.leanModal = function(options) {
        if( $('.modal').length > 0 ){
            $('.modal').modal(options);
        }
    };

    $.fn.openModal = function(options) {
        $(this).modal(options);
        $(this).modal('open');
    };

    $.fn.closeModal = function() {
        $(this).modal('close');
    };
})(jQuery);

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
});



document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});


// Or with jQuery

$(document).ready(function(){
    $('.sidenav').sidenav();
});


// Or with jQuery

$(document).ready(function(){
    $('.parallax').parallax();
});