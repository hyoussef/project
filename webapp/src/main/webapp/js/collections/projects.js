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
          else if(options.cmpId && options.entId){
              this.url = 'services/internal/manager/companies/' + options.cmpId + '/entities/' + options.entId + '/projects';
          }
          else{
              $.error("invalid collection parameters need url or company id and entity id");
          }
      }


  });
 
  return ProjectsCollection;
});
