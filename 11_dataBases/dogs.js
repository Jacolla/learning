// mongo "mongodb+srv://testingmongodb.7fia8.azure.mongodb.net/<dogs>" --username learningDB

const mongoose = require('mongoose');
const { getHeapSnapshot } = require('v8');
mongoose.connect('learningdb-scytx.run-eu-central1.goorm.io', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


// keet shit done