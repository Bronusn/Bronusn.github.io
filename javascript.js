$("#arrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
});


$(document).ready(function(){
$('#hamb').click(function(){
$('#navbarResponsive').stop().slideToggle(300);
});
});
   
