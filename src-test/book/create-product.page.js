const Page = require('./page.class')

class CreateProduct extends Page {
  constructor() {
    super({
      selectors: {
        name: {
          selector: 'input[aria-label="Name"]',
          locateStrategy: 'css selector'
        },
        description: {
          selector: 'input[aria-label="Description"]',
          locateStrategy: 'css selector'
        },
        save: {
          selector: 'button.success',
          locateStrategy: 'css selector'
        },
        error: {
          selector: 'div.v-messages__message',
          locateStrategy: 'css selector'
        }
      },
      url: '/products/create',
  })
  }
}

module.exports = CreateProduct;
