const { Order, Variant, OrderVariants } = require('../models');

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

module.exports = { getOrders, create };
