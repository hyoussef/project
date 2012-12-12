// Filename: views/projects/list
define([
    'collections/projects',
    'text!templates/projects/list.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile',
    'viewModel/projectsViewModel'
], function (ProjectsCollection,projectListTemplate, ko) {

    var projectListView = Backbone.View.extend({
        //el:$("#projects"),

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new ProjectsViewModel(this.collection );
        },

        render:function () {
            var self = this;
            self.$el = $(projectListTemplate);
            self.$el.attr('id', self.id);
            ko.applyBindings(self.view_model, self.$el[0]);
            self.$el.trigger('create');
        }
    });
    return projectListView;
});
