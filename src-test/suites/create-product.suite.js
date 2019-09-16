const Products = require('../facade/products.facade');
const Create = require('../facade/create.facade');
const validProducts = require('../data/create-products');

validProducts.map(product => describe(`Create Product -> ${product.name}`, function() {
    before(async (browser, done) => {
      await browser.url(browser.launchUrl);
      done();
    });

    Products.openCreatePage();
    Create.newProduct(product);
    Products.addedSuccessfuly();
}));
