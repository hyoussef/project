// Filename: views/projects/list
define([
    'models/contact',
    'text!templates/contact/contact.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'viewModel/contactVwModel'

], function (contact,contactViewTemplate, ko) {

    var projectView = Backbone.View.extend({
        //el:$("#projects"),

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new contactVwModel(self.model).view_model;
            self.render();
        },


        render:function () {
            var self = this;
            self.$el = $(contactViewTemplate);
            self.$el.attr('id', self.id);

            ko.applyBindings(self.view_model, self.$el[0]);
            self.$el.popup({ history: false }).trigger('create');
        },

        open : function(selector){
            var self = this;
            self.$el.popup('open', { history: false, positionTo:selector });
        }
    });
    return projectView;
});

