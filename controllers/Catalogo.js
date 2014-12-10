app.controller('CatalogoCtrl', function($scope, $location, UserService) {
  
  $scope.flores = UserService.getFlores();
  $scope.ordenados = UserService.hashMap();
  $scope.ordenes = UserService.list();

  $scope.addList = function(flor) {
  	
  	if($scope.ordenados[flor.Titulo] >= 0)
  		flor.Cantidad = ++$scope.ordenados[flor.Titulo];
	  		
  	UserService.save(flor);
  }

  $scope.removeList = function(flor) {
  	UserService.save(flor);
  	flor.Cantidad = --$scope.ordenados[flor.Titulo];

  }


  $( "#catalogo" ).fadeOut();
  $( "#catalogo" ).fadeIn();
  // $location.path('/')
});