#Todo en phyton es un objeto
#Las variables son marcadas por el contenido, no el contenedor.

# msg = ("toma yaah")
# print(msg)


# _______________________________________________
#
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
#
# _______________________________________________
# 
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
#  
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


edad=int(input("Que edad tienes? : "))

if 18<edad<100:                                         # concatenación de operadores 
    print("Puedes pasar, pero no te lo bebas todo, borrachin")
else:
    print("No puedes pasar, ffffflipao!")



#  if edad < 18:
#      print("Tira pa tu casa")
#  
#  elif edad < 100:
#      print("Puedes entrar")
#  
#  else:
#      print("Stás to flipao") 