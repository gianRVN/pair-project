const express = require("express")
const router = express.Router()
const itemList = require('../controllers/itemList.js')

router.get("/", itemList.read)
router.get("/:id", itemList.update)
router.post("/:id", itemList.updatePost)

module.exports = router
