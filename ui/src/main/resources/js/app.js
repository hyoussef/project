// Filename: app.js
define([
    'knockout',
    'backbone',
    'underscore',
    'jeditable'

], function(ko, Backbone , _){

    global.Backbone = global.Backbone ||   Backbone;
    global._ = global._ ||   _ ;

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    var bindEvents= function() {
        document.addEventListener('deviceready', onDeviceReady, false);
        console.log('bind events called');
    };
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    var onDeviceReady= function() {
        console.log('device ready');
        receivedEvent('deviceready');
        $.mobile.changePage("#login");
    };
    // Update DOM on a Received Event
    var receivedEvent = function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    };

    var initialize = function(){
        bindEvents();
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
