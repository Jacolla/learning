let bodyParser = require("body-parser");
const { monitorEventLoopDelay } = require("perf_hooks");
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
blog.create({
    title:"testBlog",
    image: "https://images.pexels.com/photos/2820884/pexels-photo-2820884.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    body: "Esto es una puta prueba!"
})



// --------------------RESTFUL ROUTES--------------------
// tittle


// Image


// body


// created

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Funsiona!!")
})



// Me cuesta poder terminar este apartado como el de BD's, ya que el curso fue lanzado en 2018,
// a dia de hoy ha cambiado bastante, y la forma que han intentado apañarlo es infumable,
// he intentado mirarlo por mi cuenta pero es una puta mierda, esperaré a empezar las clases y
// ahí preguntaré mas en profundidad.