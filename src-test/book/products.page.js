const Page = require('./page.class')
const Notification = require('./product/notification.component');
const nightPromised = require('../helpers/promise.helper');

class Product extends Page {
  constructor() {
    super({
      selectors: {
        createP: {
          selector: 'a[href="/products/create"]',
          locateStrategy: 'css selector'
        },
        deleteP: {
          selector: '//[@name="q"]',
          locateStrategy: 'xpath'
        },
        updateP: {
          selector: '//[@name="q"]',
          locateStrategy: 'xpath'
        },
        description: {
          selector: '// th [contains(@class,"sortable") and contains(.,"Descriprion")]',
          locateStrategy: 'xpath'
        },
        name: {
          selector: '// th [contains(@class,"sortable") and contains(.,"Name")]',
          locateStrategy: 'xpath'
        },
        cell: {
          selector: '// tr / td',
          locateStrategy: 'xpath'
        },
      },
      url: '/products',
      sorting: {
        attribute: 'aria-sort',
      }
    });
  this.notification = new Notification();
  }

  async getCellsByKey(browser, field) {
    const totalColumns = 4;
    const column = this.getColumnbyKey(field);
    const cells = await nightPromised.elements(browser, this.selectors.cell);
    return cells.filter((cell, i) => i%totalColumns === column);
  }

  getColumnbyKey(field) {
    if(field === 'name') return 1;
    else return 2;
  }
}

module.exports = Product;
