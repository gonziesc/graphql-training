const {
  getOrders: getOrdersFromDb,
  create,
  getOrder: getOrderFromDb,
  getOrderVariants,
  calculateTotalAmount,
  getUser: getUserFromExternalService
} = require('../../interactors/orders');

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

const getVariants = ({ id: orderId }) => getOrderVariants({ orderId });

const getUser = ({ userExternalId }) => getUserFromExternalService(userExternalId);

module.exports = {
  Mutation: {
    order: createOrder
  },
  Query: {
    orders: getOrders,
    order: getOrder
  },
  Order: {
    variants: getVariants,
    user: getUser
  }
};
