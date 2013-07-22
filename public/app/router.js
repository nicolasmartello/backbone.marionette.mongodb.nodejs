define(['views/mainView'], 
	function( MainView ){
		
		return Marionette.AppRouter.extend({
			
			routes: {
				"listMovies" : "showlistMovies",
				//"listMovies/page/:page" : "showlistMovies",
				"showMovieForm"	 : "showForm",
				"delete/:id" : "deleteMovie",
				"edit/:id"	 : "editMovie"	
			},

			controller: MainView,
			
		});
});