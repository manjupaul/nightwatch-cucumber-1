var jupiterBasePageCommands = {

    maximizeWindow: function(){
        this
          .waitForElementVisible('@body', 5000)

        return this.api
            .windowMaximize()
    },

    navigateToContactPage: function() {
        return this
            .waitForElementVisible('@contactPageLink', 1000)
            .click('@contactPageLink')
    },

    navigateToLoginPage: function() {
        return this.api
            .click('link text','Login')
    },

    navigateToShoppingPage: function() {
        return this
            .waitForElementVisible('@shopPageLink', 2000)
            .click('@shopPageLink')
    },

    navigateToCartPage: function() {
        return this
            .waitForElementVisible('@cartPageLink', 2000)
            .click('@cartPageLink')
    },

}

module.exports = {
    url: 'http://jupiter.cloud.planittesting.com/#/',
    elements: {
        body: 'body',
        contactPageLink: "a[href$='contact']",
        loginPageLink: {
            selector: 'Login',
            locateStrategy: 'link text'
        },
        shopPageLink: "a[href$='shop']",
        cartPageLink: "a[href$='cart']"
    },
    commands: [jupiterBasePageCommands]
}
