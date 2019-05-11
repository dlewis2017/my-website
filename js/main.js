$(document).ready(function() {

    // Uncheck checkbox when nav item clicked (hide nav)
    $('.navigation__item').click(function() {
        $('.navigation__checkbox').prop('checked', false);
    });

});