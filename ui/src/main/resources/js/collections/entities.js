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
            else if(options.cmpId !==undefined){
                this.url = conf.root + 'services/internal/manager/companies/' + options.cmpId + '/entities'
            }
            else{
                $.error("invalid collection parameters need url or company id");
            }
        }

    });

    return EntitiesCollection;
});

