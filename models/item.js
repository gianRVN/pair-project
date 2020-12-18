'use strict';
const { Instance } = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsToMany(models.User, {
        through: models.UserItem
      })
    }
  };
  Item.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg:"Nama product harus ada"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        min:{
          args:100000,
          msg:"Harga barang minimal IDR 100.000"
        }
      }
    },
    type: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg:"Type Produk harus ada"
        }
      }
    },
    kelengkapan_barang: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg:"Deskripsi kelengkapan barang harus ada"
        }
      }
    },
    keterangan_barang: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          msg:"Deskripsis keterangan harus ada"
        }
      }
    },
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Item',
  });

  Item.addHook("beforeCreate", (instance,options)=> {
    instance.status = true
  })


  return Item;
};