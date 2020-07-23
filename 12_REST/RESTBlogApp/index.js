let bodyParser = require("body-parser");
    mongoose   = require("mongoose");
    express    = require("express");
    app        = express();



// --------------------APP CONFIG--------------------
mongoose.connect("mongodb://localhost/rest_app")     /* A esta direccion se conecta su puta madre */
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


// --------------------MONGOOSE/MODEL CONFIG--------------------
let blogSchema = mongoose.Schema({
    title  : String,
    image  : String,
    body   : String,
    created: {type:Date, default: Date.now}
})

let blog= mongoose.model("blog", blogSchema);




// --------------------RESTFUL ROUTES--------------------
// tittle


// Image


// body


// created

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Funsiona!!")
})