define([
  'models/projects',
  'underscore',
  'backbone'
], function(ProjectsModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectsModel,
    initialize: function(){

    }

  });
 
  return ProjectsCollection;
});
