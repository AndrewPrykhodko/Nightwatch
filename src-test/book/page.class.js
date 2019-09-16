class Page {
  constructor(object) {
    Object.assign(this, object);
  }

  getElement(key) {
    return this.selectors[key];
  }

  getWebElement(browser, key) {
    return browser.element(this.selectors[key]);
  }

  waitUntilPresent(browser, key) {
    return browser.waitForElementPresent(
      this.selectors[key],
      browser.globals.waiterTime
    );
  }

  enterValue(browser, key, value) {
    return browser.setValue(this.selectors[key], value);
  }

  clickElement(browser, key) {
    return browser.click(this.selectors[key]);
  }

  pagePresent(browser) {
    return browser.waitForElementPresent(
      'body',
      browser.globals.waiterTime
    );
  }
}

module.exports = Page;
