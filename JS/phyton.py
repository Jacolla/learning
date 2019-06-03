
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

Lista0=["Marta", True, 25, "False?"]

Lista0.append("Sandra")
Lista0.insert(1,"Jesusito")
Lista0.extend(["Antonio","Alia", "Pepote"])
Lista0.remove("Antonio")
Lista0.pop()


Lista1=["Marta",25, True,]
Lista2=["Alia", "Janet"]
Lista3= Lista0 + Lista1 + Lista2

print(Lista3*3)