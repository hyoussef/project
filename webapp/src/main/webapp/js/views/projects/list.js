// Filename: views/projects/list
define([
    'collections/companies',
    'collections/entities',
    'collections/projects',
    'text!templates/projects/list.html',
    'knockout',
    'jquery',
    'underscore',
    'backbone',
    'knockback',
    'jquerymobile',
    'viewModel/projectsViewModel',
    'viewModel/companiesVwModel'
], function (CompaniesCollection,EntitiesCollection,ProjectsCollection, projectListTemplate, ko) {

    var projectListView = Backbone.View.extend({
       //el:$("#projects"),

        initialize:function () {
            var self = this;
            self.el = "#" + self.id;

            this.collection = new ProjectsCollection();
            self.collection = self.collection.add({ name:"Twitter"});
            self.collection = self.collection.add({ name:"Facebook"});
            self.collection = self.collection.add({ name:"Myspace", score:20});
            //
            this.entitiesCollection = new EntitiesCollection();
            self.entitiesCollection = self.entitiesCollection.add({name:"RD", projects : self.collection});
            //
            this.companiesCollection = new CompaniesCollection();
            self.companiesCollection =  self.companiesCollection.add({name : "alstom" , entities : self.entitiesCollection })

            self.view_model = new CompaniesVwModel(self.companiesCollection);
            //self.view_model = new ProjectsViewModel(self.collection);
            
           /* self.view_model = {
                projects:kb.collectionObservable(self.collection),
                addProject:function () {
                    self.collection.add({name:"Extia"});
                }
            };*/
            self.collection.bind("add", self.exampleBind, this);
            this.render();
        },

        exampleBind:function (model) {
            this.$el.children(":jqmData(role=content)").find(":jqmData(role=listview)").listview('refresh');
            console.log(model);
        },

        render:function () {
            var self = this;
            self.$el = $(projectListTemplate);
            self.$el.attr('id', self.id);
           ko.applyBindings(self.view_model, self.$el[0]);

            /* $content = self.$el.children(":jqmData(role=content)");
            var $projectListTemplate = $(projectListTemplate);
            $projectListTemplate.attr('id', self.id);
            //$content.html($projectListTemplate).trigger('create');
            $projectListTemplate.appendTo($content);
            $content.trigger('create');
            ko.applyBindings(self.view_model, self.$el[0]);
            $content.find("#"+self.id).listview('refresh');*/
/*//      var data = {
//        projects: this.collection.models,
//        _: _
//      };
            var self = this;
            //var compiledTemplate = _.template( projectListTemplate, data );
//      $content.html( compiledTemplate );
            $content.html(projectListTemplate).trigger("create");
            //self.$el.page();
            // Enhance the listview we just injected.
            self.$el.children(":jqmData(role=content)").find(":jqmData(role=listview)").listview('refresh');*/
        }
    });
    return projectListView;
});
