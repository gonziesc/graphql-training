const { Variant } = require('../models');

const getVariants = params => {
  const where = params && { ...params };
  return Variant.findAll({ where });
};

const getSumOfVariantPrices = variantsIds => Variant.sum('price', { where: { id: variantsIds } });

module.exports = { getSumOfVariantPrices, getVariants };
