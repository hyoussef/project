CompaniesVwModel = function(ocompaniesCollection){
    this.collection = ocompaniesCollection;
    this.companies = kb.collectionObservable(this.collection);
}

CompaniesVwModel.prototype.editProject = function(oProjectVwModel){
    console.log(oProjectVwModel);
    var backBoneModel = oProjectVwModel.model();
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
