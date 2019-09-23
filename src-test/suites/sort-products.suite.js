const Products = require('../facade/products.facade');
const sortKeys = ['name', 'description'];

sortKeys.map(field => describe(`sorting products by ${field}`, function() {
    before(async (browser, done) => {
      await browser.url(browser.launchUrl);
      done();
    });

    Products.sorting(field);
}));
