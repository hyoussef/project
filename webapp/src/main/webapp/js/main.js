// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.

require.config({
    paths: {
        jquery: 'libs/jquery/jquery-1.8.2.min',
        jquerymobile: 'libs/jquery/jquery.mobile-1.2.0.min',
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
    'jquery', 'router'],function($, Router){

    $(document).on("mobileinit", function () {
        $.mobile.page.prototype.options.addBackBtn = true;
        console.log("mobile init");
    });
    var appRouter = new Router();
    appRouter.initialize();

    global.$ = global.$ || $;
    global.Router = global.Router || appRouter;



    require(['app' ], function(App){
        // The "app" dependency is passed in as "App"
        // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
        App.initialize();
    })
});


