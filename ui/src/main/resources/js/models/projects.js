define([
    "models/employee",
    "models/contact",
    "collections/contacts",
    'underscore',
    'backbone',
    'backboneRelational'

], function(EmployeeModel, ContactModel, ContactCollection) {
    var ProjectsModel = Backbone.RelationalModel.extend({
        relations: [

            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'employees',
                relatedModel: EmployeeModel,
                reverseRelation: {
                    key: 'worksOnProject'
                }
            },
            {
                type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
                key: 'contacts',
                relatedModel: ContactModel,
                collectionType : ContactCollection,
                reverseRelation: {
                    key: 'contactForProject'
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
                this.url = conf.root + 'services/internal/manager/companies/' + options.cmpId + '/entities/' + options.entId + '/projects/' + this.get('id');
            }
        }

    });
    return ProjectsModel;

});
