
define([
    'knockback'
],function(ko){
    HeaderVwModel = function(model){
        this.model = model;
        this.view_model = kb.viewModel(this.model);
    }

    HeaderVwModel.prototype.openPanel = function(oVwModel , event){
        console.log(oVwModel);
        //var model =  oVwModel.model();
        require(['views/panel/panel'],
            function (panelView) {
                var myPanelView = new panelView({ id:'popupPanel'});
                myPanelView.open();

            });
    }

});
