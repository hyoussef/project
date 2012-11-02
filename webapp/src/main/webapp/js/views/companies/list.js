// Filename: views/projects/list
define([
    'collections/companies',
    'text!templates/companies/list.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile',
    'viewModel/companiesVwModel'
], function (CompaniesCollection,companiesListTemplate, ko) {

    var companiesListView = Backbone.View.extend({
        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            self.view_model = new CompaniesVwModel(this.collection );
            self.render();

        },


        render:function () {
            var self = this;
            self.$el = $(companiesListTemplate);
            self.$el.attr('id', self.id);
            ko.applyBindings(self.view_model, self.$el[0]);
        }
    });
    return companiesListView;
});
