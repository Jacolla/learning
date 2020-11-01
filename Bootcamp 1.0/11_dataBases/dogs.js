const mongoose = require('mongoose');
const { stringify } = require('querystring');
mongoose.connect('mongodb://localhost:46072/learningDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

