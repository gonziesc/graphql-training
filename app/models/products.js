module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      vendor: {
        type: DataTypes.STRING,
        allowNull: false
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'products',
      underscored: true
    }
  );

  Product.associate = models => {
    Product.hasMany(models.Variant, { as: 'variants' });
  };

  Product.getAll = () => Product.findAll();

  Product.prototype.updateModel = props => this.update(props);

  return Product;
};
