

/*
AS400App.controller('AS400AppCtrl', ['$scope','$http', function($scope,$http){
*/

var AS400App = angular.module('AS400App', []);
AS400App.controller('AS400AppCtrl', function ($scope, $http) {
    $http.get('sdf101.json').success(function (data) {
            $scope.polizas = data;
            });
});









