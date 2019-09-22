const { Product } = require('../models');

const getProducts = ({ limit, offset, where }) => Product.findAndCountAll({ limit, offset, ...where });

module.exports = { getProducts };
