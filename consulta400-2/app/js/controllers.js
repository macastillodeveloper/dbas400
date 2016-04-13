
angular.module('as400App',[])
    .controller('as400AppCtrl', function ($scope, $http) {


    // Definimos variables para identificar el origen de los datos
    $scope.tabla_sdf101 = 'data/DECESOS_SDF101.json';


    // Importamos datos de pólizas.
    $http.get($scope.tabla_sdf101).success(function (data) {
            $scope.SDF101 = data;
    // Importamos datos de garantías.
    // Importamos datos de asegurados.
    // Importamos datos de primas.
    // Importamos datos de servicios.
    // Importamos datos de recibos.
    // Importamos datos de incidencias.
    // Importamos datos bancarios.
    // Importamos datos de siniestros.
    // Importamos datos de agentes.




            // Constantes
            $scope.cte_empresa = 'MERIDIANO, S.A.'

            // Campos de trabajo que hay que componer
            $scope.t_canal = '01 - AGESMER';                        // $scope.SDF041.DCODCA + ' - ' + $scope.SDF041.DNOMCA
            $scope.t_zona = '03 - ANDALUC.ORIENTAL SUR';            // $scope.SDF042.DCODZG + ' - ' + $scope.SDF042.DNOMZG
            $scope.t_sucursal = '1 - MÁLAGA';                       // $scope.SDF006.DCODSU + ' - ' +$scope.SDF006.DNOMSU
            $scope.t_oficina = $scope.SDF101.DCODAG + ' - MÁLAGA';    // $scope.SDF101.DCODAG + ' - ' + $scope.SDF006.DNOMAG
            $scope.t_tomador = $scope.SDF101.DNOTPZ.trim() + ' ' +$scope.SDF101.DAPTPZ
            $scope.t_productor = $scope.SDF101.DPROPZ.trim() + ' - LUIS LORENZO SILVA' //$scope.SDF101.DPROPZ.trim() + ' - ' +$scope.SDF007.DNOMPC



            });
});

