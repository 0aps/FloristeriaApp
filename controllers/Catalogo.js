app.controller('CatalogoCtrl', function($scope, $location ) {
  
  $scope.flores = [];
  var ptr = "images/Flores/flor", i, j, cc, descri = [];

  descri.push({ title: "Rosa Jardín", precio: 500} );
  descri.push({ title: "Armonía en Domingo", precio: 700} );
  descri.push({ title: "Sobre Balcón", precio: 600} );
  descri.push({ title: "Camino Nupcial", precio: 950} );
  descri.push({ title: "Alégría Nupcial", precio: 1200} );
  descri.push({ title: "Centro de Mesa", precio: 1120} );
  descri.push({ title: "Amor de Primavera", precio: 1700} );
  descri.push({ title: "Nueva vida", precio: 950} );
  descri.push({ title: "Arreglo Rústico", precio: 500} );
 
 
  cc = 0;
  for(i = 1; i <= 3; ++i){

  	tripleta = [];
  	for(j = 1; j <= 3; ++j){
  		
  		tripleta.push({link: ptr+(cc+1)+".jpg", title: descri[cc].title, precio: descri[cc].precio });
  		cc++;
  	}
  	$scope.flores.push( tripleta );
  }

  $( "#catalogo" ).fadeOut();
  $( "#catalogo" ).fadeIn();
  // $location.path('/')
});