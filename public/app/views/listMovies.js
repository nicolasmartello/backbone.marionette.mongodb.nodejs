define([
	'jquery',
	'underscore',
	'marionette',
	'text!../templates/listsMovies.html',
    'collections/movies'
	], function($,_, Marionette, Template, CollectionMovies){
		
        var listMovies = new CollectionMovies;  
		
		var MovieListView = Marionette.ItemView.extend({

			render: function(){
                var self = this;
                listMovies.fetch({
                                   
                    success: function(){
                        
                        this.models = arguments[1];

                        var compiledTemplate = _.template( Template,{movies:this.models} );  
                        
                        self.$el.html(compiledTemplate);

                    },
                    error:function () {
                        console.log(arguments);
                    }
                });
	            
                return this;

            },
        
	});

	return MovieListView;

});