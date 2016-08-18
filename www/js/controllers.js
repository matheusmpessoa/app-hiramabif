angular.module('starter.controllers', [])

.controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

})


.controller('PautaReuniaoCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/data.json').success(function (data) {
            $scope.pautas = data.pautas;
        });
}])

.controller('ConselhariaCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/data.json').success(function (data) {
            $scope.conselhariaLinhadotempo = data.conselhariaLinhadotempo;
        });
}])


.controller('SobreHaCtrl', function ($scope, $stateParams) {

});
