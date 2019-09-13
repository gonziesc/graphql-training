const { Order, Variant, OrderVariants } = require('../models');
const errors = require('../errors');

const getOrders = ({ limit, offset }) =>
  Order.findAndCountAll({
    limit,
    offset,
    include: [{ model: Variant, as: 'variants' }],
    through: { attributes: [] }
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
    where: { id },
    include: [{ model: Variant, as: 'variants' }],
    through: { attributes: [] }
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

module.exports = { getOrders, create, getOrder };
