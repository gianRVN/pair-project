'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserItems', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'custom_user_id_fk',
      references: { //Required field
        table: 'Users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserItems', 'custom_user_id_fk')
  }
};
