// <-- Selecctions -->
let numCuadros = 9;
let color = generateRandomColors(numCuadros);
let elegidoColor = colorElegido();                  
let cuadros = document.querySelectorAll(".square");
let challenge = document.getElementById("ColorDisplay");
let consejito = document.querySelector("#pista");
let cabesero = document.querySelector("#TopText");
let resetButtom = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode")



ColorDisplay.textContent = elegidoColor; 

// <--------- Botonsitos ---------->
//  <----------------------- New Version ----------------------->     
//  for(i=0; i<modeButtons.length; i++){
//      modeButtons[i].addEventListener("click", function(){
//          modeButtons[0].classList.remove("selected");           
//          modeButtons[1].classList.remove("selected");            /* NO se esconden los cuadros 4 al 9 */
//          this.classList.add("selected");
//          this.textContent === "Easy" ? numCuadros = 3: numCuadros= 9;
//          reset();
//      });
//  }
//  
//  
//  function reset(){
//      color = generateRandomColors(numCuadros);
//  
//      // Nuevo color objetivo
//      elegidoColor = colorElegido();
//  
//      // Cambiar colorDisplay
//      ColorDisplay.textContent = elegidoColor;    
//      
//      // Cambiar colores cuadros
//      for(i=0; i<cuadros.length; i++){
//          if(colors[i]){
//              cuadros[i].style.display= "block";
//              cuadros[i].style.background = color[i];
//          }
//          else{
//              cuadros[i].style.display ="none";
//          }
//      }
//      SuperiorText.style.background = "steelblue";
//      consejito.textContent = "";
//      resetButtom.textContent = "Reset";
//  }








//  <----------------------- Old Version ----------------------->   
// <-- Easy Buttom -->
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add ("selected");
    hardBtn.classList.remove ("selected");
    numCuadros = 3;
    color = generateRandomColors(numCuadros);
    elegidoColor = colorElegido();    
    resetButtom.textContent = "Reset";
    SuperiorText.style.background = "steelblue";
    ColorDisplay.textContent = elegidoColor;
    consejito.textContent = "";


    for(let i=0; i<cuadros.length; i++){
        if (color[i]){
            cuadros[i].style.background = color[i];
        }
        else{
            cuadros[i].style.display = "none"
        }
    }
});

// <-- Hard Buttom -->
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add ("selected");
    easyBtn.classList.remove ("selected");
    numCuadros = 9;
    color = generateRandomColors(numCuadros);
    elegidoColor = colorElegido();
    resetButtom.textContent = "Reset";
    SuperiorText.style.background = "steelblue";
    ColorDisplay.textContent = elegidoColor;
    consejito.textContent = "";


    for(let i=0; i<cuadros.length; i++){
        if (color[i]){
            cuadros[i].style.background = color[i];
        }
            cuadros[i].style.display = "block"
    }
});
//  <----------------------- Old Version ----------------------->   


// <-- Reset Buttom -->
resetButtom.addEventListener("click", function(){
    // Generar nuevos colores
    color = generateRandomColors(numCuadros);

    // Nuevo color objetivo
    elegidoColor = colorElegido();

    // Cambiar colorDisplay
    ColorDisplay.textContent = elegidoColor;    
    
    // Cambiar colores cuadros
    for(i=0; i<cuadros.length; i++){
        cuadros[i].style.background = color[i];
    }
    SuperiorText.style.background = "steelblue";
    consejito.textContent = "";
    this.textContent = "Reset";
})



// <---------  Loops  --------->
for(let i=0; i<cuadros.length; i++){
    //Colores iniciales cuadros
    cuadros[i].style.backgroundColor = color[i];

    //listeners para cuando son clickeados
    cuadros[i].addEventListener("click", function(){
        // Coger color elegido
        let clickeado = this.style.backgroundColor;
        
        // Compararlo con colorElegido
        if(clickeado === elegidoColor){             
            consejito.textContent = "Ou yeah!";
            resetButtom.textContent = "Play again?";
            cambioColor(clickeado);
            SuperiorText.style.backgroundColor = clickeado;
        }
        
        else{
            this.style.backgroundColor = "#232323";
            consejito.textContent = "Hell no";
        }
    });
}


// <---------  Functions  --------->
function cambioColor(color){
    //loop throught all squares

    for(i=0; i<cuadros.length; i++){            
    //Change each color to macht given color    
        cuadros[i].style.background = color;
    }
}

function generateRandomColors(num){
    // make an array
    let arr = [];

    // add num random color to arr
    for(let i=0; i<num; i++){
        //get random color and push into arr
        arr.push(RandomColor());
    }

    // return that array
    return arr;
}


        /* Seleccion random color */
function colorElegido(){
    let random = Math.floor(Math.random() * color.length);           
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

function reset(){
    color = generateRandomColors(numCuadros);

    // Nuevo color objetivo
    elegidoColor = colorElegido();

    // Cambiar colorDisplay
    ColorDisplay.textContent = elegidoColor;    
    
    // Cambiar colores cuadros
    for(i=0; i<cuadros.length; i++){
        if(colors[i]){
            cuadros[i].style.display= "block";
            cuadros[i].style.background = color[i];
        }
        else{
            cuadros[i].style.display ="none";
        }
    }
    SuperiorText.style.background = "steelblue";
    consejito.textContent = "";
    resetButtom.textContent = "Reset";
}
