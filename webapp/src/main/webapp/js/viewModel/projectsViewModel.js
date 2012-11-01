/**
 * Created with IntelliJ IDEA.
 * User: I060356
 * Date: 26/10/12
 * Time: 20:34
 * To change this template use File | Settings | File Templates.
 */

ProjectsViewModel = function(obModel){
    this.project = kb.viewModel(obModel);
}

/*
ProjectsViewModel.prototype.editProject = function(oProjectVwModel){
    console.log(oProjectVwModel);
    var backBoneModel = oProjectVwModel.model();
    var employees = oProjectVwModel.employees();
    console.log(backBoneModel);
    console.log(employees);
    backBoneModel.set({name : backBoneModel.get('name') + " modified" })

}
*/
