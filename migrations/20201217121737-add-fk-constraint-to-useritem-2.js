'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserItems', {
      fields: ['item_id'],
      type: 'foreign key',
      name: 'custom_item_id_fk',
      references: { //Required field
        table: 'Items',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('UserItems', 'custom_item_id_fk')
    
  }
};
