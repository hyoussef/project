define([
    'collections/entities',
    'models/entity',
    'underscore',
    'backbone'
], function( EntitiesCollection, EntityModel) {
    var CompanyModel = Backbone.Model.extend({
        defaults: {
            name: "any",
            adresse : "9 rue des reservoirs, Joinville le pont",
            entities : new EntitiesCollection()
        },
        initialize: function(){
            var entities = this.get('entities');
            this.entities = new EntitiesCollection(entities);
        }

    });
    return CompanyModel;

});