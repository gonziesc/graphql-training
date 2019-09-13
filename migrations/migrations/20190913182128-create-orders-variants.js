'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('order_variants', {
      order_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      variant_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    }),

  down: queryInterface => queryInterface.dropTable('order_variants')
};
