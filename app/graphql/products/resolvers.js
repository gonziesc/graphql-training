const { getProducts: getProductsFromDb } = require('../../services/products');
const { mapProducts } = require('../../serializers/products');

const getProducts = (_, { page, limit, filter }) => {
  const offset = (page - 1) * limit;
  return getProductsFromDb({ limit, offset, filter }).then(products =>
    mapProducts({ products, page, limit })
  );
};

module.exports = {
  Query: {
    products: getProducts
  }
};
