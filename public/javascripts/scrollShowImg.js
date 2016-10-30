
$(document).ready(function() {
    $(window).scroll(function() {

        $('.fadeInBox').each(function() {
            if ($(this).offset().top >= $(window).scrollTop() && $(this).offset().top < ($(window).scrollTop() + $(window).height())) {
                $(this).find('.eq').addClass('fadeInUp animated');
            } else {
                $(this).find('.eq').removeClass('fadeInUp animated');
            }
        })
    });
});