const express = require("express")
const router = express.Router()
const Controller = require('../controllers/controller-item')

router.get("/",Controller.getListItem)
router.get("/add",Controller.getItem)
router.post("/add",Controller.postItem)
router.get("/edit/:id", Controller.editItem)
router.post("/edit/:id",Controller.updateItem)
router.get("/delete/:id",Controller.deleteItem)
router.get("/disabled/:id",Controller.disabledItem)

module.exports = router
