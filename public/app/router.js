define([ 'marionette', 'views/mainView' ], 
	function( Marionette, MainView ){
		
		return Marionette.AppRouter.extend({
			
			appRoutes: {
				"listMovies" : "showlistMovies",
				"showMovieForm"	 : "showForm",
				"delete/:id" : "deleteMovie",
				"edit/:id"	 : "editMovie"	
			},

			controller: MainView
		});
});