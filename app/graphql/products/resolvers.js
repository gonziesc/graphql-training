const { getProducts: getProductsFromDb } = require('../../services/products');
const { mapProducts } = require('../../serializers/products');
const Sequelize = require('sequelize');

const getProducts = (_, { page, limit, filter }) => {
  const offset = (page - 1) * limit;
  const where = { where: {} };

  for (const filterField in filter.where) {
    if (filterField) {
      where.where[filterField] = filter.where[filterField];
    }
  }

  for (const filterField in filter.like) {
    if (filterField) {
      where.where[filterField] = { [Sequelize.Op.substring]: filter.like[filterField] };
    }
  }
  return getProductsFromDb({ limit, offset, where }).then(products => mapProducts({ products, page, limit }));
};

module.exports = {
  Query: {
    products: getProducts
  }
};
