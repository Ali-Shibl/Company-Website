export default function play() {
    AOS.init();
    //click up
    $('.up').click(function () {
        $('html,body').animate({ scrollTop : 0 }, 400)
    
     });
    
    //loading
    $('.loading .loader').fadeOut(1800,function(){
        $('.loading').hide(1000 ,function(){
            $('.loading').remove()
            $('body').css('overflow' , 'auto')
        })
    });
    
    //list show
    document.querySelector('.bar').addEventListener('click',()=>{
        document.querySelector('.list').classList.remove('d-none')
        $('.list-content').animate({ top : '30px' } , 500)
        document.documentElement.style.overflow='hidden'
    })
    //list close
    document.querySelector('.close').addEventListener('click',()=>{
        $('.list-content').animate({ top : '-50%' } , 500 ,function(){
            document.querySelector('.list').classList.add('d-none')
             document.documentElement.style.overflow='auto'
        })
    })
}