// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'MenuCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html'
            }
        }
    })

    .state('app.sobre', {
        url: '/sobre',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobre.html',
                controller: 'SobreCtrl'
            }
        }
    })

    .state('app.sobreHa', {
        url: '/sobre/sobreHa',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobreHa.html'
            }
        }
    })

    .state('app.conselharia', {
        url: '/sobre/sobreHa/conselharia',
        views: {
            'menuContent': {
                templateUrl: 'templates/conselharia.html',
                controller: 'ConselhariaCtrl'
            }
        }
    })

    .state('app.sobreDm', {
        url: '/sobre/sobreDm',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobreDm.html'
            }
        }
    })

    .state('app.eventos', {
        url: '/eventos',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventos.html'
            }
        }
    })

    .state('app.redes-sociais', {
        url: '/redes-sociais',
        views: {
            'menuContent': {
                templateUrl: 'templates/redes-sociais.html'
            }
        }
    })

    .state('app.consulta-cid', {
        url: '/consulta-cid',
        views: {
            'menuContent': {
                templateUrl: 'templates/consulta-cid.html'
            }
        }
    })

    .state('app.contato', {
        url: '/contato',
        views: {
            'menuContent': {
                templateUrl: 'templates/contato.html'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
});
