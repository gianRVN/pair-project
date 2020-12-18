const express = require("express")
const router = express.Router()
const itemList = require("./itemlist.js")
const register = require("./register.js")
const login = require("./login.js")
const logout = require("./logout.js")
const item = require("./item.js")

const checkMiddleware = (req, res, next) => {
  if(req.session.userId){
    next()
  } else {
    res.redirect('/login')
  }
}

router.use("/itemlist", checkMiddleware, itemList)

router.use("/items", checkMiddleware, item)

router.use("/register", register)

router.use("/login", login)

router.use("/logout", checkMiddleware, logout)

router.get("/", (req, res) => {
  res.render("home")
})




module.exports = router
