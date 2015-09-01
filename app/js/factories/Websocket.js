(function(){
    // Declare app level module which depends on views, and components
    angular
        .module('factories.websocket', [])
        .factory('ws', [
            '$websocket',
            function($websocket){
                var ws = $websocket.$new({
                    'url':'ws://localhost:8080/ws'
                });

                ws.$on('$message', function(message) {
                    switch (message.event) {
                        case "num_clients":
                            $('#connected_clients').html(message.data)
                            break;
                        default:
                            console.log(message)
                    }
                });

                return ws
            }
        ]);
})();
