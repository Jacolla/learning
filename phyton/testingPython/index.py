# print("Mi coche gasta 5,5 litros cada 100KM y mi trabajo se encuentra a 15Km de casa. ")
# print("¿Cuanto gastare en gasolina en 20 dias laborables si el precio es de 1,12€/l?  ")
 
# # consumCoche = 5,5/100
# # distanciaTrabajo = 15
# # precioGas = 1,12
# # distanciDaily = 20
# # calculoGasto = distanciaTrabajo / precioGas

# dailyCons = 5.5*15/100                  #0.825 Litros
# costeTrayecto = dailyCons * 1.12        #0.924 Puñetazos al bolsillo
# pedirAlAmigo = costeTrayecto * 20 *2    #18.48 Puñetazos al bolsillo cada 20 dias, 2 veces el mismo camino(ida y vuelta)


# print(pedirAlAmigo)                     #36.96€




# ______________________________________________________________
# print("En enero del año actual tenia una cuenta con 3000€.")
# print("Si cobro 1100€ mensuales y tengo unos gastos fijos al mes de 435€,")
# print("¿A cuanto ascienden mis gastos extras mensuales si a final de año mi cuenta tiene un total de 6000€?")

# cantidadGuardada = 3000
# entradaCash = 1100
# gastosFijosMens  = 435
# savedEndYear = 6000

# restoMensualidad = 1100 - 435       #665

# finalAnio = restoMensualidad * 12
# finalAnio                           #7980€

# gastoAnual = finalAnio - 6000       #1980

# gastoExtra = gastoAnual / 12        #165

# totalGastoMes = gastoExtra + gastosFijosMens

# print(totalGastoMes)




# ______________________________________________________________
# print("Tengo 50€ para comprar una camisa. Si la camisa cuesta 35€ y tiene uyn descuento del 10%, ")
# print("¿Cuanto tendré despues de comprar la camisa? ")

# cashBolsillo = 50
# camisa = 35
# descuentoCamisa = 0.10

# precioFinalCamisa = camisa * descuentoCamisa
# print(precioFinalCamisa)                #3.5

# aPagar = camisa  - precioFinalCamisa
# print(aPagar)                           #31.5

# finalBolsillo = cashBolsillo - aPagar 
# print(finalBolsillo)                    #18.5

# print("Lo que tendré al final de la compra es, " + str(finalBolsillo) + " euritos pal pechito")



# ______________________________________________________________

# Clasificador de huevos

# caja S --> menor a 53gramos
# caja M --> mayor o igual 53gms e inferior a 63gms
# caja L --> mayor o igual a 63gms e inferior a 73gms
# caja XL --> mayor o igual que 73gms

# while peso !=0:
#     if peso < 53:
#         caja="S"
#     elif peso < 63:
#         caja="M"
#     elif peso <73:
#         caja="L"
#         else:
#             caja="XL"
#     colocar_huevo(caja)

# # done_alarm()




# ______________________________________________________________
import math

for i in range(0, 10 , 2):
    print(i)