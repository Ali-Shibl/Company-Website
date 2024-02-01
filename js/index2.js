import play from './module.js'
$(document).ready(function () {

play();

//nav down
let topNav=$('nav').offset().top;
$(window).scroll(function () { 
    let sctop=$(window).scrollTop();
   if (sctop > topNav + 200) {
    $('nav').css({height: '70px',borderBottom:'2px solid black',position:'fixed',top:0,right:0,left:0})
    $('.image').fadeIn();
   }else{
    $('nav').css({height: '120px',borderBottom:'none',position:'relative'})
    $('.image').fadeOut();
   }
});


});