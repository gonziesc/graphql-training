const { getProducts: getProductsFromDb } = require('../../services/products');
const { mapProducts } = require('../../serializers/products');

const getProducts = (_, { page, limit }) => {
  const offset = (page - 1) * limit;
  return getProductsFromDb({ limit, offset }).then(products => mapProducts({ products, page, limit }));
};

module.exports = {
  Query: {
    products: getProducts
  }
};
