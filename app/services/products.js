const { Product, Variant } = require('../models');

const getProducts = ({ limit, offset }) =>
  Product.findAndCountAll({ include: [{ model: Variant, as: 'variants' }], limit, offset });

module.exports = { getProducts };
