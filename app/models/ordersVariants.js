module.exports = (sequelize, DataTypes) => {
  const OrderVariants = sequelize.define(
    'OrderVariants',
    {
      orderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      variantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Variant',
          key: 'id'
        },
        primaryKey: true
      }
    },
    {
      tableName: 'order_variants',
      underscored: true
    }
  );

  return OrderVariants;
};
