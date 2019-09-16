# _______________________________________________
#Todo en phyton es un objeto
#Las variables son marcadas por el contenido, no el contenedor.

# msg = ("toma yaah")
# print(msg)


# _______________________________________________
# numero1=10
# numero2=20
# if numero1>numero2:
#     print("El numero uno mola mas")
# 
# and numero2 == numero1 :
#     print("Pueh ya veh")
#     
# else:
#     print("Pues no tanto")
# 
#
# _______________________________________________
# def mensajito():                    # Defines 
#     print("Mensaje 1")              # |  
#     print("Mensaje 2")              # | --> Cuerpo de la definicion
#     print("Mensaje 3")              # |
# 
# mensajito()                         # |
# mensajito()                         # ||
# mensajito()                         # |||--> Llamas a la definicion
# mensajito()                         # ||
# mensajito()                         # |


# _______________________________________________
# def suma(num1, num2):
# 
#     resultado=num1 + num2
#     
#     return resultado
# 
# almacena_resultado=suma(4,2)
# 
# print(almacena_resultado)


# _______________________________________________
# Lista0=["Marta", True, 30, "False?"]
# Lista0.append("Sandra")
# Lista0.insert(1,"Jesusito")
# Lista0.extend(["Antonio","Alia", "Pepote"])
# Lista0.remove("Antonio")
# Lista0.pop()
# Lista1=["Marta",25, True,]
# Lista2=["Charlene", "Janet"]
# Lista3= Lista0 + Lista1 + Lista2
# print(Lista3*2)


# _______________________________________________
#  -- Tuplas --
#  Es como una lista, pero no es modificable, es decir, se pueden coger fracciones de la tupla, pero
#  no puedes quitar/añadir componentes de la tupla, util cuando se quiere mirar la tupla o comprobar si hay algo en la tupla.
#  Ocupan menos espacio, son mas rapidas de ejecutar, formatean strings(?)
#  Diferencia entre tupla y lista a efectos reales?, las listas utilizan los [] y en las tuplas se utilizan  () (que no son obligatorios)

#  tuplaPrueba=("Marta", 30, "Alia", 25, "Janet", 23 )
#  listaDos=list(tuplaPrueba)
#  print(listaDos[4])                                              # con los [], le decimos cual queremos seleccionar ( empezando por 0)


# _______________________________________________
#                  -- Diccionario --

#  pruebaDicc = {"Espania": "Mallorca", "England":"Manchester", "Russia": "Moscow", 2:"Puto amo"}
#  pruebaDicc["Latvia"] = "Riga"
#  
#  print (pruebaDicc["Latvia"])
#                                                                                  # Se le puede reasignar solo con meterlo en la "lista"
#  pruebaDicc ["Polonia"] = "Varsovia"
#  print (pruebaDicc["Polonia"])
#  
#  del pruebaDicc["England"]                                                       # Con el Del se elimina de la tupla
#  
#  print (pruebaDicc ["Espania"])
#  print (pruebaDicc [2])  
#  
#  print(pruebaDicc)
#  print(pruebaDicc.keys())                                                        # Seleccionas la "pregunta"
#  print(pruebaDicc.values())                                                      # selecciona la "respuesta"
#  print(len(pruebaDicc))


# _______________________________________________
#                  -- Condicionales --

#  print("Probando el python")
#  
#  nota_Alumno=int(input("Cual crees que tienes? "))
#  
#  def evaluacion(nota):
#  
#      valoracion="-.-"
#  
#      if nota<5:
#          print("Este es el if, condicion que abre canal de flujo, up")
#  
#      elif nota>6:
#          print("este es el elif, acompaña al if, middle")
#  
#      else:
#          print("esto es el else, tiene que ir al final de todo, down")
#  
#      return valoracion
#  
#  print(evaluacion(nota_Alumno))
#  
#  print("Finish")


#----------------
#  print("Verificacion de acceso")
#  
#  cilindrada=int(input("Selecciona una cilindrada... : "))
#  
#  
#  if cilindrada <= 250:
#      print("Empieza a no estar mal")             
#  
#  elif cilindrada <= 650:
#      print("Eso empiezan a ser palabras mayores")
#  
#  elif cilindrada >= 650:
#      print("Uff... eso ya empieza a dar miedo de verdad")
#  
#  else:
#      print("Ni idea")
#  
#  print("Finish")


