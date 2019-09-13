const mapOrders = ({ orders, page, limit, users }) => {
  const totalCount = orders.count;
  const currentCount = orders.rows.length;
  const totalPages = Math.ceil((totalCount || 1) / limit);
  const nextPage = page >= totalPages ? page : page + 1;
  return {
    orders: orders.rows.map(o => ({
      ...o.dataValues,
      user: users.find(user => user.id === o.dataValues.userExternalId)
    })),
    total_count: totalCount,
    current_count: currentCount,
    total_pages: totalPages,
    next_page: nextPage,
    current_page: page
  };
};

module.exports = { mapOrders };
