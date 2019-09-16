const createSet = require('./create-product.set');

exports.execute = data => [
  'status',
  'required name',
].map(key => {
  const [name, test] = createSet.get(key);
  return it(name.call(this), browser => test.call(data, browser))
})
