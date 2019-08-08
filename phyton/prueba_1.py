

pregunta = print("Que moto vas a querer?")
motos={1:"CB650R",
       2:"STREET TRIPLE",
       3:"GSX750",
       4:"AFRICA TWIN",}

print("1- Honda CBR 650 R")
print("2- Triumph street triple")
print("3- Suzuki GSX750")
print("4- Honda Africa Twin, CRF1000L")


select = input("Te gustaria elegir una? ")
contador=6

while select != "si":
    select_3 = int(input("Elige una de las que hay por favor... : "))
    
    if select != [1,2,3,4]  :
        print("Tio por favor... elige una... sino este bucle no acabara...")
        select_2 = int(input("Di un numero del 1 al 4 : "))
        print("Una " + motos[select_2] + "... buen bicho")
        
        

# put a counter
# almacenar respuestas para hacer estadistica de favorita

print("Finish")

