define([
    'models/company',
    'underscore',
    'backbone'
], function(CompanyModel){
    var CompaniesCollection = Backbone.Collection.extend({
        url: function( models ) {
            // Logic to create a url for the whole collection, or a set of models.
            // See the tests, or Backbone-tastypie, for an example.
            return 'services/internal/manager/companies/' + ( models ? _.pluck( models, 'id' ).join(';') + '/' : '' );
        },
        model: CompanyModel,
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

