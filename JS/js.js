
// ejercicio de preguntar al usuario cuatro mierdas y luego juntarlas en una frase, pero OJO, solo en la consola.
// 
// let nombre=prompt("Que pasa, como te llamas? ")
// let apellido=prompt ("y apellidos por favor ")
// let edad= prompt (" y ya para completarlo todo, que edad tienes? ")
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
// let edad = prompt ("Dime que edad tienes y te dire cuantos dias has vivido.")
// let year = edad * 365.25
// alert(edad + " years are, more or less, " + year + " days")
// console.log ("el tio ha vivido " + year + " dias" )
//
//
//
//-----------------------------------------------
//
// let x = 10;
// let y = "a"
// 
//  y==="b"||x>=10    /*--> true, "b" no es "a" pero (( || )or) x si es mayor o igual que 10, por lo tanto, TRUE bitch */
//
//
//
//-----------------------------------------------
//      
//  Comparativos

// let x = 3;
// let y = 8;
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
//  let msj1 = " "                                                                                      /* Espacio vacio, no equivale a nada... es False bitch */
//  let msj2 = "que pasó"                                                                               /* No es un False value... por lo tanto, true bro */
//  let ndah = "false"                                                                                  /* Es un mensaje normal, con la triquiñuela del False dentro del mensaje... True bro then */
//                                                          
//  !(( msj1 || msj2) && ndah)                                                                          /* Farzo por er ! der prinsipio zupare */         
//
//
//
//-----------------------------------------------
//
//  Vamos con los if, else if y los else
//
//     let edad = prompt("Que edad tienes?")
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
//   let numeroSecreto = 33;
//   
//   let stringGuess = prompt("Adivina el numero")
//   let guess =Number(stringGuess);                                                                  /*   prompt para hacer la pregunta */
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
//  let count = 1;
//        while (count <=3){
//	        console.log("No volvere a llegar tarde " + count);
//	        count++;
//  }   
//

//------------------------
//  /* Para que te cuente la palabra metida en el "str" */ 
//
// let str = "hello";
// let count = 0;
//
//    while(count<str.length){                                                                        /* El while es lo que mueve el circuito, "el propulsor" */    
//           console.log(str[count]); 
//           count++;  
//      }
//    

//------------------------
//
//      /*Para sacar numeros (let cuenta) entre
//      /* los numeros dados (los datos que queremos que busque)    
//      
//     let cuenta = -10;
//     while (cuenta<=20){
//         console.log(cuenta);
//         cuenta++;                                                                                  /* con en "++", le va sumando */
//     }
//



//-----------------------------------------------

//   /* Annoy-omatic  (que te salta todo el rato, utilizando el "while") */


//  let pregunta =("Ha salido bien ya?")
//  
//      while(pregunta !== "si"  && pregunta !== "vaya"){                                             /* El while crea el bucle hasta que obtenga la respuesta deseada, si no es "si" o "vaya" */
//  
//          if(pregunta == "no"){                                                                     /* Si la respuesta es "NO" */ 
//  
//              alert("tio cabron, echale ganas");                                                    /* Mensajito para animar a la respuesta NO deseada */
//          }
//      
//          let pregunta = prompt("Hemos llegado ya?");                                               /* Se reactiva la pregunta */
//      }
//  alert("Bingoo!");                
                                                                 /* Cuando se cierra el bucle */
// 


//                               VERSION 2 
//  let pregunta = prompt("Hemos llegado?")
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
//          let pregunta = prompt("Hemos llegado ya?");                                               /* pregunta dentro del bucle */
//      }
//  alert("Bingoo!");                                    




//-----------------------------------------------
     
//   Otro tipo de bucle es el "for", basicamente es lo mismo que el "while", pero mas sencillo
//   y directo.
    
//  for (let cuenta = 0; cuenta < 10; cuenta++){
//      console.log("Esta es la linea numero " + cuenta)
//  }

//---

//  let str= "Pontenza";
// 
//  for(let i = 0 ; i < str.length; i++){
//     console.log(str[i])
//  }

// ---

// let variable = "Ohsotloa"
// for(let i= 1; i<variable.length; i+=2){
//     console.log(variable[i])
// }



//----------------------- Exercise -----------------------

//  Print all number between -10 and 19
//  Print all even number between 10 and 40
//  Print all odd number between 300 and 333
//  Print all number divisible by 5 and 3 between 5 and 50


