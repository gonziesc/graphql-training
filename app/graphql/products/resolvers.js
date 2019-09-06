const { getProducts: getProductsFromDb } = require('../../services/users');
const { mapUsers } = require('../../mappers/users');

const getProducts = (_, params) => getProductsFromDb(params).then(mapUsers);

module.exports = {
  Query: {
    products: getProducts
  }
};
