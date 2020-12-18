const { User, Sequelize } = require("../models/index")
const nodemailer = require('nodemailer'); 

class UserController {
    static form(req,res){
        res.render("../views/registerForm.ejs")
    }

    static formPost(req,res){
        User.create({
            username:req.body.username,
            password:req.body.password,
            email: req.body.email,
            phone_number: req.body.phone_number
        })
        .then(data => {

            async function main() {
                let transporter = nodemailer.createTransport({
                  service:'gmail',
                  auth: {
                    user: "joebidding2000@gmail.com", 
                    pass: "Sequelize.Joe" 
                  },
                });
              
                let info = await transporter.sendMail({
                  from: 'joebidding2000@gmail.com', 
                  subject: "Hello, Bidders! ✔", 
                  text: "Welcome To Joe Bidding!!!", 
                  html: "<b>Welcome To Joe Bidding!!!</b>", 
                });
              
                console.log("Message sent: %s", info.messageId);
              
                console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
              }
              
              main().catch(console.error);
              
            res.redirect('/login')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = UserController