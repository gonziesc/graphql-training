const { getOrders: getOrdersFromDb, create, getOrder } = require('../services/orders');
const { getUsers } = require('../services/users');
const { mapOrders } = require('../serializers/orders');

const getOrders = ({ limit, offset }) =>
  getOrdersFromDb({ limit, offset }).then(orders =>
    getUsers().then(users =>
      mapOrders({
        limit,
        offset,
        orders,
        users: users.filter(user => orders.rows.map(order => order.userExternalId).includes(user.id))
      })
    )
  );

module.exports = { getOrders, create, getOrder };
