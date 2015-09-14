(function(){
    'use strict';
    angular
        .module('controllers.profile', [])
        .controller('ProfileCtrl', [
            '$location',
            '$scope',
            'api',
            function ($location, $scope, api) {
                api.profile().then(
                    function(response){
                        $scope.profile = response;
                    }
                );

                $scope.logout = function() {
                    localStorage.removeItem('access_token');
                    $location.path('/login');
                }
            }
        ]);
})();