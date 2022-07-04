const express = require("express")
const router = express.Router()
const controller = require('../controllers/album.controller')

// Page d'accueil
router.get("/", controller.home)

// Page de création de l'album
router.get("/new-album", controller.AlbumForm )

// création de l'album
router.post("/album/create", controller.AlbumCreated )

// Page de visualisation d'un album
router.get("/album/:id", controller.AlbumSelect )

//Ajout d'une image
router.post("/album/:id/NewImage", controller.addImage)


module.exports = router;