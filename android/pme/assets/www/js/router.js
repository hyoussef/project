//Filename: router.js
define([ 
    'jquery',
    'jqmr',
    'jquerymobile'
], function ($) {
    Router = function(){
        this.isInitialized = false;
        return this;
    };
    Router.prototype.initialize = function () {
        this.app_router = new $.mobile.Router([

            {
                "#container(?:[?/](.*))?":{ handler:'showContainer', events:"bC" }
            },  {
                "#login(?:[?/](.*))?":{ handler:'showLogin', events:"bC" }
            },

            {
                "#companies(?:[?/](.*))?":{ handler:'showCompanies', events:"bC" }
            },

            {
                "#entities(?:[?/](.*))?":{ handler:'showEntities', events:"bC" }
            },

            {
                "#projects(?:[?/](.*))?":{ handler:'showProjects', events:"bC" }
            },
            {
                "#MyProject(?:[?/](.*))?":{ handler:'showProject', events:"bC" }
            }
        ],this);
        this.isInitialized = true;
        //
        return this;
    };

    Router.prototype.showContainer = function(type, params, ui, page, event){
        var $page = $("#container").trigger('create');
        $page.page();
        $.mobile.changePage($page, {dataUrl: "#container"});

    };
    Router.prototype.showLogin = function(type, params, ui, page, event){
        var $page = $("#login").trigger('create');
        $page.page();
        $.mobile.changePage($page, {dataUrl: "#login"});

    };

    Router.prototype.showCompanies = function (type, params, ui, page, event) {
        if(event !==undefined && event !== null){
            event.preventDefault();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        $.mobile.loading( 'show');
        var $page = $("#companies");

        require(['views/companies/list', 'views/header/headerView', 'collections/companies', 'models/header'],
            function (CompaniesListView, HeaderView,CompaniesCollection, HeaderModel) {
                try{
                    // Call render on the module we loaded in via the dependency array'views/projects/list'
                    var $content = $page.children(":jqmData(role=content)");
                    $content.empty();
                    var $header =  $page.children(":jqmData(role=header)");
                    $header.empty();
                    var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : "Companies"})});
                    $header.html(myHeader.$el);
                    var companiesCollection = new CompaniesCollection();
                    companiesCollection.fetch({
                        success : function(bbCollection ,response){
                            var projectListView = new CompaniesListView({ id:'companies_list', collection : companiesCollection});
                            //var panelView = new PanelView({ id:'popupPanel'});
                            $content.html( projectListView.$el);
                            //panelView.$el.appendTo($content);
                            $page.page();
                            $page.trigger('create');
                            var u = $.mobile.path.parseUrl(ui.toPage);
                            ui.options.dataUrl = u.hash;
                            $.mobile.changePage($page, {dataUrl : u.hash});
                            $.mobile.loading( 'hide');
                        },
                        error: function(collection ,xhr, options){
                            alert("error fetching companies and projects");
                            $.mobile.loading( 'hide');
                        }
                    });
                }
                catch (e){
                    console.log(e);
                    $.mobile.changePage($page, {dataUrl: "#companies"});
                    $.mobile.loading( 'hide');
                }
            });
    };

    Router.prototype.showEntities = function (type, params, ui, page, event,entitiesCollection) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        var options;
        $.mobile.loading( 'show');
        var $page = $("#entities");
        console.log(type);
        require(['views/entities/list','views/header/headerView', 'collections/entities',  'models/header'], function(EntitiesView, HeaderView, EntitiesCollection , HeaderModel){
                var $page = $("#entities");
                var $content = $page.children(":jqmData(role=content)");

                var $header =  $page.children(":jqmData(role=header)");
                $header.empty();
                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : "Entities"})});
                $header.html(myHeader.$el);

                var bkEntitiesCollection;
                if(entitiesCollection !== undefined && entitiesCollection !== null ){
                    bkEntitiesCollection = entitiesCollection;
                    options = {dataUrl: "#entities?cmp="+ bkEntitiesCollection.fromCompany.get('id') };
                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");;
                    }
                    bkEntitiesCollection = new EntitiesCollection(null , {cmpId :queryParamsObj.cmp });
                    options = {dataUrl:u.hash };
                }
                bkEntitiesCollection.fetch({
                    success:function(bbCollection ,response){
                        var entitiesView = new EntitiesView({id :'entities_list' , collection :bkEntitiesCollection});
                        $content.html(entitiesView.$el);
                        $page.page();
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        $.mobile.changePage($page , options);
                        $.mobile.loading( 'hide');
                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching entities");
                    }
                });
            }
        );
    };
    Router.prototype.showProjects = function (type, params, ui, page, event,projectsCollection) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        $.mobile.loading( 'show');
        var $page = $("#projects");
        console.log(type);
        require(['views/projects/list','views/header/headerView', 'collections/projects', 'models/header'], function(ProjectListView ,HeaderView, ProjectsCollection, HeaderModel){

                var $content = $page.children(":jqmData(role=content)");

                var $header =  $page.children(":jqmData(role=header)");
                $header.empty();
                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : "Projects"})});
                $header.html(myHeader.$el);

                var bkprojectsCollection;
                var options;
                if(projectsCollection !== undefined && projectsCollection !== null ){
                    bkprojectsCollection = projectsCollection;
                    options = {dataUrl: "#projects?ent="+ bkprojectsCollection.fromEntity.get('id') +"&cmp="+bkprojectsCollection.fromEntity.get('fromCompany').get('id') };
                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");
                    }
                    bkprojectsCollection = new ProjectsCollection(null , {cmpId :queryParamsObj.cmp , entId :queryParamsObj.ent  });
