

var app = angular.module('app', [
    'ngRoute',
    'appControllers'
]);


    app.config(['$routeProvider',
        function($routeProvider){
        $routeProvider.
            when('/', {
            templateUrl:'menu.html',
            controller:'appCtrl'
          }).
            when('/opcion1', {
            templateUrl:'opcion1.html',
            controller:'appCtrl'
        }).
            when('/opcion2', {
            templateUrl:'opcion2.html',
            controller:'appCtrl'
        }).
            when('/opcion3', {
            templateUrl:'opcion3.html',
            controller:'appCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

