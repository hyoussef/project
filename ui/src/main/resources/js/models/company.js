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
                collectionOptions: function( instance ) { return { 'url':conf.root + 'services/internal/manager/companies/' + instance.id + '/entities'  } } ,
                reverseRelation: {
                    key: 'fromCompany'
                }
            }
        ],
        /*defaults: {
            name: "any",
            adresse : "9 rue des reservoirs, Joinville le pont",
            entities : {}
        },*/
        initialize: function(){
        }

    });
    return CompanyModel;

});