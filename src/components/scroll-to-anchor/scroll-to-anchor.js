import $ from 'jquery';

$('[href^="#"]').click(function(){
  let link = $(this).attr('href');
  let coordinates = $(link).offset().top-$('.main-header').height()-50;
  $('html, body').animate({scrollTop:coordinates}, 1000);
  return false;
})
