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
                relatedModel: EmployeeModel,
                reverseRelation: {
                    key: 'worksOnProject'
                }
            }

        ],
        /*defaults: {
         name: "project",
         desc: "desc",
         employees : new Backbone.Collection([new EmployeeModel()])
         },*/
        initialize:  function( attributes, options ) {
            options || (options = {});
            if(options.cmpId && options.entId && options.id){
                this.set({'id': options.id , fromEntity :options.entId });
                this.url = 'services/internal/manager/companies/' + options.cmpId + '/entities/' + options.entId + '/projects/' + this.get('id');
            }
        }

    });
    return ProjectsModel;

});