// /* Para los de entre los -10 y 20*/ 
// console.log("Para los de entre los -10 y 20 ")
// for(let cuenta = -10; cuenta < 20; cuenta++)
//     {console.log("esta es la linea " + cuenta) 
//     }
//   
// /* Para los INCLUIDOS 10 y 40 */
// console.log("Para los INCLUIDOS 10 y 40")
// for(let cuenta = 10; cuenta <= 40; cuenta++)
//     if( cuenta % 2 ===0){
//         console.log("estos son los pares " + cuenta) 
//     
//     } 
//   
// /* Para los odd(impares) numeros entre 300 y 333 */
// console.log("Para los odd numeros entre 300 y 333")
// for(let cuenta = 300; cuenta < 334; cuenta++)
//   if(cuenta % 2 !== 0)
//     {console.log("estos son los impares " +cuenta)
//     }
// 
//   
// /* Para los divisibles entre 5 y 3, entre 5 y 50 */
// console.log("Divisibles entre 3 y 5")
// for(let cuenta = 5; cuenta <= 50; cuenta++)
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
//  	let nuevaX = x.replace(/es grande/g, "no es tan grande");                                     /* / <-- dentro va lo que quieres corregir  /i ' la 'g' es de global ', luego lo que va a reemplazarlo */
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
//  let pruebaUno = 33
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


//  let motos = ["Jonda", "Yahama","Kasita","Triumph","Susuki"]
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
//  let colores = ["Azul","Rojo","Verde"]
//  colores.push("Morado")                                                                            /* Lo empuja(push) al final de la variable, tambien devuelve la cantidad de arrays que hay dentro  */
//  
//  colores.pop()                                                                                     /* Borra lo que esta al final del array y devuelve elemento borrado */
//  
//  //-----------------
//  
//              /* Shift/Unshift */                                                                   /* Para añadir/quitar a principio de array */
//  
//  let colorines = ["Azul","Rojo","Verde"]
//  colorines.unshift("Cian")                                                                         /* Con el UNSHIFT se le añade a primero de array */
//  
//  colorines.shift()                                                                                 /* Con el SHIFT se le quita a primero de array */



//-----------------  

            /* IndexOf */                                                                             /* Para buscar dentro del array */

// let calzoncillos =["los rojos","Los de aviones","Los de la suerte","Los clasicos"]
// calzoncillos.indexOf("Los clasicos")                                                               /* Le dices cual quieres encontrar  */
// calzoncillos.indexOf("Los de follar")                                                              /* devuelve -1, porque no existen... */
 
// calzoncillos[]                                                                                    

//-----------------

//              /* Slice */                                                                           /* Para copiar arrays o partes de ella */
//  
//  let frutita = ["Banana","Mansanita","Manguito","Melocotonsito"]
//  let platofruta = frutita.slice(2,4)                                                               /* Desde donde empieza el corte y donde lo termina sin incluir el ultimo */
//  platofruta



//-----------------------------------------------

        /* Exercise's */

// let frutita = [
//     ["Banana","Mansanita","Manguito","Melocotonsito"],
//     ["platanito","perita","ceresita","melonsito"],
//     ["paraguayito","tomatito","sandiita","piñita"]
// ]
// 
// frutita[1][1]
// /* perita */



//-----------------------------------------------

//   
//   window.setTimeout(function() {250);   //  para darle 250 milisegundos a que se carge el html antes que el js, y asi no tener el prompt sin nada detras

//      --/ Mi version \--
// window.setTimeout(function() {
// 
// let variable1 =["Deberia de... "]
// 
// let variable2 = prompt("Que es lo que deberias hacer? ");
//     while(variable2 !=="salir"){
//         if(variable2 =="lista"){
//             console.log(variable1)
//         }
//         else if(variable2 == "nuevo"){
//             let variable3 = prompt ("Para incluir a la lista")
//             variable1.push(variable3)
//         }   
//     variable2 = prompt("Seguro que es eso?")
//     }
//   },
// 250);


              /* |  */
              /* |  */
/* Version Colt  V  */

// let todos = ["Estudiar"];                                       /* Variable 1 */
// 
// let input = prompt("Que te gustaria hacer?");                   /* Variable 2 */
//             
// while (input !== "quit"){                                       /* bucle, si la respuesta NO es "quiet" */
//     if(input == "list"){                                        /* condicional, si es "lista" */
//         console.log(todos)                                      /* accion, imprime Variable 1 */
//     }           
//             
// else if(input == "new"){                                        /* condicional 2, sí escribe "new"... */
//     let newTodo = prompt ("Enter new todo")                     /* crea nueva Variable 3 con prompt  */
//     todos.push(newTodo);                                        /* empuja la respuesta de Variable 3 a Variable 1  */
// }           
//             
// input = prompt ("Que te gustaria hacer? 2.0")                   /* pregunta para cerrar el bucle */
// }
// 
// console.log("okay, you are leaving us alone... it's okay")      /* Cuando escriba "quit" */



