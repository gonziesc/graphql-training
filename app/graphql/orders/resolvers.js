const { getOrders: getOrdersFromDb, create, getOrder: getOrderFromDb } = require('../../interactors/orders');
const { calculateTotalAmount } = require('../../services/variants');

const getOrders = (_, { page, limit }) => {
  const offset = (page - 1) * limit;
  return getOrdersFromDb({ limit, offset });
};

const getOrder = (_, { id }) => getOrderFromDb({ id });

const createOrder = async (_, { order }) => {
  const totalAmount = await calculateTotalAmount(order.variants);
  return create({
    order: {
      userExternalId: order.userId,
      deliveryAddress: order.deliveryAddress,
      totalAmount
    },
    variants: order.variants
  });
};

module.exports = {
  Mutation: {
    order: createOrder
  },
  Query: {
    orders: getOrders,
    order: getOrder
  }
};
