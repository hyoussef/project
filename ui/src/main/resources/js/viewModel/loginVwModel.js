define([
    'knockout',
    'jquery'
],function(ko, $){
    LoginVwModel = function(){
        var self =this;
        this.status = ko.observable("");
        this.message = ko.observable("");
        this.statusMessage = ko.computed(function() {return this.status() + " " +this.message();} , this);
    }


    LoginVwModel.prototype.doLogin = function(oVwModel , event){
        var self =this;
        var onLoginComplete = function(status , message){
            self.status(status);
            self.message(message);
        };
        console.log(oVwModel);
        $.mobile.loading( 'show');
        var url = conf.root + 'j_spring_security_check';
        console.log("logging to " + url);
        // Submit the form
        $.ajax({
            type: 'POST',
            url: url,
            data: $('#signInForm').serialize(),
            complete:function(xhr){
                global.Router.handleXhrStatus(xhr , onLoginComplete);
                $.mobile.loading( 'hide');


            }
        });
        return false;
    }

});