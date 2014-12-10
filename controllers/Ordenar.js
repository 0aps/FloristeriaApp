app.controller('OrdenarCtrl', function($scope, $location, UserService ) {
  

  $scope.ordenes = UserService.list();
  $scope.getMoney = function(){
  	return UserService.getMoney();
  }

    $scope.delete = function (id) {
        UserService.delete(id);
    }

  $( "#orden" ).fadeOut();
  $( "#orden" ).fadeIn();
  // $location.path('/')
});