Template.iosListView.helpers({
    get: function(prop) {
        var data = Template.currentData();
        if (prop === 'title') {
            return _.isString(this) ? this.valueOf() : this.title;
        }

        if (prop === 'class') {
            return _.isObject(this) && this.class;
        }
    }
});
