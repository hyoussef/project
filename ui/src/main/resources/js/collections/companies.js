define([
    'models/company',
    'underscore',
    'backbone'
], function(CompanyModel){
    var CompaniesCollection = Backbone.Collection.extend({
        url: function( models ) {
            // Logic to create a url for the whole collection, or a set of models.
            // See the tests, or Backbone-tastypie, for an example.
            return 'http://89.2.87.236:8585/webapp/services/internal/manager/companies/';
        },
        model: CompanyModel,
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

