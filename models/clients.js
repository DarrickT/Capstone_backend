'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
      // this.belongsTo(models.users, { foreignKey: 'userId' })
    }
  }
  clients.init(
    {
      fullName: { type: DataTypes.STRING, allowNull: false },
      // contact: { type: DataTypes.INTEGER, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATEONLY, allowNull: false },
      // userId: {
      //   type: DataTypes.INTEGER,
      //   allowNull: true,
      //   references: {
      //     model: 'users',
      //     key: 'id'
      //   }
      // },
      subscriptionType: { type: DataTypes.INTEGER, allowNull: false },
      paymentAmount: { type: DataTypes.DECIMAL, allowNull: false }
    },
    {
      sequelize,
      modelName: 'clients',
      underscored: true
    }
  )
  return clients
}