#----------------
# edad=int(input("Que edad tienes? : "))
# if edad < 18:
#      print("Tira pa tu casa")
#  
# elif edad < 100:
#      print("Puedes entrar")
#  
# else:
#      print("Stás to flipao")


#           --/ version corta \--
# edad=int(input("Que edad tienes? : "))
# 
# if 18<edad<100:                                         # concatenación de operadores 
#     print("Puedes pasar, pero no te lo bebas todo, borrachin")
#     
# else:
#     print("No puedes pasar, ffffflipao!")


#----------------
# salario_Presidente = int(input("Introduce salario presidente: "))
# print("Salario presidente: " + str(salario_Presidente))
# 
# salario_director = int(input("Introduce salario director: "))
# print("Salario director: " + str(salario_director))
# 
# salario_Jefe_area = int(input("Introduce salario Jefe area: "))
# print("Salario Jefe area: " + str(salario_Jefe_area))
# 
# salario_administrativo = int(input("Introduce salario administrativo: "))
# print("Salario administrativo: " + str(salario_administrativo))
# 
# if salario_Presidente>salario_director>salario_Jefe_area>salario_administrativo:
#     print("Todo va bien")
# else:
#     print("No va tan bien")
# 
#     
#
#----------------
#<-- Operadores and,or & in -->
# print("Requisitos Becas")
#  
# distancia_escuela=int(input("Distancia colegio: "))
# print( distancia_escuela)
#  
# numero_hermanos=int(input("Cuantos hermanos tienes? "))
# print(numero_hermanos)
#  
# salario_familiar=int(input("Cual es el salario anual bruto? "))
# print(salario_familiar)
#  
# if distancia_escuela>= 30 and numero_hermanos>= 2 or salario_familiar<= 10000:
#      print("Merece beca")
# else:
#      print("No cumple los requisitos")


#----------------
# print("Asignaturas optativas")
# print("Asignaturas optativas: Informatica grafica - Prueba de software - Desarrollo web")
# opcion=input("Escribe la optativa deseada: ")
# asignatura=opcion.lower()
# # asignatura=opcion.upper()                      # El .upper/.lower, cambia el str recibido a mayusculas/minusculas #
# 
# 
# if asignatura in ("informatica grafica","prueba de software", "desarrollo web"):
#     print("Asignatura elegida: " + asignatura)
# else:
#     print("No has entendido nada...")


# pregunta = print("Que moto vas a querer?")
# 
# motos={1:"CB650R",2:"STREET TRIPLE",3:"GSX750",4:"AFRICA TWIN",}
# #eleccion=motos.lower()
# 
# print("1- Honda CBR 650 R")
# print("2- Triumph street triple")
# print("3- Suzuki GSX750")
# print("4- Honda Africa Twin, CRF1000L")
# 
# select=int(input("Numero de la afortunada? "))
# 
# 
# if select in (1,2,3,4):
#  print("La escogida es " + motos[select] + "... buen bicho")
#  
# else:
#     print(pregunta)
# 
#  seguro = input("Estas seguro? ")


# _______________________________________________
#       <-- Bucles -->

# for i in ["solo","cuenta","valor",]:
#      print("bucle(?)")
#  
# for i in ["bucle(?)","bucle(?)2","bucle(?)3",]:
#     print(i)
# i=1
#
#
#
# while i < 5:
#
#     print("Esta es la cuenta: "+str(i))
#     i = i + 1

# for i in [1,2,3]:
#     print("estudia ", end="")


# email=False
# miEmail=input("Cual es tu email? ")
# 
# for i in miEmail:
#     if (i == "J" ):
#         miEmail=True
# 
# if miEmail== True:
#         print("Email correcto")
# else:
#         print("Email NO correcto")


# _______________________________________________
# for i in range(2,10,2):
#         print("valor de la variable {i}")
# 
# i=1
# 
# while i<=10:
#         print("ejecucion: "+ str(i))
#         i=i+1
# print("Finish")

# seguro = input("Estas seguro? ")    
# while seguro != "enga":               
#     print("venga que sii, se puede!")      
#     seguro = input("¿Estas seguro, seguro? ")
# print("Finish")                     

