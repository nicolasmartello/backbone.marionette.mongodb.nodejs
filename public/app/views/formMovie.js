define( [
	'jquery',
  'underscore',
  'backbone',
  'text!templates/formMovie.html',
	], function( $, _, Backbone,  Template) {

    	var FormMovieView = Backbone.View.extend({  
        
          el:$('#modalView'),

          events:{

            'click .submit' : 'addMovie',
            'click .cancel' : 'cancelMovie'

          },
          
          render: function() {
                       
            this.$el.html( _.template( Template, this.modelMovie.attributes ) ); 
           
            return this;
          
          },

          addMovie: function () {
                
                var formDom = this.$el.find('form');
                
                var attrs = formDom.serializeObject();
                      
                this.modelMovie.set(attrs);

                this.modelMovie.save(); 
                
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