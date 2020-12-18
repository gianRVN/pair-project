'use strict';
const {
  Model
} = require('sequelize');

const {hashPassword} = require('../helpers/bcrypt')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Item, {
        through: models.UserItem
      })
    }
  };
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate(instance, options) {
  
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};