//-----------------------------------------------
// let todos = ["Suiza es un buen lugar"];
// 
// let input = prompt("Que quieres hacer?");
// 
// while(input !== "salir"){
//     // Empieza el bucle
//     if (input == "lista"){
//         listaTodos();
//     }
// 
//     else if (input=="nuevo"){
//         incluirTodos();
//     }
// 
//     else if (input === "borrar" ){
//         borrarTodos();
//     }
// 
//     input=prompt("Que te gustaria hacer?");
// }
// console.log("Vale... te vas...")
// 
// 
// 
//     //<-- Funciones -->
// 
// //  <-- para mostrar la array -->
// function listaTodos(){
//     // Decorativo para el console log
//     console.log("**********")
//     todos.forEach(function(todos, j){
//         console.log(j + ": " + todos)
//     });
//    console.log("**********")
// 
// }
// //  <-- Para añadir en la array -->
// function incluirTodos(){
//     // Preguntar por una nueva tarea
//     let nuevoTodos=prompt("Introducir nueva tarea");
//     // Añadir respuesta a la array de "todos"
//     todos.push(nuevoTodos);
//     console.log("Tarea incluida, grasias buena hente")
// }
// 
// //  <-- Para borrar de la array -->
// function borrarTodos(){
//     // Por si se quierer borrar una pieza del array
//     let index = prompt("Introducir index de lo que desea borrar")
//     // Borrar esa pieza
//     todos.splice(index, 1);
//     console.log("Seccion array borrada");
// }



//-----------------------------------------------

// Para sacarlo pero al reves, desde el final hasta el principio
// 
// function printReverse(arr){
//     console.log("**********")
//     for ( let i = arr.length -1; i>= 0; i--){
//         console.log(arr[i])
//     }
// }
// printReverse([1,2,3,4,5])
// console.log("**********");
// 
// // Comprueba si es uniforme ( igual )
// //  <-- isUniform -->
// 
// function isUniform(arr){
//     let first=arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] !== first){
//             return false
//         }
//     }
//     return true
// }
// 
// // <-- sumArray -->
// 
// function sumArray(arr){
//     let total=0;
//     arr.forEach(function(element){
//         total += element;
//     });
//     return total;
// }
// 
// // <-- max() -->
// 

// No compara con toda la array, solo con el que esta a su izquierda

// function max(arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++)
//     if(arr[i] > max){
//         max=arr[i];
//     return max;
//     }
// }



//-----------------------------------------------
// Creando mi propia ForEach, amos payá

// function miForEach(arr, func){
//     // loop a traves de la array
//     for(let i=0; i<arr.length; i++){
//         // llamar a la funcion para cada objeto de la array
//         func(arr[i])            // la i "es" el objeto de la array
//     }
// }
//                 //  |   Objetos de   |
//                 //  v    la array    v
// let colorines = ["azul","perro","mansana",]
// 
// // para invocarla: miForEach(colorines, alert)
// 
// miForEach(colorines, function(colorines){
//     console.log(colorines);
//     });

//output: azul
//        perro
//        mansana        



//-----------------

// (function(){
//     console.log("soy una funsion");
// })()                                    /* Con los () al final, se invoca a la funcion */

//output: soy una funsion


//-----------------

// let motos = ["Kawasaki","Triumph","Honda",]
// 
// 
// Array.prototype.miForEach = function(func){
//     for(let i=0; i<this.length; i++){
//         func(this[i]);
//     }
//     }
// 
//     motos.miForEach(function(motoNombre){
//         console.log("Me gustan mucho las " + motoNombre)
//     })
// 
// output: Me gustan mucho las Kawasaki
//        Me gustan mucho las Triumph
//        Me gustan mucho las Honda



//-----------------------------------------------
//              <-- Objetos -->

// let motitos= {
// 	Honda: "CB650R",
// 	Triumph: "Street Triple 675",
// 	Yamaha: "XSR900",
// 	Kawasaki: "H2R"
// }
// /* Para cambiar valor */
// motitos.Kawasaki= "ER6N"         /* Esta es la buena ;) */
// 
// /* Para añadir nuevo objeto */
// motitos.edad=25; 
// 
// /* Para modificarle el valor */
// motitos.edad += 1   /* ("Le añade 1 al objeto añadido edad, teniendo en cuenta su valor anterior") */
// motitos.edad+1  /* Le suma uno al valor edad, pero no lo almacena, solo le suma uno y ya stá */
// 

