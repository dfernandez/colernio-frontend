(function(){
    'use strict';
    angular
        .module('controllers.oauth', [])
        .controller('OAuthCtrl', [
            '$scope',
            '$location',
            'api',
            function ($scope, $location, api) {
                var oauth = {};

                $location.hash().split('&').forEach(function(data){
                    oauth[data.split('=')[0]] = data.split('=')[1];
                });

                api.validateToken(oauth.access_token);

                localStorage.setItem('access_token', oauth.access_token);
                window.location.replace('/profile');
            }
        ]);
})();