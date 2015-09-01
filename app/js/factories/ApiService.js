(function(){
    // Declare app level module which depends on views, and components
    angular
        .module('factories.api', [])
        .factory('api', [
            '$http',
            function($http){

                courses = function () {
                    return $http.get('http://localhost:8080').
                        then(function (response) {
                            return response.data;
                        });
                }();

                return {
                    courses: courses
                }
            }
        ]);
})();
