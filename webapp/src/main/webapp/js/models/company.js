define([
    'collections/entities',
    'models/entity',
    'underscore',
    'backbone',
    'backboneRelational'
], function( EntitiesCollection, EntityModel) {
    var CompanyModel = Backbone.RelationalModel.extend({

        relations: [
            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'entities',
                relatedModel: EntityModel,
                collectionType: EntitiesCollection,
                collectionOptions: function( instance ) { return { 'url':'services/internal/manager/companies/' + instance.id + '/entities'  } }

            }
        ],
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