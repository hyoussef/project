define([
    "collections/projects",
    'underscore',
    'backbone'

], function(ProjectsCollection) {
    var EntityModel = Backbone.Model.extend({
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