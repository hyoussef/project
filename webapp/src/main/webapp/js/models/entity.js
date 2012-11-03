define([
    "collections/projects",
    "models/projects",
    'underscore',
    'backbone',
    'backboneRelational'

], function(ProjectsCollection, ProjectsModel) {

    var EntityModel = Backbone.RelationalModel.extend({
        relations: [
            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'projects',
                relatedModel: ProjectsModel,
                collectionType: ProjectsCollection,
                collectionOptions: function( instance ) { return { 'url':instance.url() +  '/projects'  } }

            }
        ],
        defaults: {
            name: 'RD',
            adresse : "entity adresse ",
            projects : new ProjectsCollection()
        },
        initialize: function(){

        }

    });
    return EntityModel;

});