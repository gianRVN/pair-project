const { User } = require("../models/index")
const bcrypt = require('bcryptjs')

class UserController {
    static out(req,res){
        delete req.session.userId
        res.redirect("/login")
    }
}

module.exports = UserController