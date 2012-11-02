define([
    "collections/projects",
    "models/projects",
    'underscore',
    'backbone'
], function(ProjectsCollection, ProjectsModel) {
    var EntityModel = Backbone.Model.extend({
        defaults: {
            name: 'RD',
            adresse : "entity adresse ",
            projects : new ProjectsCollection()
        },
        initialize: function(){
            var projects =       this.get('projects');
            this.projects = new ProjectsCollection(projects);
        }

    });
    return EntityModel;

});