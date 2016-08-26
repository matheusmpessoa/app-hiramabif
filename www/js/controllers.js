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

.controller('LoginCtrl', function ($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function () {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function (data) {
            $state.go('app.pautaReuniao');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }
})

.service('LoginService', function ($q) {
    return {
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function (fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function (fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.filter('FilterPlaylist', ['$sce', function ($sce) {
    return function (url) {
        var video_id = url.split('v=')[1].split('&')[0];
        return $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + video_id);
    };
}]);
