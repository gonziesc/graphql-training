const { Variant } = require('../models');

const getVariants = variantsIds => {
  const where = variantsIds && { id: variantsIds };
  return Variant.findAll({ where });
};

const getSumOfVariantPrices = variantsIds => Variant.sum('price', { where: { id: variantsIds } });

module.exports = { getSumOfVariantPrices, getVariants };
