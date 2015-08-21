(function(){
    'use strict';
    angular
        .module('controllers.courses', [])
        .controller('CoursesCtrl', [
            '$scope',
            '$http',
            function ($scope, $http) {
                $http.get('http://localhost:8080').
                    then(function(response){
                        $scope.courses = response.data;
                    });
            }
        ]);
})();