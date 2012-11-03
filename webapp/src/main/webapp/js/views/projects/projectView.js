// Filename: views/projects/list
define([
    'models/projects',
    'text!templates/projects/projectView.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'viewModel/singleProjectVwModel'

], function (project,projectViewTemplate, ko) {

    var projectView = Backbone.View.extend({
        //el:$("#projects"),

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new SingleProjectViewModel(self.model);
            self.render();
        },


        render:function () {
            var self = this;
            self.$el = $(projectViewTemplate);
            self.$el.attr('id', self.id);
            ko.applyBindings(self.view_model, self.$el[0]);


        }
    });
    return projectView;
});

