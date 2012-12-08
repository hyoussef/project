define([
    'models/contact',
    'underscore',
    'backbone'
], function(ContactModel){
    var CompaniesCollection = Backbone.Collection.extend({

        model: ContactModel,
        initialize: function(){

        }

    });

    return CompaniesCollection;
});

