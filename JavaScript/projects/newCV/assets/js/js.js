
$("li").click(function(){
    $(this).toggleClass("completado");          /* Aquí es donde se pone el Toggle */
 });



 
 /*-----------------------------------------*/
 
$('html, body').animate({
    scrollTop: $("#target").offset().top
}, 1000);