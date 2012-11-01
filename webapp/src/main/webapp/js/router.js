//Filename: router.js
define([
    'jquery',
    'jqmr',
    'jquerymobile'
], function ($) {

    var initialize = function () {


        var app_router = new $.mobile.Router([

            {"#projects":{ handler:function (type, params, ui, page, event) {
                console.log(type);

            }, events:"bs" }},

            {
                "#projects$":{ handler:function (type, params, ui, page, event) {
                    var $page = $("#projects");
                    console.log(type);
                    event.preventDefault();
                    if (typeof(ui.toPage)!=="string") return;
                    require(['views/projects/list', 'views/panel'],
                        function (ProjectListView, PanelView) {
                            // Call render on the module we loaded in via the dependency array'views/projects/list'
                            var $content = $page.children(":jqmData(role=content)");
                            var projectListView = new ProjectListView({ id:'projects_list'});
                            var panelView = new PanelView({ id:'popupPanel'});

                            $content.html( projectListView.$el);
                            panelView.$el.appendTo($content);
                            $page.page();
                            $page.trigger('create');

                            /*var fromPage = ui.options.fromPage;
                            var param = app_router.getParams(params[1]);
                            var u = $.mobile.path.parseUrl(ui.toPage);
                            ui.options.dataUrl = u.href;
                            ui.options.changeHash = false;*/

                            $.mobile.changePage($page);
                        })

                }, events:"bC" }
            },

             {"#projects":{ handler:function (event) {


             event.preventDefault();
             }, events:"i" }}

        ]);

        //global.app_router =   global.app_router ||   app_router;
    };


//	app_router.on('route:showUsers', function () {
//	require(['views/users/list'], function(UserListView) {
//	// As above, call render on our loaded module
//	// 'views/users/list'
//	var userListView = new UserListView();
//	userListView.render();
//	});
//	});
//	app_router.on('route:defaultAction', function (actions) {
//	require(['views/home/main'], function(MainHomeView) {
//	// We have no matching route, lets display the home page
//	var mainHomeView = new MainHomeView();
//	mainHomeView.render();
//	});
//	});
//	Backbone.history.start();
//	var a = jQuery(document);
//	jQuery(document).on('pagebeforecreate', '#projects',
//	function(event){
//	require(['views/projects/list'], function(ProjectListView) {
//	// Call render on the module we loaded in via the dependency array'views/projects/list'
//	var projectListView = new ProjectListView();
//	projectListView.render();
//	})
//	});
//	jQuery(document).on('pagecreate', '#projects',  function(event){
//	jQuery(this).page();
//	// Enhance the listview we just injected.
//	jQuery(this).children( ":jqmData(role=content)" ).find( ":jqmData(role=listview)" ).listview();
//	});


    return {
        initialize:initialize
    };
});
