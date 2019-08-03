



pregunta = print("Que moto vas a querer?")
motos={1:"CB650R",
       2:"STREET TRIPLE",
       3:"GSX750",
       4:"AFRICA TWIN",
}

print("1- Honda CBR 650 R")
print("2- Triumph street triple")
print("3- Suzuki GSX750")
print("4- Honda Africa Twin, CRF1000L")

select = int(input("Numero de la afortunada? "))

while select != (1,2,3,4) :
    select = int(input("Elige una de las que hay... : "))
    print("Tu moto escogida es la " + motos[select] + "... buen bicho")
    

if select not in (1,2,3,4):
    print("Tio... elige una por favor...")
    print("No esta mal... una " + motos[select])
      
 





#  while select_2 != (1,2,3,4):
#      select_3 = input("Tio... elige una de las que hay... por favor... ")
#      print("Bien... por fin te has decidido... es una " + motos[select])
#  
#  if select_2 == "5":
#      select_2 = int(input("En serio... la 5?.. si no hay... elige entre el 1 y 4 por favor... "))
#      print("No esta mal... una " + motos[select_2])
#  
print("Finish")
# seguro = input("Estas seguro? ")    
# while seguro != "si":               
#     print("uf no se yo eh...")      
#     seguro = input("Estas seguro? ")
# print("Finish")                     
# 




