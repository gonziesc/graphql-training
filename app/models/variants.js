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
      }
    },
    {
      tableName: 'variants',
      underscored: true
    }
  );

  Variant.prototype.updateModel = props => this.update(props);

  return Variant;
};
