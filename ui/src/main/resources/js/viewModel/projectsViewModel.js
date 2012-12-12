define([
    'knockback'
],function(ko){

ProjectsViewModel = function(collection){
    this.collection = collection;
    this.projects = kb.collectionObservable(this.collection);
}
ProjectsViewModel.prototype.getProject = function(oProjectVwModel){
    console.log(oProjectVwModel);
    var model =  oProjectVwModel.model();
    global.Router.showProject(null, null, null, null, null,model);

}
})
