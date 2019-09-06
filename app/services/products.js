const { Product, Variant } = require('../models');

const getProducts = () =>
  Product.findAll({ include: [{ model: Variant, as: 'variants' }] }).then(products =>
    products.map(p => p.dataValues)
  );

module.exports = { getProducts };
