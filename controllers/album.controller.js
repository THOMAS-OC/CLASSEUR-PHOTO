const Album = require('../models/Album')
const path = require("path")

// Fonction d'affichage de la page d'accueil et des albums
const home = async(req, res) => {
    const albums = await Album.find();
    res.render('albums', {albums, test : "test"})
}

// Fonction d'affichage d'un album
const AlbumSelect = async (req, res) => {
    let id = req.params.id;
    let albumSelected = await Album.findById(id);
    res.render('album', {albumSelected})
}


// Formulaire pour ajouter un album
const AlbumForm = (req, res) => {
    res.render('new-album')
}

// Formulaire pour ajouter une image
const addImage = async (req, res) => {
    let id = req.params.id;
    let albumSelected = await Album.findById(id);
    console.log(albumSelected);


    const imageName = req.files.image.name

    // ajout du fichier dans le dossier
    pathImage = path.join(__dirname, '../public/', id, imageName)
    await req.files.image.mv(pathImage)

    // Ajout du chemin dans la BDD
    albumSelected.images.push(imageName)
    await albumSelected.save()
    
    res.redirect("/")
}

// Fonction de création d'un album
const AlbumCreated = async(req, res) => {
    if(req.body.albumTitle){;
        await Album.create({
            title: req.body.albumTitle
        })
        res.redirect("/")
    }
    else{
        res.redirect("/")
    }
}


module.exports = { 
    AlbumForm,
    AlbumCreated,
    home,
    AlbumSelect,
    addImage
}