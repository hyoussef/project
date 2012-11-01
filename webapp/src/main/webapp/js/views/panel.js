// Filename: views/projects/list
define([
    'text!templates/popup.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile'
], function (panelTemplate,  ko) {

    var popupView = Backbone.View.extend({
        //el:"#projects_list",

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;
            this.render();
            //init
           /* self.$el.on({
                popupbeforeposition: function() {
                    var h = $( window ).height();

                    self.$el.css( "height", h );
                }
            });*/
        },


        render:function () {
            var self = this;
            self.$el =   $(panelTemplate);
            self.$el.attr('id' , self.id);
            /*var $panelTemplate =  $(panelTemplate);
            $content = self.$el.children(":jqmData(role=content)");
            $panelTemplate.attr('id' , self.id);

            $panelTemplate.appendTo($content);
            $content.trigger('create');

            var $panel=$("#"+self.id);*/
            self.$el.on({
                popupbeforeposition: function() {
                    var h = $( window ).height();

                    self.$el.css( "height", h );
                }
            });
            //self.$el.appendTo().trigger('create');
//            $content = self.$el.children(":jqmData(role=content)");
//            $popup = $content.children(":jqmData(role=popup)");
//              self.$el.html(panelTemplate).trigger( "create" );
//            ko.applyBindings(self.view_model, self.$el[0]);
//            self.$el.children(":jqmData(role=content)").find(":jqmData(role=listview)").listview('refresh');
        }
    });
    return popupView;
});

