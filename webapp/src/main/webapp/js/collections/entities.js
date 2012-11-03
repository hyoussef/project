define([
    'models/entity',
    'underscore',
    'backbone'
], function(EntityModel){

    var EntitiesCollection = Backbone.Collection.extend({

        model: EntityModel,

        initialize: function( models, options ) {
            options || (options = {});
            if(options.url !== undefined){
                this.url = options.url;
            }
        }

    });

    return EntitiesCollection;
});

