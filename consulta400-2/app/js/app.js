
var as400App = angular.module('as400App', ['ngRoute'])

as400App

    .config(function($routeProvider){

        $routeProvider

            .when('/', {
               controller: 'as400AppCtrl',
               /*controllerAs: 'vm',*/
               templateUrl: "inicio.html"
            })

            .when('/consultas', {
                controller: 'as400AppCtrl',
               /* controllerAs: 'vm',*/
                templateUrl: 'consultas.html'
            })

            .when("/informes", {
                controller: "as400AppCtrl",
                /*controllerAs: 'vm',*/
                templateUrl: "informes.html"
            })

            .when("/informes", {
                controller: "as400AppCtrl",
                /*controllerAs: 'vm',*/
                templateUrl: "solicitudes.html"
            })

            .otherwise({
                redirectTo: '/'
      });

    })

/*
    .controller('appCtrl', function(){
        //código del controlador
    });
*/


