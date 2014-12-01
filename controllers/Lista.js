app.controller('ListaCtrl', function($scope) {
  $scope.patro = [];
  var ptr = "images/patro", i;

  for(i = 1; i <= 3; ++i)
  	$scope.patro.push({link: ptr+i+".png"});
});