const {client} = require('nightwatch-cucumber')
const {defineSupportCode} = require('cucumber')

const jupiter = client.page.jupiterBasePage()

defineSupportCode(({Given, Then, When, And}) => {

    Given(/^I open Jupiter's home page$/, () => {
        return jupiter.api
            .url('http://jupiter.cloud.planittesting.com/#/')
            .refresh()
            .maximizeWindow()
    })

    When (/^I navigate to ([^"]*) page$/, (pageName) => {
        if  (pageName == "login"){
            return jupiter
                .navigateToLoginPage()
        }
        else if (pageName == "shopping")
        {
            return jupiter
                .navigateToShoppingPage()
        }
        else if(pageName == "contact")
        {
            return jupiter
                .navigateToContactPage()
        }
        else if(pageName == "cart")
        {
            return jupiter
                .navigateToCartPage()
        }
    })

})