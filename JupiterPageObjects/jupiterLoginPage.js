var jupiterLoginPageCommands = {

    enterUserName: function (username) {
        return this
            .waitForElementVisible('@loginUserName', 1000)
            .setValue('@loginUserName',username)
    },

    enterPassword: function (password) {
        return this
            .waitForElementVisible('@loginPassword', 1000)
            .setValue('@loginPassword',password)
    },

    submit: function () {
        return this
            .waitForElementVisible('@loginButton', 1000)
            .click('@loginButton')
    },

}

module.exports = {
    commands: [jupiterLoginPageCommands],
    elements: {
        body: 'body',
        loginUserName: "#loginUserName",
        loginPassword : '#loginPassword',
        loginButton: '.modal-footer .btn.btn-primary',
        cancelButton: '.modal-footer .btn.btn-cancel',
        loginError: '#login-error',
    }
}
