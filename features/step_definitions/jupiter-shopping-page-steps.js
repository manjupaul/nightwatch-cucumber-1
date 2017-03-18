const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

defineSupportCode(({Given, Then, When, And}) => {

    When(/^I add the product ([^"]*) to cart$/, (product) => {
        return client
            .page.jupiterShoppingPage().selectProduct(product)
    })

})