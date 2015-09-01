(function(){
    // Declare app level module which depends on views, and components
    angular
        .module('myApp', [
            'ngRoute',
            'ngWebsocket',
            'toastr',
            'controllers.about',
            'controllers.courses',
            'controllers.home',
            'factories.api',
            'factories.websocket'
        ])
        .config([
            '$routeProvider',
            function($routeProvider) {
                $routeProvider.
                    when('/', {
                        controller:     'HomeCtrl',
                        templateUrl:    'app/views/home.html'
                    }).
                    when('/about', {
                        controller:     'AboutCtrl',
                        templateUrl:    'app/views/about.html'
                    }).
                    when('/courses', {
                        controller:     'CoursesCtrl',
                        templateUrl:    'app/views/courses.html'
                    }).
                    when('/not-found', {
                        templateUrl:    'app/views/not-found.html'
                    }).
                    otherwise({
                        redirectTo: '/not-found'
                    });
            }
        ])
        .config([
            '$locationProvider',
            function($locationProvider){
                $locationProvider.hashPrefix('!');
                $locationProvider.html5Mode(true);
            }
        ]);
})();
