const { getProducts: getProductsFromDb } = require('../../services/products');
const { getVariants: getVariantsFromDb } = require('../../services/variants');
const { mapProducts } = require('../../serializers/products');

const getProducts = (_, { page, limit, filter }) => {
  const offset = (page - 1) * limit;
  const where = filter ? { where: filter } : {};
  return getProductsFromDb({ limit, offset, where }).then(products => mapProducts({ products, page, limit }));
};

const getVariants = ({ id: productId }) => getVariantsFromDb({ productId });

module.exports = {
  Query: {
    products: getProducts
  },
  Product: {
    variants: getVariants
  }
};
