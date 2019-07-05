
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
//  var msj1 = " "                                                                                      /* Espacio vacio, no equivale a nada... es False bitch */
//  var msj2 = "que pasó"                                                                               /* No es un False value... por lo tanto, true bro */
//  var ndah = "false"                                                                                  /* Es un mensaje normal, con la triquiñuela del False dentro del mensaje... True bro then */
//                                                          
//  !(( msj1 || msj2) && ndah)                                                                          /* Farzo por er ! der prinsipio zupare */         
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
//        alert("tira pa tu casa, squeroso!")                                                         /*      Este actua primero  */
//        console.log("Nope, no puedes entrar miarma");                                               /*      En caso de que no cumpla el primer filtro  */
//    }                          
//                               
//    else if (edad <21){                                                                             /*      Entra en segundo paso  */
//        alert("Te estoy vigilando...")                                                              /*      Respuesta que recive el usuario  */
//        console.log("Hmmmm, puedes entrar... pero... no puede tocar nada");                         /*      Respuesta en la consola  */
//    }                           
//
//                                
//                                
//    else if (edad == 21 ){                                                                          /*      Actua en tercer paso  */
//         alert("Por los pelos eh, venga entra, pide algo de beber.")                                /*      Respuesta que recive el usuario  */
//         console.log("Ponedle un ojo encima por si la lia")                                         /*      Respuesta en la consola  */
//    }                           
//    
//    else if (edad >21){                                                                             /*      Actua en cuarto paso  */
//        alert("Ponte comodo y pide algo de beber.")                                                 /*      Respuesta que recive usuario  */    
//        console.log("Hmmmm, puedes entrar... pero... no puedes tocar ná");                          /*      Respuesta en la consola  */
//    }   
//                                                            
////    else if (edad % 2 !== 0) {                                                                    /*      No entiendo esto del todo, tengo que ojearlo, "% not evenly divisible by two"  */
////         alert("Tu edad es divisible por 2")                                                      /*      Respuesta que recive usuario  */
////         console.log("Your age is odd!");                                                         /*      Respuesta en la consola  */   
////    }                           
//                            
//    else if(edad % Math.sqrt(edad) === 0) {                                                         /*      Esto del perfect square, no lo he pillado del todo ese "% Math.sqrt"  */  
//         alert("Nga coge la botella y tiratela por encima")                             
//         console.log("Ou yeah, tienes Perfec Square lad!");                                              
//    }                           
//                                
//   else{                                                                                            /*      Todo lo demas  */
//         alert("Escribe un numero, ejemplo: 1,2,3,4,5,6,7.")                                                                              
//         console.log("Ente pacá, tu puedes entrar y hacer lo que quieras");
//                                 
//   }             
//             
//
//
//-----------------------------------------------
//
// Vamos a hacer filtros a las respuestas del prompt, "comprobar la respuesta".
//
// function preguntas(){                                                                              /*   Y con esta maravillosa "funcion", podemos unir el boton con todo el 
//                                                                                                    /*   rollo este, 'function + id'. */
//   var numeroSecreto = 33;
//   
//   var stringGuess = prompt("Adivina el numero")
//   var guess =Number(stringGuess);                                                                  /*   prompt para hacer la pregunta */
//       if(guess=== numeroSecreto){                                                                  /*   En caso de que acierte el numero secreto */  
//          alert("Ou yeahhhh asertahte");                                                            /*   Respuesta para el caso de que se acierte el numero secreto */ 
//          console.log("Ou yeeah, acertaste!, no hace falta que busques más. ")                                          
//       }
//
//       else if (guess == false){
//           alert("Escribe algun numero squeroso!")
//       }
//
//       else if(guess > numeroSecreto){                                                              /*   En caso de que haya dicho un numero mas BAJO */
//           alert("Te has pasado de largo! Es mas bajo!");                                           /*   Respuesta correspondiente */
//           console.log("Respuesta no correcta, tiene que ser un numero mas bajo: " + stringGuess)                                                                       
//       }   
//
//       else if (guess < numeroSecreto){                                                             /*   En caso de que haya dicho un numero mas ALTO */  
//           alert("Te has pasado de corto, es mas alto!");
//           console.log("Respuesta no correcta, debe ser un numero mas alto que: " + stringGuess)    /*   Respuesta correspondiente */
//       }
//
//       else{
//           alert("Esta todo mal, tiene que ser un numero, solo un numero!");
//           console.log("Ha introducido algo que NO es un numero.")
//           console.log ("Esta ha sido su respuesta: " + stringGuess )
//       }
//   }
//
//
//
//-----------------------------------------------
//
// 
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
//    while(count<str.length){                                                                        /* El while es lo que mueve el circuito, "el propulsor" */    
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
//         cuenta++;                                                                                  /* con en "++", le va sumando */
//     }
//



