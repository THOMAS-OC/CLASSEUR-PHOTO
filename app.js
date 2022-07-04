const exp = require("constants");
const express = require("express");
const fileUpload = require("express-fileupload")
const mongoose = require("mongoose");
const path = require("path");
const albumRoutes = require('./routes/album.routes')

app = express();

mongoose.connect("mongodb://localhost/phototheque");

// gestion des formulaire et des images
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(fileUpload())

//gestion des templates et des fichiers statiques
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static("public"))


app.use('/', albumRoutes)


app.listen(3000, ()=>{
    console.log("Serveur lancé sur le port 3000");
})