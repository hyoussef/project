define([
    'collections/entities',
    'underscore',
    'backbone'

], function( EntitiesCollection) {
    var CompanyModel = Backbone.Model.extend({
        defaults: {
            name: "any",
            adresse : "9 rue des reservoirs, Joinville le pont",
            entities : new EntitiesCollection()
        },
        initialize: function(){
        }

    });
    return CompanyModel;

});