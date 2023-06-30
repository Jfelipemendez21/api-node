const express= require("express"); 
const mongoose= require("mongoose");
// importamos rutas 
require("dotenv").config(); 
const rutas= require("./routes/rutas");

const app= express(); 
const port = process.env.PORT || 9000;  

// middlewars 
// el express.json nos sirve para darle un cuerpo json al envio de datos 
app.use(express.json())
// le damos uso a las rutas
app.use("/api", rutas);

app.get("/", (req, res)=>{
    res.send("Mi primera API");
}); 

mongoose.connect(process.env.MONGODB_URI)
    .then(()=> console.log("Conexion a base de datos exitosa!"))
    .catch((err) => console.log(err)); 

app.listen(port, ()=>{
    console.log("Servidor funcionando en puerto " +port);
});

