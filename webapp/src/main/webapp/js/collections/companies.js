define([
    'models/company',
    'underscore',
    'backbone'
], function(CompanyModel){
    var CompaniesCollection = Backbone.Collection.extend({
        model: CompanyModel,
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

