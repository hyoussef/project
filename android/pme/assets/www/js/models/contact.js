define([
    'knockout',
    'underscore',
    'backbone',
    'backboneRelational'

], function(ko) {
    var ContactModel = Backbone.RelationalModel.extend({
        /*relations: [
            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'projects',
                relatedModel: ProjectsModel,
                collectionType: ProjectsCollection,
                reverseRelation: {
                    key: 'contactForProjects'
                }
            }
        ],*/
        defaults: {
         first_name: " ",
         last_name : " ",
         email: " ",
         mobile:""
        },
        initialize: function(){

        }
    });
    return ContactModel;

});