let color = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)",
]

let colorElegido = color[3];
let cuadros = document.querySelectorAll(".square");
let challenge = document.getElementById("ColorDisplay");
ColorDisplay.textContent = colorElegido; 
let consejito = document.querySelector("#pista");

for(let i=0; i<cuadros.length; i++){
    //Colores iniciales cuadros
    cuadros[i].style.backgroundColor = color[i];

    //listeners para cuando son clickeados
    cuadros[i].addEventListener("click", function(){
        // Coger color elegido
        let clickeado = this.style.backgroundColor;
        
        // Compararlo con colorElegido
        if(clickeado === colorElegido){
            consejito.textContent = "Ou yeah!";

        }
        else{
            this.style.backgroundColor = "#232323";
            consejito.textContent = "Nope, try again";
        }
    });
}

// Only for the green dot in GitHub