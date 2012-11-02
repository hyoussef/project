define([
    'models/projects',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile'

],function(ProjectsModel, ko){

    CompaniesVwModel = function(ocompaniesCollection){
        this.collection = ocompaniesCollection;

        this.companies = kb.collectionObservable(this.collection);
        this.companies.entities = kb.collectionObservable(this.collection.entities);
    }

    CompaniesVwModel.prototype.getEntities = function(oCompanyObj){
        console.log(oCompanyObj);

    }

    CompaniesVwModel.prototype.editProject = function(oProjectObj){
        console.log(oProjectObj);
        var backBoneModel =  new ProjectsModel(oProjectObj);
        var oProjectVwModel = kb.viewModel(backBoneModel);
        var m= oProjectVwModel.model();
        var employees = oProjectVwModel.employees();
        console.log(backBoneModel);
        console.log(employees);
        backBoneModel.set({name : backBoneModel.get('name') + " modified" }) ;
        // TODO  create show project on the router
        //global.Router.showProject;
        require( require(['views/projects/projectView' ], function(ProjectView){
            var $page = $("#project");
            var $content = $page.children(":jqmData(role=content)");
            var projectView = new ProjectView({id :backBoneModel.get('id') , model :backBoneModel});
            $content.html(projectView.$el);
            $page.page();
            $page.trigger('create');

            $.mobile.changePage("#project");
        }))


    }

    return  CompaniesVwModel;


});
