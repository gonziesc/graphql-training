module.exports = (sequelize, DataTypes) => {
  const Variant = sequelize.define(
    'Variant',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      tableName: 'variants',
      underscored: true
    }
  );

  Variant.associate = models => {
    Variant.belongsToMany(models.Order, {
      through: 'OrderVariants',
      as: 'orders',
      foreignKey: 'variantId'
    });
  };

  Variant.prototype.updateModel = props => this.update(props);

  return Variant;
};
