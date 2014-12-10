var app = angular.module('Floristeria', ['ngRoute']);

  
app.config(function ($routeProvider) {

  $routeProvider
    .when('/', {
      controller:'ListaCtrl',
      templateUrl:'views/lista.html'
    })
    .when('/Ordenar', {
      controller:'OrdenarCtrl',
      templateUrl:'views/ordenar.html'
    })
    .when('/AcercaD', {
      controller:'AboutCtrl',
      templateUrl:'views/about.html'
    })
    .when('/Catalogo', {
      controller:'CatalogoCtrl',
      templateUrl:'views/catalogo.html'
    });/*
    .otherwise({
      redirectTo:'/'
    });*/

});