//input: motitos
//output: {Honda: "CB650R", Triumph: "Street Triple 675", Yamaha: "XSR900", Kawasaki: "H2R", edad: 25}


//-----------------

// let pegatinas = {}
// pegatinas.hola = new Object();
// pegatinas.hola = "que tal? ";
// 
// pegatinas.bien = "todo bien entonces. ";
// 
// pegatinas.si = "no? ";
// 



// ----------------------------------------------

/*   <-- Navegar por arrays/Objetos  -->    */
// let posts = [{
//         title: "Los perros son muy guays",
//         author: "Goofy",
//         coments: ["Quien es un buen chico!?", "Malo, perro malo"],
//     },
// 
//     {
//         title: "Los perros son una mierda",
//         author: "GatoConBotas",
//         coments: ["Garfield esta sobrevalorado", "Los gatos dominaran el mundo"],
// 
//     }
// ]
/*
input: posts[0].coments[1]
output: Malo, perro malo
*/

//-----------------



// let algunosObjetos = {
// 	friends:[
//      {nombre: "Malfoy"},
// 		{nombre: "Crabbe"},
// 		{nombre: "Goyle"}
// ],
// 	color: "baby blue",
// 	isEvil:true
// };
 
/* 
input: algunosObjectos.friends[0].nombre
output: "Malfoy"
*/


// ----------------------------------------------

 /* <--  Array de objetos --> */

let pelis = [
    {
     titulo: "Hellboy",
     vista: true,
     nota: 7.5,
    },

    {
     titulo: "El indomable Will Hunter",
     vista: true,
     nota: 9,
    },

    {
     titulo: "Anabelle",
     vista: false,
     nota: 2,
    },

    {
     titulo: "Pocahontas",
     vista: true,
     nota: 7,
    },

    {
        titulo: "La noche de Halloween",
        vista: false,
        nota: 2,
       }
]

pelis.forEach(function(pelis){
    let resultado = "La pelicula ";
    if (pelis.vista){
        resultado += "ha sido vista ";
    }
    else{
        resultado+= "no ha sido vista ";
    }
    resultado+= "\"" + pelis.titulo + "\" - ";
    resultado += pelis.nota + " de valoracion..."
    console.log(resultado)
})
// 
//-----------------
// 
// /* El forEach metido en una funcion, cual "boton" */
// function construyeFrase(pelis){
//     let resultado = "La pelicula ";
//     if (pelis.vista){
//         resultado += "ha sido vista ";
//     }
//     else{
//         resultado+= "no ha sido vista ";
//     }
//     resultado+= "\"" + pelis.titulo + "\" - ";
//     resultado += pelis.nota + " de valoracion..."
//     return resultado
// };
// 
// /* Esta es la funcion que crea las frases */
// pelis.forEach(function(peli){
//     console.log(construyeFrase(peli));
// });



// ----------------------------------------------

/* <-- JS methods (funciones que es una propiedad dentro de un objeto) --> */

// let objetos = {
//     nombre: "Er Pepe",
//     edad: 25,
//     add: function(x,y){
//         return x + y;
//     }
// }
 


// ----------------------------------------------

/* <-- Manipulando HTML con JS (DOM) --> */

// /* Para seleccionar cosas del html */


// let cogelo = document.getElementById("palJS");  /* para engancharlo desde su id */ 
// 
// let cogelo2 = document.getElementsByClassName("ioquese"); /* Para cogerlo desde class */
// 
// let cogelo3 = document.getElementsByTagName("h2");
//// y la clasica, para navegar entre mas de 1 seleccionado, palJS[]

































// COSAS QUE NO SON DEL CURSO.  Jugueteo

// ----------------------------------------------

// esto es una funcion que se llama a si misma, se llama recursion.
// Recursion is a process ( a function, en este caso )
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
function ingles(){
    alert("Ou yeah baby, you did it")
}

function moto(){
    alert("Que te crees? hasta que no la tengas no le des al tick")
}
function lenguaje(){
    alert("Que te crees? hasta que no los tengas no le des al tick")
}

function trabajo(){
    alert("Que te crees? hasta que no lo tenga no le des al tick")
}

function remoto(){
    alert("Que te crees? hasta que no lo tenga no le des al tick")
}

function life(){
    alert("Not yet man... not yet")
}



//-----------------------------------------------

//   window.setTimeout(function() {  }, 250);
//       //  para darle 500 milisegundos a que se carge el html antes que el js, y asi no tener el prompt sin nada detras


