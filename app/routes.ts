/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../bower_components/DefinitelyTyped/angularjs/angular-route.d.ts" />

module App {
    export class Routes {
        static $inject = ['$routeProvider'];

        constructor($routeProvider:ng.route.IRouteProvider) {
            $routeProvider.when('/welcome', {
                templateUrl: 'sections/welcome/welcome.html',
            });
            $routeProvider.when('/about', {
                templateUrl: 'sections/about/about.html',
            });
            $routeProvider.when('/empty', {
                templateUrl: 'sections/empty/empty.html',
            });
            $routeProvider.otherwise({redirectTo: '/welcome'});
        }
    }
}
