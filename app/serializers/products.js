const mapProducts = ({ products, page, limit }) => {
  const totalCount = products.count;
  const currentCount = products.rows.length;
  const totalPages = Math.ceil((totalCount || 1) / limit);
  const nextPage = page >= totalPages ? page : page + 1;
  return {
    products: products.rows.map(p => p.dataValues),
    total_count: totalCount,
    current_count: currentCount,
    total_pages: totalPages,
    next_page: nextPage,
    current_page: page
  };
};

module.exports = { mapProducts };
