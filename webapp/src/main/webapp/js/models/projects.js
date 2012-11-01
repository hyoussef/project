define([
    "models/employee",
    'underscore',
    'backbone'

], function(EmployeeModel) {
  var ProjectsModel = Backbone.Model.extend({
    defaults: {
      score: 10,
      employees : new Backbone.Collection([new EmployeeModel()])
    },
    initialize: function(){
    }
    
  });
  return ProjectsModel;

});
