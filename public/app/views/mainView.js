define(['views/mainView',
        'collections/movies',
        'models/movie',
        'views/formMovie',
        'views/listMovies',
        ],function(MainView, CollectionMovies, ModelMovie, 
                   FormView, ListView){

          var listMovies = new CollectionMovies;       
  /*
    var MainView = Backb  one.View.extend({
            
            el:$('#movieList'),

            initialize: function()
            {               
                  
                  this.formView = new FormView;
                  
                  this.listView = new ListView;

            },

            render: function (){

                this.$el.html('');
                
                return this;
            
            },

            ShowFormView: function (){
                
                this.formView.collectionMovies = listMovies;

                this.formView.modelMovie = new ModelMovie;  

                this.formView.render();

                $('#titleModal').html('nueva película');

                $('#myModal').modal('show');

                $('#formContainer').find('input[type=text]').filter(':first').focus();

            },

            EditMovie: function (id) {
                var movieSelect = listMovies.get(id);   

                if( movieSelect ){
                    this.formView.modelMovie = movieSelect;
                
                    this.formView.render();
                     
                    $('#titleModal').html('editando película');
                    
                    $('#myModal').modal('show');

                    $('#formContainer .cancel').html('finalizar');
                    
                    $('#formContainer').find('input[type=text]').filter(':first').focus();    
                
                }else{
                    console.log('no se pudo encontrar la película seleccionada id:',id);
                }
                
            },

            DeleteMovie: function (id) {
                
                var that = this;
                
                var handDelete = $.post('/delete',{id:id});
                
                handDelete.done( function() {
                    that.ShowListView();
                });

                handDelete.fail ( function () { 
                    console.log(arguments[1],':',arguments[2]);
                });            

            },

            

            ShowListView: function (){
                
                
                
            },

    });*/
    

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

    return {

      showlistMovies: function(page){
      
        App.mainRegion.show( fuction () {

            var that = this;
              
            listMovies.fetch({
               
                success: function(){
                    
                    listMovies.models = arguments[1];
                    that.listView.items = listMovies.models;
                    that.$el.html(that.listView.render().$el);         
                
                },
                error:function () {
                    console.log(arguments);
                }
            });

        });         
      
      },

      showForm: function(){
      
        App.modalRegion.show( mainView.showForm() );     
      
      },

      editMovie: function (id){
      
          App.modalRegion.show( function (id) {
                var movieSelect = listMovies.get(id);   

                if( movieSelect ){
                    this.formView.modelMovie = movieSelect;
                
                    this.formView.render();
                     
                    $('#titleModal').html('editando película');
                    
                    $('#myModal').modal('show');

                    $('#formContainer .cancel').html('finalizar');
                    
                    $('#formContainer').find('input[type=text]').filter(':first').focus();    
                
                }else{
                    console.log('no se pudo encontrar la película seleccionada id:',id);
                }
                
            });
      
      },

      deleteMovie: function (id) {
        
        mainView.DeleteMovie(id);
      
      },

    }

});