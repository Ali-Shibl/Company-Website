import play from './module.js'
$(document).ready(function () {
play();

//nav down

$(window).scroll(function () { 
    let sctop=$(window).scrollTop();
   if (sctop > 100) {
    $('nav').css({backgroundColor : 'white',height: '60px',borderBottom:'2px solid black'})
    $('.image').fadeIn();
   }else{
    $('nav').css({backgroundColor : 'transparent',height: '120px',borderBottom:'none'})
    $('.image').fadeOut();
   }
});

//owlCarousel
$('.width-company .owl-carousel').owlCarousel({
    loop:true,
   margin:10,
   autoplay:true,

    responsive:{
        0:{  
            items:1
          
        },
        1200:{
            
            items:2
        }
    }
})

$('.Our-partners .owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
       
        1000:{
            items:3
        }
    }
})
});