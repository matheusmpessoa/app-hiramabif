// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.service', 'starter.filter', 'ngSanitize'])

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
                templateUrl: 'templates/sobre/sobre.html'
            }
        }
    })

    .state('app.sobreHa', {
        url: '/sobre/sobreHa',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobre/sobreHa.html'
            }
        }
    })

    .state('app.conselharia', {
        url: '/sobre/sobreHa/conselharia',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobre/conselharia.html',
                controller: 'ConselhariaCtrl'
            }
        }
    })

    .state('app.sobreDm', {
        url: '/sobre/sobreDm',
        views: {
            'menuContent': {
                templateUrl: 'templates/sobre/sobreDm.html'
            }
        }
    })

    .state('app.playlist', {
        url: '/playlist',
        views: {
            'menuContent': {
                templateUrl: 'templates/playlist.html',
                controller: 'PlaylistCtrl'
            }
        }
    })

    .state('app.eventos', {
        url: '/eventos',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventos.html',
                controller: 'EventosCtrl'
            }
        }
    })

    .state('app.redesSociais', {
        url: '/redesSociais',
        views: {
            'menuContent': {
                templateUrl: 'templates/redesSociais.html'
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
    })

    .state('app.informacoes', {
        url: '/informacoes',
        views: {
            'menuContent': {
                templateUrl: 'templates/informacoes.html'
            }
        }
    })

    .state('app.login', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            }
        }
    })

    .state('app.arearestrita', {
        url: '/arearestrita',
        views: {
            'menuContent': {
                templateUrl: 'templates/arearestrita/arearestrita.html'
            }
        }
    })

    .state('app.pautaReuniao', {
        url: '/arearestrita/pautaReuniao',
        views: {
            'menuContent': {
                templateUrl: 'templates/arearestrita/pautaReuniao.html',
                controller: 'PautaReuniaoCtrl'
            }
        }
    })

    .state('app.estatisticasMembros', {
        url: '/arearestrita/estatisticasMembros',
        views: {
            'menuContent': {
                templateUrl: 'templates/arearestrita/estatisticasMembros.html',
                controller: 'EstatisticasMembrosCtrl'
            }
        }
    })

    .state('app.agendaContatos', {
        url: '/arearestrita/agendaContatos',
        views: {
            'menuContent': {
                templateUrl: 'templates/arearestrita/agendaContatos.html',
                controller: 'AgendaContatosCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');
})


.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**'
  ]);
});
