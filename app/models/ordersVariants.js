module.exports = (sequelize, DataTypes) => {
  const OrderVariants = sequelize.define(
    'OrderVariants',
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Order',
          key: 'id'
        }
      },
      variantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Variant',
          key: 'id'
        }
      }
    },
    {
      tableName: 'order_variants',
      underscored: true
    }
  );

  return OrderVariants;
};