//				options = {dataUrl: "#projects?cmp="+ queryParamsObj.cmp +"&ent="+queryParamsObj.ent };
                    options = {dataUrl:u.hash};
                }

                bkprojectsCollection.fetch({
                    success:function(bbCollection ,response){
                        var projectsView = new ProjectListView({id :'projects_list' , collection :bkprojectsCollection});
                        $page.page();
                        $content.html(projectsView.$el);
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        $.mobile.changePage($page, options);
                        $.mobile.loading( 'hide');
                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching projects");
                    }
                });
            }
        );
    };
    Router.prototype.showProject = function (type, params, ui, page, event,projectModel) {
        if(event !==undefined && event !== null){
            event.preventDefault();
            event.stopPropagation();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        $.mobile.loading( 'show');
        $.mobile.loading( 'show');
        var $page = $("#MyProject");
        require(['views/projects/projectView','views/header/headerView', 'models/projects' , 'models/header'], function(ProjectView,HeaderView, ProjectsModel, HeaderModel){
                var $content = $page.children(":jqmData(role=content)");

                var $header =  $page.children(":jqmData(role=header)");
                $header.empty();
                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : "Project"})});
                $header.html(myHeader.$el);

                var bkprojectsModel;
                var options;
                if(projectModel !== undefined && projectModel !== null ){
                    bkprojectsModel = projectModel;
                    options = {dataUrl: "#MyProject?ent="+ bkprojectsModel.get('fromEntity').get('id') +"&cmp="+ bkprojectsModel.get('fromEntity').get('fromCompany').get('id')+"&id="+  bkprojectsModel.get('id')}
                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");
                    }
                    bkprojectsModel = new ProjectsModel(null , {cmpId :queryParamsObj.cmp , entId :queryParamsObj.ent , id : queryParamsObj.id });
                    //options = {dataUrl:"#MyProject?ent="+ queryParamsObj.ent + "cmp="+ bkprojectsModel.cmpId +"&id="+  queryParamsObj.id};
                    options = {dataUrl:u.hash };
                }
                bkprojectsModel.fetch({
                    success:function(bbModel ,response){
                        var projectView = new ProjectView({ model :bkprojectsModel});
                        $page.page();
                        $content.html(projectView.$el);
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        options.transition = 'slidefade';
                        $.mobile.changePage($page, options);
                        $.mobile.loading( 'hide');
                    },
                    error: function(collection ,response){
                        $.mobile.loading( 'hide');
                        alert("error fetching projects");
                    }
                });
            }
        );
    };



    return Router;
});
