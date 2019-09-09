const { Product, Variant } = require('../models');

const getProducts = ({ limit, offset, filter }) =>
  Product.findAndCountAll({ include: [{ model: Variant, as: 'variants' }], limit, offset, filter });

module.exports = { getProducts };
