module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        allowNull: false
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      userExternalId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'orders',
      underscored: true
    }
  );

  Order.associate = models => {
    Order.belongsToMany(models.Variant, {
      through: 'OrderVariants',
      as: 'variants',
      foreignKey: 'orderId'
    });
  };

  Order.getAll = () => Order.findAll();

  Order.prototype.updateModel = props => this.update(props);

  return Order;
};