# |/////////////////////////////////////////|
# |///////                           ///////|
# |//  seguro = input("Estas seguro? ")    /|
# |//  while seguro != "si":               /|
# |//      print("uf no se yo eh...")      /|
# |//      seguro = input("Estas seguro? ")/|
# |//  print("Finish")                     /|
# |///////                           ///////|
# |/////////////////////////////////////////|

# for i in ["bucle(?)","bucle(?)2","bucle(?)3",]:
#     print(i)
# i=1


# _______________________________________________
# import math
# 
# print("Vamos a contar...")
# numero=int(input("Dime un numero chavá: "))
# 
# intentos=0
# while numero != 5:
#     print("No puedo encontrar ese... dame otro")
# 
#     if intentos == 10:
#         print("Ya van muchas veces y... esto no... no va")
#         break
# 
#     numero = int(input("Dame un numero tio... "))
#     if numero != 5:
#         intentos=intentos +1
# 
# if intentos <2:
#     solucion=math.sqrt(numero)
#     print("pues no va el chaval y acierta... : " + str(numero))


# _______________________________________________
# email=input("Introduce email: ")
# 
# for i in email:
#     if i !="@":
#         arroba=True
# 
# else: arroba=False
# print(arroba)
# 
#
# _______________________________________________
#   <-- Generadores -->
# def generadorPrimero(limite):
#     num=1
#     
#     while num<limite:
#         yield num*2
# 
#         num=num+1
# 
# devuelvePares=generadorPrimero(10)
# 
# for i in devuelvePares:
#     print(i)
#
#
# ___________________
# def generadorSegundo(limite):
#     num=1
#     while num<limite:
#         yield num*2
#         num=num*2
#     
# devuelvePares=generadorSegundo(10)
# 
# print("texto vacio simple sencillo sin ná")
# print(next(devuelvePares))
# 
# print("texto vacio simple sencillo sin ná")
# print(next(devuelvePares))
# 
# print("texto vacio simple sencillo sin ná")
# print(next(devuelvePares))


# ___________________
# def devuelveMotos(*motos):
#     for elemento in motos:
# #        for subElemento in elemento:
# #            yield from elemento
#            yield elemento
# 
# motosDevueltas=devuelveMotos("Honda", "Gilera", "GasGas", "Triumph")
# 
# print(next(motosDevueltas))
# print(next(motosDevueltas))
# print(next(motosDevueltas))
# print(next(motosDevueltas))









# ____________________________________________________________________________________
# """ <---  Juegueteo ---> """   
# base = int(input("base:"))
# altura = int(input("altura:"))
# base_x_altura = base * altura / 2
# print("El area es: " + str(base_x_altura))


# ____________________________
# pi = (355/113)
# radio = input("Cual es el radio? ")
# resultado = pi * int(radio) * 2
# print(resultado)

# <---------->
# import math
# pi = math.pi
# print (pi)


# ____________________________
# v0
# sabores = ["Chocochoco ", "Vanella ", "Mint "] 
# for s1 in sabores:
#     for s2 in sabores:
#         print("Helado de " + s1 + "con " + s2)


# <---------->
# v1
# sabores = ["Chocolata ", "Vainilla ", "Almendra "]
# for s1 in range(len(sabores)):
#    for s2 in range(s1+1, len(sabores)):
#        print("Heladito de", str(sabores[s1]) + "con " + str(sabores[s2]) )


# ____________________________
# for d in range (1,31):
#     print("----")
#     print("dia", d)
#     if d % 7 == 1 or d % 7 == 0:
#         print("Descansito gueno")
#         continue
#     print("Levantarse a desayunar")
#     print("A tudial hueputa")


# ____________________________

pregunta = (input("Nombre: "))
for i in range(10):
        print("Tienes 10 oportunidades")
        pregunta2 = input("Cual es tu nombre: ")
# bucle mal cerrado               
while pregunta != str():
        print("No tio no... NOMBRE: ")
        print(str(pregunta))


# <-- BarraProgreso -->
# import time
# import progressbar
# 
# for i in progressbar.progressbar(range(5)):
#     time.sleep(0.15)

# input("")
