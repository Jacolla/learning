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



boton1.addEventListener("click", function(){
    if (!gameOver){
    p1Score ++;
    if(p1Score === winScore){
        p1Display.classList.add("winner")
        gameOver=true;
    }
    p1Display.textContent = p1Score;
}
})

boton2.addEventListener("click", function(){
    if (!gameOver){
    p2Score ++;
    if(p2Score === winScore){
        p2Display.classList.add("winner")
        gameOver=true;
    }
    p2Display.textContent = p2Score;
}
})

resetButton.addEventListener("click", function(){
    reset();
});

function reset(){
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove("winner")
    p2Display.classList.remove("winner")
    gameOver = false;
}


numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value
    winScore = Number(this.value)
    reset();
})