//-----------------------------------------------

//   /* Annoy-omatic  (que te salta todo el rato, utilizando el "while") */


//  var pregunta =("Ha salido bien ya?")
//  
//      while(pregunta !== "si"  && pregunta !== "vaya"){                                             /* El while crea el bucle hasta que obtenga la respuesta deseada, si no es "si" o "vaya" */
//  
//          if(pregunta == "no"){                                                                     /* Si la respuesta es "NO" */ 
//  
//              alert("tio cabron, echale ganas");                                                    /* Mensajito para animar a la respuesta NO deseada */
//          }
//      
//          var pregunta = prompt("Hemos llegado ya?");                                               /* Se reactiva la pregunta */
//      }
//  alert("Bingoo!");                                                                                 /* Cuando se cierra el bucle */
// //                                VERSION 2 
//  var pregunta = prompt("Hemos llegado?")
//     
//      while(pregunta.indexOf("si") ===-1){                                                          /* Con esto, aceptas que la respuesta cuando incluye un SI */
//                                                                                                    /* Aunque la respusta sea un, Sisumeo, si dentro del texto hay un SI, se da por valido */
//          if(pregunta == "no"){
//              alert("tioo, venga yaaa!..")
//          }
//          else if(pregunta !=="si"){                                                                /* Si la respuesta NO es si, que salte el alert */
//              
//              alert("Como sigas asi, doy la vuelta y no hay playa")
//          }
//          var pregunta = prompt("Hemos llegado ya?");                                               /* pregunta dentro del bucle */
//      }
//  alert("Bingoo!");                                    




//-----------------------------------------------
     
//   Otro tipo de bucle es el "for", basicamente es lo mismo que el "while", pero mas sencillo
//   y directo.
    
// for (var cuenta = 0; cuenta < 10; cuenta++){
//     console.log("Esta es la linea numero " + cuenta)
// }

//---

//  var str= "Pontenza";
// 
//  for(var i = 0 ; i < str.length; i++){
//     console.log(str[i])
//  }

// ---

// var variable = "Ohsotloa"
// for(var i= 1; i<variable.length; i+=2){
//     console.log(variable[i])
// }



//----------------------- Exercise -----------------------

//  Print all number between -10 and 19
//  Print all even number between 10 and 40
//  Print all odd number between 300 and 333
//  Print all number divisible by 5 and 3 between 5 and 50


// /* Para los de entre los -10 y 20*/ 
// console.log("Para los de entre los -10 y 20 ")
// for(var cuenta = -10; cuenta < 20; cuenta++)
//     {console.log("esta es la linea " + cuenta) 
//     }
//   
// /* Para los INCLUIDOS 10 y 40 */
// console.log("Para los INCLUIDOS 10 y 40")
// for(var cuenta = 10; cuenta <= 40; cuenta++)
//     if( cuenta % 2 ===0){
//         console.log("estos son los pares " + cuenta) 
//     
//     } 
//   
// /* Para los odd(impares) numeros entre 300 y 333 */
// console.log("Para los odd numeros entre 300 y 333")
// for(var cuenta = 300; cuenta < 334; cuenta++)
//   if(cuenta % 2 !== 0)
//     {console.log("estos son los impares " +cuenta)
//     }
// 
//   
// /* Para los divisibles entre 5 y 3, entre 5 y 50 */
// console.log("Divisibles entre 3 y 5")
// for(var cuenta = 5; cuenta <= 50; cuenta++)
//     if(cuenta % 5 === 0 && cuenta % 3 === 0){
//     console.log("estos son los divisibles entre 3 y 5: "+ cuenta);
// }



//-----------------------------------------------

//                          /* ------ FUNCTIONS ------ */
//  
//  function jaime(){
//      console.log("probando las function");
//  }
//  
//  jaime();                                                                                          /* Importante llamar a la funcion con los "()", sinó, no llamas a la funcion en crudo, sin ejecutar */
//  jaime();                                                                                          /* con los "()", llamas a ejecutar la funcion */        
//  jaime();
//---------------
// 
// function saySomething(algo){
//     console.log("Que pasa " + algo + "?");
// }
// 
// saySomething("Jaime");
//
//

