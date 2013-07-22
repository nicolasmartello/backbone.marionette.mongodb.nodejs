define ([ 'marionette', 'router' ], 
		function ( Marionette, Router ) {

  var App = new Marionette.Application();

  App.addRegions({

  	regions: {

  		modalRegion: '#modalRegion',
  	
  		mainRegion: '#mainRegion'
  	
  	}

  });

  App.addInitializer(function (options) {
  	console.log('app ', App);
  	new Router();

  });
  
  return App;

});