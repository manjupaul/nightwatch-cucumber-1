var jupiterShoppingPageCommands = {

    selectProduct: function (productName) {
        return this.api
            .useXpath()
            .waitForElementVisible("//div/h4[contains(text(),'"+productName+"')]/following-sibling::p//a", 2000)
            .click("//div/h4[contains(text(),'"+productName+"')]/following-sibling::p//a")
            .useCss()
    },

}

module.exports = {
    commands: [jupiterShoppingPageCommands],
    elements: {
        body: 'body',
    }
}
