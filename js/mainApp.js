var app = angular.module('Floristeria', ['ngRoute']);


app.config(function ($routeProvider) {

  $routeProvider
    .when('/Inicio', {
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
    });/*
    .otherwise({
      redirectTo:'/'
    });*/

  });