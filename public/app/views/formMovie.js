define( ['marionette',
         'text!templates/formMovie.html',
         'models/movie'
	], function( Marionette,  Template, Movie) {
    
      var modelMovie = new Movie;

    	var FormMovieView = Marionette.ItemView.extend({
          collectionEvents:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },
          
          template:  _.template( Template, modelMovie.attributes ),

          addMovie: function () {
                
                var formDom = this.$el.find('form');
                
                var attrs = formDom.serializeObject();
                      
                modelMovie.set(attrs);

                modelMovie.save(); 
                
            },


            cancelMovie: function () {
              $('#myModal').modal('hide');
              window.history.back();
              $('.data').val('');

            },

            cleanForm: function () {
              
              $('.cancel').html('Finalizar');
              
              $('.data').val('');
            
            }

      });    

    	return FormMovieView;

});