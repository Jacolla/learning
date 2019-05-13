//------------------------------------------------
//
// ejercicio de preguntar al usuario cuatro mierdas y luego juntarlas en una frase, pero OJO, solo en la consola.
// 
// var nombre=prompt("Que pasa, como te llamas? ")
// var apellido=prompt ("y apellidos por favor ")
// var edad= prompt (" y ya para completarlo todo, que edad tienes? ")
//
// esto es lo que deja el mensaje en la consola "console.log"
// console.log ("Este usuario se llama " + nombre + ", dice que su apellido es " + apellido )
// console.log("y finalmente, su edad es de " + edad )



//-----------------------------------------------
//
// Esto es "una calculadora" ( multiplicas la edad por 365.25)
// es decir, solo multiplicas la edad por 365,25, no los dias que has vivido, solo cambiará si cambia el numero de entrada. 
//
// var edad = prompt ("Dime que edad tienes y te dire cuantos dias has vivido.")
// var year = edad * 365.25
// alert(edad + " years are, more or less, " + year + " days")
// console.log ("el tio ha vivido " + year + " dias" )
//
//
//
//-----------------------------------------------
//
// var x = 10;
// var y = "a"
// 
//  y==="b"||x>=10    /*--> true, "b" no es "a" pero (( || )or) x si es mayor o igual que 10, por lo tanto, TRUE bitch */
//
//
//
//-----------------------------------------------
//
// var x = 3;
// var y = 8;
// !(x == "3" || x === y)/* false */  && !(y !=8 && x <=y)/* true */   
//
//  false, porque al ser el &&(and) tiene que tener los dos lados positivos (o negativos) y como es el caso, solo 1 de ellos es positivo,
//  el otro es negativo, es decir, a resultado total, FALSE bitch
//
//
//
//-----------------------------------------------
//  Falsy values->
//          -false
//          -0
//          -""
//          -null
//          -undefined
//          -Nan
//
//  Todo lo demas... Truly bro
//  
//  var msj1 = " "                                        Espacio vacio, no equivale a nada... es False bitch
//  var msj2 = "que pasó"                                 No es un False value... por lo tanto, true bro
//  var ndah = "false"                                    Es un mensaje normal, con la triquiñuela del False dentro del mensaje... True bro then
//              
//  !(( msj1 || msj2) && ndah)                            Farzo por er ! der prinsipio zupare         
//
//
//
//-----------------------------------------------
//
//  Vamos con los if's, else if y los else
//
// var edad = prompt("Que edad tienes?")
//   
//  if (edad < 18){
//        alert("tira pa tu casa, squeroso!")                                         Este actua primero
//        console.log("Nope, no puedes entrar miarma");                               En caso de que no cumpla el primer filtro
//    }
//   
//    else if (edad <21){     
//        alert("Y te estoy vigilando...")                                            Actua en segundo paso
//        console.log("Hmmmm, puedes entrar... pero... no puedes tocar ná");          Con su respectiva respuesta
//    }
//    
//    else if (edad == 21 ){                                                          Si es exactamente 21
//         alert("Nga coge la botella y tiratela por encima")
//         console.log("Felcidades, es tu cumpleaños!!")                              Respuesta adecuada
//    }
//   
//    else if (edad % 2 !== 0) {                                                      No entiendo esto del todo, tengo que ojearlo, "% not evenly divisible by two"
//         alert("Nga coge la botella y tiratela por encima")
//         console.log("Your age is odd!");                                           Respuesta adecuada   
//    }
// 
//    else if(edad % Math.sqrt(edad) === 0) {                                         Esto del perfect square, no lo he pillado del todo ese "% Math.sqrt"  
//         alert("Nga coge la botella y tiratela por encima")
//         console.log("Ou yeah, tienes Perfec Square lad!");                         Respuesta adecuada        
//    }
//   
//   else{                                                                            Todo lo demas
//         alert("Nga coge la botella y tiratela por encima")
//         console.log("Ente pacá, tu puedes entrar y hacer lo que quieras");         Respuesta adecuada
//   }
//
//
//
//-----------------------------------------------
//
// Vamos a hacer filtros a las respuestas del prompt, "comprobar la respuesta".

//  function preguntas(){                                                             /*   Y con esta maravillosa "funcion", podemos unir el boton con todo el 
//                                                                                    /*   rollo este, 'function + id'. */
//    var numeroSecreto = 33;
//    
//    var stringGuess = prompt("Adivina el numero")
//    var guess =Number(stringGuess);                                                 /*   prompt para hacer la pregunta */
//        if(guess=== numeroSecreto){                                                 /*   En caso de que acierte el numero secreto */  
//           alert("Ou yeahhhh asertahte");                                          /*   Respuesta para el caso de que se acierte el numero secreto */ 
//        }
//
//        else if(guess > numeroSecreto){                                             /*   En caso de que haya dicho un numero mas BAJO */
//            alert("Te has pasado de largo! Es mas bajo!");                          /*   Respuesta correspondiente */
//        }   
//
//        else if (guess < numeroSecreto)                                             /*   En caso de que haya dicho un numero mas ALTO */  
//            alert("Te has pasado de corto, es mas alto!");                          /*   Respuesta correspondiente */
//        
//        else{
//            alert("Sta to mal saco mierda");
//        }
//    }
//
//
//
//-----------------------------------------------
//
//  Vamos ahora con los "loops"... no se tu pero eso suena bien... jeje
//
//  var count = 1;
//        while (count <=3){
//	        console.log("No volvere a llegar tarde " + count);
//	        count++;
//  }   
//
//------------------------
//  
// var str = "hello";
// var count = 0;
//
//    while(count<str.length){    
//           console.log(str[count]); 
//           count++;  
//      }
//    
//------------------------
//
//
// var count = 0;
// var count = 0;
// while(count<10){
//     console.log(count;}
// }

//
//
//
//
























//
//
//
//
// COSAS QUE NO SON DEL CURSO. Puro jugueteo

// ----------------------------------------------

// esto es una funcion que se llama a si misma, se llama recursion.
// Recursion is a process ( a function, en este caso ) that calls itself, el pez que se muerde la cola... hasta colapsar.
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
//
//
// No fucking idea what this is
// function sumRange(num){ 
// 		if(num === 1) return 1;
// 		return num + sumRange(num-1);					
// }
// 
// sumRange(3)
//
//-----------------------------------------------                                                                                                                                                                                                                                                                                                                       