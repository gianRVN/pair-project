const { Item, User, UserItem } = require('../models')
const exchange = require('../helpers/index')

class Controller{
    static getListItem(req, res){
        Item.findAll({
            where: {
                status: true 
            }
        })
        .then(data => {
            res.render('seller/listItem', {data, exchange})
        })
        .catch(err => {
            res.send(err)
        })
    }
    static getItem(req,res){
        res.render('seller/items-add')
    }
    static postItem(req,res){
        // res.send(req.body)
        let newItem = {
            name:req.body.name,
            price:req.body.price,
            type:req.body.type,
            kelengkapan_barang:req.body.kelengkapan_barang,
            keterangan_barang:req.body.keterangan_barang
        }
        Item.create(newItem)
        .then(() => {
            res.redirect('/items')
        })
        .catch(err => {
            if (err.name === "SequelizeValidationError") {
                let error = err.errors.map(e => e.message)
                res.send(error)
            } else {
                res.send(err)
            }
        })
    }

    static deleteItem(req, res) {
        let id = req.params.id

        Item.destroy({
            where: {
                id: id
            }
        })
        .then(data => {
            res.redirect('/items/')
        })
        .catch(err => {
            res.send(err)
        })
    }

    static editItem(req, res){
        let id = req.params.id
        Item.findByPk(id)
        .then(data => {
            res.render('seller/item-edit', {item:data})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static updateItem(req, res){
        let itemId = req.params.id
        let newItem = {
            name:req.body.name,
            price: req.body.price,
            type:req.body.type,
            kelengkapan_barang:req.body.kelengkapan_barang,
            keterangan_barang:req.body.keterangan_barang,
            status:req.body.status
        }
        Item.update(newItem, {
            where: {
                id: itemId
            }
        })
        .then(data => {
            res.redirect('/items/')
        })
        .catch(err => {
            res.send(err.stack)
        })
    }
    static disabledItem(req, res) {
        const id  = req.params.id
        Item.findByPk(id)
        .then(data => {
            data.status = false
            return data.save({validate:false})
        })
        .then(() => {
            res.redirect('/items/')
        })
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller