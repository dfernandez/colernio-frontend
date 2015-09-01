(function(){
    'use strict';
    angular
        .module('controllers.courses', [])
        .controller('CoursesCtrl', [
            '$scope',
            'api',
            'ws',
            function ($scope, api, ws) {

                api.courses.then(
                    function(response){
                        $scope.courses = response
                    }
                );

                // Ping action
                $scope.ping = function(){
                    ws.$emit('ping');
                }
            }
        ]);
})();