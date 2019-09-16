const Page = require('./page.class')
const Notification = require('./product/notification.component');

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
        }
      },
      url: '/products',
    });
  this.notification = new Notification();
  }
}

module.exports = Product;
