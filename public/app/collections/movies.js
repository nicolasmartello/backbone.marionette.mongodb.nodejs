define([
	'jquery',
	'underscore',
	'backbone',
	'models/movie'	
	], function($,_, Backbone, Movie){
		var Movies = Backbone.Collection.extend({
			model: Movie,
			url:'/listMovies',//conecto con el servidor
		});
		
		return Movies;
});