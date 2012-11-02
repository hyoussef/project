define([
    'models/entity',
    'underscore',
    'backbone'
], function(EntityModel){
    var EntitiesCollection = Backbone.Collection.extend({
        model: EntityModel,
        url:"entities",
        initialize: function(){

        }

    });

    return EntitiesCollection;
});

