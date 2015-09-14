(function(){
    'use strict';
    angular
        .module('controllers.login', [])
        .controller('LoginCtrl', [
            '$scope',
            function ($scope) {

                $scope.login = function() {
                    var client_id="632899652056-lkmjl02h59t28g2pc88fglk6s2rliqrb.apps.googleusercontent.com";
                    var scope="profile email";
                    var redirect_uri="http://localhost:8000/oauth2callback";
                    var response_type="token";
                    var url="https://accounts.google.com/o/oauth2/auth?scope="+scope+"&client_id="+client_id+"&redirect_uri="+redirect_uri+"&response_type="+response_type;
                    window.location.replace(url);
                }
            }
        ]);
})();