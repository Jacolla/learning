//                               ///////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//                               \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|///////////////////////////////////
//                                                 <---//  Leer el api.jquery.com  \\--->
//                               ///////////////////////////////////|\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//                               \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\|///////////////////////////////////


// $    /* Para empezar con jQuery */
// 
////////////////////////////////////////////////////////////
// 
// $("ul")     /* Para coger lo que se desée */
// 
////////////////////////////////////////////////////////////
// 
// $("ul").css("color","green")                                             /* Para modificarle el CSS, ("property","value") */
//                                                                          /* Un argumento podria ser un "className" por ejemplo */
////////////////////////////////////////////////////////////
// 
// let style={
//     color: "purple",
//     background: "green",
//     border: "2px solid blue", 
// }
// 
// $("h1").css(style)                                                       /* Se le aplica el style guardado, sin comillas */
// 
////////////////////////////////////////////////////////////

// 
// $("li").css({                                                            /* Tambien se puede crear objeto */
//     fontSize: "30px",                                                    /* Se utiliza camelCase */
//     border: "3px dashed red",
//     background: "blue",             
// })
// 
////////////////////////////////////////////////////////////

//  $("div").first().css({                                                  /* con el .first() , se selecciona el primero  */
//  	color: "pink",
//  })
//  
//  $("#third").css({                                                       /* "#third " para seleccionar "ID" */
//  	border: "2px solid orange",
//  })
//  
//  $(".highlight").css({                                                   /* ".highlight" para seleccionar "class" */
//  	width: "200px",
//  })
//  
//  $("div").css({
//  	background: "purple",
//  })
//
////////////////////////////////////////////////////////////

//  $("li").text("palante")                                                 /* con el .text , seleccionas el texto, ("con esto le das su nuevo valor") */
//  
//  $("div").last().fadeOut("slow")                                         /* con el faceOut() , va desapareciento (el tiempo estandar es; 400 ) */
//  
//  $("li").html("<a href='http://cabotjaime.com/'>Aprietame</a>")          /* Para modificar el html, poner despues del selector .html ,  y ya con eso tira palante */   
                                                                        
                                                                            /* el "attr" modifica las propiedades del HTML, pudiendo cambiar el propio html, tambien. */
//  $("img").last().attr("src", "https://images.unsplash.com/photo-1575096644884-85c5fc58139a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=706&q=80")
 
////////////////////////////////////////////////////////////

//  $("ul").css({
//      width: "50px",
//      height:"60px",
//      margin: "2% ",
//      border: "2px solid steelblue",
//  })

//$("input").val("tirapayá")                                                /* Con el "val()" ,  se le puede mostrar/modificar el valor del atributo*/

//////////////////////////////////////////////////////////////  

//  Otras herramientas útiles para manipular con jQuery, hay mil mas, mirar la pag oficial de jQuery.
//  
//  val()                           
//  attr()                          
//  text()                          
//  html()                          
//  addClass()                      
//  removeClass()                   
//  toggleClass()                                                           /* Especie de interruptor */   

////////////////////////////////////////////////////////////

//  /* Para hacer funciones en jQuery */
//  ej:
//  $("button").click(function(){
//          /* y pues a darle */
//          $(this).css({
//              color: "red",
//              background: "pink",
//          });
//  
//          alert("CUIDAO!")
//          let text= $(this).text();
//          console.log("Ha apretado: " + text)
//  });
    

////////////////////////////////////////////////////////////

//  $("#texto").keypress(function(event){                                   /* Con el objeto event, capturamos la input en la variable */
//  	if(event.which === 13){                                             /* Para cuando se aprieta la tecla 13 ( enter en este caso ) */
//  		alert("apretaste ENTER!")                                       /* Funcion que salta cuando se ha apretado la tecla 13 */
//  	}
//  });

$("li").on("click", function(){                                             /* El .on , funciona tipo "add", no ejecuta la funcion hasta */
	$(this).css({                                                           /* que se lo clickea, en este caso  */
		color: "green",                                                     /* con el this , seleccionamos el clickeado  */
		background: "blue",
		height: "50px",
		width: "150px",
    });
})

$("button").on("mouseenter", function(){                                    /* mouseenter es para cuando el raton pasa por encima del button, en este caso */
    $(this).css("font-weight","bold");
});

$("button").on("mouseleave", function(){                                    /* mouseleave, para cuando ya no está encima del button, en este caso */
    $(this).css("font-weight","normal");                                    /* rollo hover de css */
});


//  $("button").on("click", function(){ 
//  	$(this).css({               
//      });
//      alert("Button preesed")
//  })


// Why use on()?
// More or less both will have the job done, but there is a difference
// click(), only adds listeners for existing elements 
// on(), will add listener for all potential future elements.

////////////////////////////////////////////////////////////


//  $("button").click(function(){
//      $(this).fadeOut(400 /* "slow" */, function () {
//          $(this).remove();                                               /* Si no se "remove" , se quedan ahi invisibles, pero siguen estando en la hoja */
//      })
//  })
//  
//  $("button").click(function(){
//      $("#desordenada").fadeIn(400 /* "slow" */, function () {
//      })
//  })


//  $("button").click(function(){
//      $("#desordenada").fadeToggle(400 /* "slow" */, function () {        /* fadeToggle = tipo interruptor */
//      })  
//  })

//  $("button").click(function(){
//      $("#desordenada").slideToggle(400 /* "slow" */, function () {             /* Tambien funciona con el toggle */
//          /* accion deseada */
//      })  
//  })
//  











////////////////////////////////////////////////////////////

/* </-- Zona jugueteo --\> */

$("button").click(function(){
    $("#desordenada").slideToggle(400 /* "slow" */, function () {
        $("ul").css({
            background: "blue",
            color: "pink",
        })

    })  
})