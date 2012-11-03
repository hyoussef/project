define([
    "models/employee",
    'underscore',
    'backbone',
    'backboneRelational'

], function(EmployeeModel) {
    var ProjectsModel = Backbone.RelationalModel.extend({
        relations: [

            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'employees',
                relatedModel: EmployeeModel
            }

        ],
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
