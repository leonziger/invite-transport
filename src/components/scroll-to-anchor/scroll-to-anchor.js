import $ from 'jquery';
global.jQuery = global.$ = $;

const widthOfScreen = $(window).width();

if (widthOfScreen < 992) {
  $('[href^="#"]').click(function(){

    let hyperlink = {};
    hyperlink.link = '#' + $(this).attr('data-id');
    hyperlink.menu = $(this).attr('data-menu');
    let tgl = $('.menu-toggle');

    let coordinates = $(hyperlink.link).offset().top - $('.main-header').height()-50;

    if (hyperlink.menu == 'yes') {

        if (tgl.hasClass('menu-toggle_active'))
        {
            $('.main-header__nav').slideUp();
            tgl.removeClass('menu-toggle_active');
        }
        else {
            $('.main-header__nav').slideDown();
            tgl.addClass('menu-toggle_active');
        }
    }

    $('html, body').animate({scrollTop:coordinates}, 1000);
    return false;
  })
}
