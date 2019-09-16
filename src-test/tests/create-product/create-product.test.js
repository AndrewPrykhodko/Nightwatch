const createSet = require('./create-product.set');

exports.execute = data => [
  'status',
  'product name',
  'product description',
  'save'
].map(key => {
  const [name, test] = createSet.get(key);
  return it(name.call(this), browser => test.call(data, browser))
})