// //---------------
// 
// function notaFinal(nota1, nota2, nota3){
//     console.log("Estas con un " + nota3 + ", disfruta");
//     console.log("Bueno... lo importante es participar, tu nota es... un " + nota2)
//     console.log(nota1 + "... no se que esperabas")
// }
// notaFinal("8.7", "4.89", "2");



//-----------------------------------------------

// function multiplica(x) {
//     console.log("El resultado es: " + x);
//     return x * 2;
// }
// 



//-----------------------------------------------
        /* Exercise's */



  /* Para sacar los pares/impartes */

//  function isEven (x){
//      if(x %2 === 0 ){                                       
//          return true;
//                    }
//      else{
//          return false;
//          }
//      }
//  
//  
//  //<-- Short Ver -->
//  function isEven(x){
//      return x & 2 == 0;
//  }
//
//  //--------------- 
//  
//  
//  
//      /* Para hacer que el numero se multiplique por si mismo hasta llegar a 1 */
//      /* Es decir, si entra el numero 5, seria 5x4x3x2x1 */
//      
//      function factorial(x){
//      if (x==0){
//          return 1;
//      }
//      return x * factorial(x-1);
//  }
//
//  //---------------
//  
//  
//  
//      /* Para reemplazar 'replace'  */
//  
//  function prueba(x){
//  	var nuevaX = x.replace(/es grande/g, "no es tan grande");                                     /* / <-- dentro va lo que quieres corregir  /i ' la 'g' es de global ', luego lo que va a reemplazarlo */
//  
//  return nuevaX
//  }     
//    



//-----------------------------------------------

//                                      <--- JS Scope --->
// /*  <--- JS Scope, contexto que algun codigo esta ejecutando, en una funcion.  
//       Si defines algo dentro de una funcion, no puedes llamarla desde fuera de la funcion,
//       pero, si la defines fuera de la funcion, luego puedes llamarla desde dentro la funcion
//  */
//  var pruebaUno = 33
//  
//  
//  function pruebaDos(){
//          console.log(pruebaUno);                                                                   /* Cuando creas una variable dentro de una funcion, esa variable solo existe dentro de la funcion */ 
//  }                                                                     
//  
//  function pruebaTres(){                          
//          pruebaUno=100;                                                                            /* Cuando le cambias el valor a la variable, se altera el valor de la variable DENTRO de la funcion, la de fuera es otra variable */
//          return pruebaTres;                                        
//  }
//


//-----------------------------------------------

// Pass function to another function ( que una funcion llame a otra funcion )


// function pruebaUno(){
//         console.log("Cual es esta prueba? ");
//         console.log("esta es la prueba uno");
// }                              
// 
// setInterval(pruebaUno,2000)                                                                        /* Llama a la funcion 'pruebaUno' y la saca cada 2000 milisegundos */



// setInterval(function (){
//     console.log("Preparando intervalo con funcion creada dentro");
//     console.log("No?");
//     }, 2000);



//-----------------------------------------------
            /* Arrays */

//      son los []


//  var motos = ["Jonda", "Yahama","Kasita","Triumph","Susuki"]
//  motos[0] = "Honda";          /* llamando a la variable y seleccionando el que deseamos actualizar */
//  motos[1] = "Yamaha";
//  motos[2] = "Kawasaki";
//  motos[4] = "Suzuki";
//                                          /* Para añadir */
//  motos[5] = "Ducati"
//  
//  moto[3]  /* Estas son las empepinás */
//  
//  //-----------------
//              
//                  /* push/pop arrays  */                                                            /* Para añadir/quitar a final de array */
//  
//  var colores = ["Azul","Rojo","Verde"]
//  colores.push("Morado")                                                                            /* Lo empuja(push) al final de la variable, tambien devuelve la cantidad de arrays que hay dentro  */
//  
//  colores.pop()                                                                                     /* Borra lo que esta al final del array y devuelve elemento borrado */
//  
//  //-----------------
//  
//              /* Shift/Unshift */                                                                   /* Para añadir/quitar a principio de array */
//  
//  var colorines = ["Azul","Rojo","Verde"]
//  colorines.unshift("Cian")                                                                         /* Con el UNSHIFT se le añade a primero de array */
//  
//  colorines.shift()                                                                                 /* Con el SHIFT se le quita a primero de array */



