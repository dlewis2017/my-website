$(document).ready(function() {
    let profile = 0;

    // active class to hide card side
    $('.header__logo-box').click(function() {
        if (!profile) {
            $('#card__side--back').removeClass('hide');
            $('#card__side--front').addClass('hide');
            profile = !profile;
        } else {
            $('#card__side--front').removeClass('hide');
            $('#card__side--back').addClass('hide');
            profile = !profile;
        }
    });

    $('.navigation__item').click(function() {
        $("#navi-toggle").prop("checked", false);
    });

});