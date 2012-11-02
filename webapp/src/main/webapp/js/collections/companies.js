define([
    'models/company',
    'underscore',
    'backbone'
], function(CompanyModel){
    var CompaniesCollection = Backbone.Collection.extend({
        model: CompanyModel,
        url : "services/internal/manager/companies",
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

