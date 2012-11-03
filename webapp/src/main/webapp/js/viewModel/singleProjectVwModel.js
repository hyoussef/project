define([
    'knockback'
],function(ko){
SingleProjectViewModel = function(model){
    this.model = model;
    this.project = kb.viewModel(this.model);
}

/*
ProjectsViewModel.prototype.getProject = function(oProjectVwModel){
    console.log(oProjectVwModel);
    var model =  oProjectVwModel.model();
    global.Router.showProject(null, null, null, null, null,model);
}
*/
});
