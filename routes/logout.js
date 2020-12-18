const express = require("express")
const router = express.Router()
const logout = require('../controllers/logout.js')

router.get("/", logout.out)

module.exports = router
