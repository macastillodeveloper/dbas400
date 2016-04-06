
angular.module('as400App',[])
    .controller('as400AppCtrl', function ($scope, $http) {
    $http.get('data/DECESOS_SDF101.json').success(function (data) {
            $scope.polizas = data;
            });
});

