define([
    'jquery',
    'underscore',
    'text!templates/home/login.html',
    'knockout',
    'viewModel/loginVwModel'
], function($ , _, loginTemplate,ko){

    var loginView = Backbone.View.extend({
        initialize:function () {
            var self = this;
            self.el = "#loginContent";
            self.$el = $(loginTemplate);
            self.view_model = new LoginVwModel();
            return this;
        },

        render: function(){
            var self = this;
            ko.applyBindings(self.view_model, self.$el[0]);
            self.$el.trigger('create');
            return self;
        }
    });
    return loginView;
});
