import $ from 'jquery';


$('.main-header__menu-toggle').click(function () {
  let toggle = $('.menu-toggle');

  if (toggle.hasClass('menu-toggle_active'))
  {
      $('.main-header__nav').slideUp();
      toggle.removeClass('menu-toggle_active');
  }
  else {
    $('.main-header__nav').slideDown();
      toggle.addClass('menu-toggle_active');
  }
  
});

