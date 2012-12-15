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
        'knockout' : 'libs/knockout-2.1.0.debug',
        'knockback':'libs/knockback-0.16.7',
        'cordova' : 'libs/cordova-2.2.0.js'
    }

});
// Exposing globals just in case that we are switching to AMD version of the lib later
var global = {};
require([
    // Load our app module and pass it to our definition function
    'jquery'],function($){

    $(document).on("mobileinit", function () {
        $.mobile.page.prototype.options.addBackBtn = true;
        $.support.cors = true;
        $.mobile.allowCrossDomainPages = conf.allowCrossDomainPages;
        //$.mobile.phonegapNavigationEnabled = true;
        $.mobile.ajaxEnabled = true;
        $.mobile.buttonMarkup.hoverDelay = 33;
        $.mobile.defaultPageTransition ='slide';
        //$.mobile.pushStateEnabled = false;
        console.log("mobile init");
    });

    $(document).on( "pagebeforechange", function( e, data ) {
        if(global.Router === undefined || global.Router === null || global.Router.isInitialized === false){
            var orgEvent = jQuery.extend({}, e);
            e.preventDefault();
            setTimeout(function() {
                $(document).trigger(orgEvent , data);
            }, 200);
        }else{
            console.log("router is initialized");
            //from now on the router will handle navigation
            $(document).off('pagebeforechange', e.handleObj.handler);

            //we handle the boot time the rooter may not initialized yet
            //case the target page is specified explicitly
            if ( typeof data.toPage === "string" ) {
                var orgEvent = jQuery.extend({}, e);
                $(document).trigger(orgEvent , data);
            }else
            //loading the first page which should be login page
            {
                $.mobile.changePage("#login");
            };
        }




    });


    require(['router'],function(Router){
        console.log('router loaded');

        var router = new Router();
        router.initialize();
        console.log('router initialized');
        global.$ = global.$ || $;
        global.Router = global.Router || router;
        require(['app',  'domReady' ], function(App){
            console.log('app init ');
            // The "app" dependency is passed in as "App"
            // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
            App.initialize();
        })
    });

});



