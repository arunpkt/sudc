$(document).ready(function() {
    var width = $(this).width();
    var heightcalc = Math.round(($('.banner').outerHeight() - $('.text_slideshow').height()) / 2);
    $('.text_slideshow').css('top', heightcalc + 'px');

    //            backtotop script
    $(".upar").hide();

    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 700) {
                $('.upar').fadeIn();
            } else {
                $('.upar').fadeOut();
            }
        });
        $('.upar').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);    
            return false;
        });
    });
    //Sticky header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 100) {
            $('header').addClass('sticky_header');
            $('.top_header').hide();
        }
        else {
            $('header').removeClass('sticky_header');
            $('.top_header').show();
        }
    });
});
//Toggle search terms
function toggle(id){
  $("#" + id).toggle();
}


