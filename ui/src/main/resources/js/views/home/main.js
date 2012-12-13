define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/home/main.html'
], function($, _, Backbone, mainHomeTemplate){

  var MainHomeView = Backbone.View.extend({
    render: function(){

        var self = this;
        self.$el = $(mainHomeTemplate);
        self.$el.attr('id', "mainContent");
        //ko.applyBindings(self.view_model, self.$el[0]);
        self.$el.trigger('create');
        return self;
    }
  });
  return MainHomeView;
});
