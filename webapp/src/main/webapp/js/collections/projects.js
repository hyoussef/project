define([
  'models/projects',
  'underscore',
  'backbone'
], function(ProjectsModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectsModel,
    url:"projects",

    initialize: function(){


    }

  });
 
  return ProjectsCollection;
});
