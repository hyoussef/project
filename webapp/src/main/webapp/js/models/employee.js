define([
    'underscore',
    'backbone'
], function() {
    var EmployeeModel = Backbone.Model.extend({
        defaults: {
            first_name: "houssem",
            last_name : "youssef"
        },
        initialize: function(){
        }

    });
    return EmployeeModel;

});
