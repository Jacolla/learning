



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

select=int(input("Numero de la afortunada? "))

if select in (1,2,3,4):
 print("La escogida es " + motos[select] + "... buen bicho")


select_2=int(input("Y ahora cual?  "))
if select_2 == (5):
    print("Nope")
while select_2 != (1,2,3,4):
    select_2=int(input("Cual es la afortunada? "))
    print("No esta mal... una " + motos[select_2])




# seguro = input("Estas seguro? ")    
# while seguro != "si":               
#     print("uf no se yo eh...")      
#     seguro = input("Estas seguro? ")
# print("Finish")                     
# 




