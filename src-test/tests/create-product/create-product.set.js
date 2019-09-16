const CreateProduct = require('../../book/create-product.page.js');

const createProduct = new CreateProduct();
const testSet = new Map();

testSet.set('product name',
[
  function () {return 'enter product name'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'name'),
    await createProduct.enterValue(browser, 'name', this.name);
  },
])

testSet.set('product description',
[
  function () {return 'enter product description'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'description'),
    await createProduct.enterValue(browser, 'description', this.description);
  },
])

testSet.set('save',
[
  function () {return 'save product'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'save'),
    await createProduct.clickElement(browser, 'save');
  },
])

testSet.set('status',
[
  function () {return 'on create product page'; },
  async function (browser) {
    await createProduct.pagePresent(browser);
    browser.expect.url().to.endWith(createProduct.url)
  },
])

testSet.set('required name',
[
  function () {return 'error: Name is required'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'error'),
    browser.expect
      .element(createProduct.getElement('error'))
      .text.to.contain('Name is required').before(0);
  },
])

testSet.set('required description',
[
  function () {return 'error: Description is required'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'error'),
    browser.expect
      .element(createProduct.getElement('error'))
      .text.to.contain('Description is required').before(0);
  },
])

testSet.set('exceeding name',
[
  function () {return 'error: Name must be less than 50 characters'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'error'),
    browser.expect
      .element(createProduct.getElement('error'))
      .text.to.contain('Name must be less than 50 characters').before(0);
  },
])

testSet.set('exceeding description',
[
  function () {return 'error: Description must be less than 250 characters'; },
  async function (browser) {
    await createProduct.waitUntilPresent(browser, 'error'),
    browser.expect
      .element(createProduct.getElement('error'))
      .text.to.contain('Description must be less than 250 characters').before(0);
  },
])

module.exports = testSet;
