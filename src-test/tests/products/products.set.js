const Products = require('../../book/products.page.js');
const defSorting = require('../../helpers/sorting.helper').defSort;
const sortAsc = require('../../helpers/sorting.helper').sortBy;
const sortDesc = require('../../helpers/sorting.helper').reversedSortBy;
const paginator = require('../../helpers/pagination.helper').itemsOnPage;
const nightPromised = require('../../helpers/promise.helper');
const { expect } = require('chai');
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

testSet.set('sort',
[
  function (field) {return `change sorting preferences by ${field}`; },
  async function (browser) {
    products.clickElement(browser, this.field);
  },
])

testSet.set('sorting is disabled',
[
  function (field) {return `sorting by ${field} is disabled`; },
  async function (browser) {
    browser.expect.element(products.getElement(this.field))
      .to.have.attribute(products.sorting.attribute)
      .equals('none');
  paginator(defSorting());
  },
])

testSet.set('sorting ascending',
[
  function (field) {return `sorting by ${field} ascending`; },
  async function (browser) {
    browser.expect.element(products.getElement(this.field))
      .to.have.attribute(products.sorting.attribute)
      .equals('ascending');
    await products.pagePresent(browser);
    cells = await products.getCellsByKey(browser, this.field);
    await nightPromised.waitAllVisible(browser, cells);
    const content = await Promise.all(cells.map(cell =>
      nightPromised.getText(browser, cell)));
    expect(content).to.have.ordered.members(paginator(sortAsc(this.field)));
  },
])

testSet.set('sorting descending',
[
  function (field) {return `sorting by ${field} descending`; },
  async function (browser) {
    browser.expect.element(products.getElement(this.field))
      .to.have.attribute(products.sorting.attribute)
      .equals('descending');
      await products.pagePresent(browser);
      cells = await products.getCellsByKey(browser, this.field);
      await nightPromised.waitAllVisible(browser, cells);
      const content = await Promise.all(cells.map(cell =>
        nightPromised.getText(browser, cell)));
      expect(content).to.have.ordered.members(paginator(sortDesc(this.field)));
  },
])

module.exports = testSet;
