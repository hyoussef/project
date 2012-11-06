//Filename: router.js
define([
    'jquery',
    'jqmr',
    'jquerymobile'
], function ($) {

    Router = function(){
        this.isInitialized = false;
        return this;

    }
    Router.prototype.initialize = function () {

        var app_router = new $.mobile.Router([

            {"#companies":{ handler:function (type, params, ui, page, event) {
                console.log(type);

            }, events:"bs" }},

            {
                "#companies":{ handler:'showCompanies', events:"bC" }
            },

            {"#companies":{ handler:function(type, params, ui, page, event){
                console.log(type);
            }, events:"i" }},

            {
                "#entities":{ handler:'showEntities', events:"bC" }
            },

            {
                "#projects":{ handler:'showProjects', events:"bC" }
            },
            {
                "#project":{ handler:'showProject', events:"bC" }
            }


        ],this);

        this.isInitialized = true;
        //
        return this;
    };

    Router.prototype.showCompanies = function (type, params, ui, page, event) {
        event.preventDefault();
        event.stopPropagation();
        $.mobile.loading( 'show');
        var $page = $("#companies");
        console.log(type);

        if (typeof(ui.toPage)!=="string") return;
        require(['views/companies/list', 'views/panel', 'collections/companies'],
            function (CompaniesListView, PanelView,CompaniesCollection) {
                // Call render on the module we loaded in via the dependency array'views/projects/list'
                var $content = $page.children(":jqmData(role=content)");
                var companiesCollection = new CompaniesCollection();
                companiesCollection.fetch({
                    success : function(bbCollection ,response){
                        var projectListView = new CompaniesListView({ id:'companies_list', collection : bbCollection});
                        var panelView = new PanelView({ id:'popupPanel'});

                        $content.html( projectListView.$el);
                        panelView.$el.appendTo($content);
                        $page.page();
                        $page.trigger('create');
                        $.mobile.changePage($page);
                        $.mobile.loading( 'hide');
                    },
                    error: function(collection ,response){
                        alert("error fetching companies and projects");
                        $.mobile.loading( 'hide');
                    }

                });


                /*var fromPage = ui.options.fromPage;
                 var param = app_router.getParams(params[1]);
                 var u = $.mobile.path.parseUrl(ui.toPage);
                 ui.options.dataUrl = u.href;
                 ui.options.changeHash = false;*/


            })
    }

    Router.prototype.showEntities = function (type, params, ui, page, event,entitiesCollection) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        $.mobile.loading( 'show');
        var $page = $("#entities");
        console.log(type);
        require(['views/entities/list','collections/entities'], function(EntitiesView, EntitiesCollection){
                var $page = $("#entities");
                var $content = $page.children(":jqmData(role=content)");
                var bkEntitiesCollection = entitiesCollection || new EntitiesCollection();
                bkEntitiesCollection.fetch({
                    success:function(bbCollection ,response){
                        var entitiesView = new EntitiesView({id :'entities_list' , collection :bkEntitiesCollection});
                        $content.html(entitiesView.$el);
                        $page.page();
                        $page.trigger('create');
                        $.mobile.changePage($page);
                        $.mobile.loading( 'hide');

                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching entities");
                    }
                });


            }
        );

    }


    Router.prototype.showProjects = function (type, params, ui, page, event,projectsCollection) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        $.mobile.loading( 'show');
        var $page = $("#projects");
        console.log(type);
        require(['views/projects/list','collections/projects'], function(ProjectListView , ProjectsCollection){
                var $page = $("#projects");
                var $content = $page.children(":jqmData(role=content)");
                var bkprojectsCollection = projectsCollection || new ProjectsCollection();
                bkprojectsCollection.fetch({
                    success:function(bbCollection ,response){
                        var projectsView = new ProjectListView({id :'projects_list' , collection :bkprojectsCollection});
                        $content.html(projectsView.$el);
                        $page.page();
                        $page.trigger('create');
                        $.mobile.changePage($page);
                        $.mobile.loading( 'hide');

                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching projects");
                    }
                });


            }
        );

    }

    Router.prototype.showProject = function (type, params, ui, page, event,projectModel) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        $.mobile.loading( 'show');
        var $page = $("#project");
        require(['views/projects/projectView', 'models/projects'], function(ProjectView, ProjectsModel){
                var $page = $("#project");
                var $content = $page.children(":jqmData(role=content)");
                var bkprojectsModel = projectModel || new ProjectsModel();
                bkprojectsModel.fetch({
                    success:function(bbModel ,response){
                        var projectView = new ProjectView({ model :bkprojectsModel});
                        $content.html(projectView.$el);
                        $page.page();
                        $page.trigger('create');
                        $.mobile.changePage($page);
                        $.mobile.loading( 'hide');

                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching projects");
                    }
                });


            }
        );

    }



    return Router;
});
