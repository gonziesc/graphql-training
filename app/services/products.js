const { Product, Variant } = require('../models');

const getProducts = ({ limit, offset, where }) =>
  Product.findAndCountAll({ include: [{ model: Variant, as: 'variants' }], limit, offset, ...where });

module.exports = { getProducts };
