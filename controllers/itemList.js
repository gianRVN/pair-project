const { Item, User, Useritem, Sequelize} = require("../models/index.js")
const { Op } = require("sequelize");

class Controller{
    static read(req, res){
        Item.findAll()
        .then(data => {
            res.render('../views/itemList.ejs', {data})
        })

        .catch(err => {
            res.send(err)
        })
    }

    static update(req, res){
        Item.findByPk(+req.params.id)
        .then(data =>  {
            res.render('../views/updatebid.ejs', {data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updatePost(req, res){
            Item.findByPk(+req.params.id)
            .then(data => {               
                if(data.price > +req.body.price){
                    res.send("Harga harus lebih besar")
                } else {
                    return Item.update({
                        price:+req.body.price,
                        updatedAt:new Date()
                    },
                    {
                        where: {
                            id:+req.params.id
                        },
                    })
                    .then(data => {
                        res.redirect("/itemlist")
                    })
                    .catch(err => {
                        res.send(err.stack)
                    })
                }       
        })
    }
}

module.exports = Controller