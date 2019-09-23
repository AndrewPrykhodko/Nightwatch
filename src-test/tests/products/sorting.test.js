const productSet = require('./products.set.js');

exports.execute = (field) => [
  'status',
  'sorting is disabled',
  'sort',
  'sorting ascending',
  'sort',
  'sorting descending',
  'sort',
  'sorting is disabled',
].map(key => {
  const [name, test] = productSet.get(key);
  return it(name(field),
   browser => test.call({ "field": field }, browser))
})
