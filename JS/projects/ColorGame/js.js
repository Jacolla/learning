let color = generateRandomColors(9);


// <-- Selecctions -->
let elegidoColor = colorElegido();                  /* Si no pongo los '()' no llama funcion, ¡atontao! */
let cuadros = document.querySelectorAll(".square");
let challenge = document.getElementById("ColorDisplay");
ColorDisplay.textContent = elegidoColor; 
let consejito = document.querySelector("#pista");
let cabesero = document.querySelector("#TopText")

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
            cabesero.style.backgroundColor = clickeado;
        }
        
        else{
            this.style.backgroundColor = "#232323";
            consejito.textContent = "Nope, try again";
        }
    });
}


//      <--  Functions  -->
function cambioColor(color){
    //loop throught all squares

    for(i=0; i<cuadros.length; i++){            /* Antes tenia seleccionado para que cambien  */
    //Change each color to macht given color    /* los "color" en vez de los cuadros, ya esta arreglao */
        cuadros[i].style.background = color;
    }

}

function generateRandomColors(num){
    // make an array
    let arr = []
    // add num random color to arr
    
    for(let i=0; i<num; i++){
        arr.push(RandomColor())
        //get random color and push into arr
    }

    // return that array
    return arr;
}


        /* Seleccion random color */
function colorElegido(){
    let random = Math.floor(Math.random() * color.length)           
    return color[random];
}

function RandomColor(){
    // pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    // pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    // pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
     return "rgb(" + r + ", " + g + ", " + b + ")";
}