Package.describe({
    name: 'nerdmed:ios-listview',
    version: '0.0.1',

    // Brief, one-line summary of the package.
    summary: 'A simple ios style list view',

    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/nerdmed/ios-listview.git',

    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use(['less@2.5.0', 'templating'], 'client');
    api.addFiles(['ios-listview.html', 'ios-listview.js', 'ios-listview.less'], 'client');
});