//-----------------  

            /* IndexOf */                                                                             /* Para buscar dentro del array */

// var calzoncillos =["los rojos","Los de aviones","Los de la suerte","Los clasicos"]
// calzoncillos.indexOf("Los clasicos")                                                               /* Le dices cual quieres encontrar  */
// calzoncillos.indexOf("Los de follar")                                                              /* devuelve -1, porque no existen... */
 


//-----------------

//              /* Slice */                                                                           /* Para copiar arrays o partes de ella */
//  
//  var frutita = ["Banana","Mansanita","Manguito","Melocotonsito"]
//  var platofruta = frutita.slice(2,4)                                                               /* Desde donde empieza el corte y donde lo termina sin incluir el ultimo */
//  platofruta



//-----------------------------------------------

        /* Exercise's */

// var frutita = [
//     ["Banana","Mansanita","Manguito","Melocotonsito"],
//     ["platanito","perita","ceresita","melonsito"],
//     ["paraguayito","tomatito","sandiita","piñita"]
// ]
// 
// frutita[1][1]
// /* perita */



//-----------------------------------------------

//   window.setTimeout(function() {  }, 250);
//       //  para darle 500 milisegundos a que se carge el html antes que el js, y asi no tener el prompt sin nada detras



var variable1 =["Deberia de... "]

var variable2 = prompt("Que es lo que deberias hacer? ");
    while(variable2 !=="salir"){
        if(variable2 =="lista"){
            console.log(variable1)
        }
        else if(variable2 == "nuevo"){
            var variable3 = prompt ("Para añadir a la lista")
            variable1.push(variable3)
        }   
    variable2 = prompt("Seguro que es eso?")
    }
console.log("Ale, DD formateado y todo ya listo para volver a trabajá squeroso!")

              /* |  */
              /* |  */
/* Version Colt  V  */

// var todos = ["Estudiar"];                                       /* Variable 1 */
// 
// var input = prompt("Que te gustaria hacer?");                   /* Variable 2 */
//             
// while (input !== "quit"){                                       /* bucle, si la respuesta NO es "quiet" */
//     if(input == "list"){                                        /* condicional, si es "lista" */
//         console.log(todos)                                      /* accion, imprime Variable 1 */
//     }           
//             
// else if(input == "new"){                                        /* condicional 2, sí escribe "new"... */
//     var newTodo = prompt ("Enter new todo")                     /* crea nueva Variable 3 con prompt  */
//     todos.push(newTodo);                                        /* empuja la respuesta de Variable 3 a Variable 1  */
// }           
//             
// input = prompt ("Que te gustaria hacer? 2.0")                   /* pregunta para cerrar el bucle */
// }
// 
// console.log("okay, you are leaving us alone... it's okay")      /* Cuando escriba "quit" */













// COSAS QUE NO SON DEL CURSO. Puro jugueteo

// ----------------------------------------------

// esto es una funcion que se llama a si misma, se llama recursion.
// Recursion is a process ( a function, en este caso ) that calls itself, el pez que se muerde la cola... hasta colapsar.
// Un torbellino!!
//
//  function countdown(num){
//  	if (num <=-1) {
//  		console.log("   Free me!   ")
//  		return;
//  	}
//  	console.log(num);
//  	num++;
//  	countdown(num);
//   }
// 
//  	countdown(2);
//  		
//  		countdown(1);
//  			
//   		countdown(0);
 				 	


//-----------------------------------------------
//
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

//---------------


// function recordar(estudiar, trabajar, fumar){
//     alert("You should" + estudiar )
//     alert("Deja de fumar ya!" + fumar)
//     alert("Deberia trabajar?" + trabajar)
// }

// function preguntas(){                                   /* No se por qué, solo salta el ultimo */
// 	prompt("Que te parece todo esto?")
// 		
// 		if(prompt == "bien"){
// 			return "pues no va el tio y lo sabe"
// 			}
// 		 
// 		else if (prompt == "mal" ){
// 			return "esta todo mal, squeroso"
//         	}
// 
// 		else if (prompt == null){
// 			return "aqui no hay ná"
// 			}		
// 
// 		else {
// 			return "cagon dios!"				
// 			}
// 	}



//-----------------------------------------------

//   window.setTimeout(function() {  }, 250);
//       //  para darle 500 milisegundos a que se carge el html antes que el js, y asi no tener el prompt sin nada detras
