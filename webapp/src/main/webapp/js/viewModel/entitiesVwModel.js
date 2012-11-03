define([
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback'
],function(ko){
   EntitiesVwModel = function(ocompaniesCollection){
        this.collection = ocompaniesCollection;
        this.entities = kb.collectionObservable(this.collection);
    }
    EntitiesVwModel.prototype.getProjects = function(oEntityVwModel){
        console.log(oEntityVwModel);
        var model =  oEntityVwModel.model();
        var projectsCollection = model.get('projects');
        global.Router.showProjects(null, null, null, null, null,projectsCollection);
        model.set('projects' ,projectsCollection )
    }

    return  EntitiesVwModel;


});

