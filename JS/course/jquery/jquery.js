// $    /* Para empezar con jQuery */
// 
// ////////////////////////////////////
// 
// $("ul")     /* Para coger lo que se desée */
// 
// ////////////////////////////////////
// 
// $("ul").css("color","green")                     /* Para modificarle el CSS, ("property","value") */
// 
// ////////////////////////////////////
// 
// let style={
//     color: "purple",
//     background: "green",
//     border: "2px solid blue", 
// }
// 
// $("h1").css(style)                               /* Se le aplica el style guardado, sin comillas */
// 
// ////////////////////////////////////
// 
// $("li").css({                                    /* Tambien se puede crear objeto */
//     fontSize: "30px",                            /* Se utiliza camelCase */
//     border: "3px dashed red",
//     background: "blue",             
// })
// 
// ////////////////////////////////////
// 
//  $("div").first().css({                          /* con el .first() , se selecciona el primero  */
//  	color: "pink",
//  })
//  
//  $("#third").css({                               /* "#third " para seleccionar "ID" */
//  	border: "2px solid orange",
//  })
//  
//  $(".highlight").css({                            /* ".highlight" para seleccionar "class" */
//  	width: "200px",
//  })
//  
//  $("div").css({
//  	background: "purple",
//  })
//
// ////////////////////////////////////
//  
//  $("li").text("palante")                             /* con el .text , seleccionas el texto, ("con esto le das su nuevo valor") */
//  
//  $("div").last().fadeOut("slow")                     /* con el faceOut() , va desapareciento (el tiempo estandar es; 400 ) */
//  
//  $("li").html("<a href='http://cabotjaime.com/'>Aprietame</a>")      /* Para modificar el html, poner despues del selector .html ,  y ya con eso tira palante */   
                                                        
                                                        /* Habrá que leerse el api.jquery.com */

// ////////////////////////////////////

                                                        /* el "attr" modifica las propiedades del HTML, pudiendo cambiar el propio html, tambien. */
//  $("img").last().attr("src", "https://images.unsplash.com/photo-1575096644884-85c5fc58139a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80")
 

$("img").attr({
    width: "300px",
    height:"400px",
})

$("img").css({
    margin: "2% auto",
    border: "2px solid steelblue",
})

// ////////////////////////////////////


$("input").val("tirapayá")                 /* Con el "val()" ,  se le puede mostrar/modificar el valor del atributo*/

