
define([
    'knockback',
    'jquery'
],function(ko, $){
    PanelVwModel = function(model){
       // this.model = model;
       // this.view_model = kb.viewModel(this.model);
    }

    PanelVwModel.prototype.logout = function(oVwModel , event){
        console.log(oVwModel);
        $.mobile.loading('show');
        $.ajax({
            url: conf.root + 'j_spring_security_logout',
            complete: function(transport) {
                if(transport.status == 200) {
                    $.mobile.changePage('#login');
                } else {
                    $.mobile.changePage('#login');
                }
                $.mobile.loading('hide');
            }
        });
        return false;


    }

});