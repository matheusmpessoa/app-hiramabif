angular.module('starter.controllers', ['ngSanitize'])

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
        $http.get('js/dados/playlist.json').success(function (data) {
            $scope.hino = data.hino;
            $scope.harmonia = data.harmonia;
        });
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

})

.filter('FilterPlaylist', ['$sce', function ($sce) {
    return function (url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}]);
