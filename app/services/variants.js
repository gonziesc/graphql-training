const { Variant } = require('../models');

const calculateTotalAmount = variants =>
  Variant.findAll({ where: { id: variants } }).then(variantsResponse =>
    variantsResponse.map(variant => variant.dataValues.price).reduce((a, b) => a + b, 0)
  );

module.exports = { calculateTotalAmount };
