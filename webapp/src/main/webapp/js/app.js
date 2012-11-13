// Filename: app.js
define([
    'knockout',
    'backbone',
    'underscore',
    'jeditable'

], function(ko, Backbone , _){

    global.Backbone = global.Backbone ||   Backbone;
    global._ = global._ ||   _ ;


    var initialize = function(){
        //initialize Knokout : add custo bindings
        ko.bindingHandlers.jeditable = {
            init: function(element, valueAccessor, allBindingsAccessor) {
                // get the options that were passed in
                var options = allBindingsAccessor().jeditableOptions || {};

                // "submit" should be the default onblur action like regular ko controls
                if (!options.onblur) {
                    options.onblur = 'cancel';
                }

                // set the value on submit and pass the editable the options
                $(element).editable(function(value, params) {
                    valueAccessor()(value);
                    return value;
                }, options);

                //handle disposal (if KO removes by the template binding)
                ko.utils.domNodeDisposal.addDisposeCallback(element, function() {
                    $(element).editable("destroy");
                });

            },

            //update the control when the view model changes
            update: function(element, valueAccessor) {
                var value = ko.utils.unwrapObservable(valueAccessor());
                $(element).html(value);
            }
        };

    };

    return {
        initialize: initialize
    };
});
