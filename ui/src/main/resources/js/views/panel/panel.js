// Filename: views/projects/list
define([
    'text!templates/popup.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile',
    'viewModel/panelVwModel'
], function (panelTemplate,  ko) {

    var popupView = Backbone.View.extend({
        //el:"#projects_list",

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;

            this.view_model = new PanelVwModel();
            this.render();
        },


        render:function () {
            var self = this;
            self.$el =   $(panelTemplate);
            self.$el.attr('id' , self.id);
            ko.applyBindings(self.view_model, self.$el[0]);

            self.$el.on({
                popupbeforeposition: function() {
                    var h = $( window ).height();

                    self.$el.css( "height", h );
                }
            });
            self.$el.popup({ history: false }).trigger('create');
        },
        open : function(){
            var self = this;
            self.$el.popup('open', { history: false, positionTo:'window' });
        }
    });
    return popupView;
});

