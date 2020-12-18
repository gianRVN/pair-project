const { User } = require("../models/index")
const bcrypt = require('bcryptjs')

class UserController {
    static form(req,res){
        res.render("../views/loginForm.ejs")
    }

    static formPost(req,res){
        User.findOne({
            where: {
                username: req.body.username
            }
        })
        .then(user => {
            if(user) {
                const isValidPassword = bcrypt.compareSync(req.body.password, user.password)

                if(isValidPassword){
                    req.session.userId = user.id
                    res.redirect('/')
                } else {
                    res.send("Username dan Password invalid")
                }
            } else {
                res.send("user tidak ada di database")
            }
        })
    }
}

module.exports = UserController