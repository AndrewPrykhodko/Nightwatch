const Products = require('../../book/products.page.js');

const products = new Products();
const testSet = new Map();

testSet.set('products -> createProduct',
[
  function () {return 'open create product'; },
  async function (browser) {
    await products.waitUntilPresent(browser, 'createP');
    await products.clickElement(browser, 'createP');
  },
])

testSet.set('status',
[
  function () {return 'on product page'; },
  async function (browser) {
    await products.pagePresent(browser);
    browser.expect.url().to.endWith(products.url);
  },
])

testSet.set('notification product added',
[
  function () {return 'notification: The product was succesfully added!'; },
  function (browser) {
    products.notification.catchNotification(browser);
    browser.expect
      .element(products.notification.getElement('notification')).to.be.visible;
    browser.expect
      .element(products.notification.getElement('notification'))
      .text.to.contain('The product was succesfully added!').before(0);
    browser.expect
      .element(products.notification.getElement('notification'))
      .to.not.be.present.after(browser.globals.waiterTime);
  },
])

module.exports = testSet;
