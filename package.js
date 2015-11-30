Package.describe({
    name: 'nerdmed:ios-listview',
    version: '0.1.0',
    summary: 'A simple ios style list view',
    git: 'https://github.com/nerdmed/ios-listview.git'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2.1');
    api.use(['less', 'templating'], 'client');
    api.addFiles(['ios-listview.html', 'ios-listview.js', 'ios-listview.less'], 'client');
});
