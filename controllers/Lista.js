app.controller('ListaCtrl', function($scope, $location) {
	
  $scope.isActive = function(viewLocation){
  	return viewLocation === $location.path();
  }

  $scope.patro = [], $scope.slides = [];
  var ptr = "images/patro", i, descri = [];

  for(i = 1; i <= 3; ++i)
  	$scope.patro.push({link: ptr+i+".png"});

  ptr = "images/Flores/especial";
  
  descri.push({ title: "Flores Crocus", descripcion: "¡Esparse tu jardín con alegría y amor!"} );
  descri.push({ title: "Catalizador", descripcion: "¡Armonisa tu espíritu y obten sabiduría!"} );
  descri.push({ title: "Flores de manzano", descripcion: "¡Sé parte del torbellino!"} );
  descri.push({ title: "Flores del corazon", descripcion: "¡Regálale la flor que más le gusta!"} );

  for(i = 2; i <= 5; ++i)
  	$scope.slides.push({num: i-1, src: ptr+i+".jpg", title: descri[i-2].title, descripcion: descri[i-2].descripcion});

  $( "#lista" ).fadeOut();
  $( "#lista" ).fadeIn();
  //$location.path('/')
});