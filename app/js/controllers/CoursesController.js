(function(){
    'use strict';
    angular
        .module('controllers.courses', [])
        .controller('CoursesCtrl', [
            '$scope',
            '$http',
            '$websocket',
            'toastr',
            function ($scope, $http, $websocket, toastr) {

                var ws = $websocket.$new({
                    'url':'ws://localhost:8080',
                    'reconnect': true,
                    'reconnectInterval':100
                });

                ws.$on('pong', function(message) {
                    console.log('pong: ' + message);
                });

                ws.$on('reload', function() {
                    toastr.info('Reload required')
                });

                ws.$on('$close', function(){
                    console.log('close connection');
                });


                // Ping action
                $scope.ping = function(){
                    ws.$emit('ping');
                }
            }
        ]);
})();