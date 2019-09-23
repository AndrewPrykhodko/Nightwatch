const defItemsPerPage = 5;

exports.itemsOnPage = (products, page = 1) => products
  .slice((page - 1) * defItemsPerPage)
  .slice(0, defItemsPerPage);
