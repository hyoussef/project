define([
    'underscore',
    'backbone',
    'backboneRelational'
], function() {
    var EmployeeModel = Backbone.RelationalModel.extend({
        defaults: {
            first_name: "houssem",
            last_name : "youssef"
        },
        initialize: function(){
        }

    });
    return EmployeeModel;

});
