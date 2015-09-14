(function(){
    // Declare app level module which depends on views, and components
    angular
        .module('factories.api', [])
        .factory('api', [
            '$http',
            '$location',
            function($http, $location){

                var courses = function () {
                    return $http.get('http://localhost:8080').
                        then(function (response) {
                            return response.data;
                        });
                }();

                var profile = function () {
                    var $token = localStorage.getItem('access_token');
                    if (!$token) {
                        $location.path('/login');
                    }

                    $http.defaults.headers.common.Authorization = 'Bearer ' + $token;
                    return $http.get('https://www.googleapis.com/plus/v1/people/me').then(
                        function (response) {
                            return response.data
                        },
                        function (response) {
                            return response.data
                        });
                };

                var validateToken = function ($token) {

                    if (!$token) {
                        $location.path('/login');
                    }

                    $http.get('https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=' + $token).then(
                        function (response) {
                            if (response.data.error) {
                                $location.path('/login');
                            }
                        },
                        function () {
                            $location.path('/login');
                        });
                };

                return {
                    courses:       courses,
                    profile:       profile,
                    validateToken: validateToken
                }
            }
        ]);
})();
