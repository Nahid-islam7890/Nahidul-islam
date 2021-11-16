$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 50){
        $(".navbar").addClass("bg");
    }else{
        $(".navbar").removeClass("bg");
    }
});
var typed =new Typed('.type', {
    
    strings: ['Desginer','Professional Coder','Developer'],
    loop: true,
    typeSpeed: 0,
    backSpeed: 0,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '|',
    autoInsertCss: true,

});
$(".offcanvas ul li a").click(function(){
    $(".offcanvas").fadeOut();
})
$(".navbar-toggler").click(function(){
    $(".offcanvas").fadeIn();
})

new WOW().init();