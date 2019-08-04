# Let's practice

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
    select_2 = int(input("Elige una de las que hay... : "))
    print("Tu moto escogida es la " + motos[select_2] + "... buen bicho")

if select_2 not in (1,2,3,4):
    print("Tio... elige una por favor...")
    print("No esta mal... una " + motos[select])
      
 
# put a counter






