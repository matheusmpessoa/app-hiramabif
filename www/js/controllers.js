angular.module('starter.controllers', [])

.controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('PautaReuniaoCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/pautas.json').success(function (data) {
            $scope.pautas = data.pautas;
        });
}])

.controller('PlaylistCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/videos.json').success(function (data) {
            $scope.videos = data.videos;
        });

        //Toggle
        $scope.custom = true;
        $scope.toggleCustom = function () {
            $scope.custom = $scope.custom === false ? true : false;
        };
}])

.controller('ConselhariaCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/conselharia.json').success(function (data) {
            $scope.conselhariaLinhadotempo = data.conselhariaLinhadotempo;
        });
}])


.controller('SobreHaCtrl', function ($scope, $stateParams) {

});
