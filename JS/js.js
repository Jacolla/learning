//------------------------------------------------
// ejercicio de preguntar al usuario cuatro mierdas y luego juntarlas en una frase, pero OJO, solo en la consola.
// 
// var nombre=prompt("Que pasa, como te llamas? ")
// var apellido=prompt ("y apellidos por favor ")
// var edad= prompt (" y ya para completarlo todo, que edad tienes? ")

// esto es lo que deja el mensaje en la consola "console.log"
// console.log ("Este usuario se llama " + nombre + ", dice que su apellido es " + apellido )
// console.log("y finalmente, su edad es de " + edad )



// -----------------------------------------------
//
// Esto es "una calculadora" ( multiplicas la edad por 365.25)
// es decir, solo multiplicas la edad por 365,25, no los dias que has vivido, solo cambiará si cambia el numero de entrada. 

// var edad = prompt ("Dime que edad tienes y te dire cuantos dias has vivido.")
// var year = edad * 365.25
// alert(edad + " years are, more or less, " + year + " days")
// console.log ("el tio ha vivido " + year + " dias" )


// -----------------------------------------------

// var x = 10;
// var y = "a"
// 
// y==="b"||x>=10    //--> true, "b" no es "a" pero (or( || )) x si es mayor o igual que 10, por lo tanto, true bitch



// -----------------------------------------------

var x = 3;
var y = 8;
!(x == "3" || x === y)/* false */  && !(y !=8 && x <=y)/* true */   

//  false, porque al ser el &&(and) tiene que tener los dos lados positivos (o negativos) y como es el caso, solo 1 de ellos es positivo,
//  el otro es negativo, es decir, a resultado total, FALSE



























// cosas que no son del curso. Puro jugueteo

// -----------------------------------------------

// esto es una funcion que se llama a si misma, se llama recursion.
// Recursion is a process ( a function, en este caso ) that calls itself
//
//
// function countdown(num){
// 	if (num <=0) {
// 		console.log("De puta madre!, no tengo ni idea que he hecho!")
// 		return;
// 	}
// 	console.log(num);
// 	num--;
// 	countdown(num);
//  }
// 
// countdown(4);
// 	
// 	countdown(3);
// 		
// 		countdown(2);
// 			
// 			countdown(1);
// 				
// 				 countdown(0);
 				 	


//-----------------------------------------------


// No fucking idea what this is
// function sumRange(num){ 
// 		if(num === 1) return 1;
// 		return num + sumRange(num-1);					
// }
// 
// sumRange(3)
// 



// <1ª parte>-----------------------------------------------

// probando como va eso de los if's y and's  

// var x = 3;
// var y = 8;
// var result = !(x == "3" || x === y) && !(y !=8 && x <=y)
// 	if(result == false)
//         prompt("a ver que tal..."
//           )
//         and(prompt == "vaya")
//         alert("mmmm vaya pppeaso crá")   
                                 /* no funciona,  va bien hasta el prompt, luego no tengo ni idea de usar el "and"  */

// <2ª parte>-----------------------                    

var x = 3;
var y = 8;
var result = !(x == "3" || x === y) && !(y !=8 && x <=y)
	if(result == false)
        prompt("a ver que tal...")
			if (prompt = "vaya") 
                    {alert("ere un crá")}         /* Esta si funciona, creo que era, esque eso del and aun no se como usarlo
                                                     voy a necesitar un poco mas de tiempo.  */

// <3ª parte>----------------------

                                                        /*pues despues de ir probando, funciona, PERO solo funciona 1 vez, es decir
                                                        no puedo volver a hacerlo si es en la misma hoja, tengo que cambiar de hoja y 
                                                        hacerlo funcionar en una nueva, imagino que se quedará el data de algo guardado
                                                        y no me permitira arrancar la funcion again, mmmecaguen!
                                                        
                                                        este es el error que me salta al intentar arrancarlo por 2ª vez
                                                        Uncaught TypeError: prompt is not a function at <anonymous>:5:9, creo que es el
                                                        prompt. 

                                                        fallo 2-> Escribas lo que escribas en el prompt, te salta el alert de todas formas.

                                                        */



// var x = 3;
// var y = 8;
// var result = !(x == "3" || x === y) && !(y !=8 && x <=y)
// 	if(result == false)
//         prompt("a ver que tal...")                
// 			if (prompt = "vaya") 
//                   {alert("ere un crá")                               /*  <------------- No está bien hecho, con o sin "if" sale todo.
// 					console.log("Toda la sacada de polla")}             /* Pero ahora, funciona cada vez, no necesitas pagina nueva para que SVGComponentTransferFunctionElement.   */  
                                                                            
