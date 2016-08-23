angular.module('starter.controllers', [])

.controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

})

.controller('PautaReuniaoCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/dados/pautas.json').success(function (data) {
            $scope.pautas = data.pautas;
        });
}])

.controller('PlaylistCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/dados/videos.json').success(function (data) {
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
        $http.get('js/dados/conselharia.json').success(function (data) {
            $scope.conselhariaLinhadotempo = data.conselhariaLinhadotempo;
        });
}])


.controller('SobreHaCtrl', function ($scope, $stateParams) {

})

.controller('ReuniaoCtrl', function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

})

.controller('EventosCtrl', function ($scope, $ionicModal) {

    $ionicModal.fromTemplateUrl('templates/modal.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

});
