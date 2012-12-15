//Filename: router.js
define([
    'jquery',
    'jqmr',
    'jquerymobile'
], function ($) {
    var _cleanMemory = function (view){
        if(view){
            view.remove();
            view.undelegateEvents();
            view.unbind();

            if(view.collection){
                view.collection.reset();
            }
            if(view.model){
                kb.release(view.model);
            };
            kb.release(view.view_model);

            delete view.view_model;
            delete view.$el;
            delete view.collection;
            delete view.model;
        }
    }

    var _checkConnection = function() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.NONE]     = 'No network connection';
        return {networkState :networkState, state : states[networkState]} ;

    }



    Router = function(){
        this.companiesView;
        this.entitiesView;
        this.projectsView;
        this.myprojView;
        this.isInitialized = false;
        return this;
    };
    Router.prototype.initialize = function () {
        var self = this;
        this.app_router = new $.mobile.Router(
            [
               {
                "#container(?:[?/](.*))?":{ handler:'showContainer', events:"bC" }
                },
                {
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
                }],this );
        this.isInitialized = true;
        //
        $("body").show();
        return this;
    };
    Router.prototype.defaultHandler= function(type, params ,ui, page, event) {
        console.log("Default handler called due to unknown route ("
            + type + ", " + ui + ", " + page + ")");
        this.showContainer(type, params ,ui, page, event);
     };

    Router.prototype.showContainer = function(type, params, ui, page, event){
        if(event !==undefined && event !== null){
            event.preventDefault();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        var u = $.mobile.path.parseUrl(ui.toPage);
        console.log("logging for authority , this is my container its"+ u.href + " and comes from" + u.authority);

        $.mobile.loading( 'show');
        require(['views/home/main'],
            function (MainHomeView) {
                var myMainView = new MainHomeView().render();
                var $page = $("#container");
                var $content = $page.children(":jqmData(role=content)");
                $content.empty();
                $content.html(myMainView.$el);
                $page.page();
                $page.trigger('create');
                $.mobile.changePage($page, {dataUrl: "#container"});
                $.mobile.loading( 'hide');
            });
    };
    Router.prototype.showLogin = function(type, params, ui, page, event){
        if(event !==undefined && event !== null){
            event.preventDefault();
        }
        if (ui !== undefined && ui !== null && typeof ui.toPage !== "string" ) {
            return;
        }
        var u = $.mobile.path.parseUrl(ui.toPage);
        console.log(u.authority);
        $.mobile.loading( 'show');
        require(['views/home/loginView'],
            function (LoginView) {
                var login = new LoginView();
                login.render();
                var $page = $("#login");
                var $content = $page.children(":jqmData(role=content)");
                $content.empty();
                $content.html(login.$el);
                $page.page();
                $page.trigger('create');
                $.mobile.changePage($page, {dataUrl: "#login"});
                $.mobile.loading( 'hide');
            });
    };


    Router.prototype.showCompanies = function (type, params, ui, page, event) {
        var self = this;
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
                    _cleanMemory(self.companiesView);

                    // Call render on the module we loaded in via the dependency array'views/projects/list'
                    var $content = $page.children(":jqmData(role=content)");
                    $content.children().remove();
                    var $header =  $page.children(":jqmData(role=header)");
                    $header.children().remove();
                    var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : "Companies"})});
                    $header.replaceWith(myHeader.$el);
                    $header.trigger('create');
                    self.companiesView = new CompaniesListView({ id:'companies_list', collection : new CompaniesCollection()});
                    self.companiesView.collection.fetch({
                        success : function(bbCollection ,response){
                            self.companiesView.render();
                            $content.html( self.companiesView.$el);
                            $page.page();
                            $page.trigger('create');
                            var u = $.mobile.path.parseUrl(ui.toPage);
                            ui.options.dataUrl = u.hash;
                            $.mobile.changePage($page, {dataUrl : u.hash});
                            $.mobile.loading( 'hide');
                            delete myHeader;
                            delete u;
                            delete queryParamsObj;
                            delete $page;
                            delete $content;
                            delete $header;
                        },
                        error: function(collection ,xhr, options){
                            alert("error fetching companies and projects");
                            console.log("the url that failed was "+ collection.url());
                            console.log("status : " + xhr.status);
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
        var self = this;
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
                _cleanMemory(self.entitiesView);

                var $content = $page.children(":jqmData(role=content)");
                var $header =  $page.children(":jqmData(role=header)");
                $header.children().remove();
                $content.children().remove();

                var title;
                if(entitiesCollection !== undefined && entitiesCollection !== null ){
                    options = {dataUrl: "#entities?cmp="+ entitiesCollection.fromCompany.get('id') };
                    title = entitiesCollection.fromCompany.get('name');

                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");
                    }
                    entitiesCollection = new EntitiesCollection(null , {cmpId :queryParamsObj.cmp });
                    options = {dataUrl:u.hash };
                    title = "Entities";
                };
                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : title} )});
                $header.html(myHeader.$el);
                entitiesCollection.reset();
                self.entitiesView = new EntitiesView({id :'entities_list' , collection :entitiesCollection});

                entitiesCollection.fetch({
                    success:function(bbCollection ,response){
                        self.entitiesView.render();
                        $content.html(self.entitiesView.$el);
                        $page.page();
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        $.mobile.changePage($page , options);
                        $.mobile.loading( 'hide');
                        delete myHeader;
                        delete u;
                        delete queryParamsObj;
                        delete $page;
                        delete $content;
                        delete $header;
                        delete options;
                    },
                    error: function(collection ,xhr){
                        $.mobile.loading( 'hide');
                        console.log("the url that failed was "+ collection.url);
                        console.log("status : " + xhr.status);
                        alert("error fetching entities");
                    }
                });
            }
        );
    };
    Router.prototype.showProjects = function (type, params, ui, page, event,projectsCollection) {
        var self =this;
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
                _cleanMemory(self.projectsView);

                var $content = $page.children(":jqmData(role=content)");
                var $header =  $page.children(":jqmData(role=header)");

                $header.children().remove();
                $content.children().remove();

                var options;
                var title;
                if(projectsCollection !== undefined && projectsCollection !== null ){
                    options = {dataUrl: "#projects?ent="+ projectsCollection.fromEntity.get('id') +"&cmp="+projectsCollection.fromEntity.get('fromCompany').get('id') };
                    title = projectsCollection.fromEntity.get('fromCompany').get('name') + ": " + projectsCollection.fromEntity.get('name');

                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");
                    }
                    projectsCollection = new ProjectsCollection(null , {cmpId :queryParamsObj.cmp , entId :queryParamsObj.ent  });
                    options = {dataUrl:u.hash};
                    title = "Projects";
                }
                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : title})});
                $header.replaceWith(myHeader.$el);
                $header.trigger('create');
                projectsCollection.reset();
                self.projectsView = new ProjectListView({id :'projects_list' , collection :projectsCollection});

                projectsCollection.fetch({
                    success:function(bbCollection ,response){
                        self.projectsView.render();
                        $page.page();
                        $content.html(self.projectsView.$el);
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        $.mobile.changePage($page, options);
                        $.mobile.loading( 'hide');

                        delete myHeader;
                        delete u;
                        delete queryParamsObj;
                        delete $page;
                        delete $content;
                        delete $header;
                        delete options;
                    },
                    error: function(collection ,xhr, options){
                        $.mobile.loading( 'hide');
                        console.log("the url that failed was "+ collection.url());
                        console.log("status : " + xhr.status);
                        window.location = "#login"
                        alert("error fetching projects");
                    }
                });
            }
        );
    };

    Router.prototype.showProject = function (type, params, ui, page, event,projectModel) {
        var self =this;
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
                _cleanMemory(self.myprojView);

                var $content = $page.children(":jqmData(role=content)");
                var $header =  $page.children(":jqmData(role=header)");
                $header.children().remove();
                $content.children().remove();

                var options;
                var title;
                if(projectModel !== undefined && projectModel !== null ){
                    options = {dataUrl: "#MyProject?ent="+ projectModel.get('fromEntity').get('id') +"&cmp="+ projectModel.get('fromEntity').get('fromCompany').get('id')+"&id="+  projectModel.get('id')};
                    title = projectModel.get('fromEntity').get('fromCompany').get('name') + ": " + projectModel.get('fromEntity').get('name');
                } else
                {
                    var u = $.mobile.path.parseUrl(ui.toPage);
                    var queryParamsObj = global.Router.app_router.getParams(params[1]);
                    if(!queryParamsObj){
                        $.error("invalid query params!");
                    }
                    projectModel = new ProjectsModel(null , {cmpId :queryParamsObj.cmp , entId :queryParamsObj.ent , id : queryParamsObj.id });
                    //options = {dataUrl:"#MyProject?ent="+ queryParamsObj.ent + "cmp="+ bkprojectsModel.cmpId +"&id="+  queryParamsObj.id};
                    options = {dataUrl:u.hash };
                    title = "Project";
                }

                var myHeader = new HeaderView({id: 'companies_header' , model : new HeaderModel({title : title})});
                $header.replaceWith(myHeader.$el);

                self.myprojView = new ProjectView({ model :projectModel});

                projectModel.fetch({
                    success:function(bbModel ,response){
                        self.myprojView.render();
                        $page.page();
                        $content.html(self.myprojView.$el);
                        $page.trigger('create');
                        options.reloadPage = false;
                        options.allowSamePageTransition = false;
                        $.mobile.changePage($page, options);
                        $.mobile.loading( 'hide');

                        delete myHeader;
                        delete u;
                        delete queryParamsObj;
                        delete $page;
                        delete $content;
                        delete $header;
                        delete options;
                    },
                    error: function(model ,xhr, options){
                        $.mobile.loading( 'hide');
                        console.log("the url that failed was "+ model.url());
                        console.log("status : " + xhr.status);
                        alert("error fetching projects");
                    }
                });
            }
        );
    };


    Router.prototype.handleXhrStatus = function(xhr , callback)
    {
        switch (xhr.status){
            case 404:
                console.log("connection problem! resources not found!");
                var message ;
                 var netword = _checkConnection();
                if(netword.networkState === Connection.NONE || netword.networkState === Connection.UNKNOWN){
                     message = _checkConnection().state;
                }else{
                    message = "resource not found";
                }
                if(callback){
                    callback('fail' ,message);
                };
                break;
            case 401:
                console.log("bad credential");
                if(callback){
                    callback('fail' ,'Bad Credentials, please check your credentials');
                }
                break;
            case 403:
                console.log("access denied by the server");
                if(callback){
                    callback('denied' ,'Sorry we can not log you. please contact your Admin to check you rights!');
                }
                if($.mobile.activePage.selector !== "#login"){
                    $.mobile.changePage("#login");
                }

                break;
            case 200:
                console.log("log in success!");
                if(callback){
                    callback('success' ,'login success');
                }
                $.mobile.changePage("#container");
                break;
        };

    };



    return Router;
});
