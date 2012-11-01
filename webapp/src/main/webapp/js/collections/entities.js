define([
    'models/entity',
    'underscore',
    'backbone'
], function(EntityModel){
    var EntitiesCollection = Backbone.Collection.extend({
        model: EntityModel,
        initialize: function(){

        }

    });

    return EntitiesCollection;
});

