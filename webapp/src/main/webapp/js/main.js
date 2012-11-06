// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.

require.config({
    paths: {
        domReady: 'libs/require/domReady',
        jquery: 'libs/jquery/jquery-1.8.2.min',
        jquerymobile: 'libs/jquery/jquery.mobile-1.2.0.min',
        'jeditable':'libs/jquery/jquery.jeditable',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        'backboneRelational' : 'libs/backbone/backbone-relational',
        templates: '../templates',
        'jqmr': 'libs/jquery/jquery.mobile.router.min',
        knockout : 'libs/knockout-2.1.0.debug',
        knockback:'libs/knockback-0.16.7'

    }

});
// Exposing globals just in case that we are switching to AMD version of the lib later
var global = {};
require([
    // Load our app module and pass it to our definition function
    'jquery'],function($){

    $(document).on("mobileinit", function () {
        $.mobile.page.prototype.options.addBackBtn = true;
        console.log("mobile init");
    });

    $(document).on( "pagebeforechange", function( e, data ) {
        if ( typeof data.toPage === "string" ) {
            if(global.Router === undefined || global.Router === null || global.Router.isInitialized === false){
                var orgEvent = jQuery.extend({}, e);
                e.preventDefault();
                setTimeout(function() {
                    $(document).trigger(orgEvent , data);
                }, 200);
                return;
            }
            console.log("router is initialized");
            //from now on the router will handle navigation
            $('#document').unbind('pagebeforechange');
        }
    });

    require(['router'],function(Router){
        var router = new Router().initialize();
        global.$ = global.$ || $;
        global.Router = global.Router || router;
        require(['app', 'domReady' ], function(App){
            // The "app" dependency is passed in as "App"
            // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
            App.initialize();
        })
    });

});



