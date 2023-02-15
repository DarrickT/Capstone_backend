'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      // contact: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false
      // },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   allowNull: false,
      //   references: {
      //     model: 'users',
      //     key: 'id'
      //   }
      // },
      subscription_type: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      payment_amount: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('clients')
  }
}
