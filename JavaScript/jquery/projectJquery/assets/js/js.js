$("li").mouseenter(function(){
    $(this).css({
        color: "green",    
        background: "blue",
        height: "50px",
        width: "150px",
    });
})

$("li").mouseleave(function(){
    $(this).css({
        color: "black",    
        background: "steelblue",
        height: "4rem",
        width: "4rem",
    });
})


$("h2").hover(function(){ 
    $(this).css({
        color: "green",    
        background: "blue",
        height: "50px",
        width: "150px",
    });
 });
