define([
    'knockout',
    'underscore',
    'backbone',
    'backboneRelational'

], function(ko) {
    var HeaderModel = Backbone.RelationalModel.extend({

        defaults: {
            title: " ",
           context:''
        },
        initialize: function(){

        }
    });
    return HeaderModel;

});