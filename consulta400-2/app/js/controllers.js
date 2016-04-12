
angular.module('as400App',[])
    .controller('as400AppCtrl', function ($scope, $http) {

    // Importamos datos de pólizas.
    $http.get('data/DECESOS_SDF101.json').success(function (data) {
            $scope.SDF101 = data;
    // Importamos datos de garantías.
    // Importamos datos de asegurados.
    // Importamos datos de primas.
    // Importamos datos de servicios.
    // Importamos datos de recibos.
    // Importamos datos de incidencias.
    // Importamos datos bancarios.
    // Importamos datos de siniestros.




            // Constantes
            $scope.EMPRESA = 'MERIDIANO, S.A.'

            // Campos de trabajo que hay que componer
            $scope.t_canal = '01-AGESMER'; // DCODCA + DNOMCA
            $scope.t_zona = '03-ANDALUC.ORIENTAL SUR'; // DCODZG + DNOMZG
            $scope.t_sucursal = '1-MÁLAGA'; // DCODSU + DNOMSU
            $scope.t_oficina = $scope.SDF101.DCODAG + '-MÁLAGA'; //DNOMAG




            });
});

