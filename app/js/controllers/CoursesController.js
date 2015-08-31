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

                $http.get('http://localhost:8080').
                    then(function(response){
                        $scope.courses = response.data;
                    });

                var ws = $websocket.$new({
                    'url':'ws://localhost:8080/ws'
                });

                ws.$on('$message', function(message) {
                    if (message.event == "num_clients") {
                        $('#connected_clients').html(message.data)
                    } else {
                        console.log(message)
                    }
                });


                // Ping action
                $scope.ping = function(){
                    ws.$emit('ping');
                }
            }
        ]);
})();