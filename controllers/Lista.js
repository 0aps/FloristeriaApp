app.controller('ListaCtrl', function($scope, $location) {
	
  $scope.patro = [];
  var ptr = "images/patro", i;

  for(i = 1; i <= 3; ++i)
  	$scope.patro.push({link: ptr+i+".png"});

  $( "#lista" ).fadeOut();
  $( "#lista" ).fadeIn();
  //$location.path('/')
});