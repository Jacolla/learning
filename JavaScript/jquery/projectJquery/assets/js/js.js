/* selecion (click) de lista */
/* Método clasico viejo */
//  $("li").click(function(){
//      if ($(this).css("color") === "rgb(128, 128, 128)"){
//          $(this).css({
//              color: "black",
//              textDecoration: "none",
//              backgroundColor: "aqua",
//  
//  
//          })
//      }
//      else{
//      $(this).css({
//          color: "gray",
//          backgroundColor: "pink",
//          textDecoration: "line-through",
//          });
//      }
//  });

/* cambio background "ul" */
$("ul").on("click","li", function(){                                                /* Es un poco chungo esto, no lo he pillado del todo */
    $(this).toggleClass("completado");                                              /* Aquí es donde se pone el Toggle */
 });

 /*------------------------------*/
 $("ul").on("click", "span",function(event){
     $(this).parent().fadeOut(200, function(){                                      /* Con el parent, se borra todo lo que engloba el span, like parent itself */
        $(this).remove()
    });                  
    event.stopPropagation();                                                        /* Con el stopPropagation, haces que se ejecute SOLO el span, en este caso, */
 })                                                                                 /* sin tener que activar el ul, div, body, etc. */ 
 
 $("input[type='text']").keypress(function(event){
     if(event.which === 13){
         let gettingText = $(this).val();
         $(this).val("")
         $("ul").append("<li><span> <i class='fa fa-trash'> </i> </span>" + gettingText + "</li>")              /* El append introduce el string donde se ha seleccionado con $() */
     }
 })

$("#butt").click(function(){
    $("input[type='text']").fadeOut();
})
