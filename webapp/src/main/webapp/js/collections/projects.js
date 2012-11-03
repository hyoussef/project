define([
  'models/projects',
  'underscore',
  'backbone'
], function(ProjectsModel){
  var ProjectsCollection = Backbone.Collection.extend({
    model: ProjectsModel,
    url:"projects",

      initialize: function( models, options ) {
          options || (options = {});
          if(options.url !== undefined){
              this.url = options.url;
          }
      }


  });
 
  return ProjectsCollection;
});
