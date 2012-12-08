// Filename: views/projects/list
define([
    'collections/entities',
    'text!templates/entities/entity.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile',
    'viewModel/entitiesVwModel'
], function (CompaniesCollection,entitiesListTemplate, ko) {

    var companiesListView = Backbone.View.extend({
        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new EntitiesVwModel(this.collection );
            self.render();

        },


        render:function () {
            var self = this;
            self.$el = $(entitiesListTemplate);
            self.$el.attr('id', self.id);
            ko.applyBindings(self.view_model, self.$el[0]);
            self.$el.trigger('create');
        }
    });
    return companiesListView;
});
