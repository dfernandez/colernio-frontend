(function(){
    // Declare app level module which depends on views, and components
    angular
        .module('myApp', [
            'ngRoute',
            'ngWebsocket',
            'toastr',

            'controllers.about',
            'controllers.courses',
            'controllers.login',
            'controllers.oauth',
            'controllers.home',
            'controllers.profile',

            'factories.api',
            'factories.websocket',
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
                    when('/login', {
                        controller:     'LoginCtrl',
                        templateUrl:    'app/views/login.html'
                    }).
                    when('/profile', {
                        controller:     'ProfileCtrl',
                        templateUrl:    'app/views/profile.html'
                    }).
                    when('/oauth2callback', {
                        controller:     'OAuthCtrl',
                        template:       ' '
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
