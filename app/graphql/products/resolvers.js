const { getProducts: getProductsFromDb } = require('../../services/products');

const getProducts = (_, params) => getProductsFromDb(params);

module.exports = {
  Query: {
    products: getProducts
  }
};
