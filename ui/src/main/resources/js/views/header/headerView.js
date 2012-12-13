// Filename: views/projects/list
define([
    'models/header',
    'text!templates/header/header.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'viewModel/headerVwModel'

], function (HeaderModel,headerTemplate, ko) {

    var HeaderView = Backbone.View.extend({

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new HeaderVwModel(self.model);
            self.render();
        },


        render:function () {
            var self = this;
            self.$el = $(headerTemplate);
            self.$el.attr('id', self.id);
            ko.applyBindings(self.view_model, self.$el[0]);
            self.$el.trigger('create');

        }

    });
    return HeaderView;
});

