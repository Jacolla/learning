///////////////////////alert("                                Bienvenido a mis tierras, mortal...")

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
//
//
//
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
//  Comparativos
//
//
//
//
//
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
//  var msj1 = " "                                                                                  Espacio vacio, no equivale a nada... es False bitch
//  var msj2 = "que pasó"                                                                           No es un False value... por lo tanto, true bro
//  var ndah = "false"                                                                              Es un mensaje normal, con la triquiñuela del False dentro del mensaje... True bro then
//                                                          
//  !(( msj1 || msj2) && ndah)                                                                      Farzo por er ! der prinsipio zupare         
//
//
//
//-----------------------------------------------
//
//  Vamos con los if, else if y los else
//
//     var edad = prompt("Que edad tienes?")
//                      
//  if (edad < 18){               
//        alert("tira pa tu casa, squeroso!")                                                       Este actua primero
//        console.log("Nope, no puedes entrar miarma");                                             En caso de que no cumpla el primer filtro
//    }                          
//                               
//    else if (edad <21){                                                                           Entra en segundo paso
//        alert("Te estoy vigilando...")                                                            Respuesta que recive el usuario
//        console.log("Hmmmm, puedes entrar... pero... no puede tocar nada");                       Respuesta en la consola
//    }                           
//
//                                
//                                
//    else if (edad == 21 ){                                                                        Actua en tercer paso
//         alert("Por los pelos eh, venga entra, pide algo de beber.")                              Respuesta que recive el usuario
//         console.log("Ponedle un ojo encima por si la lia")                                       Respuesta en la consola
//    }                           
//    
//    else if (edad >21){                                                                           Actua en cuarto paso
//        alert("Ponte comodo y pide algo de beber.")                                               Respuesta que recive usuario    
//        console.log("Hmmmm, puedes entrar... pero... no puedes tocar ná");                        Respuesta en la consola
//    }   
//
//                                
//                                
//    else if (edad % 2 !== 0) {                                                                    No entiendo esto del todo, tengo que ojearlo, "% not evenly divisible by two"
//         alert("Tu edad es divisible por 2")                                                      Respuesta que recive usuario
//         console.log("Your age is odd!");                                                         Respuesta en la consola   
//    }                           
//                            
//    else if(edad % Math.sqrt(edad) === 0) {                                                       Esto del perfect square, no lo he pillado del todo ese "% Math.sqrt"  
//         alert("Nga coge la botella y tiratela por encima")                             
//         console.log("Ou yeah, tienes Perfec Square lad!");                                                
//    }                           
//                                
//   else{                                                                                          Todo lo demas
//         alert("Escribe un numero, ejemplo: 1,2,3,4,5,6,7.")                                                                              
//         console.log("Ente pacá, tu puedes entrar y hacer lo que quieras");                         
//   }             
//             
//
//
//-----------------------------------------------
//
// Vamos a hacer filtros a las respuestas del prompt, "comprobar la respuesta".
//
//  function preguntas(){                                                                            /*   Y con esta maravillosa "funcion", podemos unir el boton con todo el 
//                                                                                                   /*   rollo este, 'function + id'. */
//    var numeroSecreto = 33;
//    
//    var stringGuess = prompt("Adivina el numero")
//    var guess =Number(stringGuess);                                                                /*   prompt para hacer la pregunta */
//        if(guess=== numeroSecreto){                                                                /*   En caso de que acierte el numero secreto */  
//           alert("Ou yeahhhh asertahte");                                                          /*   Respuesta para el caso de que se acierte el numero secreto */ 
//           console.log("Ou yeeah, acertaste!, no hace falta que busques más. ")                                          
//        }
//
//        else if (guess == false){
//            alert("Escribe algun numero squeroso!")
//        }
//
//        else if(guess > numeroSecreto){                                                            /*   En caso de que haya dicho un numero mas BAJO */
//            alert("Te has pasado de largo! Es mas bajo!");                                         /*   Respuesta correspondiente */
//            console.log("Respuesta no correcta, tiene que ser un numero mas bajo: " + stringGuess)                                                                       
//        }   
//
//        else if (guess < numeroSecreto){                                                           /*   En caso de que haya dicho un numero mas ALTO */  
//            alert("Te has pasado de corto, es mas alto!");
//            console.log("Respuesta no correcta, debe ser un numero mas alto que: " + stringGuess)  /*   Respuesta correspondiente */
//        }
//
//        else{
//            alert("Esta todo mal, tiene que ser un numero, solo un numero!");
//            console.log("Ha introducido algo que NO es un numero.")
//            console.log ("Esta ha sido su respuesta: " + stringGuess )
//        }
//    }
//
//
//
//-----------------------------------------------
//
// /*  Vamos ahora con los "loops"...  */
//
//  var count = 1;
//        while (count <=3){
//	        console.log("No volvere a llegar tarde " + count);
//	        count++;
//  }   
//
//------------------------
//  /* Para que te cuente la palabra metida en el "str */ 
//
// var str = "hello";
// var count = 0;
//
//    while(count<str.length){                                                                       /* El while es lo que mueve el circuito, "el propulsor" */    
//           console.log(str[count]); 
//           count++;  
//      }
//    
//------------------------
//
//      /*Para sacar numeros (var identificada) entre
//      /* los numeros dados (los datos que queremos que busque)    
//      
//     var cuenta = -10;
//     while (cuenta<=20){
//         console.log(cuenta);
//         cuenta++;                                       /* con en "++", le va sumando */
//     }
//
//-----------------------------------------------

    /* Annoy-omatic (que te salta todo el rato) */

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

function moto(){
    alert("Que te crees? hasta que no la tengas no le des al tick")
}

function trabajo(){
    alert("Que te crees? hasta que no lo tenga no le des al tick")
}

function lenguaje(){
    alert("Que te crees? hasta que no los tengas no le des al tick")
}

function remoto(){
    alert("Que te crees? hasta que no lo tenga no le des al tick")
}

function ingles(){
    alert("Ou yeah baby, you did it")
}

 