module.exports = {
    'Generating Html Report' : function (browser) {
        const report = require('cucumber-html-report');
        report.create({
            source:       './reports/cucumber.json',      // source json
            dest:         './reports',                   // target directory (will create if not exists)
            name:         'cucumber_report.html',                 // report file name (will be index.html if not exists)
            title:        'Cucumber Report',             // Title for default template. (default is Cucumber Report)
        })
            .then(console.log)
            .catch(console.error);
    }
};