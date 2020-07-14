mongo "mongodb+srv://testingmongodb.7fia8.azure.mongodb.net/<dogs>" --username learningDB

const mongoose = require('mongoose');
const { getHeapSnapshot } = require('v8');
mongoose.connect('learningdb-scytx.run-eu-central1.goorm.io', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


// Mira yo le he estado dando con ganas, pero entre que los videos de Udemy 
// son mas viejos que el mear y que se van solapando videos de otro para intentar
// dar un arregl ( y que aún así son mas viejos que la ostia ), yo voy a tener que dejarlo
// un poco de lado y ya lo ire mirando por mi cuenta.