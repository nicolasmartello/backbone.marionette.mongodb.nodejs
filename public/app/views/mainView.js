define([ 'views/formMovie', 'views/listMovies' ],
      function( FormView, ListView){

    return {

      showlistMovies: function(){
          
          MyApp.mainRegion.show( new ListView() );        
      },

      showForm: function(){
        
        var formMovie = new FormView();
        console.log(formMovie);
          MyApp.mainRegion.show( formMovie );        
      },

      editMovie: function (id){
      },

      deleteMovie: function (id) {
      
      },

    }

});