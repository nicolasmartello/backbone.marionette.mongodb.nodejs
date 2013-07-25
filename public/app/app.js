define ([ 'marionette', 'router' ], 
		function ( Marionette, Router ) {

  var App = new Marionette.Application();

  App.addRegions({
  		
      modalRegion: '#modalRegion',
  		mainRegion: '#mainRegion'

  });

  App.addInitializer(function (options) {
    
  	$.fn.serializeObject = function() {
            var jsonReturn = {};
            var domArray = this.serializeArray();
            $.each(domArray, function() {
                if (jsonReturn[this.name] !== undefined) {
                    if (!jsonReturn[this.name].push) {
                        jsonReturn[this.name] = [jsonReturn[this.name]];
                    }
                    jsonReturn[this.name].push(this.value || '');
                } else {
                    jsonReturn[this.name] = this.value || '';
                }
            });
            return jsonReturn;
      };    

  });
  
  return App;

});