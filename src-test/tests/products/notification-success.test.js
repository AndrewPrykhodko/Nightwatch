const productSet = require('./products.set.js');

exports.execute = () => [
  'status',
  'notification product added',
].map(key => {
  const [name, test] = productSet.get(key);
  return it(name(), browser => test.call(null, browser))
})
