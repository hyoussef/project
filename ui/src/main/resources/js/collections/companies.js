define([
    'models/company',
    'underscore',
    'backbone'
], function(CompanyModel){
    var CompaniesCollection = Backbone.Collection.extend({
        url: function( models ) {
            // Logic to create a url for the whole collection, or a set of models.
            // See the tests, or Backbone-tastypie, for an example.
            var url = ''
            if(conf.allowCrossDomainPages){
                console.log("models will use absolute root");
                url = conf.root + 'services/internal/manager/companies/';
            }else{
                url = 'services/internal/manager/companies/'
            }

            return url;
        },
        model: CompanyModel,
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

