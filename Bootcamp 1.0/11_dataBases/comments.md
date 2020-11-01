Dos tipos de BD (Base de Datos/DataBase)
RACIONAL y NO-RACIONAL

A grosso modo, la RACIONAL se va colocando la informacion en "orden",
mientras que la NO-RACIONAL se puede colocar sin orden dentro de la base de datos


Vale, pues se ve que esto es a lo rustico, se puede hacer la BD desde 0 pero claro, es la muerte y ya hay mucha gente que se lo ha currado para hacerlo hasta con interfaz.
Mejor aprender a usar goormIDE, BD en la nube.

Para poder utilizar la BD, primero se debe ejecutar en el terminal de goomIDE e iniciar el mongod. Esta es la encargada de unir cliente-servidor-cliente, si no voy mal.

Para poder ejecutar la base de datos, en otro terminal a parte, debemos ejecutar mongo, iniciando así la BD comando "help" en consola mongo.

<!-- ----------MONGO---------- -->

db.help()                    help on db methods
db.mycoll.help()             help on collection methods
db.dropDatabase()            To remove a DB ( first "use" the DB we want to kill)
sh.help()                    sharding helpers
rs.help()                    replica set helpers
help admin                   administrative help
help connect                 connecting to a db help
help keys                    key shortcuts
help misc                    misc things to know
help mr                      mapreduce
show dbs                     show database names
show collections             show collections in current database
show users                   show users in current database
show profile                 show most recent system.profile entries with time > 1ms
show logs                    show the accessible logger names
show log [name]              prints out the last segment of log in memory,'global is default
use <db_name>                set current database
db.foo.find()                list objects in collection foo
db.foo.find( { a : 1 } )     list objects in foo where a == 1
db.foo.remove({DATA: DATA})  removes intem selected
db.foo.remove({DATA: DATA})  To update data in a specific item
it                           result of the last line evaluated; use to further iterate
DBQuery.shellBatchSize = x   set default number of items to display on shell

exit                         quit the mongo shell











July 7th, 2020 - Update
Your mongoose.connect() code should look like this:
_______________________________________________________

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/db_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));







