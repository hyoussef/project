//Filename: router.js
define([
    'jquery',
    'jqmr',
    'jquerymobile'
], function ($) {

    Router = function(){

    }
    Router.prototype.initialize = function () {

        var app_router = new $.mobile.Router([

            {"#companies":{ handler:function (type, params, ui, page, event) {
                console.log(type);

            }, events:"bs" }},

            {
                "#companies":{ handler:'showProjects', events:"bC" }
            },

            {"#companies":{ handler:function(type, params, ui, page, event){
                console.log(type);
            }, events:"i" }}

        ],this);
    };

    Router.prototype.showProjects = function (type, params, ui, page, event) {
        event.preventDefault();
        event.stopPropagation();
        var $page = $("#projects");
        console.log(type);

        if (typeof(ui.toPage)!=="string") return;
        require(['views/projects/list', 'views/panel', 'collections/companies'],
            function (ProjectListView, PanelView,CompaniesCollection) {
                // Call render on the module we loaded in via the dependency array'views/projects/list'
                var $content = $page.children(":jqmData(role=content)");
                var companiesCollection = new CompaniesCollection();
                companiesCollection.fetch({
                    success : function(bbCollection ,response){
                        var projectListView = new ProjectListView({ id:'projects_list', collection : bbCollection});
                        var panelView = new PanelView({ id:'popupPanel'});

                        $content.html( projectListView.$el);
                        panelView.$el.appendTo($content);
                        $page.page();
                        $page.trigger('create');
                        $.mobile.changePage($page);
                    },
                    error: function(collection ,response){
                        alert("error fetching companies and projects");
                    }

                });


                /*var fromPage = ui.options.fromPage;
                 var param = app_router.getParams(params[1]);
                 var u = $.mobile.path.parseUrl(ui.toPage);
                 ui.options.dataUrl = u.href;
                 ui.options.changeHash = false;*/


            })

    }


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


    return Router;
});
