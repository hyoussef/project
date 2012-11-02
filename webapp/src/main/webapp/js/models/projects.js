define([
    "models/employee",
    'underscore',
    'backbone'

], function(EmployeeModel) {
  var ProjectsModel = Backbone.Model.extend({
    defaults: {
      name: "project",
      desc: "desc",
      employees : new Backbone.Collection([new EmployeeModel()])
    },
    initialize: function(){
    }
    
  });
  return ProjectsModel;

});
