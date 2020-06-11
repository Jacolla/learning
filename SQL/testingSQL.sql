/* Vamos a ver, funciona rollo cuadrado(TABLE), que es lo que almacena la información(DATA),
   que lo va acumulando en columnas(COLUMNS) y listas(ROW).

   Para crearla, se la invoca con CREATE, pám, ahora le dices qué crear,
   pues le decímos que una tablíta(TABLE), despues le damos nombre 
   y parentesis para meterle la chicha

 */

       CREATE TABLE tiendaClassic(
/* delante va el nombre del "cajon" */      product INTEGER,      /* detrás va el tipo de data */
                                            workers INTEGER,      /* camelCase para el tipo de data */    
                                            clientes INTEGER,
                                            );

 INSERT INTO tiendaClassic(product, workers, clientes)
 VALUES (2);