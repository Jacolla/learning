let color = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
    "rgb(100, 0, 255)",
    "rgb(255, 100, 255)",
    "rgb(255, 0, 155)",
]

// <-- Selecctions -->
let elegidoColor = colorElegido();     /* Si no pongo los '()' no llama funcion */
let cuadros = document.querySelectorAll(".square");
let challenge = document.getElementById("ColorDisplay");
ColorDisplay.textContent = elegidoColor; 
let consejito = document.querySelector("#pista");


// <--  Loops  -->
for(let i=0; i<cuadros.length; i++){
    //Colores iniciales cuadros
    cuadros[i].style.backgroundColor = color[i];

    //listeners para cuando son clickeados
    cuadros[i].addEventListener("click", function(){
        // Coger color elegido
        let clickeado = this.style.backgroundColor;
        
        // Compararlo con colorElegido
        if(clickeado === elegidoColor){             /* olvidé cambiar con cual comparaba, jjjoder */
            consejito.textContent = "Ou yeah!";
            cambioColor(clickeado);
        }
        
        else{
            this.style.backgroundColor = "#232323";
            consejito.textContent = "Nope, try again";
        }
    });
}


// <--  Functions  -->
function cambioColor(color){
    //loop throught all squares

    for(i=0; i<cuadros.length; i++){            /* Antes tenia seleccionado para que cambien  */
    //Change each color to macht given color    /* los "color" en vez de los cuadros, ya esta arreglao */
        cuadros[i].style.background = color;
    }

}

        /* Seleccion random color */
function colorElegido(){
    let random = Math.floor(Math.random() * color.length)           
    return color[random];
}