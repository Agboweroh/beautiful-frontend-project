

const responsive = {

    0 : {
        items : 1
    },
    320 : {
        items :1
    },
    560 : {
        items : 2
    },
    960 : {
        items : 3
    }
}
$(document).ready(function(){
    $nav =$('.nav');
    $toggleCollapse =$('.toggle-collapse');
    /**click event on toggle menu */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');

    });


/** owl-carousel for blog */
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay : true,
    autoplayout:3000,
    dots: true,
    responsive :responsive
    
    

});
// click to scroll up
$('.move-up span').click(function(){
    $('html,body').animate({
        scrollTop : 0

    },1000);
});
//    Aos insatnce
AOS.init();

});

window.onscroll = function(){myFunction()};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;
function myFunction(){
    if(window.pageYOffset>= sticky){
        navbar.classList.add('sticky')
    } else{
        navbar.classList.remove('sticky');
    }
}