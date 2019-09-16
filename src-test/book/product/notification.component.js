const Page = require('../page.class')

class Notification extends Page {
  constructor() {
    super({
      selectors: {
        notification: {
          selector: 'div.v-snack__content',
          locateStrategy: 'css selector'
        },
      },
    })
  }

  catchNotification(browser) {
    return this.waitUntilPresent(browser, 'notification');
  }
}

module.exports = Notification;
