define([
    'knockback'
],function(ko){
    contactVwModel = function(model){
        this.model = model;
        this.view_model = kb.viewModel(this.model);
    }
} );