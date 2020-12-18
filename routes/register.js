const express = require("express")
const router = express.Router()
const register = require('../controllers/register.js')

router.get("/", register.form)
router.post("/", register.formPost)


module.exports = router
