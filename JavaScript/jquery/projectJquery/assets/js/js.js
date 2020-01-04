        /* Los "buttons" */
$("button").mouseenter(function(){
    $(this).css({
        fontSize: "26px",    
    });

})

$("button").mouseleave(function(){
    $(this).css({
        fontSize: "13.4px",               /* Tamaño por defecto, en mi PC */
    });
})

    /*------------------------*/


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

/* jQuery en 2 lineas */
$("li").click(function(){
    $(this).toggleClass("completado");          /* Aquí es donde se pone el Toggle */
 });