require.config({
  baseUrl: "app",
  paths: {    
    jquery: 'vendor/jquery.min',
    underscore: 'vendor/underscore',
    backbone: 'vendor/backbone-min',
    bootstrap: 'vendor/bootstrap',
    marionette: 'vendor/backbone.marionette.min'
  },
   shim: {
        jquery: {
          exports: "$"
        },
        
        bootstrap: {
          deps: ["jquery"],
          exports: "Bootstrap"
        },

        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },

        underscore: {
            deps: ["bootstrap"],
            exports: "_"
        },

        marionette: {
            deps: ["jquery","underscore","backbone"],
            exports: "Marionette"
        }

    }

});

require(["app"], function(MyApp){
    
    MyApp.start();    

});
