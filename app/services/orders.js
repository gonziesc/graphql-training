const { Order, OrderVariants } = require('../models');
const errors = require('../errors');

const getOrders = ({ limit, offset }) =>
  Order.findAndCountAll({
    limit,
    offset
  });

const create = ({ order, variants }) =>
  Order.create(order).then(orderCreated =>
    Promise.all(
      variants.map(variant =>
        OrderVariants.create({
          variantId: variant,
          orderId: orderCreated.id
        })
      )
    ).then(() => orderCreated)
  );

const getOrder = ({ id }) =>
  Order.findOne({
    where: { id }
  })
    .then(order => {
      if (!order) {
        throw errors.notFound(`order with id ${id} not found`);
      }
      return order;
    })
    .catch(error => {
      throw errors.databaseError(`${error.name}: ${error.message}`);
    });

const getOrderVariantsIds = ({ orderId }) =>
  OrderVariants.findAll({ where: { order_id: orderId } })
    .then(variants => variants.map(({ variantId }) => variantId))
    .catch(error => {
      throw errors.databaseError(`${error.name}: ${error.message}`);
    });

module.exports = { getOrders, create, getOrder, getOrderVariantsIds };
