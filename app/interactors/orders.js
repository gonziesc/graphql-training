const { getOrders: getOrdersFromDb, create, getOrder, getOrderVariantsIds } = require('../services/orders');
const { getUser } = require('../services/users');
const { getSumOfVariantPrices, getVariants } = require('../services/variants');
const { mapOrders } = require('../serializers/orders');

const getOrders = ({ limit, offset }) =>
  getOrdersFromDb({ limit, offset }).then(orders =>
    mapOrders({
      limit,
      offset,
      orders
    })
  );

const calculateTotalAmount = variantsIds => getSumOfVariantPrices(variantsIds);

const getOrderVariants = ({ orderId }) =>
  getOrderVariantsIds({ orderId }).then(variantsIds => getVariants({ id: variantsIds }));

module.exports = { getOrders, create, getOrder, getOrderVariants, calculateTotalAmount, getUser };
