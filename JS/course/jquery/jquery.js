$    /* Para empezar con jQuery */

////////////////////////////////////

$("ul")     /* Para coger lo que se deseé */

////////////////////////////////////

$("ul").css("color","green")       /* Para modificarle el CSS, ("property","value") */

////////////////////////////////////

let style={
    color: "purple",
    background: "green",
    border: "2px solid blue", 
}

$("h1").css(style)                  /* Se le aplica el style guardado, sin comillas */

////////////////////////////////////

$("li").css({                       /* Tambien se puede crear objeto */
    fontSize: "30px",               /* Se utiliza cameCase */
    border: "3px dashed red",
    background: "blue",             /* RGBA tambien, pero no se por que cojones no me funcionaba */
})