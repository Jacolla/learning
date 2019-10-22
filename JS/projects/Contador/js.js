/* <--- Selecting elements ---> */
let boton1 = document.getElementById("p1");
let boton2 = document.getElementById("p2");
let resetButton= document.getElementById("Reset");

let p1Display= document.getElementById("p1Display");
let p2Display= document.getElementById("p2Display");

let winningScoreDisplay= document.getElementById("rondas")

let p1Score= 0;
let p2Score= 0;

let numInput=document.querySelector("input")

let gameOver = false;
let winScore = 5;

/*<--- Function counter P1 --->*/
boton1.addEventListener("click", function(){
    if (!gameOver){
    p1Score ++;
    if(p1Score === winScore){
        p1Display.classList.add("winner")
        gameOver=true;
        console.log("parte 1--1")
    }
    p1Display.textContent = p1Score;
}
    if(gameOver == true){
        p2Display.classList.add("looser")
        gameOver=true
        console.log("parte 2--1")
    }
})

/*<--- Function counter P2 --->*/
boton2.addEventListener("click", function(){
    if (!gameOver){
    p2Score ++;
    if(p2Score === winScore){
        p2Display.classList.add("winner")
        gameOver=true;
        console.log("parte 1--2")
    }
    p2Display.textContent = p2Score;
}
    if(gameOver == true){
        p1Display.classList.add("looser")
        gameOver=true
        console.log("parte 2--2")
    }
})

/*<--- Reset button --->*/
resetButton.addEventListener("click", function(){
    reset();
});

/* <--- Function reset ---> */
function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner")
    p1Display.classList.remove("looser")
    p2Display.classList.remove("winner")
    p2Display.classList.remove("looser")
    gameOver = false;
}

/* <--- Function when add more rounds ---> */
numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value
    winScore = Number(this.value)
    reset();
})