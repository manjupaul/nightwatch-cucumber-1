var jupiterUserHomePageCommands = {

    selectUserMenu: function () {
        return this
            .waitForElementVisible('@userMenu', 2000)
            .click('@userMenu')
    },

}

module.exports = {
    commands: [jupiterUserHomePageCommands],
    elements: {
        body: 'body',
        userMenu: "a[href$='user']",
        welcomeMessage: 'h1'
    }
}
