const express= require("express");
const userSchema= require("../models/esquema")

const routes= express.Router(); 

routes.post("/user", (req, res)=>{
    // lo que se envie en el cuerpo post de la peticion se guardara en el esquema 
    const usuario= userSchema(req.body); 
    usuario.save()
        .then((data)=> res.json(data))
        .catch((err)=>{res.json({message: err})})
});

routes.get("/user", (req, res)=>{
    // para traer los usuarios guardados 
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((err)=>{res.json({message: err})})
});

routes.get("/user/:id", (req, res)=>{
    // el id que se envie en los parametros de la peticion 
    const {id} = req.params; 
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((err)=>{res.json({message: err})})
});


// el put se usa para actualizar 
routes.put("/user/:id", (req, res)=>{
    const {name, age, email} = req.body; 
    // el id que se envie en los parametros de la peticion }
    const {id} = req.params; 
    userSchema
        .updateOne({_id: id}, {$set:{name, age, email}})
        .then((data)=> res.json(data))
        .catch((err)=>{res.json({message: err})})
});


routes.delete("/user/:id", (req, res)=>{
    // el id que se envie en los parametros de la peticion }
    const {id} = req.params; 
    userSchema
        .deleteOne({_id: id})
        .then((data)=> res.json(data))
        .catch((err)=>{res.json({message: err})})
});

module.exports= routes;