const R = require('ramda');
const products = require('../data/create-products');

exports.sortBy = (key) =>
  R.reduce((acc, product) => {
    acc.push(product[key])
    return acc;
  }, [])(products).sort();

exports.reversedSortBy = (key) => exports.sortBy(key).reverse();

exports.defSort = () => products.reverse();
