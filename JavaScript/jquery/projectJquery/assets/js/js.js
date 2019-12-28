
        /* Los "li's" */
$("li").mouseenter(function(){
    $(this).css({
        color: "pink",    
        background: "blue",
    });
})

$("li").mouseleave(function(){
    $(this).css({
        color: "black",    
        background: "steelblue",
    });
})
    /*------------------------*/


        /* Los "buttons" */
$("button").mouseenter(function(){
    $(this).css({
        fontSize: "2em",    
    });

})

$("button").mouseleave(function(){
    $(this).css({
        fontSize: "13px",               /* Tamaño por defecto, en mi PC */
    });
})



$(this).click(function(){
    $("li").css({
        background: "purple",
    });
})
    /*------------------------*/
