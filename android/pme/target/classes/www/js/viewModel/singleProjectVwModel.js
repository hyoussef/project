define([
    'knockback'
],function(ko){
    SingleProjectViewModel = function(model){
        this.model = model;
        this.project = kb.viewModel(this.model);
    }

    SingleProjectViewModel.prototype.openContact = function(oContactVwModel , event){
        console.log(oContactVwModel);
        var model =  oContactVwModel.model();
        require(['views/contacts/contactView'],
            function (contactView) {
                var myContactView = new contactView({ id: 'contact' + model.get('id'), model : model});
                myContactView.open($(event.target));

            });
    }

});
