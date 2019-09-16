module.exports = {
  newProduct: require('../tests/create-product/create-product.test').execute,
  requiredName: require('../tests/create-product/validation-required-name.test').execute,
  requiredDescription: require('../tests/create-product/validation-required-description.test').execute,
  exceedingName: require('../tests/create-product/validation-length-name.test').execute,
  exceedingDescription: require('../tests/create-product/validation-length-description.test').execute
}
