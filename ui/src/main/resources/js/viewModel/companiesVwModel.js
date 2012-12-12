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
        return this;
    }

    CompaniesVwModel.prototype.getEntities = function(oCompany){
        console.log(oCompany);
        var model = oCompany.model();
        var bkEntitiesCollection = model.get('entities');
        global.Router.showEntities(null, null, null, null, null,bkEntitiesCollection);
    }

    return  CompaniesVwModel;


});
