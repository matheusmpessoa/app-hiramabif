angular.module('starter.service', ['ngSanitize'])

.service('LoginService', function ($q) {
    return {
        loginUser: function (name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'caphiramabif' && pw == 'cha419') {
                deferred.resolve('Bem-vindo ' + name + '!');
            } else {
                deferred.reject('Usuário e senha incorretos.');
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
});
