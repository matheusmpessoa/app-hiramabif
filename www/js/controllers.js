angular.module('starter.controllers', [])

.controller('MenuCtrl', function ($scope, $ionicModal, $timeout) {

})


.controller('PautaReuniaoCtrl', ['$scope', '$http', '$state',
    function ($scope, $http, $state) {
        $http.get('js/data.json').success(function (data) {
            $scope.artists = data.artists;
        });
}])

.controller('ConselhariaCtrl', function ($scope) {

})

.controller('SobreHaCtrl', function ($scope, $stateParams) {

});
